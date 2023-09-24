const express = require('express');
const path = require('path');
const router = express.Router();

router.get('/myprofile', (req:any, res: any) => {
    req.params.dbemail;
    res.sendFile(path.join(__dirname, '../public/stprofile.html'));
    // res.url = res.url + "/myprofile";
});

module.exports = router;
