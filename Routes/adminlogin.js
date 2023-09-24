var express = require('express');
var path = require('path');
var router = express.Router();
router.get('/admin', function (req, res) {
    res.sendFile(path.join(__dirname, "../public/adminUi.html"));
});
module.exports = router;
