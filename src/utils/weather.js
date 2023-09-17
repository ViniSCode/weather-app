export function getWeatherCode(weatherGroupId) {
  if (weatherGroupId === 803) {
    return "overcast";
  }

  if (weatherGroupId > 802 && weatherGroupId < 805) {
    return "overcast";
  }

  if (weatherGroupId === 781) {
    return "tornado";
  }

  if (weatherGroupId >= 200 && weatherGroupId < 300) {
    return "storm";
  } else if (weatherGroupId >= 300 && weatherGroupId < 400) {
    return "rain";
  } else if (weatherGroupId >= 500 && weatherGroupId < 600) {
    return "rain";
  } else if (weatherGroupId >= 600 && weatherGroupId < 700) {
    return "snow";
  } else if (weatherGroupId >= 700 && weatherGroupId < 800) {
    return "cloudy";
  } else if (weatherGroupId === 800) {
    return "clear";
  } else if (weatherGroupId >= 801 && weatherGroupId < 900) {
    return "clouds";
  } else {
    return "cloudy";
  }
}

export function getWindDirection(degrees) {
  const directions = [
    "N",
    "NNE",
    "NE",
    "ENE",
    "E",
    "ESE",
    "SE",
    "SSE",
    "S",
    "SSW",
    "SW",
    "WSW",
    "W",
    "WNW",
    "NW",
    "NNW",
  ];
  const index = Math.round((degrees % 360) / 22.5);
  return directions[index % 16];
}

export function formattedVisibility(number) {
  return (number / 1000).toFixed(1);
}

export function getVisibilityStatus(visibility) {
  const aqi = (10 - visibility / 1000) * 10;

  if (aqi >= 0 && aqi <= 50) {
    return "Good";
  } else if (aqi > 50 && aqi <= 100) {
    return "Normal";
  } else {
    return "Poor";
  }
}
