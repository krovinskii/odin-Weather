import { apiData } from "./getData";
import { userInput } from "./userInput";
import { assignDay } from "./assignDay";

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
      const weeklyForecast = forecast.slice(0, 7);
      const weeklyForecastMinMax = weeklyForecast.map((day) => ({
        tempmin: day.tempmin,
        tempmax: day.tempmax,
        datetime: day.datetime,
        dayName: new Date(day.datetime).toLocaleDateString("en-US", {
          weekday: "long",
        }),
      }));
      const address = await api.resolvedAddress();
      const addressSeperated = address
        .split(",")
        .map((part) => part.replace(/\s/g, ""));
      return { weatherData, addressSeperated, weeklyForecastMinMax };
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
