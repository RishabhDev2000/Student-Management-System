var express = require('express');
var conn = require('../conn');
var path = require('path');
var router = express.Router();
router.get('/admin', function (req, res) {
    res.sendFile(path.join(__dirname, "../public/adminUI.html"));
});
router.get('/admin/bankdetails', function (req, res) {
    res.sendFile(path.join(__dirname, "../public/bankdetailsUi.html"));
});
router.get('/conn', function (req, res) {
    res.sendFile(conn);
});
router.get('/dashboard/:dbemail', function (req, res) {
    req.params.dbemail;
    res.sendFile(path.join(__dirname, '../public/Dashboard.html'));
    var query = "SELECT * FROM STUDENTS WHERE STUDENT_EMAIL = ?";
    conn.query(query, [req.params.dbemail], function (err, result) {
        if (err) {
            throw err;
        }
        else {
            console.log(result);
        }
    });
});
router.get('/admin/deleteStudent', function (req, res) {
    res.sendFile(path.join(__dirname, "../public/deleteStUi.html"));
});
router.get('/admin/feedetails', function (req, res) {
    res.sendFile(path.join(__dirname, "../public/feedetailsUi.html"));
});
router.get('/home', function (req, res) {
    res.sendFile(path.join(__dirname, "../public/main.html"));
});
router.get('/resetpassword', function (req, res) {
    res.sendFile(path.join(__dirname, '../public/stForgetPass.html'));
});
module.exports = router;
