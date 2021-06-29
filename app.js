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