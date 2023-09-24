var express = require('express');
var path = require('path');
var router = express.Router();
router.get('/resetpassword', function (req, res) {
    res.sendFile(path.join(__dirname, '../public/stForgetPass.html'));
});
module.exports = router;
