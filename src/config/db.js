const { Pool } = require("pg")

module.exports = new Pool({
    user: "postgres",
    password: "Alves171",
    host: "localhost",
    port: 5432,
    database: "foodfy"
})