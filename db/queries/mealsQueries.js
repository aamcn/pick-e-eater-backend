const pool = require("../pool");

async function getAllMeals() {
    const {rows} = await pool.query("SELECT * FROM meals")
    return rows
}

async function getMealById(mealId) {
    const { rows } = await pool.query("SELECT * FROM meals WHERE id = ($1)", [mealId])
    return rows;
} 

module.exports = {
    getAllMeals,
    getMealById
}
