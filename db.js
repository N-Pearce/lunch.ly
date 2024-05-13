/** Database for lunchly */

const pg = require("pg");

const pool = new pg.Pool({
    database: "lunchly",
    password: process.env.PASSWORD,
    host: 'localhost',
    user: 'postgres',
    port: 5432
});


module.exports = pool;