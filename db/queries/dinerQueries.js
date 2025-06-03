const pool = require("../pool");

async function getAllDiners() {
  const { rows } = await pool.query("SELECT * FROM diner");
  return rows;
}

async function getDinerByName(name) {
  const { rows } = await pool.query("SELECT * FROM diner WHERE name = ($1)", [
    name,
  ]);
  return rows;
}

async function addMealToLikes(dinerId, mealId) {
  await pool.query(
    "UPDATE diner SET likes = ARRAY_APPEND(likes, ($1)) WHERE id = ($2)",
    [mealId, dinerId],
  );
}

async function addMealToDislikes(dinerId, mealId) {
  await pool.query(
    "UPDATE diner SET dislikes = ARRAY_APPEND(dislikes, ($1)) WHERE id = ($2)",
    [mealId, dinerId],
  );
}

async function addMealsToDislikes(dinerId, mealIdArray) {
  await pool.query(
    `UPDATE diner SET dislikes = ARRAY[${mealIdArray}] WHERE id = ${dinerId}`,
    [mealIdArray, dinerId],
  );
}

module.exports = {
  getAllDiners,
  getDinerByName,
  addMealToLikes,
  addMealToDislikes,
  addMealsToDislikes
};
