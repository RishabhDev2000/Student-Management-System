const express = require('express');
const path = require('path');
const router = express.Router();

router.get('/admin/feedetails', (req: any, res:any)=>{
    res.sendFile(path.join(__dirname, "../public/feedetailsUi.html"))
})

module.exports = router;