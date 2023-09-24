var express = require('express');
var path = require('path');
var router = express.Router();
router.get('/admin/updateAcademic', function (req, res) {
    res.sendFile(path.join(__dirname, "../public/updateAcDataUi.html"));
});
module.exports = router;
