"use strict";
const express = require('express');
const conn = require('../conn');
const router = express.Router();
router.get('/conn', (req, res) => {
    res.sendFile(conn);
});
module.exports = router;
