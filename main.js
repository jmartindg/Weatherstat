const mainLocation = document.querySelector("#location");
const description = document.querySelector("#weather-desc");
const weatherIcon = document.querySelector("#weather-icon");
const temp = document.querySelector("#temp");
const feelsLike = document.querySelector("#feels-like");
const humidity = document.querySelector("#humidity");
const minTemp = document.querySelector("#min-temp");
const maxTemp = document.querySelector("#max-temp");

const searchInput = document.querySelector("#search-input");
const searchBtn = document.querySelector("#searchBtn");

const apiKey = "66d2016903664fc142b56404c9238aa4";

// Search Weather
function searchWeather() {
  const card = document.querySelector(".weather__card--active");

  searchBtn.addEventListener("click", function (e) {
    e.preventDefault();

    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${searchInput.value}&appid=${apiKey}&units=metric`)
      .then((response) => response.json())
      .then((data) => {
        const location = data.name + ", " + data.sys.country;
        const weatherDesc = data["weather"][0]["description"];
        const weatherTemp = data["main"]["temp"];
        const weatherFeels = data["main"]["feels_like"];
        const weatherHumidity = data["main"]["humidity"];
        const minimumTemp = data["main"]["temp_min"];
        const maximumTemp = data["main"]["temp_max"];

        mainLocation.textContent = location;
        description.textContent = weatherDesc;
        weatherIcon.innerHTML = `<img src="http://openweathermap.org/img/wn/${data.weather[0].icon}.png">`;
        temp.textContent = weatherTemp + "°C";
        feelsLike.textContent = weatherFeels + "°C";
        humidity.textContent = weatherHumidity;
        minTemp.textContent = minimumTemp + "°C";
        maxTemp.textContent = maximumTemp + "°C";

        card.style.display = "block";
      })
      .catch((error) => {
        alert("Location not Available. Please Enter Another Location.");
        searchInput.value = "";
      });
  });

  changeUnit();
}

// Change Units
function changeUnit() {
  const changeUnit = document.querySelector("#change-unit");

  changeUnit.addEventListener("click", function (e) {
    e.preventDefault();

    if (changeUnit.textContent === "Fahrenheit °F") {
      changeUnitToF();
      changeUnit.textContent = "Celsius °C";
    } else if (changeUnit.textContent === "Celsius °C") {
      changeUnitToC();
      changeUnit.textContent = "Fahrenheit °F";
    }
  });
}

function changeUnitToF() {
  fetch(`https://api.openweathermap.org/data/2.5/weather?q=${searchInput.value}&appid=${apiKey}&units=imperial`)
    .then((response) => response.json())
    .then((data) => {
      const location = data.name + ", " + data.sys.country;
      const weatherDesc = data["weather"][0]["description"];
      const weatherTemp = data["main"]["temp"];
      const weatherFeels = data["main"]["feels_like"];
      const weatherHumidity = data["main"]["humidity"];
      const minimumTemp = data["main"]["temp_min"];
      const maximumTemp = data["main"]["temp_max"];

      mainLocation.textContent = location;
      description.textContent = weatherDesc;
      weatherIcon.innerHTML = `<img src="http://openweathermap.org/img/wn/${data.weather[0].icon}.png">`;
      temp.textContent = weatherTemp + "°F";
      feelsLike.textContent = weatherFeels + "°F";
      humidity.textContent = weatherHumidity;
      minTemp.textContent = minimumTemp + "°F";
      maxTemp.textContent = maximumTemp + "°F";
    })
    .catch((error) => {
      alert("Cannot Change to Fahrenheit.");
      searchInput.value = "";
    });
}

function changeUnitToC() {
  fetch(`https://api.openweathermap.org/data/2.5/weather?q=${searchInput.value}&appid=${apiKey}&units=metric`)
    .then((response) => response.json())
    .then((data) => {
      const location = data.name + ", " + data.sys.country;
      const weatherDesc = data["weather"][0]["description"];
      const weatherTemp = data["main"]["temp"];
      const weatherFeels = data["main"]["feels_like"];
      const weatherHumidity = data["main"]["humidity"];
      const minimumTemp = data["main"]["temp_min"];
      const maximumTemp = data["main"]["temp_max"];

      mainLocation.textContent = location;
      description.textContent = weatherDesc;
      weatherIcon.innerHTML = `<img src="http://openweathermap.org/img/wn/${data.weather[0].icon}.png">`;
      temp.textContent = weatherTemp + "°C";
      feelsLike.textContent = weatherFeels + "°C";
      humidity.textContent = weatherHumidity;
      minTemp.textContent = minimumTemp + "°C";
      maxTemp.textContent = maximumTemp + "°C";
    })
    .catch((error) => {
      alert("Cannot Change to Celsius.");
      searchInput.value = "";
    });
}

window.onload = () => {
  searchWeather();
};
