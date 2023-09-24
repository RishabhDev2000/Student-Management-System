"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mysql = require('mysql2');
const conn = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    port: 3306,
    password: '52148991',
    database: 'record'
});
conn.connect((err) => {
    if (err) {
        // throw err;
        console.log(err);
    }
    else {
        console.log('Connection Established!!');
        // const query = "INSERT INTO BANK_DETAILS VALUES(17627145188, 'CNRB09178', 'YES BANK', 'JASOLAVIHAR', 9845)";
        // conn.query(query, (err:any, result:any)=>{
        //     if(err){
        //         console.log(err);
        //     }else{
        //         console.log(result);
        //         console.log("1 Record Inserted Successfully!!!");
        //     }
        // })
    }
});
exports.default = conn;
