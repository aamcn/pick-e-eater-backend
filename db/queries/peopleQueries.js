const pool = require("../pool");

async function getAllPeople() {
    const {rows} = await pool.query("SELECT * FROM people")
    return rows
}



module.exports = {
    getAllPeople
}
