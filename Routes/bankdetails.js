var express = require('express');
var path = require('path');
var router = express.Router();
router.get('/admin/bankdetails', function (req, res) {
    res.sendFile(path.join(__dirname, "../public/bankdetailsUi.html"));
});
module.exports = router;
