const express = require('express');
const path = require('path');
const router = express.Router();

router.get('/student/login', (req: any, res:any)=>{
    res.sendFile(path.join(__dirname, "../public/stlogin.html"))
})

module.exports = router;