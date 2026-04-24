import {
  FASTING_GUIDE,
  QUICK_FOOD_OPTIONS,
  SCENARIO_PRESETS,
  buildHistoryEntry,
  getDemoInput,
  recommendMeal,
} from "./logic.mjs";

const STORAGE_KEY = "platepilot-history";
const storageCache = [];
const chartsScript = document.querySelector("#google-charts-loader");

const form = document.querySelector("#coach-form");
const demoButton = document.querySelector("#demo-btn");
const emptyState = document.querySelector("#empty-state");
const results = document.querySelector("#results");
const resultMode = document.querySelector("#result-mode");
const resultTitle = document.querySelector("#result-title");
const resultSummary = document.querySelector("#result-summary");
const prioritySignal = document.querySelector("#priority-signal");
const wellnessScore = document.querySelector("#wellness-score");
const metricGrid = document.querySelector("#metric-grid");
const rationaleList = document.querySelector("#rationale-list");
const habitTip = document.querySelector("#habit-tip");
const warningText = document.querySelector("#warning-text");
const alternateList = document.querySelector("#alternate-list");
const historyList = document.querySelector("#history-list");
const mapsLink = document.querySelector("#maps-link");
const groceryLink = document.querySelector("#grocery-link");
const calendarLink = document.querySelector("#calendar-link");
const chartNode = document.querySelector("#chart");
const scenarioStrip = document.querySelector("#scenario-strip");
const clearHistoryButton = document.querySelector("#clear-history-btn");
const trendInsight = document.querySelector("#trend-insight");
const planNow = document.querySelector("#plan-now");
const planFallback = document.querySelector("#plan-fallback");
const planPrep = document.querySelector("#plan-prep");
const runtimeBanner = document.querySelector("#runtime-banner");
const fastingSelect = document.querySelector("#fasting-select");
const fastingBanner = document.querySelector("#fasting-banner");
const fastingTitle = document.querySelector("#fasting-title");
const fastingCopy = document.querySelector("#fasting-copy");
const allowedFoods = document.querySelector("#allowed-foods");
const quickFoodRow = document.querySelector("#quick-food-row");
const currentFoodInput = document.querySelector("#current-food");
const rangeInputs = [...form.querySelectorAll('input[type="range"]')];
const liveRegion = results;

let lastHistory = [];
let resizeTimer = null;
let chartsStatus = "idle";
let chartsRetryAttached = false;

function readHistory() {
  try {
    return JSON.parse(localStorage.getItem(STORAGE_KEY) ?? "[]");
  } catch {
    return [...storageCache];
  }
}

function writeHistory(entry) {
  const history = [entry, ...readHistory()].slice(0, 7);
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(history));
  } catch {
    storageCache.splice(0, storageCache.length, ...history);
    showRuntimeBanner("Local storage is unavailable in this browser, so history will only last for this session.");
  }
  lastHistory = history;
}

function clearHistory() {
  try {
    localStorage.removeItem(STORAGE_KEY);
  } catch {
    storageCache.splice(0, storageCache.length);
  }
  lastHistory = [];
}

function showRuntimeBanner(message) {
  if (!runtimeBanner) return;
  runtimeBanner.textContent = message;
  runtimeBanner.classList.add("runtime-banner-visible");
}

function hideRuntimeBanner() {
  if (!runtimeBanner) return;
  runtimeBanner.textContent = "";
  runtimeBanner.classList.remove("runtime-banner-visible");
}

function getFormInput() {
  const formData = new FormData(form);
  return Object.fromEntries(formData.entries());
}

function setFormInput(input) {
  for (const [key, value] of Object.entries(input)) {
    const field = form.elements.namedItem(key);
    if (field) field.value = String(value);
  }

  syncRangeOutputs();
  renderFastingInfo(fastingSelect.value);
  syncQuickFoodState();
}

function clearChildren(node) {
  while (node.firstChild) {
    node.removeChild(node.firstChild);
  }
}

function makeElement(tagName, className, text) {
  const node = document.createElement(tagName);
  if (className) node.className = className;
  if (text !== undefined) node.textContent = text;
  return node;
}

function renderMetrics(metrics, confidenceLabel, riskLevel) {
  clearChildren(metricGrid);
  const cards = [
    ["Balance", metrics.balance],
    ["Hydration", metrics.hydration],
    ["Consistency", metrics.consistency],
    ["Recovery", metrics.recovery],
    [confidenceLabel, metrics.confidenceScore],
    [`${riskLevel} risk`, metrics.riskScore],
  ];

  for (const [label, value] of cards) {
    const card = makeElement("article", "metric-card");
    card.append(makeElement("p", "", label));
    card.append(makeElement("strong", "", String(value)));
    metricGrid.append(card);
  }
}

function renderAlternatives(alternatives) {
  clearChildren(alternateList);

  for (const item of alternatives) {
    const article = makeElement("article", "alternate-item");
    const copy = makeElement("div");
    copy.append(makeElement("strong", "", item.title));
    copy.append(makeElement("p", "", item.summary));
    article.append(copy);
    article.append(makeElement("p", "", `Fit score: ${item.score}`));
    alternateList.append(article);
  }
}

