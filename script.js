// Load all albums
fetch('https://jsonplaceholder.typicode.com/albums').then(response =>
response.json().then(data => {
    data.forEach(element => {
        document.getElementById('albumsArea').innerHTML += `
        <button class="albumBtn" onclick="loadPic(${element.id})">${element.title} album</button>
        <div id="picAlbum${element.id}Area"></div>
        ` 
    }); 
}));
///////////////////////////////////////////////////////////


// load photos
function loadPic(albumId) {
    fetch(`https://jsonplaceholder.typicode.com/photos?albumId=${albumId}`).then(response =>
    response.json().then(data => {
    data.forEach(element => {
        document.getElementById(`picAlbum${albumId}Area`).innerHTML += `
        <h3>${element.title}</h3>
        <img src="${element.url}">
        `
    });
}));
}
///////////////////////////////////////////////////////////
