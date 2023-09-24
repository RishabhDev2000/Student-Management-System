var express = require('express');
var path = require('path');
var router = express.Router();
router.get('/admin/deleteStudent', function (req, res) {
    res.sendFile(path.join(__dirname, "../public/deleteStUi.html"));
});
module.exports = router;
