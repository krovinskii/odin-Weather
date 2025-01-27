//Event listeners, actions

import { userSearch } from "./userSearch";
import { elements } from "./elements";
import { weatherUI } from "./weatherUI";
import { assignDay } from "./assignDay";
import { getIsCelsius, setIsCelsius } from "./sharedState";

export const eventListeners = () => {
  const setupEventListeners = () => {
    const inputElement = document.getElementById("cityInput");
    const convertBtn = document.getElementById("unitToggle");

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
            hourly,
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
            dayDetails,
            hourly
          );
        } catch (error) {
          console.error("Error processing weather request:", error);
        }
      }
    });

    if (convertBtn) {
      convertBtn.addEventListener("click", async () => {
        setIsCelsius(!getIsCelsius());
        const search = userSearch();
        const { weatherData, addressSeperated, weeklyForecastMinMax, hourly } =
          await search.getLocationData();
        const dayDetails = await assignDay();
        weatherUI.update(
          weatherData,
          addressSeperated,
          elements(),
          dayDetails,
          hourly
        );
      });
    }
  };

  setupEventListeners();

  return { setupEventListeners };
};

eventListeners();
