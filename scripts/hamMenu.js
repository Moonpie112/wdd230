const hamButton = document.querySelector('#menu')
const mainNav = document.querySelector('.nav')

hamButton.addEventListener('click', () => {
    hamButton.classList.toggle('open');
    mainNav.classList.toggle ('hide');
});