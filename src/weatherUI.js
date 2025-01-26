import { conversionLogic } from "./converter";
import { hourlyGraph } from "./hourlyGraph";

const { toFarenheit, toCelsius } = conversionLogic();
let isCelsius = false;

export const weatherUI = {
  update(weatherData, addressSeperated, elements, dayDetails, hourlyData) {
    const convertTemperature = (temp) => {
      return isCelsius ? Math.floor(toCelsius(temp)) : Math.floor(temp);
    };

    elements.currentConditions.currentTemp.textContent = `${convertTemperature(
      weatherData.temp
    )}°${isCelsius ? "C" : "F"}`;
    elements.currentConditions.sky.textContent = weatherData.conditions;
    elements.currentConditions.humidity.textContent = `${weatherData.humidity}%`;
    elements.currentConditions.windSpeed.textContent = `${weatherData.windspeed} mph`;
    elements.currentConditions.precipitation.textContent = `${weatherData.precipprob}%`;
    elements.currentConditions.feelsLike.textContent = `${convertTemperature(
      weatherData.feelslike
    )}°${isCelsius ? "C" : "F"}`;
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
        <h4>${convertTemperature(day.tempMin)}°${isCelsius ? "C" : "F"}</h4>
        ${convertTemperature(day.tempMax)}°${isCelsius ? "C" : "F"}
      `;
    });

    // Ensure the event listener is added only once
    if (!elements.convertBtn.hasEventListener) {
      elements.convertBtn.addEventListener("click", () => {
        isCelsius = !isCelsius;
        this.update(
          weatherData,
          addressSeperated,
          elements,
          dayDetails,
          hourlyData
        );
      });
      elements.convertBtn.hasEventListener = true;
    }

    // Update the hourly graph
    hourlyGraph(hourlyData);
  },
};
