const express = require('express');
const conn = require('../conn');
const path = require('path');
const router = express.Router();

router.get('/admin', (req: any, res:any)=>{
    res.sendFile(path.join(__dirname, "../public/adminUI.html"))
})

router.get('/admin/bankdetails', (req: any, res:any)=>{
    res.sendFile(path.join(__dirname, "../public/bankdetailsUi.html"))
})

router.get('/conn', (req: any, res:any)=>{
    res.sendFile(conn);
})

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
    });
});

router.get('/admin/deleteStudent', (req: any, res:any)=>{
    res.sendFile(path.join(__dirname, "../public/deleteStUi.html"))
})

router.get('/admin/feedetails', (req: any, res:any)=>{
    res.sendFile(path.join(__dirname, "../public/feedetailsUi.html"))
})

router.get('/home', (req: any, res:any)=>{
    res.sendFile(path.join(__dirname, "../public/main.html"));
})

router.get('/resetpassword', (req:any, res:any)=>{
    res.sendFile(path.join(__dirname, '../public/stForgetPass.html'));
});

module.exports = router;