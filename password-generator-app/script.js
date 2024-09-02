const passwordBox = document.getElementById("password");
const length = 20;
const uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowercase = "abcdefghijklmnopqrstuvwxyz";
const number = "1234567890";
const symbol = "`~!@#$%^&*()-=_+[]{};':,.></?\\|\"";
const allChars = uppercase + lowercase + number + symbol;

function createPassword() {
    let password = "";
    password += uppercase[Math.floor(Math.random() * uppercase.length)];
    password += lowercase[Math.floor(Math.random() * lowercase.length)];
    password += number[Math.floor(Math.random() * number.length)];
    password += symbol[Math.floor(Math.random() * symbol.length)];

    while (length > password.length) {
        password += allChars[Math.floor(Math.random() * allChars.length)];
    }

    passwordBox.value = password;
}

function copyPassword() {
    passwordBox.select();
    passwordBox.setSelectionRange(0, 99999);
    navigator.clipboard.writeText(passwordBox.value).then(function () {
        document.getElementById("message").innerText = "Text copied to clipboard!";
    }).catch(function (error) {
        document.getElementById("message").innerText = "Failed to copy text: " + error;
    });
}