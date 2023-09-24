const express = require('express');
const path = require('path');
const router = express.Router();

router.get('/admin/updateAcademic', (req: any, res:any)=>{
    res.sendFile(path.join(__dirname, "../public/updateAcDataUi.html"))
})

module.exports = router;