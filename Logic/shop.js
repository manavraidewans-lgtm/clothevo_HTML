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
    image: "https://claura.in/cdn/shop/files/drs-52-pink_1.jpg?v=1731140171"
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
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTziRGUHi9UlVQuk67wzfCkw_SoRgZP21p33-Fe7CCiURWC3qkIOPUCZ-Y&s=10"
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
    image: "https://5.imimg.com/data5/ECOM/Default/2024/1/374427697/KO/GL/PU/155907656/08-07-202300047-500x500.jpg"
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
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRhZkAVQafx6ZLiMdpKWzvr8z_5-N4L0GPa3IiUw_ULIla9c6n_Exq2ISk_&s=10"
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
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT14-mCWlLRxZvjJNbIvyTNZ5AtMCAI-lw42RxhQ3utOwknwNkBFe4_jMsU&s=10"
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
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSVuM_KITjsIfTYgAy7dRNvndal2KnGY1pr-ekPLuryJWWVOXU44NxS6f01&s=10"
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
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRV_1DfgxSsavjU68oOEudnhav8BxOFN3iFXsWX3z5x-Sa8EOONwalrxxyR&s=10"
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
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJ8cIL2VzPBIqekeX_TBfHn6hCnY50g301r7n-b8T6vJ-bWTdIs0UZ1F0&s=10"
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
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSvSjwvYyKhRvpuxYFVRa8vJpAgCsCdC55cWU3gzTLmxg&s"
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
    image: "https://levi.in/cdn/shop/files/000FW0002_01_Styleshot_86969d00-12cb-4678-8fd1-1fde3dad2dfd.jpg?v=1743419109"
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
    image: "https://img.tatacliq.com/images/i27//437Wx649H/MP000000028338033_437Wx649H_202509161051461.jpeg"
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
    image: "https://urturms.com/cdn/shop/files/06_d53a96e0-fafe-403c-b3c2-f5c1627ef0e4.jpg?v=1742463832&width=3840"
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
    image: "https://images.meesho.com/images/products/764597225/brq4l_512.webp?width=512"
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
    image: "https://m.media-amazon.com/images/I/51e2MYXCPhL._AC_UY1100_.jpg"
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
    image: "https://www.petitestudionyc.com/cdn/shop/files/W1196-2HarrietDouble-BreastedWoolCoat-Camel_6.jpg?v=1695665250"
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
    image: "https://5.imimg.com/data5/SELLER/Default/2026/7/624504199/EM/ZU/GZ/153718495/whatsapp-image-2026-07-11-at-7-16-58-pm-500x500.jpeg"
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
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_luIV-wA3dRM0dKJ-3lM07fFwWT7KQnJYOCWDq4oif_5xq3F5xTgQxUcO&s=10"
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
    image: "https://m.media-amazon.com/images/I/71b24zUhRyL._AC_UY1100_.jpg"
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
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSe3hUGEgZpfXtaiNJWsRM3u_qmsVgx5e4GLA0-0mJwQA&s"
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
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTVGtdDzEXJKvF32BNlqrIcO-1saQgS8mtXHVCqd60ehw&s"
  }
];



// show card //
const cardsOuter = document.querySelector(".cards-outer");

function displayProducts(arr){

    cardsOuter.innerHTML = "";

    arr.forEach(product=>{

        cardsOuter.innerHTML += `
        <div class="product-card" onclick="showProduct(${product.id})">

            <img src="${product.image}" alt="${product.name}">

            <div class="product-info">

                <h3>${product.name}</h3>

                <div class="wishlist" onclick="toggleWishlist(event,this)">
                <i class="ri-heart-line"></i>
                </div>

                <p class="product-brand">${product.brand}</p>

                <span class="product-type">
                    ${product.category} • ${product.type}
                </span>

                <div class="product-price">
                    <h2>₹${product.price}</h2>
                    <del>₹${product.oldPrice}</del>
                </div>

                <p>
                    ⭐ ${product.rating}
                    (${product.reviews})
                </p>

                <div class="product-bottom">

                    <span>
                        Stock : ${product.stock}
                    </span>

                    <button>
                        Add Cart
                    </button>

                </div>

            </div>

        </div>

        `;

    });

}

displayProducts(products);



