'use strict';

const form = document.getElementById('form');
const inputEmail = document.getElementById('email-input');
const errorMessage = document.querySelector('.error-message');
const emailVal = document.querySelector('.email-val');
const signUp = document.querySelector('.sign-up-sec');
const success = document.querySelector('.success-sec');
const disMiss = document.querySelector('.btn-dismiss');

form.addEventListener('submit',(e)=>{
  e.preventDefault();
  if(!inputEmail.value){
    errorMessage.textContent = `Can't be Empty`;
    form.classList.add('error');
  }else {
    errorMessage.textContent = ``;
    form.classList.remove('error');
    if(!isEmail(inputEmail.value)){
      errorMessage.textContent = `Valid Email Required`;
      form.classList.add('error');

    }else{
      form.classList.remove('error');
      emailVal.textContent = inputEmail.value;
      signUp.classList.add('hidden');
      success.classList.remove('hidden');
    }
  }
}
);

disMiss.addEventListener('click',()=>{
  inputEmail.value = '';
  signUp.classList.remove('hidden');
  success.classList.add('hidden');
})

function isEmail(email) { 
  return /^((([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+(\.([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+)*)|((\x22)((((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(([\x01-\x08\x0b\x0c\x0e-\x1f\x7f]|\x21|[\x23-\x5b]|[\x5d-\x7e]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(\\([\x01-\x09\x0b\x0c\x0d-\x7f]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))))*(((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(\x22)))@((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))$/i.test(email);
} 
