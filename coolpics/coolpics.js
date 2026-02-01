const pictureBox = document.querySelector('#picture-box');
const modal = document.querySelector('dialog');
const modalImage = modal.querySelector('img');
const closeButton = modal.querySelector('.close-viewer');

const menuBtn = document.querySelector('#menu-btn')
const menu = document.querySelector('nav');
const mediaQuery = window.matchMedia('(max-width: 1000px)');


pictureBox.addEventListener('click', openModal);

function openModal(e) {
    const img = e.target;
    const src = img.getAttribute('src');
    const alt = img.getAttribute('alt');
    const full = src.replace('sm', 'full');
    
    modalImage.src = full;
    modalImage.alt = alt;

    modal.showModal();
}

closeButton.addEventListener('click', () => {
    modal.close();
});

modal.addEventListener('click', (event) => {
    if (event.target === modal) {
        modal.close();
    }
});

menuBtn.addEventListener('click', toggleMenu);

function toggleMenu() {
    menu.classList.toggle('hide');
    console.log('clicky');
}


mediaQuery.addEventListener('change', handleScreenChange);

function handleScreenChange(e) {
    if (e.matches) {
        // Screen is >= 700px
        menu.classList.add('hide');
    }
    else {
        menu.classList.remove('hide');
    }
}

//Problem: 