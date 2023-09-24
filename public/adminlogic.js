function getOption(){
        
        itemmenu = document.querySelector('#menu');
        selectedmenu = itemmenu.value;
        console.log(selectedmenu);
        if(selectedmenu == "Fee Details"){
      
         location.assign(document.URL.concat('/feedetails'));
        }
        if(selectedmenu == "Academic Data"){
            document.location.replace(document.URL.concat('/updateAcademic'));
        }
        if(selectedmenu == "Remove"){
            document.location.replace(document.URL.concat('/deleteStudent'));
        }
}

function validate(){
    key = document.querySelector('#key');
    if(key.value == 5768){
        getOption();
    }
    else if(key.value != 5768){
        alert('Please Enter correct Key');
    }

}
