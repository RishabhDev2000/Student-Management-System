var express = require('express');
var path = require('path');
var router = express.Router();
router.get('/dashboard/:dbemail', function (req, res) {
    req.params.dbemail;
    res.sendFile(path.join(__dirname, '../public/Dashboard.html'));
});
module.exports = router;
