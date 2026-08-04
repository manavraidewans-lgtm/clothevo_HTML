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




// PRODUCT POPUP //


const cards = document.querySelectorAll(".trend-card");

const popup = document.getElementById("overside-pop");
const closePopup = document.getElementById("close");

const popupImage = document.getElementById("popupImage");
const popupTitle = document.getElementById("popupTitle");
const popupPrice = document.getElementById("popupPrice");
const popupDescription = document.getElementById("popupDescription");

cards.forEach(card => {

    card.addEventListener("click", () => {

        popupImage.src = card.dataset.image;
        popupTitle.innerText = card.dataset.name;
        popupPrice.innerText = card.dataset.price;
        popupDescription.innerText = card.dataset.description;

        popup.style.display = "flex";

    });

});

closePopup.addEventListener("click", () => {
    popup.style.display = "none";
});

popup.addEventListener("click", (e) => {

    if(e.target === popup){
        popup.style.display = "none";
    }

});


