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
    window.location.href = "Pages/favourites.html";
}



// cart //

function goToCart() {
    window.location.href = "Pages/cart.html";
}







// hover search
const searchBtn = document.getElementById("searchBtn");
const searchInput = document.getElementById("searchInp");

searchBtn.addEventListener("mouseenter", () => {
    searchInput.classList.add("active");
});

searchBtn.addEventListener("mouseleave", () => {
    searchInput.classList.remove("active");
});






// collection //
function goTOCollection() {
    window.location.href = "Pages/shop.html";
}


// trend //
function trend() {
    window.location.href = "#trending";
}



// trend - oversize //

const card = document.getElementById("oversize");
const popup = document.getElementById("overside-pop");
const popupImg = document.getElementById("popup-img");
const closeBtn = document.getElementById("close");

// Open Popup
card.addEventListener("click", () => {
    const img = card.querySelector("img");

    popup.style.display = "flex";
    popupImg.src = img.src;
});

// Close Button
closeBtn.addEventListener("click", () => {
    popup.style.display = "none";
});

// Close when clicking outside image
popup.addEventListener("click", (e) => {
    if(e.target === popup){
        popup.style.display = "none";
    }
});