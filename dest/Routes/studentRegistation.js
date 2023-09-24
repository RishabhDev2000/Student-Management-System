"use strict";
const express = require('express');
const path = require('path');
const bodyparser = require('body-parser');
const conn = require('../conn');
const router = express.Router();
router.use(bodyparser.json());
router.use(bodyparser.urlencoded({ extended: true }));
router.get('/studentRegister', (req, res) => {
    res.sendFile(path.join(__dirname, "../public/stuReg.html"));
});
router.post('/studentRegister', (req, res) => {
    console.log(req.body);
    // const rollno : number = Math.floor(Math.random() * (10000 - 1 + 1)) + 1;
    // const name : string = req.body.studentname;
    // const standard : string = req.body.standard;
    // const father : string = req.body.fathername;
    // const mother : string = req.body.mothername;
    // const dob : Date = req.body.dob;
    // const mobileno : number = req.body.mobileno;
    // const country : string = req.body.country;
    // const state : string = req.body.state;
    // const pincode : number = req.body.pincode;
    // const studentemail : string = req.body.studentemail;
    // const password : string = req.body.password;
    // const confirmpassword : string = req.body.confirmpassword;
    // const gender : string = req.body.Gender;
    // const marks:number = 0;
    // const percentage:number = 0;
    // const grade:string = ' ';
    // console.log(`INSERT INTO STUDENTS VALUES(${rollno},${name},${standard},${father},${mother},${dob},${country},${state},${pincode},${studentemail},${password},${marks},${percentage},${grade},${gender},${mobileno})`);
    // if(password != confirmpassword){
    //     alert('Please Enter Same password as Confirm Password');
    // }else{
    //     var query : string = `INSERT INTO STUDENTS VALUES(${rollno},${name},${standard},${father},${mother},${dob},${country},${state},${pincode},${studentemail},${password},${marks},${percentage},${grade},${gender},${mobileno})`;
    //     conn.query(query, (err:any, result:any)=>{
    //         if(err){
    //             res.send(err);
    //         }else{
    //             console.log(result);
    //             console.log("1 Record Inserted Successfully!!!");
    //             alert(`Student Register Successfully!! Your Roll No. : ${rollno}`);
    //         }
    //     })
    // }
});
module.exports = router;
