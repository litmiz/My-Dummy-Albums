// Load all albums
fetch('https://jsonplaceholder.typicode.com/albums').then(response =>
response.json().then(data => {
    data.forEach(element => {
        document.getElementById('albumsArea').innerHTML += `
        <button class="albumBtn" onclick="loadPic(${element.id})">${element.title} album</button>
        ` 
    }); 
}));
///////////////////////////////////////////////////////////