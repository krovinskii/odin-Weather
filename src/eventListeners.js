import { userSearch } from "./userSearch";
import { elements } from "./elements";
import { weatherUI } from "./weatherUI";
import { assignDay } from "./assignDay";

export const eventListeners = () => {
  const setupEventListeners = () => {
    const inputElement = document.getElementById("cityInput");
    if (!inputElement) {
      console.error("Could not find cityInput element");
      return;
    }

    inputElement.addEventListener("keypress", async (event) => {
      if (event.key === "Enter") {
        event.preventDefault();
        console.log("Enter key pressed!");

        try {
          const search = userSearch();
          const {
            weatherData,
            addressSeperated,
            weeklyForecastMinMax,
            currentTemp,
          } = await search.getLocationData();

          console.log("Weather data:", weatherData);
          console.log("Address:", addressSeperated);
          console.log("forecast:", weeklyForecastMinMax);
          console.log("current temp:", currentTemp);

          const dayDetails = await assignDay();

          weatherUI.update(
            weatherData,
            addressSeperated,
            elements(),
            dayDetails
          );
        } catch (error) {
          console.error("Error processing weather request:", error);
        }
      }
    });
  };

  setupEventListeners();

  return { setupEventListeners };
};

eventListeners();
