var username = document.getElementById("userId");
var email = document.getElementById("emailId");
var checkBox = document.getElementById("checkId")



function saveData() {
    if (checkBox.checked) {
        localStorage.setItem("username", username.value);              //set
        localStorage.email = email.value;
    }
    else {
        localStorage.clear();
    }
}
window.onload=function(){
    username.value=localStorage.getItem("username");
    email.value=localStorage.getItem("email")
}
