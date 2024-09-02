const searchBox = document.querySelector("#search input");
const searchBtn = document.querySelector("#search button");
const weatherIcon = document.getElementById("weather-icon");

async function checkWeather(city) {
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?units=metric&q=${city}&appid=fda9b34b1c6584baa1d1341e15ee43db`);
    let data = await response.json();

    if (response.status === 404 || 400) {
        document.getElementById("error").innerHTML = data.message;
        document.getElementById("error").style.display = 'block';
        document.getElementById("weather").style.display = 'none';

        searchBox.value = null;
    }

    document.getElementById("city").innerHTML = `${data.name}, ${data.sys.country}`;
    document.getElementById("temp").innerHTML = Math.round(data.main.temp) + "°C";
    document.getElementById("humidity").innerHTML = data.main.humidity + "%";
    document.getElementById("wind").innerHTML = data.wind.speed + "km/h";

    switch (data.weather[0].main) {
        case "Clear":
            weatherIcon.src = "images/clear.png";
            break;
        case "Rain":
            weatherIcon.src = "images/rain.png";
            break;
        case "Drizzle":
            weatherIcon.src = "images/drizzle.png";
            break;
        case "Mist":
            weatherIcon.src = "images/mist.png";
            break;
        case "Snow":
            weatherIcon.src = "images/snow.png";
            break;
        default:
            weatherIcon.src = "images/clouds.png";
            break;
    }

    document.getElementById("weather").style.display = 'block';
    document.getElementById("error").style.display = 'none';

    searchBox.value = null;
}

searchBox.addEventListener("keypress", function (e) {
    if (e.key === "Enter") {
        e.preventDefault();
        checkWeather(searchBox.value);
    }
});

searchBtn.addEventListener("click", () => {
    checkWeather(searchBox.value);
});
