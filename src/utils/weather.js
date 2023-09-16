const weatherConditions = new Map([
  [800, "clear"],
  [801, "few"],
  [802, "clouds"],
  [803, "broken"],
  [804, "overcast"],
  [700, "clouds "],
  [600, "snow"],
  [500, "rain"],
  [300, "rain"],
  [200, "thunderstorm"],
]);

export function getWeatherCode(weatherCode) {
  return weatherConditions.get(weatherCode) || "";
}