function renderRationale(items) {
  clearChildren(rationaleList);

  for (const item of items) {
    rationaleList.append(makeElement("li", "", item));
  }
}

function setEmptyChart(message) {
  clearChildren(chartNode);
  const box = makeElement("div", "empty-state");
  box.append(makeElement("p", "", message));
  chartNode.append(box);
}

function buildTrendInsight(history) {
  if (!history.length) {
    return "Your recent recommendations will generate a pattern insight here.";
  }

  const avgWater = history.reduce((sum, entry) => sum + Number(entry.water ?? 0), 0) / history.length;
  const avgEnergy = history.reduce((sum, entry) => sum + Number(entry.energy ?? 0), 0) / history.length;
  const avgCraving = history.reduce((sum, entry) => sum + Number(entry.craving ?? 0), 0) / history.length;
  const highRiskCount = history.filter((entry) => entry.riskLevel === "High").length;
  const fastingCount = history.filter((entry) => entry.fasting && entry.fasting !== "none").length;

  if (fastingCount >= 2) {
    return "Pattern insight: fasting is showing up often, so keeping one safe fast-friendly option ready will reduce last-minute mistakes.";
  }

  if (avgWater <= 3.2) {
    return "Pattern insight: your lower-scoring moments are clustering around low hydration, so a water-first cue is a strong differentiator.";
  }

  if (avgCraving >= 4) {
    return "Pattern insight: cravings are the recurring pressure point, so protein-plus-fiber interventions are doing the most work for you.";
  }

  if (avgEnergy <= 2.5) {
    return "Pattern insight: low energy is your main trigger, so convenience and pre-planning matter more than perfect nutrition.";
  }

  if (highRiskCount >= 2) {
    return "Pattern insight: repeated high-risk moments suggest the app should keep nudging fast, low-friction meals before decision fatigue hits.";
  }

  return "Pattern insight: your recent choices are relatively stable, which means consistency cues are now more valuable than rescue interventions.";
}

function renderHistory() {
  const history = readHistory();
  lastHistory = history;
  trendInsight.textContent = buildTrendInsight(history);

  clearChildren(historyList);

  if (!history.length) {
    historyList.append(makeElement("p", "helper-text", "Your recent recommendations will appear here after you use the coach."));
    setEmptyChart("Run the assistant a few times to build your Google Charts trendline.");
    return;
  }

  for (const entry of history) {
    const article = makeElement("article", "history-item");
    const copy = makeElement("div");
    const date = new Date(entry.savedAt).toLocaleDateString(undefined, { month: "short", day: "numeric" });
    copy.append(makeElement("strong", "", entry.title));
    copy.append(makeElement("p", "", entry.mode));
    article.append(copy);
    article.append(makeElement("p", "", `${entry.score} wellness fit | ${date}`));
    historyList.append(article);
  }

  drawChart(history);
}

function drawChart(history) {
  if (!window.google?.charts?.load) {
    if (chartsScript && !chartsRetryAttached) {
      chartsRetryAttached = true;
      chartsScript.addEventListener("load", renderHistory, { once: true });
      chartsScript.addEventListener(
        "error",
        () => {
          chartsStatus = "failed";
          setEmptyChart("Google Charts could not load in this environment.");
          showRuntimeBanner("Google Charts did not load, so the trend chart is unavailable. The rest of the app still works.");
        },
        { once: true },
      );
    }
    setEmptyChart("Google Charts could not load in this environment.");
    return;
  }

  if (chartsStatus === "failed") {
    setEmptyChart("Google Charts could not load in this environment.");
    return;
  }

  const renderLoadedChart = () => {
    if (!lastHistory.length) {
      setEmptyChart("Run the assistant a few times to build your Google Charts trendline.");
      return;
    }

    try {
      clearChildren(chartNode);
      const rows = history
        .slice()
        .reverse()
        .map((entry, index) => [`Check ${index + 1}`, Number(entry.score)]);

      const dataTable = google.visualization.arrayToDataTable([["Session", "Wellness Fit"], ...rows]);
      const chart = new google.visualization.LineChart(chartNode);
      chart.draw(dataTable, {
        backgroundColor: "transparent",
        chartArea: { left: 48, right: 24, top: 32, bottom: 40, width: "100%", height: "72%" },
        colors: ["#ff6b00"],
        curveType: "function",
        hAxis: {
          textStyle: { color: "#d3d6d0" },
          gridlines: { color: "rgba(255,255,255,0.08)" },
        },
        vAxis: {
          minValue: 0,
          maxValue: 100,
          textStyle: { color: "#d3d6d0" },
          gridlines: { color: "rgba(255,255,255,0.08)" },
        },
        legend: { position: "none" },
      });
      hideRuntimeBanner();
    } catch {
      chartsStatus = "failed";
      setEmptyChart("Google Charts could not render in this browser.");
      showRuntimeBanner("The chart could not render in this browser, but the assistant itself still works correctly.");
    }
  };

  if (chartsStatus === "ready" && window.google?.visualization) {
    renderLoadedChart();
    return;
  }

  chartsStatus = "loading";
  google.charts.load("current", { packages: ["corechart"] });
  google.charts.setOnLoadCallback(() => {
    chartsStatus = "ready";
    renderLoadedChart();
  });
}

