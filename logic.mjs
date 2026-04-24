const BASE_MEALS = [
  {
    title: "Dal chawal balance bowl",
    mode: "Balanced comfort",
    summary: "Simple dal chawal with salad or curd for steady energy without feeling too heavy.",
    diets: ["vegetarian", "any"],
    budgets: ["low", "medium"],
    kitchen: ["microwave", "full"],
    timeMax: 15,
    goals: ["energy", "focus", "weight"],
    tags: ["balanced", "budget", "warm", "fiber"],
    searchTerm: "healthy dal chawal near me",
  },
  {
    title: "Paneer roti roll",
    mode: "Portable protein",
    summary: "Paneer and vegetables rolled in roti for a practical high-protein Indian meal on the go.",
    diets: ["vegetarian", "any", "high-protein"],
    budgets: ["medium", "high"],
    kitchen: ["none", "microwave", "full"],
    timeMax: 10,
    goals: ["muscle", "focus", "energy"],
    tags: ["protein", "portable", "fast"],
    searchTerm: "healthy paneer roll near me",
  },
  {
    title: "Poha peanut cup",
    mode: "Quick energy",
    summary: "Light poha with peanuts and lemon for an affordable energy lift that still feels familiar.",
    diets: ["vegan", "vegetarian", "any"],
    budgets: ["low", "medium"],
    kitchen: ["none", "microwave", "full"],
    timeMax: 8,
    goals: ["energy", "focus", "weight"],
    tags: ["budget", "portable", "fast", "light"],
    searchTerm: "healthy poha near me",
  },
  {
    title: "Idli sambar combo",
    mode: "Easy digest",
    summary: "Idli with sambar gives warm, light, and steady energy when you want something easy to digest.",
    diets: ["vegan", "vegetarian", "any"],
    budgets: ["low", "medium", "high"],
    kitchen: ["none", "microwave", "full"],
    timeMax: 10,
    goals: ["energy", "focus", "weight"],
    tags: ["portable", "warm", "light"],
    searchTerm: "idli sambar healthy breakfast near me",
  },
  {
    title: "Moong chilla plate",
    mode: "Protein-forward",
    summary: "Moong chilla with chutney or curd gives better satiety than a snack-only meal.",
    diets: ["vegan", "vegetarian", "any", "high-protein"],
    budgets: ["low", "medium"],
    kitchen: ["microwave", "full"],
    timeMax: 20,
    goals: ["muscle", "weight", "focus"],
    tags: ["protein", "balanced"],
    searchTerm: "moong chilla healthy meal near me",
  },
  {
    title: "Chana chaat cup",
    mode: "Craving control",
    summary: "Tangy chana chaat helps when you want something flavorful without crashing later.",
    diets: ["vegan", "vegetarian", "any"],
    budgets: ["low", "medium"],
    kitchen: ["none", "microwave", "full"],
    timeMax: 8,
    goals: ["focus", "weight", "energy"],
    tags: ["fiber", "budget", "portable", "fast", "sugar-shield"],
    searchTerm: "healthy chana chaat near me",
  },
  {
    title: "Egg bhurji rice bowl",
    mode: "Recovery fuel",
    summary: "Egg bhurji with rice is filling, warm, and helpful when you need recovery-friendly fuel.",
    diets: ["any", "high-protein"],
    budgets: ["low", "medium"],
    kitchen: ["microwave", "full"],
    timeMax: 18,
    goals: ["muscle", "energy"],
    tags: ["protein", "warm", "post-workout"],
    searchTerm: "egg bhurji rice bowl near me",
  },
  {
    title: "Curd fruit makhana bowl",
    mode: "Sweet-craving reset",
    summary: "Curd, fruit, and makhana calm sweet cravings while keeping the meal lighter and more balanced.",
    diets: ["vegetarian", "any", "high-protein"],
    budgets: ["low", "medium"],
    kitchen: ["none", "microwave", "full"],
    timeMax: 5,
    goals: ["focus", "weight", "energy"],
    tags: ["portable", "fast", "sugar-shield"],
    searchTerm: "curd fruit bowl healthy cafe near me",
  },
  {
    title: "Veg khichdi comfort bowl",
    mode: "Gentle reset",
    summary: "Khichdi is practical, warm, and easier to stick with than ordering heavy comfort food.",
    diets: ["vegan", "vegetarian", "any"],
    budgets: ["low", "medium"],
    kitchen: ["microwave", "full"],
    timeMax: 15,
    goals: ["energy", "focus", "weight"],
    tags: ["warm", "budget", "fiber"],
    searchTerm: "veg khichdi healthy meal near me",
  },
  {
    title: "Chicken rice recovery plate",
    mode: "Lean recovery",
    summary: "Chicken with rice and vegetables supports recovery and helps avoid a heavy junk-food rebound.",
    diets: ["any", "high-protein"],
    budgets: ["medium", "high"],
    kitchen: ["none", "microwave", "full"],
    timeMax: 15,
    goals: ["muscle", "energy", "focus"],
    tags: ["protein", "portable", "post-workout"],
    searchTerm: "healthy chicken rice bowl near me",
  },
];

