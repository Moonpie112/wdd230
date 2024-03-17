const visitsLine = document.querySelector('#visitor'); // the type that will change on the document

let numVisits = Number(window.localStorage.getItem('numVisits-ls')) || 0; // checks to see if user has visited befored

let currentTimeStamp = new Date().getTime(); //gets the current time stamp
let lastVisitTimestamp = localStorage.getItem('lastVisitTimestamp') //the last time they visited the site

localStorage.setItem('lastVisitTimestamp', currentTimeStamp); //updates currentTimeStamp and lastVisitTimestamp

let timeBetweenVisits = currentTimeStamp - lastVisitTimestamp;

daysBetweenVisits = Math.ceil(timeBetweenVisits / (1000 * 60 * 60 * 24));

if (numVisits === 0) {
    visitor.textContent = 'Welcome! Let us know if you have any questions.'
} else {
    if (timeBetweenVisits < 86400000) {
        visitor.textContent = 'Back so soon! Awesome!'
    } else {
        if (daysBetweenVisits === 1) {
            visitor.textContent = `You last visited ${daysBetweenVisits} day ago.`
            } else {
            visitor.textContent = `You last visited ${daysBetweenVisits} days ago.`
        }
    }
};