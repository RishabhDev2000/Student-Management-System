
function task(){
    var name = document.getElementById('name');
    var standard = document.getElementById('standard');
    var father = document.getElementById('fathername');
    var dob = new Date(document.getElementById('dob'));
    var month = dob.getMonth();
    var year = dob.getFullYear();
    var day = dob.getDay();
    var mother = document.getElementById('mothername');
    var phone = parseInt(document.getElementById('mobileno'));
    var country = document.getElementById('country');
    var state = document.getElementById('state').toString();
    var pincode = parseInt(document.getElementById('pincode'));
    var studentemail = document.getElementById('studentemail');
    var password = document.getElementById('password').value;
    var confirmpassword = document.getElementById('confirmpassword').value;
    var gender = 'M';
    var rollno = Math.floor(Math.random() * (10000 - 1 + 1)) + 1;
    if(password !== confirmpassword){
        alert('Please Enter Confirm password as Entered Password!!!');
    }else{
        var finaldob = `${year}/${month}/${day}`;
        var query = `INSERT INTO STUDENTS VALUES(${rollno}, ${standard}, ${name},${father},${mother}, ${finaldob},${country},${state},${pincode},${studentemail},${password},0,0,' ', ${gender}, ${phone})`;
        
        // const conn = path.join(__dirname, '../conn');
        // conn.query(query, function (err, result) {
        //     if (err) {
        //         console.log(err);
        //     }
        //     else {
        //         console.log(result);
        //         console.log("1 Record Inserted Successfully!!!");
        //         alert("Student Refistered Successfully!!!");
        //     }
        // });
    }
}