const FASTING_MEALS = {
  navratri: [
    {
      title: "Sabudana khichdi cup",
      mode: "Fast-friendly energy",
      summary: "Sabudana with peanuts gives quick energy while staying within common Navratri fast foods.",
      diets: ["vegetarian", "any"],
      budgets: ["low", "medium"],
      kitchen: ["microwave", "full"],
      timeMax: 12,
      goals: ["energy", "focus"],
      tags: ["fast-friendly", "portable", "budget"],
      searchTerm: "navratri sabudana khichdi near me",
    },
    {
      title: "Fruit dahi bowl",
      mode: "Fast-friendly light meal",
      summary: "Fruit with dahi feels gentle and cooling when you want something simple during a fast.",
      diets: ["vegetarian", "any", "high-protein"],
      budgets: ["low", "medium"],
      kitchen: ["none", "microwave", "full"],
      timeMax: 5,
      goals: ["focus", "weight", "energy"],
      tags: ["fast-friendly", "portable", "sugar-shield", "fast"],
      searchTerm: "fruit dahi bowl near me",
    },
    {
      title: "Makhana peanut mix",
      mode: "Fast-friendly snack",
      summary: "Roasted makhana and peanuts give a practical bridge when you need something fast and allowed.",
      diets: ["vegan", "vegetarian", "any"],
      budgets: ["low", "medium"],
      kitchen: ["none", "microwave", "full"],
      timeMax: 5,
      goals: ["energy", "focus"],
      tags: ["fast-friendly", "portable", "fast", "budget"],
      searchTerm: "makhana snack near me",
    },
  ],
  ekadashi: [
    {
      title: "Vrat aloo dahi bowl",
      mode: "Fast-friendly comfort",
      summary: "Aloo with dahi is simple, familiar, and easier to complete than waiting too long and overeating later.",
      diets: ["vegetarian", "any"],
      budgets: ["low", "medium"],
      kitchen: ["microwave", "full"],
      timeMax: 10,
      goals: ["energy", "focus"],
      tags: ["fast-friendly", "warm", "budget"],
      searchTerm: "vrat aloo dahi near me",
    },
    {
      title: "Sabudana upma cup",
      mode: "Fast-friendly energy",
      summary: "Sabudana works well when you want a quick grain-free fast meal that still feels satisfying.",
      diets: ["vegan", "vegetarian", "any"],
      budgets: ["low", "medium"],
      kitchen: ["microwave", "full"],
      timeMax: 12,
      goals: ["energy", "focus"],
      tags: ["fast-friendly", "portable", "budget"],
      searchTerm: "sabudana upma near me",
    },
    {
      title: "Fruit peanut curd bowl",
      mode: "Fast-friendly reset",
      summary: "Fruit, curd, and peanuts help reduce a sugar crash while staying inside Ekadashi-safe foods.",
      diets: ["vegetarian", "any", "high-protein"],
      budgets: ["low", "medium"],
      kitchen: ["none", "microwave", "full"],
      timeMax: 5,
      goals: ["focus", "weight", "energy"],
      tags: ["fast-friendly", "portable", "fast", "sugar-shield"],
      searchTerm: "fruit curd bowl near me",
    },
  ],
  ramadan: [
    {
      title: "Dates and fruit iftar bowl",
      mode: "Gentle iftar start",
      summary: "Dates, fruit, and curd help you break the fast gently before moving into a full meal.",
      diets: ["vegetarian", "any"],
      budgets: ["low", "medium"],
      kitchen: ["none", "microwave", "full"],
      timeMax: 5,
      goals: ["energy", "focus"],
      tags: ["fast-friendly", "portable", "fast", "hydration"],
      searchTerm: "iftar dates fruit bowl near me",
    },
    {
      title: "Dal soup iftar cup",
      mode: "Warm recovery",
      summary: "A light dal soup is easier on the stomach than jumping straight into heavy food after a long fast.",
      diets: ["vegan", "vegetarian", "any"],
      budgets: ["low", "medium"],
      kitchen: ["microwave", "full"],
      timeMax: 10,
      goals: ["energy", "focus", "weight"],
      tags: ["fast-friendly", "warm", "hydration", "budget"],
      searchTerm: "iftar dal soup near me",
    },
    {
      title: "Chicken rice iftar plate",
      mode: "Balanced iftar",
      summary: "Protein plus rice works well when you need a steadier iftar instead of a fried-food crash.",
      diets: ["any", "high-protein"],
      budgets: ["medium", "high"],
      kitchen: ["none", "microwave", "full"],
      timeMax: 15,
      goals: ["muscle", "energy"],
      tags: ["fast-friendly", "protein", "post-workout"],
      searchTerm: "healthy iftar chicken rice near me",
    },
  ],
  intermittent: [
    {
      title: "Sprouts chaat bowl",
      mode: "Window opener",
      summary: "Sprouts chaat helps you open the eating window with something filling instead of jumping to junk food.",
      diets: ["vegan", "vegetarian", "any"],
      budgets: ["low", "medium"],
      kitchen: ["none", "microwave", "full"],
      timeMax: 5,
      goals: ["weight", "focus", "energy"],
      tags: ["portable", "fast", "fiber"],
      searchTerm: "sprouts chaat healthy near me",
    },
    {
      title: "Mini dal chawal plate",
      mode: "Balanced opener",
      summary: "A smaller dal chawal plate works well when you want a proper meal without overshooting the window.",
      diets: ["vegetarian", "any"],
      budgets: ["low", "medium"],
      kitchen: ["microwave", "full"],
      timeMax: 12,
      goals: ["energy", "focus", "weight"],
      tags: ["balanced", "budget", "warm"],
      searchTerm: "dal chawal healthy meal near me",
    },
    {
      title: "Paneer salad bowl",
      mode: "Protein-led opener",
      summary: "Paneer with salad keeps the first meal of the window balanced and easier to control.",
      diets: ["vegetarian", "any", "high-protein"],
      budgets: ["medium", "high"],
      kitchen: ["none", "microwave", "full"],
      timeMax: 8,
      goals: ["muscle", "weight", "focus"],
      tags: ["protein", "portable", "fast"],
      searchTerm: "healthy paneer salad near me",
    },
  ],
};

