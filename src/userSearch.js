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
      const address = await api.resolvedAddress();
      const addressSeperated = address
        .split(",")
        .map((part) => part.replace(/\s/g, ""));

      return { weatherData, addressSeperated };
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
