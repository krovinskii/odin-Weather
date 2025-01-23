export const weatherUI = {
  update(weatherData, addressSeperated, elements) {
    (elements.currentConditions.sky.textContent = weatherData.conditions),
      (elements.currentConditions.humidity.textContent = `${weatherData.humidity}%`),
      (elements.currentConditions.windSpeed.textContent = `${weatherData.windspeed} mph`),
      (elements.currentConditions.precipitation.textContent = `${weatherData.precipprob}%`),
      (elements.currentConditions.feelsLike.textContent = `${weatherData.feelslike} °F`),
      (elements.currentConditions.visibility.textContent = `${weatherData.visibility} mi`),
      (elements.currentConditions.pressure.textContent = `${weatherData.pressure} hPa`),
      //determines if there is a state or not, if not then we format correctly and the country will not be bolded.
      (function () {
        if (addressSeperated.length >= 3) {
          elements.cityInfo.cityState.textContent = `${addressSeperated[0]}, ${addressSeperated[1]}`;
          elements.cityInfo.country.textContent = addressSeperated[2];
        } else {
          elements.cityInfo.cityState.textContent = addressSeperated[0];
          elements.cityInfo.country.textContent = addressSeperated[1];
        }
      })();
  },
};