function renderResult(result) {
  emptyState.classList.add("hidden");
  results.classList.remove("hidden");
  liveRegion.setAttribute("aria-live", "polite");

  resultMode.textContent = result.mode;
  resultTitle.textContent = result.primaryMeal.title;
  resultSummary.textContent = result.summary;
  prioritySignal.textContent = result.prioritySignal;
  wellnessScore.textContent = String(result.metrics.wellnessScore);
  habitTip.textContent = result.habitTip;
  warningText.textContent = result.warning;
  planNow.textContent = result.actionPlan.now;
  planFallback.textContent = result.actionPlan.fallback;
  planPrep.textContent = result.actionPlan.prep;
  mapsLink.href = result.googleMapsUrl;
  groceryLink.href = result.groceryMapsUrl;
  calendarLink.href = result.googleCalendarUrl;
  mapsLink.textContent = result.input.fasting !== "none" ? "Open fast-friendly spots in Google Maps" : "Open healthy spots in Google Maps";
  groceryLink.textContent = result.input.fasting !== "none" ? "Find fast-safe groceries in Google Maps" : "Find groceries in Google Maps";

  renderMetrics(result.metrics, result.confidenceLabel, result.riskLevel);
  renderRationale(result.rationale);
  renderAlternatives(result.alternatives);
}

function renderScenarios() {
  clearChildren(scenarioStrip);

  for (const scenario of SCENARIO_PRESETS) {
    const button = makeElement("button", "scenario-card");
    button.type = "button";
    button.addEventListener("click", () => setFormInput(scenario.input));
    button.append(makeElement("strong", "", scenario.name));
    button.append(makeElement("span", "", scenario.caption));
    scenarioStrip.append(button);
  }
}

function renderQuickFoodOptions() {
  clearChildren(quickFoodRow);

  for (const food of QUICK_FOOD_OPTIONS) {
    const button = makeElement("button", "food-chip", food);
    button.type = "button";
    button.dataset.food = food;
    button.addEventListener("click", () => {
      currentFoodInput.value = food;
      syncQuickFoodState();
    });
    quickFoodRow.append(button);
  }
}

function syncQuickFoodState() {
  const currentValue = currentFoodInput.value.trim().toLowerCase();
  for (const button of quickFoodRow.querySelectorAll(".food-chip")) {
    button.classList.toggle("is-active", button.dataset.food.toLowerCase() === currentValue);
  }
}

function renderFastingInfo(fastingKey) {
  const guide = FASTING_GUIDE[fastingKey] ?? FASTING_GUIDE.none;

  clearChildren(allowedFoods);
  if (fastingKey === "none") {
    fastingBanner.classList.add("hidden");
    return;
  }

  fastingTitle.textContent = `${guide.label} selected`;
  fastingCopy.textContent = guide.copy;
  for (const food of guide.allowedFoods) {
    allowedFoods.append(makeElement("span", "allowed-chip", food));
  }
  fastingBanner.classList.remove("hidden");
}

function updateRangeOutput(input) {
  const output = form.querySelector(`[data-output="${input.name}"]`);
  if (output) {
    output.value = input.value;
    output.textContent = input.value;
  }
}

function syncRangeOutputs() {
  for (const input of rangeInputs) {
    updateRangeOutput(input);
  }
}

function handleSubmit(event) {
  event.preventDefault();
  const result = recommendMeal(getFormInput());
  renderResult(result);
  writeHistory(buildHistoryEntry(result));
  renderHistory();
}

function handleDemo() {
  setFormInput(getDemoInput());
}

function handleClearHistory() {
  clearHistory();
  renderHistory();
}

function handleResize() {
  window.clearTimeout(resizeTimer);
  resizeTimer = window.setTimeout(() => {
    if (lastHistory.length) drawChart(lastHistory);
  }, 120);
}

form.addEventListener("submit", handleSubmit);
demoButton.addEventListener("click", handleDemo);
clearHistoryButton.addEventListener("click", handleClearHistory);
fastingSelect.addEventListener("change", () => renderFastingInfo(fastingSelect.value));
currentFoodInput.addEventListener("input", syncQuickFoodState);
window.addEventListener("resize", handleResize);
window.addEventListener("error", () => {
  showRuntimeBanner("A browser-side issue was caught. Refresh once or use the hosted link if this page was opened from local files.");
});

for (const input of rangeInputs) {
  input.addEventListener("input", () => updateRangeOutput(input));
}

window.__platePilotBooted = true;
hideRuntimeBanner();
renderScenarios();
renderQuickFoodOptions();
syncRangeOutputs();
renderFastingInfo(fastingSelect.value);
syncQuickFoodState();
renderHistory();
