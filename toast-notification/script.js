const toastBox = document.getElementById("toastBox");
const successMsg = '<i class="fa-solid fa-circle-check"></i> Successfully submitted';
const errorMsg = '<i class="fa-solid fa-circle-xmark"></i> Please fix the error!';
const invalidMsg = '<i class="fa-solid fa-circle-exclamation"></i> invalid input, check again';
function showToast(message) {
    let toast = document.createElement("div");
    toast.classList.add('toast');
    toast.innerHTML = message;
    toastBox.appendChild(toast);

    if (message.includes('error')) {
        toast.classList.add('error');
    }

    if (message.includes('invalid')) {
        toast.classList.add('invalid');
    }

    setTimeout(() => {
       toast.remove(); 
    }, 5000);
}