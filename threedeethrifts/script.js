let cartButton = document.querySelector('#cart-button');
let buyButton = document.querySelector('.buy-button');

let productContainer = document.querySelector('#product-container');

const products = [
    {
        id: 1,
        title: 'Barbarian',
        description: '', 
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
        console.log("Button clicked!");
    }
});


function openCartWindow(){
    if (confirm ("Would you like to check out now?") == true) {
        let cart = JSON.parse(localStorage.getItem("cart")) || [];
        let cartLength = cart.length;
        console.log(cartLength);
        for (let i = 0; i < cartLength; i++) 
        {
            console.log("TESTING: " + cart[i].title);
        }
        localStorage.setItem("cart", JSON.stringify(cart));
        // window.location.href = "checkout.html";
    };
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

function productTemplate(product) {
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
            <button class="buy-button">Buy now</button>
        </div>
    `
}
function renderProduct(product) {
    let html = productTemplate(product);
    productContainer.innerHTML += html;

}

function init() {
    renderProduct(products[1]);
    renderProduct(products[2]);
}

init();

// addToCart(products[0])
// confirm("Testing");