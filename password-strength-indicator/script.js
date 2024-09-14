const pass = document.getElementById("password");
const msg = document.getElementById("message");
const str = document.getElementById("strength");

pass.addEventListener("input", () => {
    const length = pass.value.length;

    msg.style.display = length > 0 ? "block" : "none";

    if (length < 4) {
        Strength("weak", "#ff5925");
    } else if (length < 8) {
        Strength("medium", "yellow");
    } else {
        Strength("strong", "#26d730");
    }
});

function Strength(text, color) {
    str.innerHTML = text;
    pass.style.borderColor = color;
    msg.style.color = color;
}
