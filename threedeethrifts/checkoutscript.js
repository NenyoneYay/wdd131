let cartContents = document.getElementById('cart-contents');
let clearButton = document.getElementById('clear-cart');
const stateSelect = document.getElementById("state");
const form = document.getElementById("checkoutForm");
let taxRate = 0;

const exemptStates = ['AK', "DE", "MT", "NH", "OR"];

updateCart();


stateSelect.addEventListener("change", updateTax)
function updateTax() {
    const selectedState = stateSelect.value;
    if (exemptStates.includes(selectedState)) {
        taxRate = 0.00;
    } else {
        taxRate = 0.05;
    }
    updateCart();
}

clearButton.addEventListener('click', clearCart);
function clearCart() {
    localStorage.clear();
    updateCart();
    cartContents.innerHTML = ``;
}

form.addEventListener("submit", (event) => {
    event.preventDefault(); // stops page reload / actual submission

    alert("Test complete!");
});

function updateCart() { //Refresh what items are in the cart and display them in the cart window with subtotal
    let subtotal = 0;
    let totalCalculation = document.getElementById('total-calculation');
    cartContents.innerHTML = ``; //Step 1: Clear out cart area
    totalCalculation.innerHTML = ``;
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
    let taxNum = subtotal*taxRate;

    totalCalculation.innerHTML = `
        <p id="subtotal-text">Subtotal: $${subtotal}</p>
        <p id="sales-tax">Sales tax: $${Math.round(taxNum*100)/100}</p>
        <p>Total: $${subtotal + Math.round(taxNum*100)/100}}</p>
    `;
    
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