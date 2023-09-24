var express = require('express');
var path = require('path');
var router = express.Router();
router.get('/student/login', function (req, res) {
    res.sendFile(path.join(__dirname, "../public/stlogin.html"));
});
module.exports = router;
