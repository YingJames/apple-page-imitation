isMenuOpen = false;
let navMenu = document.body.querySelector('.nav--list');
let navBar = document.body.querySelector('.nav__global');

let toggleMenu = () => {
    isMenuOpen = !isMenuOpen
    if (isMenuOpen == true) {
        navMenu.style.display = 'block';
        navBar.style.backgroundColor = 'rgba(0,0,0,1)';
    } 
    else {
        navMenu.style.display = 'none';
        navBar.style.backgroundColor = 'rgba(0,0,0,0.8)';
    }
}