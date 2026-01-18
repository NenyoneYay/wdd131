let selectElem = document.querySelector('select');

let pageContent = document.querySelector('body');
let missionStatementBox = document.getElementById('mission_statement_box')
const logo = document.querySelector('img');

selectElem.addEventListener('change', changeTheme);

function changeTheme() {
    let current = selectElem.value;
    if (current == 'dark_mode'){
        //code for changes to colors and logo
        document.body.style.backgroundColor = '#363636';
        missionStatementBox.style.backgroundColor = '#525252'
        document.body.style.color = 'white';
        console.log("Testign");
        logo.setAttribute('src', 'images/byui-logo-white.png');
    } else {
        document.body.style.backgroundColor = 'white';
        missionStatementBox.style.backgroundColor = '#ffffff'
        document.body.style.color = 'black';
        logo.setAttribute('src', 'byui-logo-blue.webp');
        //code for changes to colors and logo
    }
}