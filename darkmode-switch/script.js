const body = document.querySelector("body");
const toggle = document.querySelector("#toggle");
const sunicon = document.querySelector(".toggle .bxs-sun");
const moonIcon = document.querySelector(".toggle .bx-moon");

toggle.addEventListener("change", () => {
    body.classList.toggle("dark");
    sunicon.className = sunicon.className == "bx bxs-sun" ? "bx bx-sun" : "bx bxs-sun";
    moonicon.className = moonicon.className == "bx bxs-moon" ? "bx bx-moon" : "bx bxs-moon";
})