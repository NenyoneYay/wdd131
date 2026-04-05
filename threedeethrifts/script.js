//Declare parameters

let cartButton = document.querySelector('#cart-button');
let buyButton = document.querySelector('.buy-button');
var cartWindow = document.getElementById('cart-box');
let cartHidden = true;
let checkoutButton = document.getElementById('checkout-button');
let productContainer = document.querySelector('#product-container');
let clearButton = document.getElementById('clear-cart');
let cartContents = document.getElementById('cart-contents');

const products = [
    {
        id: 1,
        title: 'Barbarian',
        description: 'This strong warrior is ready to bash skulls at your DnD table!', 
        price: 14.99,
        salePrice: 10.99,
        imgSrc: 'images/barbarian.jpg', 
        imgAlt: 'A resin barbarian',
        tags: ['resin', 'TTRPG', 'miniature'], 
        onSale: 1
    }, 
    {
        id: 2,
        title: 'Iguaneon',
        description: 'Perfect for a boss fight or as a fun painting project, the Iguaneon brings its grace to the tabletop!', 
        price: 12.99,
        salePrice: 8.99,
        imgSrc: 'images/gecko.jpg', 
        imgAlt: 'A filament gecko monster with six legs',
        tags: ['filament', 'TTRPG', 'miniature'],
        onSale: 0
    }, 
    {
        id: 3,
        title: 'Spike Demon',
        description: 'Straight out of the Nine Circles of Tartarus, this incredibly detailed monster will awe your group', 
        price: 19.99,
        salePrice: 13.99, 
        imgSrc: 'images/monster.jpg', 
        imgAlt: 'A menacing spike demon made of resin',
        tags: ['resin', 'TTRPG', 'miniature'],
        onSale: 1
    }, 
    {
        id: 4,
        title: 'Dwarf',
        description: 'A hardy old adventurer who has put away his axe in exchange for a walking stick and a cob pipe',
        price: 12.99,
        salePrice: 10.99,
        imgSrc: 'images/dwarf.jpg', 
        imgAlt: 'A 3d printed model of a dwarf',
        tags: ['resin', 'TTRPG', 'miniature'],
        onSale: 0
    },
    {
        id: 5,
        title: 'Chess set',
        description: 'A full printed chess set, 1 copy of each piece pictured', 
        price: 39.99,
        salePrice: 35.99,
        imgSrc: 'images/chess.png', 
        imgAlt: 'A resin chess set',
        tags: ['resin', 'chess', 'miniature'], 
        onSale: 0
    }
]

updateCart();

clearButton.addEventListener('click', clearCart);
function clearCart() {
    localStorage.clear();
    updateCart();
    cartContents.innerHTML = ``;
}
//Add event listeners to buttons
checkoutButton.addEventListener('click', beginCheckout);

function beginCheckout(){
    window.location.href = 'checkout.html';
}

cartButton.addEventListener('click', openCartWindow);
productContainer.addEventListener('click', (e) => {
    if (e.target.classList.contains('buy-button')) {
        const index = e.target.dataset.index;
        addToCart(products[index]);
        updateCart();
    }
});

function openCartWindow(){ //Update cart, and toggle visibility of the cart window
    // updateCart();
    if (cartHidden == true) {
        cartWindow.classList.remove("hidden");
        cartHidden = false;
    } else {
        cartWindow.classList.add("hidden");
        cartHidden = true;
    }
}

function updateCart() { //Refresh what items are in the cart and display them in the cart window with subtotal
    let subtotal = 0;
    
    let subtotalHTML = document.getElementById('subtotal-text');
    cartContents.innerHTML = ``; //Step 1: Clear out cart area
    subtotalHTML.innerHTML = ``;
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    let cartLength = cart.length;
    cart.forEach(displayItem); //For every item in the cart, render it on a new line
    for (i=0; i<cartLength; i++) {
        if (cart[i].onSale){
            subtotal += cart[i].salePrice;
        } else {
        subtotal += cart[i].price;
        }
    }
    localStorage.setItem("cart", JSON.stringify(cart));
    subtotalHTML.innerHTML = `Subtotal: $${subtotal}`;
    
}

function displayItem(item) {
    let itemHTML = itemTemplate(item);
    cartContents.innerHTML += itemHTML;
}
function itemTemplate(item) {
    let displayPrice;
    if (item.onSale){
        displayPrice = `<s>${item.price}</s> $${item.salePrice}`;
    } else {
        displayPrice = item.price;
    }
    return `
    <div class="item-summary">
        <p>${item.title}</p>
        <p>1</p>
        <p>$${displayPrice}</p>
    </div>
    `
}

function addToCart(item) { //Add an item to cart when button is pressed
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    cart.push(item);
    localStorage.setItem("cart", JSON.stringify(cart));
}

function productTemplate(product, index) {//Template used when rendering product
    let displayPrice;
    if (product.onSale){
        displayPrice = `<s>${product.price}</s> $${product.salePrice}`;
    } else {
        displayPrice = product.price;
    }
    return `
        <div class="product-box">
            <img class="product-img" src="${product.imgSrc}" alt="${product.imgAlt}">
            <h3>${product.title}</h3>
            <p class="description">${product.description}</p>
            <p class="price">Price: $${displayPrice}</p>
            <button class="buy-button" data-index="${index}">Add to Cart</button>
        </div>
    `
}
function renderProduct(product, index) { //Add the HTML to the main page for a product
    let html = productTemplate(product, index);
    productContainer.innerHTML += html;
}

function init() {
    products.forEach((product, index) => renderProduct(product, index));
}
init();