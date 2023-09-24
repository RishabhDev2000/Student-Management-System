var express = require('express');
var path = require('path');
var router = express.Router();
router.get('/home', function (req, res) {
    res.sendFile(path.join(__dirname, "../public/main.html"));
});
module.exports = router;
