const createBtn = document.getElementById("btn");
const notesContainer = document.getElementById("notes-container");

function updateStorage() {
    localStorage.setItem("notes", notesContainer.innerHTML);
}

function showNotes() {
    notesContainer.innerHTML = localStorage.getItem("notes") || "";
    setupNotes();
}

function setupNotes() {
    const notes = document.querySelectorAll("#input-box");
    notes.forEach(note => {
        const editableContent = note.querySelector("div[contenteditable='true']");
        const deleteIcon = note.querySelector("img");

        editableContent.addEventListener('input', () => {
            if (editableContent.textContent.trim() === "") {
                editableContent.textContent = "";
            }
            updateStorage();
        });

        deleteIcon.addEventListener('click', () => {
            note.remove();
            updateStorage();
        });
    });
}

createBtn.addEventListener("click", () => {
    let inputBox = document.createElement("div");
    inputBox.id = "input-box";
    inputBox.className = "bg-white text-gray-800 rounded-md p-5 relative min-h-[150px] max-w-[500px] mx-0 mb-5 outline-none";
    inputBox.innerHTML = `
        <div contenteditable="true" class="outline-none"></div>
        <img src="images/delete.png" alt="Delete Note" class="w-6 absolute bottom-4 right-4 cursor-pointer">
    `;
    notesContainer.appendChild(inputBox);
    updateStorage();
    setupNotes();
});

notesContainer.addEventListener("click", (e) => {
    if (e.target.tagName === "IMG") {
        e.target.parentElement.remove();
        updateStorage();
    }
});

document.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
        document.execCommand("insertLineBreak");
        e.preventDefault();
    }
});

showNotes();
setupNotes();
