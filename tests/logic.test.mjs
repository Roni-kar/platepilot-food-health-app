import assert from "node:assert/strict";
import { FASTING_GUIDE, getDemoInput, recommendMeal } from "../logic.mjs";

function run() {
  const demo = recommendMeal(getDemoInput());
  assert.ok(["Poha peanut cup", "Curd fruit makhana bowl", "Chana chaat cup", "Idli sambar combo"].includes(demo.primaryMeal.title));
  assert.ok(demo.metrics.wellnessScore >= 55);
  assert.ok(demo.metrics.confidenceScore >= 70);
  assert.ok(demo.googleMapsUrl.includes("google.com/maps/search/"));

  const hydrationFirst = recommendMeal({
    fasting: "none",
    currentFood: "Biryani",
    goal: "focus",
    diet: "any",
    budget: "medium",
    time: 10,
    kitchen: "none",
    activity: "low",
    hunger: 3,
    energy: 2,
    craving: 3,
    water: 1,
  });
  assert.equal(hydrationFirst.mode, "Hydrate first, then eat");

  const vegan = recommendMeal({
    fasting: "none",
    currentFood: "Poha",
    goal: "weight",
    diet: "vegan",
    budget: "low",
    time: 15,
    kitchen: "microwave",
    activity: "low",
    hunger: 3,
    energy: 3,
    craving: 4,
    water: 5,
  });
  assert.ok(["Poha peanut cup", "Chana chaat cup", "Veg khichdi comfort bowl", "Idli sambar combo"].includes(vegan.primaryMeal.title));

  const muscle = recommendMeal({
    fasting: "none",
    currentFood: "Egg bhurji rice",
    goal: "muscle",
    diet: "high-protein",
    budget: "medium",
    time: 30,
    kitchen: "full",
    activity: "high",
    hunger: 5,
    energy: 3,
    craving: 1,
    water: 6,
  });
  assert.ok(["Egg bhurji rice bowl", "Chicken rice recovery plate", "Paneer roti roll", "Moong chilla plate"].includes(muscle.primaryMeal.title));

  const navratri = recommendMeal({
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
    craving: 2,
    water: 3,
  });
  assert.equal(navratri.mode, "Navratri support");
  assert.ok(navratri.primaryMeal.title.includes("Sabudana") || navratri.primaryMeal.title.includes("Fruit") || navratri.primaryMeal.title.includes("Makhana"));

  const ramadan = recommendMeal({
    fasting: "ramadan",
    currentFood: "Iftar",
    goal: "energy",
    diet: "any",
    budget: "medium",
    time: 15,
    kitchen: "none",
    activity: "low",
    hunger: 5,
    energy: 2,
    craving: 3,
    water: 1,
  });
  assert.equal(ramadan.fastingLabel, FASTING_GUIDE.ramadan.label);
  assert.ok(ramadan.actionPlan.now.toLowerCase().includes("dates") || ramadan.actionPlan.now.toLowerCase().includes("fast"));

  console.log("logic tests passed");
}

run();
