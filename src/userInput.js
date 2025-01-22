export const userInput = () => {
  const getInputValue = () => {
    const inputElement = document.getElementById("cityInput");
    if (!inputElement) {
      console.error("Input element not found");
      return "";
    }
    console.log("Getting input value:", inputElement.value);
    return inputElement.value.trim();
  };

  return { getInputValue };
};
