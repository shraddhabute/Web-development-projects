let songs = [
{
title: "Song 1",
artist: "Artist 1",
src: "songs/song1.mp3"
},
{
title: "Song 2",
artist: "Artist 2",
src: "songs/song2.mp3"
},
{
title: "Song 3",
artist: "Artist 3",
src: "songs/song3.mp3"
}
];

let audio = document.getElementById("audio");
let playlist = document.getElementById("playlist");

let playBtn = document.getElementById("play");
let nextBtn = document.getElementById("next");
let prevBtn = document.getElementById("prev");

let currentSong = 0;

// Load first song automatically
audio.src = songs[0].src;

// Playlist
songs.forEach((song, index) => {
let li = document.createElement("li");
li.innerText = song.title + " - " + song.artist;
li.onclick = () => {
currentSong = index;
loadSong();
};
playlist.appendChild(li);
});

function loadSong(){
audio.src = songs[currentSong].src;
audio.play();
playBtn.innerText = "⏸";
}

// Play / Pause FIXED
playBtn.addEventListener("click", () => {

if(audio.src === ""){
audio.src = songs[0].src;
}

if(audio.paused){
audio.play();
playBtn.innerText = "⏸";
}else{
audio.pause();
playBtn.innerText = "▶";
}

});

// Next
nextBtn.addEventListener("click", () => {
currentSong = (currentSong + 1) % songs.length;
loadSong();
});

// Previous
prevBtn.addEventListener("click", () => {
currentSong = (currentSong - 1 + songs.length) % songs.length;
loadSong();
});