import { userSearch } from "./userSearch";

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
          const { weatherData, address } = await search.getLocationData();

          console.log("Weather data:", weatherData);
          console.log("Address:", address);
        } catch (error) {
          console.error("Error processing weather request:", error);
        }
      }
    });

    inputElement.addEventListener("input", (event) => {
      console.log("Input value changed:", event.target.value);
    });
  };

  return { setupEventListeners };
};
