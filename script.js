fetch(`https://api.lyrics.ovh/suggest/summer`)
.then(res => res.json())
.then(data => {
    const searchResult = document.getElementById("search-result");
    for (let i = 0; i < data.data.length; i++) {
        const songs = data.data[i];
        const p = document.createElement("p");
        p.innerHTML = `<p class="author lead"><strong>${songs.title}</strong> Album by <span>${songs.artist.name}</span> <button onclick="getLyrics(${songs.artist.name})" class="btn btn-success">Get Lyrics</button>
        </p>`;
        searchResult.appendChild(p);
        console.log(songs);
    }
})
function getLyrics(songs){
    console.log(songs);
}