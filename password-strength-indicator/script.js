const pass = document.getElementById("password");
const msg = document.getElementById("message");
const str = document.getElementById("strength");

pass.addEventListener("input", () => {
    const length = pass.value.length;

    if (length > 0) {
        msg.style.display = "block";
    } else {
        msg.style.display = "none";
    }
    if (length < 4) {
        str.innerHTML = "weak";
        pass.style.borderColor = "#ff5925";
        msg.style.color = "#ff5925";
    } else if (length >= 4 && length < 8) {
        str.innerHTML = "medium";
        pass.style.borderColor = "yellow";
        msg.style.color = "yellow";
    } else if (length <= 8) {
        str.innerHTML = "strong";
        pass.style.borderColor = "#26d730";
        msg.style.color = "#26d730";
    }
})