var Menuitems = document.getElementById("Menuitems");

Menuitems.style.maxHeight ="0px";

function menutoggle(){
    if (Menuitems.style.maxHeight =="0px"){
        Menuitems.style.maxHeight ="200px";
    }
    else{
        Menuitems.style.maxHeight ="0px";
    }
}

var LoginForm = document.getElementById("LoginForm")
var RegForm = document.getElementById("RegForm")
var Indicator = document.getElementById("Indicator")

function register(){
    RegForm.style.transform = "translateX(0px)";
    LoginForm.style.transform = "translateX(0px)";
    Indicator.style.transform = "translateX(100px)";
}
function login(){
    RegForm.style.transform = "translateX(300px)";
    LoginForm.style.transform = "translateX(300px)";
    Indicator.style.transform = "translateX(0px)";
}

const isValidEmail = (email) => {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}
const isValidPhone = (phone) => {
    const re = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im;
    return re.test(String(phone).toLowerCase());
  };

const form = document.querySelector('form');
const thankYou = document.querySelector('.thank-you');
const nameInput = document.querySelector('input[name="name"]');
const emailInput = document.querySelector('input[name="email"]');
const phoneInput = document.querySelector('input[name="phone"]');
const messageInput = document.querySelector('textarea[name="message"]');

const inputs = [nameInput, emailInput, phoneInput, messageInput];
  
let isFormValid = false
let isValidationOn = false

function restElm(elm){
    elm.classList.remove('invalid');
    elm.nextElementSibling.classList.add("hidden");
};

function invalidateElm(elm){
    elm.classList.add('invalid');
    elm.nextElementSibling.classList.remove("hidden");
}

function validateInputs(){
    if(!isValidationOn) return;

    isFormValid = true;
    inputs.forEach(restElm);
     
    if(!nameInput.value){
         isFormValid = false;
         invalidateElm(nameInput);
      }

    if(!isValidEmail(emailInput.value)){
         isFormValid = false;
         invalidateElm(emailInput);
      }
    if(!isValidPhone(phoneInput.value)){
         isFormValid = false;
         invalidateElm(phoneInput);
      }
    if(!messageInput.value){
         isFormValid = false;
         invalidateElm(messageInput);
      }
  };

form.addEventListener('submit', (e) => {
      e.preventDefault();
      isValidationOn = true;
      validateInputs();
      if (isFormValid){
        form.remove();
        thankYou.classList.remove('hidden');
      }   
  });

inputs.forEach((input) => {
    input.addEventListener("input", () => {
        validateInputs();
    });
});

