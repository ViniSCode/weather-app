const search = document.querySelector('#search-box');
const cityName = document.querySelector('#city-name');
const temp = document.querySelector('#temperature');
const feelsLike = document.querySelector('#feels-like')
const humidity = document.querySelector('#humidity')


//initial weather - London
async function initialDisplayWeather(){
  const response = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=London&units=metric&appid=f50fb40048cb583c6797ce64964afdbe`
  )
  const data = await response.json();


  cityName.innerText = 'London, UK';
  temp.innerText = data.main.temp.toFixed() + "°C";
  humidity.innerText = data.main.humidity.toFixed() + "%";
  feelsLike.innerText = data.main.feels_like.toFixed() + "°C";
  wind.innerText = data.wind.speed;
}

initialDisplayWeather();
//press enter to search
//validate search
search.addEventListener("keypress", (e) => {
  if(e.key === 'Enter'){
    if(search.value === "") return;

    searchWeather(search.value)
  }
})

async function searchWeather(city){
  const response = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=f50fb40048cb583c6797ce64964afdbe`
  ).then(response => {
    if(!response.ok){
      Swal.fire({
        title: 'Error!',
        text: 'Location not found',
        icon: 'error',
        confirmButtonText: 'Close'
      })
      search.value = ""
      throw new Error("NOT FOUND")
    }

    return response
  })

  const data = await response.json();

  cityName.innerText = city;
  temp.innerText = data.main.temp.toFixed() + "°C";
  humidity.innerText = data.main.humidity.toFixed() + "%";
  feelsLike.innerText = data.main.feels_like.toFixed() + "°C";
  wind.innerText = data.wind.speed;
  search.value = ""
} 







async function displayWeather(lat, lon){
  const data = await fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude=hourly,minutely&units=metric&appid=f50fb40048cb583c6797ce64964afdbe`)
  .then(response => response.json()).then(data => {
    return data
  })

  //write weather on display
  cityName.innerText = search.value
  indoor.innerText = 0;
  // console.log(data.daily[0])
}






function displayForecast(lat, lon){
  fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude=hourly,minutely&units=metric&appid=f50fb40048cb583c6797ce64964afdbe`)
  .then(response => response.json()).then(data => {
    
  })
  // if city exists then search forecast 
}