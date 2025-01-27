// Purpose: This file is responsible for getting the user's input and fetching the weather data for the location the user has entered.
import { apiData } from "./getData";
import { userInput } from "./userInput";

export const userSearch = () => {
  const setLocation = () => {
    const inputHandler = userInput();
    const location = inputHandler.getInputValue();
    return location || "texas";
  };

  const getLocationData = async () => {
    try {
      const location = setLocation();
      console.log("Fetching weather data for:", location);
      const api = apiData(location);
      const weatherData = await api.currentConditions();

      const forecast = await api.days();
      const { hourlyJson } = await api.getData();
      const weeklyForecast = Array.isArray(forecast)
        ? forecast.slice(0, 7)
        : [];
      const weeklyForecastMinMax = weeklyForecast.map((day) => ({
        tempmin: day.tempmin,
        tempmax: day.tempmax,
        datetime: day.datetime,
        dayName: new Date(day.datetime).toLocaleDateString("en-US", {
          weekday: "long",
        }),
      }));
      const address = await api.resolvedAddress();
      const addressSeperated = address.split(",").map((part) => part.trim());

      const currentTemp = weatherData.temp;
      return {
        weatherData,
        addressSeperated,
        weeklyForecastMinMax,
        currentTemp,
        hourly: hourlyJson,
      };
    } catch (error) {
      console.error("Error getting location data:", error);
      throw error;
    }
  };

  return {
    setLocation,
    getLocationData,
  };
};
