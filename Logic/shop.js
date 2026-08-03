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







// hamburger //
const hamburger = document.getElementById("hamburger");
const navLinks = document.getElementById("navLinks");

hamburger.addEventListener("click", () => {

    navLinks.classList.toggle("active");

    if(navLinks.classList.contains("active")){
        hamburger.innerHTML = '<i class="ri-close-line"></i>';
    }
    else{
        hamburger.innerHTML = '<i class="ri-menu-3-line"></i>';
    }

});

document.querySelectorAll("#navLinks a").forEach(link=>{

    link.addEventListener("click",()=>{

        navLinks.classList.remove("active");

        hamburger.innerHTML='<i class="ri-menu-3-line"></i>';

    });

});


// Favourites //

function goToFav() {
    window.location.href = "../Pages/favourites.html";
}

// cart //

function goToCart() {
    window.location.href = "../Pages/cart.html";
}

