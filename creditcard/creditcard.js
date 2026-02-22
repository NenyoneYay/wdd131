const theForm = document.querySelector("#creditcard-form");

function displayError(msg) {
    //displays an error message
    document.querySelector('.errors').textContent = msg
}

function validateCardNumber (number) {
    return number === '1234123412341234';
}

function submitHandler(event) {
    event.preventDefault();
    let errorMsg = '';
    displayError('');

    let cardNumber = document.querySelector('#card-number-field');
    console.log(cardNumber.value);
    const cardNum = cardNumber.value.trim();

    //check numeric and if its valid
    if (!/^\d{16}$/.test(cardNum)) {
      errorMsg += 'Card number must be 16 digits\n';
      } else if (!validateCardNumber(cardNum)) {
        errorMsg += 'Card number is not valid\n';
      }

    //check date
    const expYear = Number(document.querySelector('#year').value);
    const expMonth = Number(document.querySelector('#month').value);
    const currentDate = new Date();

    if (2000 + expYear < currentDate.getFullYear() || (2000 + expYear === currentDate.getFullYear() && expMonth <= (currentDate.getMonth())))
    {
        errorMsg += 'card is expired\n';
    }
    if (errorMsg !== '')
    {
        //Uh oh! There's an error!
        displayError(errorMsg);
        return;
    }
    else{
        const formContainer = document.getElementById('creditcard-form');
        formContainer.innerHTML = '<h2>Thank you for your purchase.</h2>';
    }
}

document.querySelector("#creditcard-form").addEventListener('submit', submitHandler);