export const FASTING_GUIDE = {
  none: {
    label: "No Fast",
    copy: "Regular meal suggestions are active.",
    allowedFoods: [],
    prepTip: "Keep one repeatable balanced meal ready so your next good decision is easier.",
  },
  navratri: {
    label: "Navratri",
    copy: "Fast-safe suggestions stay focused on common satvik foods and steady energy.",
    allowedFoods: ["Sabudana", "Makhana", "Fruit", "Dahi", "Samak rice", "Peanuts"],
    prepTip: "Keep fruit, makhana, and one simple vrat meal ready before hunger becomes intense.",
  },
  ekadashi: {
    label: "Ekadashi",
    copy: "The assistant shifts to grain-light, vrat-friendly foods so your recommendation stays practical.",
    allowedFoods: ["Sabudana", "Makhana", "Fruit", "Milk or dahi", "Peanuts", "Vrat aloo"],
    prepTip: "Prepare one small fast-safe bowl early so you do not break the fast impulsively later.",
  },
  ramadan: {
    label: "Ramadan",
    copy: "Recommendations focus on gentle iftar, hydration recovery, and avoiding a heavy crash after fasting.",
    allowedFoods: ["Dates", "Water", "Fruit", "Soup", "Dahi", "Lean protein"],
    prepTip: "Keep water, dates, and one light iftar option ready before the fast opens.",
  },
  intermittent: {
    label: "Intermittent",
    copy: "Suggestions stay focused on high-satiety meals that fit well inside the eating window.",
    allowedFoods: ["Protein", "Fiber", "Curd", "Fruit", "Dal", "Balanced rice or roti meals"],
    prepTip: "Open the eating window with protein or fiber first so you do not overshoot with cravings.",
  },
};