// sort by //
const sortSelect = document.getElementById("sorting");

sortSelect.addEventListener("change", () => {

    let sortedProducts = [...products];

    if (sortSelect.value === "Low") {
        sortedProducts.sort((a, b) => a.price - b.price);
    }

    else if (sortSelect.value === "High") {
        sortedProducts.sort((a, b) => b.price - a.price);
    }

    // Featured (original order)
    displayProducts(sortedProducts);

});


// aside //
const men = document.getElementById("men");
const women = document.getElementById("women");
const uni = document.getElementById("uni");

const searchBar = document.getElementById("search-bar");
const sorting = document.getElementById("sorting");
const reset = document.getElementById("reset");

const categoryItems = document.querySelectorAll("#categoryList li");

let selectedCategory = "";

categoryItems.forEach(item => {

    item.addEventListener("click", () => {

        categoryItems.forEach(li => li.classList.remove("active"));

        if(selectedCategory === item.dataset.category){

            selectedCategory = "";

        }else{

            selectedCategory = item.dataset.category;
            item.classList.add("active");

        }

        updateProducts();

    });

});

function updateProducts(){

    let filtered = [...products];

    // SEARCH

    const text = searchBar.value.toLowerCase();

    if(text){

        filtered = filtered.filter(product =>

            product.name.toLowerCase().includes(text) ||

            product.type.toLowerCase().includes(text) ||

            product.brand.toLowerCase().includes(text)

        );

    }

    // GENDER

    if(men.checked || women.checked || uni.checked){

        filtered = filtered.filter(product =>

            (men.checked && product.category === "Men") ||

            (women.checked && product.category === "Women") ||

            (uni.checked && product.category === "Unisex")

        );

    }

    // CATEGORY

    if(selectedCategory){

        filtered = filtered.filter(product =>

            product.type === selectedCategory

        );

    }

    // SORT

    if(sorting.value === "Low"){

        filtered.sort((a,b)=>a.price-b.price);

    }

    else if(sorting.value === "High"){

        filtered.sort((a,b)=>b.price-a.price);

    }

    displayProducts(filtered);

}

// EVENTS

searchBar.addEventListener("input",updateProducts);

sorting.addEventListener("change",updateProducts);

men.addEventListener("change",updateProducts);

women.addEventListener("change",updateProducts);

uni.addEventListener("change",updateProducts);

// CLEAR BUTTON

reset.addEventListener("click",()=>{

    men.checked=false;
    women.checked=false;
    uni.checked=false;

    searchBar.value="";
    sorting.value="";

    selectedCategory="";

    categoryItems.forEach(li=>li.classList.remove("active"));

    updateProducts();

});

updateProducts();




// popup of the card //
const popup=document.getElementById("productPopup");

function showProduct(id){

    const product=products.find(p=>p.id===id);

    document.getElementById("popupImage").src=product.image;

    document.getElementById("popupName").innerText=product.name;

    document.getElementById("popupBrand").innerText=product.brand;

    document.getElementById("popupType").innerText=
        product.category+" • "+product.type;

    document.getElementById("popupPrice").innerText=
        "₹"+product.price;

    document.getElementById("popupOldPrice").innerText=
        "₹"+product.oldPrice;

    document.getElementById("popupRating").innerText=
        "⭐ "+product.rating+" ("+product.reviews+" Reviews)";

    document.getElementById("popupStock").innerText=
        "Stock : "+product.stock;

    document.getElementById("popupSizes").innerText=
        product.sizes.join(", ");

    document.getElementById("popupColors").innerText=
        product.colors.join(", ");

    popup.classList.add("show");

}

document.getElementById("popupClose").onclick=function(){

    popup.classList.remove("show");

}

popup.onclick=function(e){

    if(e.target===popup){

        popup.classList.remove("show");

    }

}


// for wishlist //
function toggleWishlist(event, heart){

    event.stopPropagation();

    heart.classList.toggle("active");

    const icon = heart.querySelector("i");

    if(heart.classList.contains("active")){
        icon.classList.remove("ri-heart-line");
        icon.classList.add("ri-heart-fill");
    }else{
        icon.classList.remove("ri-heart-fill");
        icon.classList.add("ri-heart-line");
    }

}