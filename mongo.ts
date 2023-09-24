const express = require('express');
const mongoose = require('mongoose');
const User = require('./Models/schema');
const router = express.Router();

// const PORT = 5000;
// app.use(express.json());
mongoose.set('strictQuery', true);
mongoose.connect('mongodb+srv://root:root@cluster0.wsigdmq.mongodb.net/?retryWrites=true&w=majority',{ useNewUrlParser: true, useUnifiedTopology: true }, (err:any)=>{
    console.log('Connected to MongoDB Database');
});

router.post('/register', async (req : any, res : any) => {
    const newuser = new User({
        rollno: Math.round(Math.random() * 100 - 1 + 1),
        name: req.body.name,
        standard: req.body.standard,
        fathername: req.body.fathername,
        mothername: req.body.mothername,
        dob : req.body.dob,
        country : req.body.country,
        state : req.body.state,
        pincode : req.body.pincode,
        student_email : req.body.student_email,
        password : req.body.password,
        gender : req.body.gender,
        parents_number : req.body.parents_number
    });

    try {
        const savedstudent = await newuser;
    } catch (error) {
        res.status(404).send(error);
    }

});


// app.listen(PORT, ()=>{
//     console.log(`Server is Running on PORT : ${PORT}`);
// }); 