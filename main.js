const search = document.querySelector("#search-box");
const cityName = document.querySelector("#city-name");
const temp = document.querySelector("#temperature");
const feelsLike = document.querySelector("#feels-like");
const humidity = document.querySelector("#humidity");
const weatherDescription = document.querySelector("#today-weather-description");
const forecastWeather = document.querySelector(".container-forecast-weather");

const Storage = {
  get() {
    return JSON.parse(localStorage.getItem("forecast")) || [];
  },
  set(forecast) {
    localStorage.setItem("forecast", JSON.stringify(forecast));
  },
};

const Forecast = [];

//search city name by pressing enter
search.addEventListener("keypress", (e) => {
  if (e.key === "Enter") {
    if (search.value === "" ) return;
    if (search.value.slice(0,1) === ","){
      Swal.fire({
        title: "error!",
        text: "Invalid name",
        icon: "warning",
        confirmButtonText: "Close",
      });
      search.value = "";
      return;
    }

    searchWeather(search.value);
  }
});

async function searchWeather(city) {

  const response = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=f50fb40048cb583c6797ce64964afdbe`
  ).then((response) => {
    if (!response.ok) {
      Swal.fire({
        title: "Error!",
        text: "Location not found",
        icon: "error",
        confirmButtonText: "Close",
      });
      search.value = "";
      throw new Error("NOT FOUND");
    }

    return response;
  });

  const data = await response.json();

  cityName.innerText = city;
  temp.innerText = data.main.temp.toFixed() + "°C";
  humidity.innerText = data.main.humidity.toFixed() + "%";
  feelsLike.innerText = data.main.feels_like.toFixed() + "°C";
  wind.innerText = data.wind.speed;
  weatherDescription.innerText = data.weather[0].description;
  search.value = "";
  APP.reload();
  forecastWeatherHTML(data.coord.lat, data.coord.lon);
}

// 7 days weather forecast
async function forecastWeatherHTML(lat, lon) {
  const response = await fetch(
    `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude=hourly,minutely&units=metric&appid=f50fb40048cb583c6797ce64964afdbe`
  );
  const data = await response.json();

  Storage.set(data.daily);

  daily = data.daily;
  let counter = -1;

  daily.forEach((forecastDay) => {
    const img = getWeatherImageCode(forecastDay.weather[0].id);
    counter++;

    const currentDate = new Date();
    currentDate.setDate(currentDate.getDate() + counter);

    const dayName = currentDate.toLocaleString("en-us", { weekday: "short" });
    const monthName = currentDate.toLocaleString("en-us", { month: "short" });
    const day = currentDate.toLocaleString("en-us").split("/")[1];

    DOM.add(img, dayName, monthName, day, forecastDay);
  });
}

const DOM = {
  add(img, dayName, monthName, day, forecastDay) {
    const weatherContainerDiv = document.createElement("div");
    weatherContainerDiv.classList.add("weather-item-container")
    weatherContainerDiv.innerHTML = DOM.addForecastOnHTML(
      img,
      dayName,
      monthName,
      day,
      forecastDay
    );

    forecastWeather.appendChild(weatherContainerDiv);
  },

  addForecastOnHTML(img, dayName, monthName, day, forecastDay) {
    html = `
      <div class="weather-item">
        <div class="top">
          <p>${dayName}, ${monthName}, ${day}</p>
        </div>
        <div class="bottom">
          <div class="bottom-left">
            <img src="./assets/${img}.png" />
            <p>${forecastDay.weather[0].description}</p>
          </div>

          <div className="bottom-right">
          <p id="forecastTemp">${forecastDay.temp.min.toFixed()}/${forecastDay.temp.max.toFixed()}°C</p>
          </div>
        </div>
      </div>
      `;

    return html;
  },
};

const APP = {
  //initial weather - London
  async init() {
    searchWeather("London, UK");
  },

  reload() {
    forecastWeather.innerHTML = "";
  },
};

function getWeatherImageCode(weatherCode) {
  if (weatherCode === 800) return "clear";
  if (weatherCode === 801) return "few";
  if (weatherCode === 802) return "clouds";
  if (weatherCode === 803) return "broken";
  if (weatherCode === 804) return "overcast";

  if (weatherCode >= 700) return "clouds ";

  if (weatherCode >= 600) return "snow";

  if (weatherCode >= 500) return "rain";
  if (weatherCode >= 300) return "rain";

  if (weatherCode >= 200) return "thunderstorm";
}

APP.init();
