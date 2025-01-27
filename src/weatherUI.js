import { conversionLogic } from "./converter";
import { hourlyGraph } from "./hourlyGraph";
import { getIsCelsius } from "./sharedState";

const { toFarenheit, toCelsius } = conversionLogic();

export const weatherUI = {
  update(weatherData, addressSeperated, elements, dayDetails, hourlyData) {
    const convertTemperature = (temp) => {
      return getIsCelsius() ? Math.floor(toCelsius(temp)) : Math.floor(temp);
    };

    elements.currentConditions.currentTemp.textContent = `${convertTemperature(
      weatherData.temp
    )}°${getIsCelsius() ? "C" : "F"}`;
    elements.currentConditions.sky.textContent = weatherData.conditions;
    elements.currentConditions.humidity.textContent = `${weatherData.humidity}%`;
    elements.currentConditions.windSpeed.textContent = `${weatherData.windspeed} mph`;
    elements.currentConditions.precipitation.textContent = `${weatherData.precipprob}%`;
    elements.currentConditions.feelsLike.textContent = `${convertTemperature(
      weatherData.feelslike
    )}°${getIsCelsius() ? "C" : "F"}`;
    elements.currentConditions.visibility.textContent = `${weatherData.visibility} mi`;
    elements.currentConditions.pressure.textContent = `${weatherData.pressure} hPa`;

    if (addressSeperated.length >= 3) {
      elements.cityInfo.cityState.textContent = `${addressSeperated[0]}, ${addressSeperated[1]}`;
      elements.cityInfo.country.textContent = addressSeperated[2];
    } else {
      elements.cityInfo.cityState.textContent = addressSeperated[0];
      elements.cityInfo.country.textContent = addressSeperated[1];
    }

    const daysOrder = [
      "sunday",
      "monday",
      "tuesday",
      "wednesday",
      "thursday",
      "friday",
      "saturday",
    ];
    dayDetails.forEach((day, index) => {
      const dayElement = elements.weeklyForecast[daysOrder[index]];
      dayElement.innerHTML = `
        <h4>${convertTemperature(day.tempMin)}°${
        getIsCelsius() ? "C" : "F"
      }</h4>
        ${convertTemperature(day.tempMax)}°${getIsCelsius() ? "C" : "F"}
      `;
    });

    // Update the hourly graph
    hourlyGraph(hourlyData);
  },
};
