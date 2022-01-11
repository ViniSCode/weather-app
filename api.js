const apiKey = "cf22b961335841c5c6998f433f513165";

async function getData(){
  
  const response = await fetch(
    `https://api.openweathermap.org/data/2.5/onecall?lat=33.44&lon=-94.04&exclude=hourly&appid=${apiKey}`
  );

  const data = await response.json();
  console.log(data)
} getData()