export const QUICK_FOOD_OPTIONS = ["Dal Rice", "Roti Sabzi", "Poha", "Idli", "Paratha", "Biryani"];

const LOW_WATER_THRESHOLD = 3;

export const SCENARIO_PRESETS = [
  {
    id: "hostel-hunger",
    name: "Hostel hunger",
    caption: "Low energy, little time, wants something simple and filling.",
    input: {
      fasting: "none",
      currentFood: "Dal chawal",
      goal: "energy",
      diet: "vegetarian",
      budget: "low",
      time: 10,
      kitchen: "microwave",
      activity: "moderate",
      hunger: 4,
      energy: 2,
      craving: 3,
      water: 2,
      challenge: "I skip meals and then eat random snacks from the hostel canteen.",
    },
  },
  {
    id: "post-gym",
    name: "Post-gym",
    caption: "Needs quick recovery fuel without junk food.",
    input: {
      fasting: "none",
      currentFood: "Egg bhurji rice",
      goal: "muscle",
      diet: "high-protein",
      budget: "medium",
      time: 15,
      kitchen: "microwave",
      activity: "high",
      hunger: 5,
      energy: 3,
      craving: 2,
      water: 5,
      challenge: "I delay my post-workout meal and overeat later.",
    },
  },
  {
    id: "navratri-evening",
    name: "Navratri evening",
    caption: "Fasting, low energy, wants a safe and easy option.",
    input: {
      fasting: "navratri",
      currentFood: "Sabudana khichdi",
      goal: "energy",
      diet: "vegetarian",
      budget: "medium",
      time: 10,
      kitchen: "microwave",
      activity: "low",
      hunger: 4,
      energy: 2,
      craving: 3,
      water: 2,
      challenge: "I wait too long during the fast and then eat too much at once.",
    },
  },
  {
    id: "late-night-craving",
    name: "Late-night craving",
    caption: "Strong cravings, low water, tempted by biryani or sweets.",
    input: {
      fasting: "none",
      currentFood: "Biryani",
      goal: "focus",
      diet: "any",
      budget: "medium",
      time: 5,
      kitchen: "none",
      activity: "low",
      hunger: 3,
      energy: 1,
      craving: 5,
      water: 1,
      challenge: "I order heavy food or sweets when I am tired at night.",
    },
  },
];

function clamp(value, min, max) {
  return Math.max(min, Math.min(max, value));
}

