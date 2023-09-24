var express = require('express');
var conn = require('../conn');
var router = express.Router();
router.get('/conn', function (req, res) {
    res.sendFile(conn);
});
module.exports = router;
