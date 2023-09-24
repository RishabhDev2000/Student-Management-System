"use strict";
const express = require('express');
const fs = require('fs');
const path = require('path');
const url = require('url');
const bodyparser = require('body-parser');
const bcrypt = require('bcrypt');
const dotenv = require('dotenv');
const conn = require('./conn');
const jwt = require('jsonwebtoken');
const app = express();
const PORT = 3000;
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({ extended: true }));
//Static path to serve by NodeJS Server
app.use(express.static(path.join(__dirname, "public")));
//Setting Routes for the Application
app.get('/home', require('./Routes/home'));
app.get('/studentRegister', require('./Routes/studentRegistation'));
app.get('/student/login', require('./Routes/studentlogin'));
app.get('/admin', require('./Routes/adminlogin'));
app.get('/admin/bankdetails', require('./Routes/bankdetails'));
app.get('/admin/feedetails', require('./Routes/feedetails'));
app.get('/admin/deleteStudent', require('./Routes/deletestudent'));
app.get('/admin/updateAcademic', require('./Routes/updateacademic'));
app.get('/resetpassword', require('./Routes/resetpassword'));
app.get('/:rollno', require('./Routes/dashboard'));
app.post('/studentRegister', (req, res) => {
    // console.log(req.body);
    let rollno = Math.floor(Math.random() * (10000 - 1 + 1)) + 1;
    let name = req.body.studentname;
    let standard = req.body.standard;
    let father = req.body.fathername;
    let mother = req.body.mothername;
    let dob = req.body.dob;
    let mobileno = req.body.mobileno;
    let country = req.body.country;
    let state = req.body.state;
    let pincode = req.body.pincode;
    let studentemail = req.body.studentemail;
    let password = req.body.password;
    let confirmpassword = req.body.confirmpassword;
    let gender = req.body.gender;
    let marks = 0;
    let percentage = 0;
    let grade = ' ';
    bcrypt.genSalt(10, async (err, salt) => {
        await bcrypt.hash(password, salt, (err, hash) => {
            if (err) {
                console.log(err);
                res.send({
                    success: false,
                    statusCode: 500,
                    message: 'Getting Error during the Connection'
                });
                return;
            }
            else {
                if (password !== confirmpassword) {
                    // alert('Please Enter Same password as Confirm Password');
                    console.log(`Confirm Password is not same as Entered Password.`);
                }
                else {
                    var query = `INSERT INTO STUDENTS VALUES(?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)`;
                    conn.query(query, [rollno, name, standard, father, mother, dob, country, state, pincode, studentemail, hash, marks, percentage, grade, gender, mobileno], (err, result) => {
                        if (err) {
                            console.log(err);
                        }
                        else {
                            console.log(result.insertId);
                            // alertbox(`Student Registered Successfully!! Your Roll No. : ${rollno}`);
                            console.log("1 Record Inserted Successfully!!!");
                            console.log(hash);
                        }
                    });
                }
            }
        });
    });
});
app.post('/student/login', (req, res) => {
    console.log(req.body);
    var email = req.body.email;
    var password = req.body.password;
    if (email && password) {
        var query = `SELECT * FROM STUDENTS WHERE STUDENT_EMAIL = ?`;
        conn.query(query, [email], async (err, result) => {
            if (err) {
                console.log(err);
                res.send({
                    success: false,
                    statusCode: 400,
                    data: err
                });
                return;
            }
            // if(result.length === 0){
            //     console.log(`User Not Registered Kindly Register Yourself!!`);
            // }
            if (result.length > 0) {
                let dbemail = result[0].STUDENT_EMAIL;
                let dbpass = result[0].PASSWORD;
                let dbroll = result[0].ROLLNO;
                if (await bcrypt.compare(password, dbpass)) {
                    console.log(`Welcome to the Profile`);
                    res.send(`/:${dbroll}`);
                }
                else {
                    console.log(`Incorrect Password Please Try Again!!!`);
                }
            }
        });
    }
});
app.post('/admin/deleteStudent', (req, res) => {
    let rollno = parseInt(req.body.rollno);
    let email = req.body.emailid;
    console.log(req.body);
    let searchquery = `SELECT * FROM STUDENTS WHERE ROLLNO = ? AND STUDENT_EMAIL = ?`;
    conn.query(searchquery, [rollno, email], (err, result) => {
        if (err) {
            console.log(err);
            res.send({
                success: false,
                statusCode: 500,
                message: 'Getting Error during the Connection'
            });
            return;
        }
        else if (result.length == 0) {
            console.log(`RollNo. ${rollno} not present in the Database`);
        }
        else {
            let deletequery = `DELETE FROM STUDENTS WHERE ROLLNO = ? AND STUDENT_EMAIL = ?`;
            conn.query(deletequery, [rollno, email], (err, result) => {
                if (err) {
                    console.log(err);
                    res.send({
                        success: false,
                        statusCode: 500,
                        message: 'Getting Error during the Connection'
                    });
                    return;
                }
                else {
                    console.log(result);
                    // alert('Record Erased Successfully from the Database');
                    console.log(`Record Erased Successfully from the Database`);
                }
            });
        }
    });
});
app.post('/admin/feedetails', (req, res) => {
    console.log(req.body);
    let rollno = req.body.rollno;
    let admissionyear = req.body.year;
    let receiptno = req.body.receiptno;
    let admissionno = req.body.admissionno;
    let studentname = req.body.studentname;
    let feeamount = req.body.feeamount;
    let feedate = req.body.depositedate;
    let feestatus = "";
    if (req.body.feestatus == 1) {
        feestatus = 'SUBMITTED';
    }
    if (req.body.feestatus == 2) {
        feestatus = 'PENDING';
    }
    let query = `INSERT INTO FEE_RECORD VALUES(?,?,?,?,?,?,?,?)`;
    conn.query(query, [studentname, receiptno, admissionno, admissionyear, feedate, feestatus, feeamount, rollno], (err, result) => {
        if (err) {
            console.log(err);
            res.send({
                success: false,
                statusCode: 500,
                message: 'Getting Error during the Connection'
            });
            return;
        }
        else {
            console.log(result);
            // alert(`Record Updated Succeessfully!!!`);
            console.log(`1 Record Inserted Successfully!!!`);
        }
    });
});
app.post('/admin/updateAcademic', (req, res) => {
    console.log(req.body);
    let rollno = req.body.rollno;
    let emailid = req.body.emailid;
    let totalmarks = req.body.totalmarks;
    let obtainedmarks = req.body.obtainedmarks;
    let percentage = (obtainedmarks / totalmarks) * 100;
    req.body.percentage = percentage;
    let grade;
    console.log(req.body);
    if (percentage <= 99 && percentage >= 80) {
        grade = "A";
    }
    else if (percentage <= 79 && percentage >= 60) {
        grade = "B";
    }
    else if (percentage <= 59 && percentage >= 40) {
        grade = "C";
    }
    else {
        grade = "D";
    }
    req.body.grade = grade;
    // JSON.parse({
    //     "grade" : grade,
    //     "percentage" : percentage
    // })
    let query = `UPDATE STUDENTS SET PERCENTAGE = ? , MARKS = ? , GRADE = ? WHERE ROLLNO = ?`;
    conn.query(query, [percentage, obtainedmarks, grade, rollno], (err, result) => {
        if (err) {
            console.log(err);
            res.send({
                statusCode: 500,
                success: false,
                message: 'Error Occured in Database Connection'
            });
        }
        else {
            console.log(`Record updated Successfull for Roll No. : ${rollno}`);
            res.send({
                statusCode: 200,
                success: true,
                message: 'Record updated Successfully'
            });
        }
    });
});
app.post('/resetpassword', (req, res) => {
    console.log(req.body);
    res.send(req.body);
    // let rollno : number = req.body.rollno;
    // let emailid : string = req.body.emailid;
    // let password :string = req.body.password;
    // let confirmpassword : string = req.body.confirmpass;
    // console.log(rollno, emailid, password, confirmpassword);
});
app.listen(PORT, () => {
    console.log(`Server is running on PORT : ${PORT}`);
});
