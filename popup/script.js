const popup = document.getElementById("popup");
const btn = document.getElementById("btn");

function openPopup() {
    btn.classList.add("hidden-button");
    popup.classList.add("open-popup");
}

function closePopup() {
    btn.classList.remove("hidden-button");
    popup.classList.remove("open-popup");
}