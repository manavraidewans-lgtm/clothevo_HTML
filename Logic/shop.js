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



// hover search
const searchBtn = document.getElementById("searchBtn");
const searchInput = document.getElementById("searchInp");

searchBtn.addEventListener("mouseenter", () => {
    searchInput.classList.add("active");
});

searchBtn.addEventListener("mouseleave", () => {
    searchInput.classList.remove("active");
});






// Products card //

const products = [

    // men //
  {
    id: 1,
    name: "Premium Black Hoodie",
    brand: "Clothevo",
    category: "Men",
    type: "Hoodie",
    price: 2499,
    oldPrice: 2999,
    rating: 4.8,
    reviews: 324,
    stock: 18,
    sizes: ["S", "M", "L", "XL"],
    colors: ["Black"],
    image: "https://londhegarments.in/cdn/shop/files/4M6A9702.jpg?v=1726135385&width=1080"
  },
  {
    id: 2,
    name: "Classic White T-Shirt",
    brand: "Clothevo",
    category: "Men",
    type: "T-Shirt",
    price: 999,
    oldPrice: 1299,
    rating: 4.6,
    reviews: 182,
    stock: 25,
    sizes: ["S", "M", "L", "XL"],
    colors: ["White"],
    image: "https://ramrajcotton.in/cdn/shop/collections/100_Cotton_White_Shirt.jpg?v=1782903206&width=500"
  },
  {
    id: 3,
    name: "Slim Fit Blue Jeans",
    brand: "Clothevo",
    category: "Men",
    type: "Jeans",
    price: 2299,
    oldPrice: 2799,
    rating: 4.7,
    reviews: 268,
    stock: 20,
    sizes: ["30", "32", "34", "36"],
    colors: ["Blue"],
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRIaEKYudhohkJaSYN8aN0L36dXezIdHd_wNiXI3djne2CE1OvLV4dl7dY&s=10"
  },
  {
    id: 4,
    name: "Denim Jacket",
    brand: "Clothevo",
    category: "Men",
    type: "Jacket",
    price: 3599,
    oldPrice: 4199,
    rating: 4.9,
    reviews: 411,
    stock: 12,
    sizes: ["M", "L", "XL"],
    colors: ["Blue"],
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT65m1AOnhf6YRumulfPCHzd6abEBATY4Q3Fbkpbyi6OiuI_OraIp4vsTo&s=10"
  },
  {
    id: 5,
    name: "Olive Cargo Pants",
    brand: "Clothevo",
    category: "Men",
    type: "Cargo",
    price: 1999,
    oldPrice: 2499,
    rating: 4.5,
    reviews: 176,
    stock: 16,
    sizes: ["30", "32", "34", "36"],
    colors: ["Olive"],
    image: "https://bornfreefashions.com/cdn/shop/files/002A5402_235ff6b6-69dd-46b8-8141-729b31e9806e.jpg?v=1773134508"
  },
  {
    id: 6,
    name: "Grey Sweatshirt",
    brand: "Clothevo",
    category: "Men",
    type: "Sweatshirt",
    price: 1799,
    oldPrice: 2199,
    rating: 4.7,
    reviews: 204,
    stock: 19,
    sizes: ["S", "M", "L", "XL"],
    colors: ["Grey"],
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTEaA5M-0KoCcbGCW_7qQWdemZkt9Y5aPKfu6XbfSArtg&s=10"
  },
  {
    id: 7,
    name: "Formal Blue Shirt",
    brand: "Clothevo",
    category: "Men",
    type: "Shirt",
    price: 1499,
    oldPrice: 1899,
    rating: 4.6,
    reviews: 155,
    stock: 30,
    sizes: ["S", "M", "L", "XL"],
    colors: ["Blue"],
    image: "https://images.meesho.com/images/products/672045788/jw1cb_512.webp?width=512"
  },
  {
    id: 8,
    name: "Black Leather Jacket",
    brand: "Clothevo",
    category: "Men",
    type: "Jacket",
    price: 5499,
    oldPrice: 6499,
    rating: 5.0,
    reviews: 522,
    stock: 8,
    sizes: ["M", "L", "XL"],
    colors: ["Black"],
    image: "https://m.media-amazon.com/images/I/81kZJ3hxyQL._AC_UY1100_.jpg"
  },
  {
    id: 9,
    name: "Beige Polo T-Shirt",
    brand: "Clothevo",
    category: "Men",
    type: "Polo",
    price: 1399,
    oldPrice: 1699,
    rating: 4.4,
    reviews: 147,
    stock: 21,
    sizes: ["S", "M", "L", "XL"],
    colors: ["Beige"],
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQBEhkKKLntWAFQTdAR-htCBAVv2ke-05mN7Tfbe8WNWQ&s"
  },
  {
    id: 10,
    name: "Winter Wool Coat",
    brand: "Clothevo",
    category: "Men",
    type: "Coat",
    price: 6999,
    oldPrice: 7999,
    rating: 4.9,
    reviews: 310,
    stock: 9,
    sizes: ["M", "L", "XL"],
    colors: ["Brown"],
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTvRopCtqhikQNOoAVmU_qCl4Co34iDUBfgqCcqyA49Ww&s"
  },

  {
    id: 11,
    name: "Oversized Black T-Shirt",
    brand: "Clothevo",
    category: "Men",
    type: "T-Shirt",
    price: 1199,
    oldPrice: 1499,
    rating: 4.7,
    reviews: 196,
    stock: 28,
    sizes: ["S", "M", "L", "XL"],
    colors: ["Black"],
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTi2tndLnERIGeHq0UE0uOxmPHxecIbEtiAKNglGwHgqA&s"
  },
  {
    id: 12,
    name: "Navy Blue Hoodie",
    brand: "Clothevo",
    category: "Men",
    type: "Hoodie",
    price: 2699,
    oldPrice: 3199,
    rating: 4.8,
    reviews: 243,
    stock: 17,
    sizes: ["S", "M", "L", "XL"],
    colors: ["Navy"],
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmDjYei8-OqRIZb2tveUW2frCCEI7fcqk6BLJ7XuE5jFIKGdSPhDIf4Yk&s=10"
  },
  {
    id: 13,
    name: "Casual Checked Shirt",
    brand: "Clothevo",
    category: "Men",
    type: "Shirt",
    price: 1599,
    oldPrice: 1999,
    rating: 4.5,
    reviews: 134,
    stock: 24,
    sizes: ["S", "M", "L", "XL"],
    colors: ["Red"],
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR7NpcCwAdnOii4ltYESKfJagSTB22R6ZsC1R4RUgMVm9mLpRDZVNcOlhHA&s=10"
  },
  {
    id: 14,
    name: "Ripped Blue Jeans",
    brand: "Clothevo",
    category: "Men",
    type: "Jeans",
    price: 2499,
    oldPrice: 2999,
    rating: 4.8,
    reviews: 287,
    stock: 14,
    sizes: ["30", "32", "34", "36"],
    colors: ["Blue"],
    image: "https://img.tatacliq.com/images/i22//437Wx649H/MP000000025567355_437Wx649H_202503050056221.jpeg"
  },
  {
    id: 15,
    name: "Black Joggers",
    brand: "Clothevo",
    category: "Men",
    type: "Joggers",
    price: 1699,
    oldPrice: 2099,
    rating: 4.6,
    reviews: 165,
    stock: 22,
    sizes: ["S", "M", "L", "XL"],
    colors: ["Black"],
    image: "https://images.meesho.com/images/products/1009016855/ih26p_512.webp?width=512"
  },
  {
    id: 16,
    name: "Varsity Bomber Jacket",
    brand: "Clothevo",
    category: "Men",
    type: "Jacket",
    price: 4299,
    oldPrice: 4999,
    rating: 4.9,
    reviews: 372,
    stock: 11,
    sizes: ["M", "L", "XL"],
    colors: ["Green"],
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQKe5BIbdmvvELAcMBJHhiMjlXDGUG4W2QX3X9DzDObRjIsuwlA7pNX1Iz5&s=10"
  },
  {
    id: 17,
    name: "Cotton Shorts",
    brand: "Clothevo",
    category: "Men",
    type: "Shorts",
    price: 999,
    oldPrice: 1299,
    rating: 4.4,
    reviews: 120,
    stock: 31,
    sizes: ["S", "M", "L", "XL"],
    colors: ["Grey"],
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQY0-w65JHNl-JJ1BYiekz7TWz-4cKSd9KipfoNZQK24A&s"
  },
  {
    id: 18,
    name: "Knitted Sweater",
    brand: "Clothevo",
    category: "Men",
    type: "Sweater",
    price: 2299,
    oldPrice: 2799,
    rating: 4.7,
    reviews: 189,
    stock: 18,
    sizes: ["S", "M", "L", "XL"],
    colors: ["Cream"],
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT7FmNu1c3uM8Gz1cN4zYWiaSA1FUcjFxLq0xiMeJW5lb1JR1R8vtYPfZg&s=10"
  },
  {
    id: 19,
    name: "Classic White Polo",
    brand: "Clothevo",
    category: "Men",
    type: "Polo",
    price: 1499,
    oldPrice: 1899,
    rating: 4.6,
    reviews: 174,
    stock: 26,
    sizes: ["S", "M", "L", "XL"],
    colors: ["White"],
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQejMHBM0lTd0MzLzXe01Oke0BJZgaZy7wFzTk4inkzmg&s"
  },
  {
    id: 20,
    name: "Premium Trench Coat",
    brand: "Clothevo",
    category: "Men",
    type: "Coat",
    price: 7499,
    oldPrice: 8499,
    rating: 5.0,
    reviews: 441,
    stock: 7,
    sizes: ["M", "L", "XL"],
    colors: ["Camel"],
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRkRvO3b0AJeQDy1iRUlfrLWlncA3TyujSGXAILuQx7RxXNMrGdTDZhIpM&s=10"
  },

  // women  //

  {
    id: 21,
    name: "Floral Summer Dress",
    brand: "Clothevo",
    category: "Women",
    type: "Dress",
    price: 2899,
    oldPrice: 3499,
    rating: 4.9,
    reviews: 412,
    stock: 14,
    sizes: ["XS", "S", "M", "L"],
    colors: ["Pink"],
    image: "./Assets/products/women/dress-floral-pink.jpg"
  },
  {
    id: 22,
    name: "Classic White Crop Top",
    brand: "Clothevo",
    category: "Women",
    type: "Top",
    price: 999,
    oldPrice: 1299,
    rating: 4.7,
    reviews: 218,
    stock: 25,
    sizes: ["XS", "S", "M", "L"],
    colors: ["White"],
    image: "./Assets/products/women/top-crop-white.jpg"
  },
  {
    id: 23,
    name: "High Waist Blue Jeans",
    brand: "Clothevo",
    category: "Women",
    type: "Jeans",
    price: 2399,
    oldPrice: 2899,
    rating: 4.8,
    reviews: 301,
    stock: 19,
    sizes: ["26", "28", "30", "32"],
    colors: ["Blue"],
    image: "./Assets/products/women/jeans-highwaist-blue.jpg"
  },
  {
    id: 24,
    name: "Beige Wool Coat",
    brand: "Clothevo",
    category: "Women",
    type: "Coat",
    price: 6299,
    oldPrice: 7299,
    rating: 4.9,
    reviews: 275,
    stock: 8,
    sizes: ["S", "M", "L"],
    colors: ["Beige"],
    image: "./Assets/products/women/coat-beige.jpg"
  },
  {
    id: 25,
    name: "Oversized Grey Hoodie",
    brand: "Clothevo",
    category: "Women",
    type: "Hoodie",
    price: 2499,
    oldPrice: 2999,
    rating: 4.8,
    reviews: 257,
    stock: 17,
    sizes: ["S", "M", "L", "XL"],
    colors: ["Grey"],
    image: "./Assets/products/women/hoodie-grey.jpg"
  },
  {
    id: 26,
    name: "Black Leather Jacket",
    brand: "Clothevo",
    category: "Women",
    type: "Jacket",
    price: 5599,
    oldPrice: 6499,
    rating: 5.0,
    reviews: 486,
    stock: 9,
    sizes: ["S", "M", "L"],
    colors: ["Black"],
    image: "./Assets/products/women/jacket-leather-black.jpg"
  },
  {
    id: 27,
    name: "Pleated Midi Skirt",
    brand: "Clothevo",
    category: "Women",
    type: "Skirt",
    price: 1899,
    oldPrice: 2399,
    rating: 4.6,
    reviews: 176,
    stock: 22,
    sizes: ["XS", "S", "M", "L"],
    colors: ["Brown"],
    image: "./Assets/products/women/skirt-midi-brown.jpg"
  },
  {
    id: 28,
    name: "Knitted Cream Sweater",
    brand: "Clothevo",
    category: "Women",
    type: "Sweater",
    price: 2199,
    oldPrice: 2699,
    rating: 4.7,
    reviews: 198,
    stock: 16,
    sizes: ["S", "M", "L"],
    colors: ["Cream"],
    image: "./Assets/products/women/sweater-cream.jpg"
  },
  {
    id: 29,
    name: "Blue Denim Shirt",
    brand: "Clothevo",
    category: "Women",
    type: "Shirt",
    price: 1699,
    oldPrice: 2099,
    rating: 4.5,
    reviews: 149,
    stock: 20,
    sizes: ["S", "M", "L"],
    colors: ["Blue"],
    image: "./Assets/products/women/shirt-denim-blue.jpg"
  },
  {
    id: 30,
    name: "Olive Cargo Pants",
    brand: "Clothevo",
    category: "Women",
    type: "Cargo",
    price: 2299,
    oldPrice: 2799,
    rating: 4.7,
    reviews: 224,
    stock: 18,
    sizes: ["26", "28", "30", "32"],
    colors: ["Olive"],
    image: "./Assets/products/women/cargo-olive.jpg"
  },
  {
    id: 31,
    name: "Elegant Black Maxi Dress",
    brand: "Clothevo",
    category: "Women",
    type: "Dress",
    price: 3499,
    oldPrice: 4199,
    rating: 4.9,
    reviews: 385,
    stock: 12,
    sizes: ["S", "M", "L", "XL"],
    colors: ["Black"],
    image: "./Assets/products/women/dress-maxi-black.jpg"
  },
  {
    id: 32,
    name: "Pink Oversized Hoodie",
    brand: "Clothevo",
    category: "Women",
    type: "Hoodie",
    price: 2599,
    oldPrice: 3099,
    rating: 4.8,
    reviews: 264,
    stock: 18,
    sizes: ["S", "M", "L", "XL"],
    colors: ["Pink"],
    image: "./Assets/products/women/hoodie-pink.jpg"
  },
  {
    id: 33,
    name: "Relaxed Fit White Shirt",
    brand: "Clothevo",
    category: "Women",
    type: "Shirt",
    price: 1699,
    oldPrice: 2099,
    rating: 4.6,
    reviews: 183,
    stock: 24,
    sizes: ["S", "M", "L"],
    colors: ["White"],
    image: "./Assets/products/women/shirt-white.jpg"
  },
  {
    id: 34,
    name: "Skinny Fit Blue Jeans",
    brand: "Clothevo",
    category: "Women",
    type: "Jeans",
    price: 2399,
    oldPrice: 2899,
    rating: 4.7,
    reviews: 276,
    stock: 20,
    sizes: ["26", "28", "30", "32"],
    colors: ["Blue"],
    image: "./Assets/products/women/jeans-skinny-blue.jpg"
  },
  {
    id: 35,
    name: "Camel Winter Coat",
    brand: "Clothevo",
    category: "Women",
    type: "Coat",
    price: 6999,
    oldPrice: 7999,
    rating: 5.0,
    reviews: 498,
    stock: 7,
    sizes: ["S", "M", "L"],
    colors: ["Camel"],
    image: "./Assets/products/women/coat-camel.jpg"
  },
  {
    id: 36,
    name: "Blue Denim Jacket",
    brand: "Clothevo",
    category: "Women",
    type: "Jacket",
    price: 3899,
    oldPrice: 4599,
    rating: 4.8,
    reviews: 245,
    stock: 14,
    sizes: ["S", "M", "L"],
    colors: ["Blue"],
    image: "./Assets/products/women/jacket-denim-blue.jpg"
  },
  {
    id: 37,
    name: "Knitted Beige Cardigan",
    brand: "Clothevo",
    category: "Women",
    type: "Cardigan",
    price: 2199,
    oldPrice: 2699,
    rating: 4.7,
    reviews: 194,
    stock: 16,
    sizes: ["S", "M", "L"],
    colors: ["Beige"],
    image: "./Assets/products/women/cardigan-beige.jpg"
  },
  {
    id: 38,
    name: "Black Wide Leg Trousers",
    brand: "Clothevo",
    category: "Women",
    type: "Trousers",
    price: 1999,
    oldPrice: 2499,
    rating: 4.6,
    reviews: 168,
    stock: 19,
    sizes: ["26", "28", "30", "32"],
    colors: ["Black"],
    image: "./Assets/products/women/trousers-black.jpg"
  },
  {
    id: 39,
    name: "Casual Graphic T-Shirt",
    brand: "Clothevo",
    category: "Women",
    type: "T-Shirt",
    price: 1099,
    oldPrice: 1399,
    rating: 4.5,
    reviews: 154,
    stock: 28,
    sizes: ["S", "M", "L", "XL"],
    colors: ["Lavender"],
    image: "./Assets/products/women/tshirt-graphic-lavender.jpg"
  },
  {
    id: 40,
    name: "Pleated Mini Skirt",
    brand: "Clothevo",
    category: "Women",
    type: "Skirt",
    price: 1799,
    oldPrice: 2199,
    rating: 4.7,
    reviews: 212,
    stock: 21,
    sizes: ["XS", "S", "M", "L"],
    colors: ["Black"],
    image: "./Assets/products/women/skirt-mini-black.jpg"
  }
];




