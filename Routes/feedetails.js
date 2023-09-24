var express = require('express');
var path = require('path');
var router = express.Router();
router.get('/admin/feedetails', function (req, res) {
    res.sendFile(path.join(__dirname, "../public/feedetailsUi.html"));
});
module.exports = router;
