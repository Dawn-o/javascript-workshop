const pass = document.getElementById("password");
const msg = document.getElementById("message");
const str = document.getElementById("strength");

pass.addEventListener("input", () => {
    const length = pass.value.length;

    msg.classList.toggle("hidden", length === 0);

    if (length < 4) {
        Strength("Weak", "text-red-500", "border-red-500");
    } else if (length < 8) {
        Strength("Medium", "text-yellow-500", "border-yellow-500");
    } else {
        Strength("Strong", "text-green-500", "border-green-500");
    }
});

function Strength(text, textColor, borderColor) {
    str.textContent = text;
    pass.classList.remove("border-red-500", "border-yellow-500", "border-green-500");
    pass.classList.add(borderColor);
    msg.classList.remove("text-red-500", "text-yellow-500", "text-green-500");
    msg.classList.add(textColor);
}
