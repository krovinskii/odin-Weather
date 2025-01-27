// This module is responsible for getting the user input from the input field

export const userInput = () => {
  const getInputValue = () => {
    const inputElement = document.getElementById("cityInput");
    if (!inputElement) {
      console.error("Input element not found");
      return "";
    }
    return inputElement.value.trim();
  };

  return { getInputValue };
};