function normalizeInput(raw) {
  return {
    fasting: raw.fasting ?? "none",
    currentFood: (raw.currentFood ?? "").trim(),
    goal: raw.goal ?? "energy",
    diet: raw.diet ?? "any",
    budget: raw.budget ?? "medium",
    time: Number(raw.time ?? 15),
    kitchen: raw.kitchen ?? "none",
    activity: raw.activity ?? "moderate",
    hunger: Number(raw.hunger ?? 3),
    energy: Number(raw.energy ?? 3),
    craving: Number(raw.craving ?? 2),
    water: Number(raw.water ?? 4),
    challenge: (raw.challenge ?? "").trim(),
  };
}

function getCandidateMeals(input) {
  if (input.fasting !== "none") {
    return FASTING_MEALS[input.fasting] ?? BASE_MEALS;
  }
  return BASE_MEALS;
}

function calculateCoreMetrics(input) {
  const cravingPressure = clamp((input.craving - 2) * 8, 0, 24);
  const energyPenalty = clamp((3 - input.energy) * 7, 0, 21);
  const convenienceBoost = input.time <= 10 || input.kitchen === "none" ? 10 : 0;
  const fastingAdjustment = input.fasting !== "none" ? 4 : 0;

  const balance = clamp(76 + (input.goal === "weight" ? 6 : 0) + (input.diet !== "any" ? 4 : 0) - cravingPressure - fastingAdjustment, 48, 98);
  const hydration = clamp(64 + input.water * 4 - (input.hunger <= 2 ? 4 : 0) - (input.fasting === "ramadan" ? 4 : 0), 42, 96);
  const consistency = clamp(68 + convenienceBoost + (input.challenge ? 3 : 0) - energyPenalty, 40, 97);
  const recovery = clamp(
    62 +
      (input.activity === "high" ? 14 : input.activity === "moderate" ? 8 : 2) +
      (input.goal === "muscle" ? 10 : 0) -
      (input.energy >= 4 ? 0 : 6),
    38,
    98,
  );

  return { balance, hydration, consistency, recovery };
}

function calculateRiskScore(input) {
  let score = 20;
  if (input.water <= LOW_WATER_THRESHOLD) score += 18;
  if (input.energy <= 2) score += 18;
  if (input.craving >= 4) score += 18;
  if (input.time <= 5) score += 10;
  if (input.kitchen === "none") score += 8;
  if (input.budget === "low") score += 6;
  if (input.challenge) score += 6;
  if (input.fasting !== "none") score += 8;
  return clamp(score, 20, 95);
}

function getFoodIntentBoost(meal, input) {
  const currentFood = input.currentFood.toLowerCase();
  if (!currentFood) return 0;

  if (currentFood.includes("dal") && meal.title.includes("Dal")) return 12;
  if ((currentFood.includes("roti") || currentFood.includes("sabzi")) && meal.title.includes("roti")) return 12;
  if (currentFood.includes("poha") && meal.title.includes("Poha")) return 14;
  if (currentFood.includes("idli") && meal.title.includes("Idli")) return 14;
  if (currentFood.includes("paratha") && meal.tags.includes("warm")) return 6;
  if (currentFood.includes("biryani") && (meal.tags.includes("protein") || meal.tags.includes("balanced"))) return 6;
  if (currentFood.includes("fruit") && meal.title.includes("fruit")) return 10;

  return 0;
}

