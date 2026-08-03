// nav-icons //

const openLogin = document.getElementById("login-btn");
const closeLogin = document.getElementById("login-close");
const loginBox = document.getElementById("login-popup");

openLogin.addEventListener ( "click" , () => {
    loginBox.classList.add("open");
});

closeLogin.addEventListener("click" , () => {
    loginBox.classList.remove("open");
});

