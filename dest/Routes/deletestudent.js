"use strict";
const express = require('express');
const path = require('path');
const router = express.Router();
router.get('/admin/deleteStudent', (req, res) => {
    res.sendFile(path.join(__dirname, "../public/deleteStUi.html"));
});
module.exports = router;
