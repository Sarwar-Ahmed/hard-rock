document.getElementById("search").addEventListener("click",function(){
    const search = document.getElementById("searchTerm").value;
    if(!search){
        alert("Please type in a search term");
    }
    fetch(`https://api.lyrics.ovh/suggest/${search}`)
    .then(res => res.json())
    .then(data => {
        const searchResult = document.getElementById("search-result");
        searchResult.innerHTML = '';
        for (let i = 0; i < 10; i++) {
            const songs = data.data[i];
            const p = document.createElement("p");
            p.innerHTML = `<p class="author lead"><strong>${songs.title}</strong> Album by <span>${songs.artist.name}</span> <button onclick="getLyrics('${songs.artist.name}', '${songs.title}')" class="btn btn-success">Get Lyrics</button>
            </p>`;
            searchResult.appendChild(p);

            
            // console.log(songs);
        }
    })
})


function getLyrics(artist, title){
    fetch(`https://api.lyrics.ovh/v1/${artist}/${title}`)
    .then(res => res.json())
    .then(data => {
        const showLyrics = document.getElementById("showLyrics");
        showLyrics.innerHTML = '';
        const p = document.createElement("p");
        p.innerHTML = `<button class="btn go-back">&lsaquo;</button>
        <h2 class="text-success mb-4">${title} - ${artist}</h2>
        <pre class="lyric text-white">
        ${data.lyrics}
            </pre>`;
        showLyrics.appendChild(p);
        const lyricsFailed = `<h2 class="text-danger mb-4">${data.error}</h2>`;
            if(data.error){
                showLyrics.innerHTML = lyricsFailed;
            }
    })
    // console.log(songs);
}