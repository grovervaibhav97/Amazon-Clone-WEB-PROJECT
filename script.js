// ===================== 1. SEARCH FEATURE =====================
const searchBtn = document.querySelector(".search-icon button");
const searchInput = document.querySelector(".nav-input");

searchBtn.addEventListener("click", () => {
    if(searchInput.value.trim() === ""){
        alert("Please type something to search!");
    } else {
        alert("You searched for: " + searchInput.value);
    }
});


// ===================== 2. MENU TOGGLE =====================
const menuBtn = document.getElementById("menu1");
const panelOps = document.querySelector(".panel-ops");

menuBtn.addEventListener("click", () => {
    panelOps.classList.toggle("show-panel");
});


// ===================== 3. CART COUNTER =====================
let cartValue = 0;
const cartIcon = document.getElementById("Cart");

cartIcon.addEventListener("click", () => {
    cartValue++;
    cartIcon.innerHTML = `🛒(${cartValue})`;
});


// ===================== 4. DARK MODE BUTTON =====================
const darkBtn = document.createElement("button");

darkBtn.innerText = "Dark Mode";
darkBtn.style.padding = "8px 15px";
darkBtn.style.cursor = "pointer";
darkBtn.style.margin = "10px";
darkBtn.style.borderRadius = "5px";

// Add the button at the top of the page
document.body.prepend(darkBtn);

darkBtn.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");

    if(document.body.classList.contains("dark-mode")){
        darkBtn.innerText = "Light Mode";
    } else {
        darkBtn.innerText = "Dark Mode";
    }
});


// ===================== 5. HERO SLIDESHOW =====================
const hero = document.querySelector(".hero");

const heroImages = [
    "url('https://images-eu.ssl-images-amazon.com/images/G/31/img25/Media/PC_Hero_3000x1200_Asin-toys-2x._CB547414496_.jpg')",
    "url('https://m.media-amazon.com/images/I/71Ie3JXGfVL._SX3000_.jpg')",
    "url('https://m.media-amazon.com/images/I/71tIrZqybrL._SX3000_.jpg')",
];

let index = 0;

setInterval(() => {
    index = (index + 1) % heroImages.length;
    hero.style.backgroundImage = heroImages[index];
}, 3000);
