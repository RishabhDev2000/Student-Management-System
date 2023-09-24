const express = require('express');
const conn = require('../conn');
const router = express.Router();

router.get('/conn', (req: any, res:any)=>{
    res.sendFile(conn);
})

module.exports = router;