export function getWeatherCode(weatherGroupId) {
  if (weatherGroupId > 802 && weatherGroupId < 900) {
    return "cloudy";
  } else if (weatherGroupId > 802 && weatherGroupId < 805) {
    return "overcast";
  } else if (weatherGroupId > 199 && weatherGroupId < 210) {
    return "storm";
  } else if (weatherGroupId > 209 && weatherGroupId < 222) {
    return "thunderstorm";
  } else if (weatherGroupId > 221 && weatherGroupId < 299) {
    return "storm";
  } else if (weatherGroupId > 299 && weatherGroupId < 499) {
    return "drizzle";
  } else if (weatherGroupId === 512) {
    return "snow-rain";
  } else if (weatherGroupId > 499 && weatherGroupId < 599) {
    return "rain";
  } else if (weatherGroupId > 599 && weatherGroupId < 614) {
    return "snow";
  } else if (weatherGroupId > 614 && weatherGroupId < 700) {
    return "snow-rain";
  } else if (weatherGroupId === 781 || weatherGroupId === 771) {
    return "tornado";
  } else if (weatherGroupId === 731 || weatherGroupId === 761) {
    return "dust";
  } else if (weatherGroupId === 711) {
    return "smoke";
  } else if (weatherGroupId > 700 && weatherGroupId < 741) {
    return "fog";
  } else if (weatherGroupId === 751) {
    return "sand";
  } else if (weatherGroupId === 800) {
    return "clear";
  } else if (weatherGroupId > 800 && weatherGroupId < 803) {
    return "few";
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

export function TimeConvert(timezone, time) {
  const dayTimeInfo = {
    timeZone: timezone,
    hour: "numeric",
    minute: "numeric",
  };
  const date = new Date(time * 1000); // Convert to milliseconds
  const dayTime = date.toLocaleString("en-US", dayTimeInfo);

  return dayTime;
}

export default function getNext7Days(timezone) {
  const daysOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

  const options = { timeZone: timezone };
  const now = new Date().toLocaleString("en-US", options);
  const today = new Date(now);

  const next7Days = [];

  for (let i = 0; i < 8; i++) {
    const nextDate = new Date(today);
    nextDate.setDate(today.getDate() + i);

    const dayAbbreviation = daysOfWeek[nextDate.getDay()];
    next7Days.push(dayAbbreviation);
  }

  return next7Days;
}

export function removeDuplicateLocations(cities) {
  const uniqueCities = cities.reduce((acc, currentCity) => {
    const isDuplicate = acc.some(
      (city) =>
        city.name === currentCity.name &&
        city.state === currentCity.state &&
        city.country === currentCity.country
    );

    if (!isDuplicate) {
      acc.push(currentCity);
    }

    return acc;
  }, []);

  return uniqueCities;
}
