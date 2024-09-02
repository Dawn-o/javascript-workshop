const inputBox = document.getElementById('input-box');
const listContainer = document.getElementById('list-container');

function addTask() {
    if (inputBox.value === '') {
        document.getElementById("message").innerHTML = "You must write something!";
        document.getElementById("message").classList.remove('hidden');
        document.getElementById("message").classList.remove('text-green-600');
        document.getElementById("message").classList.add('text-red-600');
    } else {
        document.getElementById("message").innerHTML = "Task added successfully!";
        document.getElementById("message").classList.remove('hidden');
        document.getElementById("message").classList.remove('text-red-600');
        document.getElementById("message").classList.add('text-green-600');
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        li.classList.add('relative', 'text-lg', 'pl-14', 'pr-8', 'py-3', 'bg-transparent', 'hover:bg-gray-100', 'rounded-lg', 'cursor-pointer', 'li-unchecked');
        listContainer.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        span.classList.add('absolute', 'top-1/2', 'right-2', 'text-2xl', 'transform', '-translate-y-1/2', 'text-gray-600', 'hover:bg-gray-200', 'rounded-full', 'w-10', 'h-10', 'flex', 'items-center', 'justify-center', 'transition-colors', 'duration-200');
        li.appendChild(span);
        saveData();
    }
    inputBox.value = "";
}

listContainer.addEventListener("click", function (e) {
    if (e.target.tagName === "LI") {
        e.target.classList.toggle("line-through");
        e.target.classList.toggle("text-gray-600");
        e.target.classList.toggle("li-checked");
        e.target.classList.toggle("li-unchecked");
        saveData();
    } else if (e.target.tagName === "SPAN") {
        document.getElementById("message").innerHTML = "Task deleted successfully!";
        document.getElementById("message").classList.remove('hidden');
        document.getElementById("message").classList.remove('text-red-600');
        document.getElementById("message").classList.add('text-green-600');
        e.target.parentElement.remove();
        saveData();
    }
}, false);

inputBox.addEventListener("keypress", function (e) {
    if (e.key === "Enter") {
        e.preventDefault();
        addTask();
    }
}, false);

function saveData() {
    localStorage.setItem("data", listContainer.innerHTML);
}

function showTask() {
    listContainer.innerHTML = localStorage.getItem("data");
}

showTask();
