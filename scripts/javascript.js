'use strict'
submitBtn = document.getElementById('submitBtn');
email = document.getElementById('email');

submitBtn.addEventListener('click', function(){
    validateEmail(email.value)
});


function validateEmail(inputText)
{
    let mailFormat = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    if(inputText.match(mailFormat))
    {
        alert("This is a valid email address");
        return true;
    }else {
        alert("Invalid email address!");
        return false;
      }
}
