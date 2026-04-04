let cartButton = document.querySelector('#cart-button');
let buyButton = document.querySelector('.buy-button');
var cartWindow = document.getElementById('cart-box');
let cartHidden = true;

let productContainer = document.querySelector('#product-container');

const products = [
    {
        id: 1,
        title: 'Barbarian',
        description: 'Testing', 
        price: '$12.99',
        salePrice: '$10.99',
        imgSrc: 'images/barbarian.jpg', 
        imgAlt: '',
        tags: ['resin', 'TTRPG', 'miniature'], 
        onSale: 0
    }, 
    {
        id: 2,
        title: 'Gecko monster',
        description: '', 
        price: '$12.99',
        salePrice: '$10.99',
        imgSrc: 'images/gecko.jpg', 
        imgAlt: '',
        tags: ['filament', 'TTRPG', 'miniature'],
        onSale: 0
    }, 
    {
        id: 3,
        title: 'Spike Demon',
        description: '', 
        price: '$12.99',
        salePrice: '$10.99', 
        imgSrc: 'images/monster.jpg', 
        imgAlt: '',
        tags: ['resin', 'TTRPG', 'miniature'],
        onSale: 0
    }, 
    {
        id: 4,
        title: 'Nidoran',
        description: '', 
        price: '$12.99',
        salePrice: '$10.99',
        imgSrc: 'images/nidoran.jpg', 
        imgAlt: '',
        tags: ['resin', 'pokemon', 'toy'], 
        onSale: 0
    }, 
    {
        id: 5,
        title: 'Dwarf',
        description: '',
        price: '$12.99',
        salePrice: '10.99',
        imgSrc: 'images/dwarf.jpg', 
        imgAlt: 'A 3d printed model of a dwarf',
        tags: ['resin', 'TTRPG', 'miniature'],
        onSale: 0
    }
]



cartButton.addEventListener('click', openCartWindow);
productContainer.addEventListener('click', (e) => {
    if (e.target.classList.contains('buy-button')) {
        const index = e.target.dataset.index;
        addToCart(products[index]);
    }
});


function openCartWindow(){
    //Update the cart
    if (cartHidden == true) {
        console.log("Testing");
        cartWindow.classList.remove("hidden");
        cartHidden = false;
    } else {
        cartWindow.classList.add("hidden");
        cartHidden = true;
    }

}


    // if (confirm ("Would you like to check out now?") == true) {
    //     let cart = JSON.parse(localStorage.getItem("cart")) || [];
    //     let cartLength = cart.length;
    //     // console.log(cartLength); TESTING
    //     // console.log("Testing: " + cart[0].title); TESTING
    //     // for (let i = 0; i < cartLength; i++) 
    //     // {
    //     //     console.log("TESTING: " + cart[i].title);
    //     // }
    //     cart.forEach()
    //     localStorage.setItem("cart", JSON.stringify(cart));
    //     window.location.href = "checkout.html";
    // };

function updateCart() {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    
}

function addToCart(item) {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    cart.push(item);
    localStorage.setItem("cart", JSON.stringify(cart));
    console.log("TESTING: Added to cart");
    // console.log(item);
}

function testFunction() {
    console.log("Testing!");
}

function productTemplate(product, index) {
    let displayPrice;
    if (product.onSale){
        displayPrice = `<s>${product.price}</s> ${product.salePrice}`;
    } else {
        displayPrice = product.price;
    }
    return `
        <div class="product-box">
            <img class="product-img" src="${product.imgSrc}" alt="${product.imgAlt}">
            <h3>${product.title}</h3>
            <p class="description">${product.description}</p>
            <p class="price">Price: ${displayPrice}</p>
            <button class="buy-button" data-index="${index}">Buy now</button>
        </div>
    `
}
function renderProduct(product, index) {
    let html = productTemplate(product, index);
    productContainer.innerHTML += html;

}

function init() {
    products.forEach((product, index) => renderProduct(product, index));
}
init();

// addToCart(products[0])
// confirm("Testing");