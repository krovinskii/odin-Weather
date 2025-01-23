export const weatherUI = {
  update(weatherData, addressSeperated, elements) {
    (elements.currentConditions.sky.textContent = weatherData.conditions),
      (elements.currentConditions.humidity.textContent = weatherData.humidity),
      (elements.currentConditions.windSpeed.textContent =
        weatherData.windspeed),
      (elements.currentConditions.precipitation.textContent =
        weatherData.precip),
      (elements.currentConditions.feelsLike.textContent =
        weatherData.feelslike),
      (elements.currentConditions.visibility.textContent =
        weatherData.visibility),
      (elements.currentConditions.pressure.textContent = weatherData.pressure),
      (elements.cityInfo.cityState.textContent = `${addressSeperated[0]}, ${addressSeperated[1]}`),
      (elements.cityInfo.country.textContent = addressSeperated[2]);
  },
};
