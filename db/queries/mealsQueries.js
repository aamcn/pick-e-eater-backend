const pool = require("../pool");

async function getAllMeals() {
    const {rows} = await pool.query("SELECT * FROM meals")
    return rows
}

module.exports = {
    getAllMeals
}
