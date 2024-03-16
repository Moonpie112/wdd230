const visitsDisplay = document.querySelector('#counter');

let numVisits = Number(window.localStorage.getItem('numVisits-ls')) || 0;

if (numVisits !== 0) {
    visitsDisplay.textContent = numVisits;
} else {
    visitsDisplay.textContent = 'Welcome to the site!'
}

numVisits++;

localStorage.setItem('numVisits-ls', numVisits);