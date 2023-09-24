const express = require('express');
const path = require('path');
const router = express.Router();
const conn = require('../conn');

router.get('/dashboard/:dbemail', (req:any, res:any)=>{
    req.params.dbemail;
    res.sendFile(path.join(__dirname, '../public/Dashboard.html'));
    let query = `SELECT * FROM STUDENTS WHERE STUDENT_EMAIL = ?`;
    conn.query(query, [req.params.dbemail], (err:any, result:any)=>{
        if(err){
            throw err;
        }
        else{
            console.log(result);
        }
    }

    // res.json({

    // });
})

module.exports = router;