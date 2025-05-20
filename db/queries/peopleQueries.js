const pool = require("../pool");

async function getAllPeople() {
    const {rows} = await pool.query("SELECT * FROM people")
    return rows
}

async function getPersonByName(name) {
    const {rows} = await pool.query("SELECT * FROM people WHERE name = ($1)", [name])
    return rows
}

module.exports = {
    getAllPeople,
    getPersonByName
}