function scoreMeal(meal, input) {
  let score = 52;

  if (meal.goals.includes(input.goal)) score += 18;
  if (meal.diets.includes(input.diet) || input.diet === "any") score += 12;
  if (meal.budgets.includes(input.budget)) score += 9;
  if (meal.kitchen.includes(input.kitchen)) score += 10;
  if (meal.timeMax <= input.time) score += 12;
  if (meal.timeMax > input.time) score -= 10;

  if (input.craving >= 4 && meal.tags.includes("sugar-shield")) score += 12;
  if (input.energy <= 2 && meal.tags.includes("warm")) score += 8;
  if (input.goal === "muscle" && meal.tags.includes("protein")) score += 10;
  if (input.goal === "weight" && meal.tags.includes("fiber")) score += 8;
  if (input.kitchen === "none" && meal.tags.includes("portable")) score += 10;
  if (input.budget === "low" && meal.tags.includes("budget")) score += 10;
  if (input.activity === "high" && meal.tags.includes("post-workout")) score += 7;
  if (input.time <= 5 && meal.tags.includes("fast")) score += 10;
  if (input.fasting !== "none" && meal.tags.includes("fast-friendly")) score += 14;
  score += getFoodIntentBoost(meal, input);

  if (input.diet === "vegan" && !meal.diets.includes("vegan")) score -= 30;
  if (input.diet === "vegetarian" && !meal.diets.includes("vegetarian") && meal.diets.includes("any")) score -= 18;

  return score;
}

function buildMode(input, topMeal) {
  if (input.fasting !== "none") {
    return `${FASTING_GUIDE[input.fasting].label} support`;
  }

  if (input.water <= LOW_WATER_THRESHOLD && input.hunger <= 3) {
    return "Hydrate first, then eat";
  }

  if (input.craving >= 4) {
    return `${topMeal.mode} for craving control`;
  }

  if (input.energy <= 2) {
    return `${topMeal.mode} for low-energy recovery`;
  }

  return topMeal.mode;
}

function buildPrioritySignal(input) {
  if (input.fasting !== "none") {
    return `Primary intervention: stay within ${FASTING_GUIDE[input.fasting].label} rules while keeping energy stable and the meal realistic.`;
  }

  if (input.water <= LOW_WATER_THRESHOLD && input.hunger <= 3) {
    return "Primary intervention: low hydration may be masquerading as hunger.";
  }

  if (input.craving >= 4 && input.energy <= 2) {
    return "Primary intervention: break the tired-plus-sugar loop before it turns into impulsive ordering.";
  }

  if (input.kitchen === "none" || input.time <= 5) {
    return "Primary intervention: remove friction so the healthy choice is also the easy choice.";
  }

  if (input.activity === "high") {
    return "Primary intervention: prioritize recovery fuel so you do not rebound into overeating later.";
  }

  return "Primary intervention: protect stable energy with a practical meal you can repeat.";
}

function buildRationale(input, metrics, topMeal) {
  const reasons = [
    `It fits your ${input.time}-minute window and ${input.kitchen === "none" ? "no-kitchen" : input.kitchen} setup.`,
    `It aligns with your ${input.goal.replace("-", " ")} goal while staying realistic for today.`,
  ];

  if (input.fasting !== "none") {
    reasons.push(`You selected ${FASTING_GUIDE[input.fasting].label}, so the assistant only considers fast-friendly options.`);
  }

  if (input.currentFood) {
    reasons.push(`You mentioned "${input.currentFood}", so the suggestion stays close to familiar Indian food instead of generic diet advice.`);
  }

  if (input.water <= LOW_WATER_THRESHOLD) {
    reasons.push("Hydration is low, so the assistant boosts choices that reduce false hunger and late sugar spirals.");
  }

  if (input.craving >= 4) {
    reasons.push("Your craving score is elevated, so the engine favors protein or fiber over a fast sugar hit.");
  }

  if (input.budget === "low") {
    reasons.push("Budget matters today, so lower-cost meals receive an extra scoring advantage.");
  }

  if (metrics.recovery >= 78 && !topMeal.title.includes("fast")) {
    reasons.push("Your activity pattern suggests you need recovery-friendly fuel, not a random snack.");
  }

  if (input.challenge) {
    reasons.push("Your blocker note was factored in so the recommendation reduces a habit trigger instead of ignoring it.");
  }

  return reasons.slice(0, 5);
}

