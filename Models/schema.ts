const mongoose = require('mongoose');

const studentSchema = mongoose.Schema({
    rollno : {
        type: Number,
        required: true,
        max : 5
    },
    name : {
        type: String,
        required: true,
        max : 50
    },
    standard : {
        type: String,
        required : true,
        max : 50
    },
    fathername : {
        type: String,
        required: true,
        max : 50
    },
    mothername : {
        type: String,
        required: true,
        max : 50
    },
    dob : {
        type : Date,
        required : true,
        min : '1900-01-01',
        max : '2099-12-31'
    },
    country : {
        type : String,
        required : true,
        max : 100
    },
    state : {
        type : String,
        required : true,
        max : 100
    },
    pincode : {
        type : Number,
        required : true,
        min : 6,
        max : 6
    },
    student_email : {
        type : String,
        required : true,
        max : 100
    },
    password : {
        type : String,
        required : true,
        max : 256
    },
    marks : {
        type : Number,
        required : true,
        default : 0
    },
    percentage : {
        type : Number,
        required : true,
        default : 0
    },
    grade : {
        type : String,
        required : true,
        default : ''
    },
    gender : [
        { 
            male : {
                type : String,
                required : true
            },
            female : {
                type : String,
                required : true
            }
        }
    ],
    parents_number : {
        type : Number,
        required : true,
        max : 10
    }
});

module.exports = mongoose.model('student', studentSchema);
