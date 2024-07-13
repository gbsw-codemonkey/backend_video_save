const mysql = require('mysql2');

// mysql 연결
const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '1234',
    database: 'swgo',
    port: 3306
});

module.exports = db;