function buildTip(input) {
  if (input.fasting === "ramadan") {
    return "Break the fast gently with water and dates first, then move into the recommended meal instead of jumping straight to heavy fried food.";
  }

  if (input.fasting !== "none") {
    return `Stay inside ${FASTING_GUIDE[input.fasting].label} foods, then choose the easiest allowed option before hunger gets too strong.`;
  }

  if (input.water <= LOW_WATER_THRESHOLD && input.hunger <= 3) {
    return "Drink water first, wait 10 minutes, then follow the meal plan if you are still hungry.";
  }

  if (input.craving >= 4) {
    return "Pair any sweet craving with protein or fiber so you satisfy it without a crash.";
  }

  if (input.energy <= 2) {
    return "Choose the lowest-friction healthy option now, because low energy makes willpower expensive.";
  }

  if (input.time <= 5) {
    return "Optimize for completion, not perfection. A decent meal now beats a perfect meal you never make.";
  }

  return "Repeat this style of decision in your next busy window so healthy eating becomes more automatic.";
}

function buildWarning(input) {
  if (input.fasting === "ramadan") {
    return "Hydration recovery matters after the fast opens. Avoid moving straight from dehydration into a heavy meal.";
  }

  if (input.fasting !== "none") {
    return "The assistant is treating your fast as the first rule, so it is prioritizing safe, allowed foods over regular meal suggestions.";
  }

  if (input.water <= LOW_WATER_THRESHOLD) {
    return "Hydration is the biggest risk signal right now. Low water intake often feels like hunger or a sugar craving.";
  }

  if (input.energy <= 2) {
    return "Low energy raises the chance of an impulsive food decision, so this plan intentionally reduces effort.";
  }

  if (input.craving >= 4) {
    return "Cravings are elevated. Avoid making this decision near a dessert-heavy food option if possible.";
  }

  return "No major warning flags detected. Focus on consistency instead of perfection.";
}

function buildActionPlan(input, topMeal, alternatives) {
  const fallback = alternatives[0] ?? topMeal;
  const fastingGuide = FASTING_GUIDE[input.fasting];

  let now = `Choose ${topMeal.title} as your next meal.`;
  if (input.fasting === "ramadan") {
    now = `Break the fast with water and dates, then choose ${topMeal.title}.`;
  } else if (input.fasting !== "none") {
    now = `Stay inside ${fastingGuide.label} foods and choose ${topMeal.title} as your next safe option.`;
  } else if (input.water <= LOW_WATER_THRESHOLD) {
    now = `Drink 1-2 cups of water, then choose ${topMeal.title}.`;
  }

  const fallbackText =
    input.fasting !== "none"
      ? `If ${topMeal.title} is not available, switch to ${fallback.title} so you stay inside your fast instead of grabbing whatever is nearby.`
      : `If ${topMeal.title} is not available, switch to ${fallback.title} instead of defaulting to a random snack.`;

  let prep = "Save one repeatable version of this meal so your next good decision is faster.";
  if (input.fasting !== "none") {
    prep = fastingGuide.prepTip;
  } else if (input.budget === "low") {
    prep = "Keep one budget-friendly staple ready so cheap snacks stop becoming your automatic answer.";
  } else if (input.energy <= 2) {
    prep = "Set a reminder before your usual crash window so the decision happens before you are drained.";
  } else if (input.activity === "high") {
    prep = "Prep a recovery option ahead of your next workout day to avoid a rebound binge later.";
  }

  return { now, fallback: fallbackText, prep };
}

function buildGoogleCalendarUrl(summary) {
  const start = new Date(Date.now() + 60 * 60 * 1000);
  const end = new Date(start.getTime() + 30 * 60 * 1000);
  const dateFormat = (value) => value.toISOString().replace(/[-:]/g, "").split(".")[0] + "Z";
  const params = new URLSearchParams({
    action: "TEMPLATE",
    text: "PlatePilot check-in",
    details: summary,
    dates: `${dateFormat(start)}/${dateFormat(end)}`,
  });
  return `https://calendar.google.com/calendar/render?${params.toString()}`;
}

