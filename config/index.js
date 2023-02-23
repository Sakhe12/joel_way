require('dotenv').config();
const { createPool } = require('mysql');
//XC
let connection = mysql.createConnection({
    host: process.env.dbHost,
    user: process.env.dbUser,
    password: process.env.dbPassword,
    port: process.env.dbPort,
    database: process.env.dbDatabase,
    multipleStatements: true
});
module.exports = connection;