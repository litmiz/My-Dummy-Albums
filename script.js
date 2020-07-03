// Load all albums
fetch('https://jsonplaceholder.typicode.com/albums').then(response =>
response.json().then(albumData => {
    fetch('https://jsonplaceholder.typicode.com/users').then(response2 =>
        response2.json().then(usersData => {
            albumData.forEach(element => {
                let userNames = usersData.filter(function (user) {
                    return user.id == element.userId;
                });

                document.getElementById('albumsArea').innerHTML += `
                <button class="albumBtn" onclick="loadPic(${element.id})">${element.title} album
                <p>This album was created by ${userNames[0].name}</p></button>
                <span id="picAlbum${element.id}Area"></span>
                ` 
            }); 
        }));
}));
///////////////////////////////////////////////////////////


// load photos
function loadPic(albumId) {
    fetch(`https://jsonplaceholder.typicode.com/photos?albumId=${albumId}`).then(response =>
    response.json().then(data => {
    data.forEach(element => {
        document.getElementById(`picAlbum${albumId}Area`).innerHTML += `
        <div class="picDiv">
            <h3>${element.title}</h3>
            <img src="${element.url}">
        </div>
        `
    });
}));
}
///////////////////////////////////////////////////////////
