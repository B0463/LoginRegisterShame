eyeState = false;
function pressPassEye() {
    eyeState = !eyeState;
    if(eyeState) {
        window.document.getElementsByClassName("input-pass")[0].type = "text";
        window.document.getElementsByClassName("pass-img")[0].style.backgroundColor = "#aaaaaa";
    }
    else {
        window.document.getElementsByClassName("input-pass")[0].type = "password";
        window.document.getElementsByClassName("pass-img")[0].style.backgroundColor = "#dddddd";
    }
}