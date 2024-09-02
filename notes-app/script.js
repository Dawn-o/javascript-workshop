const createBtn = document.getElementById("btn");
const notesContainer = document.getElementById("notes-container");

let notes = document.querySelectorAll("#input-box");

function showNotes() {
    notesContainer.innerHTML = localStorage.getItem("notes");
}

function updateStorage() {
    localStorage.setItem("notes", notesContainer.innerHTML);
}

createBtn.addEventListener("click", () => {
    let inputBox = document.createElement("p");
    let img = document.createElement("img");
    inputBox.id = "input-box";
    inputBox.className = "bg-white text-gray-800 rounded-md p-5 relative min-h-[150px] max-w-[500px] mx-0 mb-5 outline-none";
    inputBox.setAttribute("contenteditable", "true");

    img.src = "images/delete.png";
    img.className = "w-6 absolute bottom-4 right-4 cursor-pointer";
    notesContainer.appendChild(inputBox).appendChild(img);
    updateStorage();
    setupNotes();
});

notesContainer.addEventListener("click", (e) => {
    if (e.target.tagName === "IMG") {
        e.target.parentElement.remove();
        updateStorage();
    }
    else if (e.target.tagName === "P") {
        notes = document.querySelectorAll("#input-box");
        notes.forEach(note => {
            note.onkeyup = () => {
                updateStorage();
            }
        });
    }
});

document.addEventListener("keydown", e => {
    if (e.key === "Enter") {
        document.execCommand("insertLineBreak");
        e.preventDefault();
    }
})

showNotes();