var express = require('express');
var path = require('path');
var router = express.Router();
router.get('/myprofile', function (req, res) {
    req.params.dbemail;
    res.sendFile(path.join(__dirname, '../public/stprofile.html'));
    // res.url = res.url + "/myprofile";
});
module.exports = router;
