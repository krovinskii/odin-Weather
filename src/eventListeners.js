import { userSearch } from "./userSearch";
import { elements } from "./elements";
import { weatherUI } from "./weatherUI";

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
          const { weatherData, addressSeperated } =
            await search.getLocationData();

          console.log("Weather data:", weatherData);
          console.log("Address:", addressSeperated);
          //send data to dom here with a function that takes weatherdata, address etc as a parameter
          weatherUI.update(weatherData, addressSeperated, elements());
        } catch (error) {
          console.error("Error processing weather request:", error);
        }
      }
    });
  };

  return { setupEventListeners };
};
