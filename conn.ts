const mysql = require('mysql2');
const dotenv = require('dotenv');
dotenv.config();
const conn = mysql.createConnection({
    host: process.env.HOST,
    user: process.env.USER,
    password: process.env.PASSWORD,
    database: process.env.DATABASE,
    connectionLimit : 10,
});
conn.connect((err : any)=>{
    if(err){
        // throw err;
        console.log(err);
    }else{
        console.log('Connection Established!!');        
    }
});

module.exports = conn;