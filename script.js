const projects = [
    "age-calculator-app",
    "calculator-app",
    "datetime-countdown",
    "form-validation",
    "h-scroll-slider",
    "music-player-app",
    "notes-app",
    "password-generator-app",
    "password-strength-indicator",
    "popup",
    "qr-generator-app",
    "quiz-app",
    "stopwatch-app",
    "text-to-speech",
    "toast-notification",
    "todo-list-app",
    "toggle-password",
    "weather-app",
    "image-transition",
    "mini-calendar-app",
    "drag-and-drop",
    "digital-clock",
    "cryptocurrency",
];

const projectList = document.getElementById("project-list");

projects.forEach((project) => {
    const listItem = document.createElement("a");
    listItem.href = project;
    listItem.target = "_blank";
    listItem.className =
        "project-link bg-transparent border-2 border-gray-900 outline-none py-4 px-5 text-gray-900 text-center flex items-center justify-center uppercase font-medium cursor-pointer transition-all duration-300 ease-in-out hover:bg-gray-900 hover:text-white transform hover:-translate-y-1 hover:shadow-lg";

    const formattedText = project
        .split("-")
        .map(word => word.charAt(0).toUpperCase() + word.slice(1))
        .join(" ");

    listItem.textContent = formattedText;
    projectList.appendChild(listItem);
});