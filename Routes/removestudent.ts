const express = require('express');
const path = require('path');
const router = express.Router();

router.get('/admin/removestudent', (req: any, res:any)=>{
    res.sendFile(path.join(__dirname, "../public/adminUI.html"))
})

module.exports = router;