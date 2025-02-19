let song = document.getElementById("song");
let progress = document.getElementById("progress");
let ctrlIcon = document.getElementById("ctrlIcon");

window.onload = function () {
    song.pause();
    song.currentTime = 0;
};

function playPause() {
    if (song.paused) {
        song.play();
        ctrlIcon.classList.remove("fa-play");
        ctrlIcon.classList.add("fa-pause");
    } else {
        song.pause();
        ctrlIcon.classList.remove("fa-pause");
        ctrlIcon.classList.add("fa-play");
    }
}

song.addEventListener("timeupdate", function () {
    progress.value = song.currentTime * 100 / song.duration;
});

progress.addEventListener("change", function () {
    song.currentTime = progress.value * song.duration / 100;
});