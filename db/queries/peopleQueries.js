const pool = require("../pool");

async function getAllPeople() {
    const {rows} = await pool.query("SELECT * FROM people")
    return rows
}

async function getPersonByName(name) {
    const {rows} = await pool.query("SELECT * FROM people WHERE name = ($1)", [name])
    return rows
}

async function addMealToLikes(personId, mealId) {
    await pool.query("UPDATE people SET likes = ARRAY_APPEND(likes, ($1)) WHERE id = ($2)", [mealId, personId])
}

async function addMealToDislikes(personId, mealId) {
    await pool.query("UPDATE people SET dislikes = ARRAY_APPEND(dislikes, ($1)) WHERE id = ($2)", [mealId, personId])
}


module.exports = {
    getAllPeople,
    getPersonByName,
    addMealToLikes,
    addMealToDislikes
}
