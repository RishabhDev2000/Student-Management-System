var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var _this = this;
var express = require('express');
var fs = require('fs');
var session = require('express-session');
var path = require('path');
var url = require('url');
var bodyparser = require('body-parser');
var bcrypt = require('bcrypt');
var dotenv = require('dotenv');
var conn = require('./conn');
var jwt = require('jsonwebtoken');
var app = express();
var PORT = 3000;
app.use(session({
    secret: 'key',
    resave: false,
    saveUninitialized: false
}));
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
app.get('/dashboard/:dbemail', verifytoken, require('./Routes/dashboard'));
app.get('/myprofile', require('./Routes/myprofile'));
function verifytoken(req, res, next) {
    //  console.log('token : ',req.header.token);
    if (req.header.token) {
        next();
    }
    else if (req.header.token === null || req.header.token === undefined) {
        res.redirect('/home');
        res.status(404).send('No token assigned');
    }
}
app.post('/studentRegister', function (req, res) {
    console.log(req.body);
    req.session.isAuth = true;
    console.log(req.session);
    var rollno = Math.floor(Math.random() * (10000 - 1 + 1)) + 1;
    var name = req.body.studentname;
    var standard = req.body.standard;
    var father = req.body.fathername;
    var mother = req.body.mothername;
    var dob = req.body.dob;
    var mobileno = req.body.mobileno;
    var country = req.body.country;
    var state = req.body.state;
    var pincode = req.body.pincode;
    var studentemail = req.body.studentemail;
    var password = req.body.password;
    var confirmpassword = req.body.confirmpassword;
    var gender = req.body.gender;
    var marks = 0;
    var percentage = 0;
    var grade = ' ';
    bcrypt.genSalt(10, function (err, salt) { return __awaiter(_this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, bcrypt.hash(password, salt, function (err, hash) {
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
                                console.log("Confirm Password is not same as Entered Password.");
                            }
                            else {
                                var query = "INSERT INTO STUDENTS VALUES(?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)";
                                conn.query(query, [rollno, name, standard, father, mother, dob, country, state, pincode, studentemail, hash, marks, percentage, grade, gender, mobileno], function (err, result) {
                                    if (err) {
                                        console.log(err);
                                    }
                                    else {
                                        console.log(result.insertId);
                                        // alertbox(`Student Registered Successfully!! Your Roll No. : ${rollno}`);
                                        console.log("1 Record Inserted Successfully!!!");
                                        res.redirect('/student/login');
                                        console.log(hash);
                                    }
                                });
                            }
                        }
                    })];
                case 1:
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    }); });
});
app.post('/student/login', function (req, res) {
    // console.log(req.body);
    var email = req.body.email;
    var password = req.body.password;
    if (email && password) {
        var query = "SELECT * FROM STUDENTS WHERE STUDENT_EMAIL = ?";
        conn.query(query, [email], function (err, result) { return __awaiter(_this, void 0, void 0, function () {
            var dbemail_1, dbpass, dbroll, user;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (err) {
                            console.log(err);
                            res.send({
                                success: false,
                                statusCode: 400,
                                data: err
                            });
                            return [2 /*return*/];
                        }
                        if (result.length == 0) {
                            console.log("User Not Registered Kindly Register Yourself!!");
                        }
                        if (!(result.length > 0)) return [3 /*break*/, 2];
                        dbemail_1 = result[0].STUDENT_EMAIL;
                        dbpass = result[0].PASSWORD;
                        dbroll = result[0].ROLLNO;
                        user = {
                            email: dbemail_1,
                            password: dbpass,
                            rollno: dbroll
                        };
                        return [4 /*yield*/, bcrypt.compare(password, dbpass)];
                    case 1:
                        if (_a.sent()) {
                            req.params.dbemail = dbemail_1;
                            jwt.sign(user, process.env.TOKEN_KEY, { expiresIn: '30s' }, function (err, token) {
                                console.log("Welcome to the Profile");
                                // console.log(`Token : ${token}`);    
                                // console.log(req.headers);
                                req.header.token = token;
                                res.redirect("/dashboard/".concat(dbemail_1));
                                res.status(200);
                            });
                        }
                        else {
                            console.log("Incorrect Password Please Try Again!!!");
                        }
                        _a.label = 2;
                    case 2: return [2 /*return*/];
                }
            });
        }); });
    }
});
app.get('/logout', function (req, res) {
    req.header = null;
    res.header.token = null;
    console.log("Logout Successfully from the account.");
    res.redirect('/home');
});
app.post('/admin/deleteStudent', function (req, res) {
    var rollno = parseInt(req.body.rollno);
    var email = req.body.emailid;
    console.log(req.body);
    var searchquery = "SELECT * FROM STUDENTS WHERE ROLLNO = ? AND STUDENT_EMAIL = ?";
    conn.query(searchquery, [rollno, email], function (err, result) {
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
            console.log("RollNo. ".concat(rollno, " not present in the Database"));
        }
        else {
            var deletequery = "DELETE FROM STUDENTS WHERE ROLLNO = ? AND STUDENT_EMAIL = ?";
            conn.query(deletequery, [rollno, email], function (err, result) {
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
                    console.log("Record Erased Successfully from the Database");
                }
            });
        }
    });
});
app.post('/admin/feedetails', function (req, res) {
    console.log(req.body);
    var rollno = req.body.rollno;
    var admissionyear = req.body.year;
    var receiptno = req.body.receiptno;
    var admissionno = req.body.admissionno;
    var studentname = req.body.studentname;
    var feeamount = req.body.feeamount;
    var feedate = req.body.depositedate;
    var feestatus = "";
    if (req.body.feestatus == 1) {
        feestatus = 'SUBMITTED';
    }
    if (req.body.feestatus == 2) {
        feestatus = 'PENDING';
    }
    var query = "INSERT INTO FEE_RECORD VALUES(?,?,?,?,?,?,?,?)";
    conn.query(query, [studentname, receiptno, admissionno, admissionyear, feedate, feestatus, feeamount, rollno], function (err, result) {
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
            console.log("1 Record Inserted Successfully!!!");
        }
    });
});
app.post('/admin/updateAcademic', function (req, res) {
    // console.log(req.body);
    var rollno = req.body.rollno;
    var emailid = req.body.emailid;
    var totalmarks = req.body.totalmarks;
    var obtainedmarks = req.body.obtainedmarks;
    var percentage = (obtainedmarks / totalmarks) * 100;
    req.body.percentage = percentage;
    var grade;
    // console.log(req.body);
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
    // res.json({
    //     grade : grade,
    //     percentage : percentage
    // });
    req.body.grade = grade;
    req.body.percentage = percentage;
    console.log(req.body);
    var query = "UPDATE STUDENTS SET PERCENTAGE = ? , MARKS = ? , GRADE = ? WHERE ROLLNO = ?";
    conn.query(query, [percentage, obtainedmarks, grade, rollno], function (err, result) {
        if (err) {
            console.log(err);
            res.send({
                statusCode: 500,
                success: false,
                message: 'Error Occured in Database Connection'
            });
        }
        else {
            console.log("Record updated Successfull for Roll No. : ".concat(rollno));
        }
    });
});
app.post('/resetpassword', function (req, res) {
    var rollno = req.body.rollno;
    var emailid = req.body.emailid;
    var password = req.body.password;
    var confirmpassword = req.body.confirmpass;
    if (password != confirmpassword) {
        console.log("Confirm Password is not same as entered Password.....");
    }
    else {
        bcrypt.genSalt(10, function (err, salt) { return __awaiter(_this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, bcrypt.hash(password, salt, function (err, hash) {
                            var query = "UPDATE STUDENTS SET PASSWORD = ? WHERE ROLLNO = ? AND STUDENT_EMAIL = ?";
                            conn.query(query, [hash, rollno, emailid], function (err, result) {
                                if (err) {
                                    console.log(err);
                                    res.send({ err: 'Some Error Occured' });
                                }
                                else {
                                    console.log("Password updated Successfully");
                                }
                            });
                        })];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        }); });
    }
});
app.listen(PORT, function () {
    console.log("Server is running on PORT : ".concat(PORT));
});
