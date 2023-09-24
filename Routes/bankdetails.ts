const express = require('express');
const path = require('path');
const router = express.Router();

router.get('/admin/bankdetails', (req: any, res:any)=>{
    res.sendFile(path.join(__dirname, "../public/bankdetailsUi.html"))
})

module.exports = router;