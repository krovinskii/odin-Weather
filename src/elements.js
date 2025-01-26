export const elements = () => {
  const currentConditions = {
    currentTemp: document.getElementById("currentTemp"),

    sky: document.getElementById("conditions"),
    humidity: document.getElementById("humidity"),
    windSpeed: document.getElementById("windSpeed"),
    precipitation: document.getElementById("precipitation"),
    feelsLike: document.getElementById("feelsLike"),
    visibility: document.getElementById("visibility"),
    pressure: document.getElementById("pressure"),
  };
  const cityInfo = {
    cityState: document.getElementById("cityState"),
    country: document.getElementById("country"),
  };
  const weeklyForecast = {
    sunday: document.getElementById("sunday"),
    monday: document.getElementById("monday"),
    tuesday: document.getElementById("tuesday"),
    wednesday: document.getElementById("wednesday"),
    thursday: document.getElementById("thursday"),
    friday: document.getElementById("friday"),
    saturday: document.getElementById("saturday"),
  };
  const convertBtn = document.getElementById("unitToggle");
  const weatherIcon = document.getElementById("weatherTypeImg");
  return {
    currentConditions,
    cityInfo,
    weeklyForecast,
    convertBtn,
    weatherIcon,
  };
};
