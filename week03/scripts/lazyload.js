const lastModified = new Date(document.lastModified);

const options = {year: 'numeric', month: 'short', day: 'numeric'}
const formattedDate = lastModified.toLocaleDateString('en-US', options);

document.getElementById('last-modified').textContent += formattedDate;