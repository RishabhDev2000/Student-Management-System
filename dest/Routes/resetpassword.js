"use strict";
const express = require('express');
const path = require('path');
const router = express.Router();
router.get('/resetpassword', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/stForgetPass.html'));
});
module.exports = router;
