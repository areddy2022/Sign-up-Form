const confirmPasswordField = document.getElementById("confirm-password");
const passwordField = document.getElementById("password");

let password;
let confirmPassword;

passwordField.onblur = function() {
    password = passwordField.value;
}

confirmPasswordField.onblur = function() {
    confirmPassword = confirmPasswordField.value;
    if(password != confirmPassword){
        confirmPasswordField.setCustomValidity("Please enter matching passwords.");
    }
    else{
        confirmPassword.setCustomValidity("");
    }
}