'use strict'
const submitBtn = document.getElementById('submitBtn');
const email = document.getElementById('email');
const errMsg = document.getElementById('errMsg');
const fname = document.getElementById('fName');
const lname = document.getElementById('lName');
const phone = document.getElementById('phone');
const comments = document.getElementById('comments');
const thanks = document.getElementById('thanks');


function validateEmail(inputText)
{
    let mailFormat = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    if(inputText.match(mailFormat)){
        //emailError.innerHTML = 'Thank you!';
        email.value = '';
        fname.value = '';
        lname.value = '';
        phone.value = '';
        comments.value = '';
        thanks.innerHTML = 'Thank you'
        return true;
        
	  }else {
        email.value = '';
        email.placeholder = 'This is not a valid email'; 
        email.focus();
        return false;
      }
}

submitBtn.addEventListener('click', function(){
    let passEmail = email.value;
    validateEmail(passEmail);
});