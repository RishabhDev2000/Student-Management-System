var mysql = require('mysql2');
var dotenv = require('dotenv');
dotenv.config();
var conn = mysql.createConnection({
    host: process.env.HOST,
    user: process.env.USER,
    password: process.env.PASSWORD,
    database: process.env.DATABASE,
    connectionLimit: 10
});
conn.connect(function (err) {
    if (err) {
        // throw err;
        console.log(err);
    }
    else {
        console.log('Connection Established!!');
    }
});
module.exports = conn;
