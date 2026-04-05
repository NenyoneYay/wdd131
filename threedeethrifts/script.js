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
        description: 'Testing', 
        price: 12.99,
        salePrice: 10.99,
        imgSrc: 'images/barbarian.jpg', 
        imgAlt: 'A resin barbarian',
        tags: ['resin', 'TTRPG', 'miniature'], 
        onSale: 1
    }, 
    {
        id: 2,
        title: 'Gecko monster',
        description: '', 
        price: 12.99,
        salePrice: 10.99,
        imgSrc: 'images/gecko.jpg', 
        imgAlt: 'A filament gecko monster with six legs',
        tags: ['filament', 'TTRPG', 'miniature'],
        onSale: 0
    }, 
    {
        id: 3,
        title: 'Spike Demon',
        description: '', 
        price: 12.99,
        salePrice: 10.99, 
        imgSrc: 'images/monster.jpg', 
        imgAlt: 'A menacing spike demon made of resin',
        tags: ['resin', 'TTRPG', 'miniature'],
        onSale: 0
    }, 
    {
        id: 4,
        title: 'Nidoran',
        description: '', 
        price: 12.99,
        salePrice: 10.99,
        imgSrc: 'images/nidoran.jpg', 
        imgAlt: 'A cute Pokemon made of resin',
        tags: ['resin', 'pokemon', 'toy'], 
        onSale: 0
    }, 
    {
        id: 5,
        title: 'Dwarf',
        description: '',
        price: 12.99,
        salePrice: 10.99,
        imgSrc: 'images/dwarf.jpg', 
        imgAlt: 'A 3d printed model of a dwarf',
        tags: ['resin', 'TTRPG', 'miniature'],
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
        console.log("Testing");
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
    console.log("TESTING: Added to cart");
    // console.log(item);
    //TODO: updateCart();
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

// addToCart(products[0])
// confirm("Testing");