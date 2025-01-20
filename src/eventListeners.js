export const eventListeners = () => {
  const cityInputListener = () => {
    const cityInput = document.getElementById("cityInput");
    cityInput.addEventListener("submit" /*Pass function that searches*/);
  };
  const unitToggle = () => {
    const toggleBtn = document.getElementById("unitToggle");
    toggleBtn = addEventListener(
      "click" /*Pass function that toggles celsius to Fahrenheit */
    );
  };
  return { cityInputListener, unitToggle };
};
