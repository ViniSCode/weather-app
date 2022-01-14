const search = document.querySelector("#search-box");
const cityName = document.querySelector("#city-name");
const temp = document.querySelector("#temperature");
const feelsLike = document.querySelector("#feels-like");
const humidity = document.querySelector("#humidity");
const weatherDescription = document.querySelector("#today-weather-description");
const forecastWeather = document.querySelector("#forecast-weather")

const Forecast = []

//initial weather - London
async function initialDisplayWeather() {
  const response = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=London&units=metric&appid=f50fb40048cb583c6797ce64964afdbe`
  );
  const data = await response.json();

  cityName.innerText = "London, UK";
  temp.innerText = data.main.temp.toFixed() + "°C";
  humidity.innerText = data.main.humidity.toFixed() + "%";
  feelsLike.innerText = data.main.feels_like.toFixed() + "°C";
  weatherDescription.innerText = data.weather[0].description;
  wind.innerText = data.wind.speed;
} 
initialDisplayWeather();


//search by city name
search.addEventListener("keypress", (e) => {
  if (e.key === "Enter") {
    if (search.value === "") return;

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

  forecastWeatherHTML(data.coord.lat, data.coord.lon);
}

// 7 days weather forecast
async function forecastWeatherHTML(lat, lon) {
  const response = await fetch(
    `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude=hourly,minutely&units=metric&appid=f50fb40048cb583c6797ce64964afdbe`
  );
  const data = await response.json();
  daily = data.daily;
  let counter = -1; 

 const arrayForecast = daily.forEach((forecastDay) => {
    counter++;

    //get current date and 7 days date (after current date)
    const currentDate = new Date();
    currentDate.setDate(currentDate.getDate() + counter);

    const dayName = currentDate.toLocaleString('en-us', {weekday:'short'});
    const monthName = currentDate.toLocaleString('en-us', {month:'short'});
    const day = currentDate.toLocaleString('en-us').split("/")[1];

    html = `
    <div class="weather-item">
      <div class="top">
        <p>${dayName}, ${monthName}, ${day}</p>
      </div>
      <div class="bottom">
        <div class="bottom-left">
          <img src="./assets/clear.svg" />
          <p>${forecastDay.weather[0].description}</p>
        </div>

        <p>${forecastDay.temp.min.toFixed()}°C / ${forecastDay.temp.max.toFixed()}°C</p>
      </div>
    </div>
    `;

    Forecast.push(html)
  });
  innerHTMLForecast()
}

function innerHTMLForecast(){
  const obj = Forecast.reduce((acc, cur, i) => {
    acc[i] = cur;
    console.log(acc)
    return acc;
  }, {})

  
}


