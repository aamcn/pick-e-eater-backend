const pool = require("../pool");

async function getAllMeals() {
  const { rows } = await pool.query("SELECT * FROM meals");
  return rows;
}

async function getMealById(mealId) {
  const { rows } = await pool.query("SELECT * FROM meals WHERE id = ($1)", [
    mealId,
  ]);
  return rows;
}

async function getMealsByType(mealType) {
  const { rows } = await pool.query("SELECT * FROM meals WHERE type = ($1)", [
    mealType,
  ]);
  return rows;
}

async function getMealsBySubType(mealSubType) {
  const { rows } = await pool.query(
    "SELECT * FROM meals WHERE sub_type = ($1)",
    [mealSubType],
  );
  return rows;
}

async function getMealsByDifficulty(mealDifficulty) {
  const { rows } = await pool.query(
    "SELECT * FROM meals WHERE difficulty = ($1)",
    [mealDifficulty],
  );
  return rows;
}

async function addNewMeal(name, type, subType, difficulty) {
  await pool.query(
    "INSERT INTO meals (name, type, sub_type, difficulty) VALUES ($1, $2, $3, $4)",
    [name, type, subType, difficulty],
  );
}

module.exports = {
  getAllMeals,
  getMealById,
  getMealsByType,
  getMealsBySubType,
  getMealsByDifficulty,
  addNewMeal,
};