function buildMapsSearch(input, topMeal) {
  if (input.fasting !== "none") {
    return `${FASTING_GUIDE[input.fasting].label} food ${topMeal.title} near me`;
  }

  if (input.currentFood) {
    return `healthy ${input.currentFood} near me`;
  }

  return `${topMeal.searchTerm}`;
}

export function recommendMeal(rawInput) {
  const input = normalizeInput(rawInput);
  const core = calculateCoreMetrics(input);
  const ranked = getCandidateMeals(input)
    .map((meal) => ({ ...meal, score: scoreMeal(meal, input) }))
    .sort((left, right) => right.score - left.score);

  const topMeal = ranked[0];
  const alternatives = ranked.slice(1, 3);
  const topScoreGap = topMeal.score - (alternatives[0]?.score ?? topMeal.score - 8);
  const confidenceScore = clamp(66 + topScoreGap + (input.challenge ? 4 : 0) - (input.time <= 5 ? 4 : 0), 54, 97);
  const riskScore = calculateRiskScore(input);
  const wellnessScore = Math.round(core.balance * 0.3 + core.hydration * 0.2 + core.consistency * 0.25 + core.recovery * 0.25);

  const confidenceLabel = confidenceScore >= 85 ? "High confidence" : confidenceScore >= 72 ? "Solid confidence" : "Useful starting point";
  const riskLevel = riskScore >= 70 ? "High" : riskScore >= 50 ? "Moderate" : "Low";
  const mode = buildMode(input, topMeal);
  const prioritySignal = buildPrioritySignal(input);
  const rationale = buildRationale(input, core, topMeal);
  const habitTip = buildTip(input);
  const warning = buildWarning(input);
  const actionPlan = buildActionPlan(input, topMeal, alternatives);
  const summary = topMeal.summary;
  const calendarUrl = buildGoogleCalendarUrl(`Try: ${topMeal.title}. ${actionPlan.prep}`);

  return {
    input,
    mode,
    title: `${mode}: ${topMeal.title}`,
    summary,
    rationale,
    habitTip,
    warning,
    prioritySignal,
    actionPlan,
    confidenceLabel,
    riskLevel,
    fastingLabel: FASTING_GUIDE[input.fasting].label,
    metrics: {
      ...core,
      confidenceScore,
      riskScore,
      wellnessScore,
    },
    primaryMeal: topMeal,
    alternatives,
    googleMapsUrl: `https://www.google.com/maps/search/${encodeURIComponent(buildMapsSearch(input, topMeal))}`,
    groceryMapsUrl: `https://www.google.com/maps/search/${encodeURIComponent(
      input.fasting !== "none" ? `${FASTING_GUIDE[input.fasting].label} groceries near me` : input.budget === "low" ? "budget grocery store near me" : "healthy grocery store near me",
    )}`,
    googleCalendarUrl: calendarUrl,
    savedAt: new Date().toISOString(),
  };
}

export function buildHistoryEntry(result) {
  return {
    title: result.primaryMeal.title,
    mode: result.mode,
    score: result.metrics.wellnessScore,
    savedAt: result.savedAt,
    summary: result.summary,
    water: result.input.water,
    energy: result.input.energy,
    craving: result.input.craving,
    riskLevel: result.riskLevel,
    prioritySignal: result.prioritySignal,
    fasting: result.input.fasting,
  };
}

export function getDemoInput() {
  return {
    fasting: "none",
    currentFood: "Poha",
    goal: "focus",
    diet: "vegetarian",
    budget: "medium",
    time: 15,
    kitchen: "microwave",
    activity: "moderate",
    hunger: 4,
    energy: 2,
    craving: 4,
    water: 2,
    challenge: "I buy sugary snacks when I am tired between classes.",
  };
}
