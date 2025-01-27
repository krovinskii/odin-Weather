//Retrieve data from visualcrossing weather API

import { key } from "./key";

export const apiData = (location) => {
  const getData = async () => {
    let weatherData = await fetch(
      `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${location}?key=${key}`
    );
    let hourly = await fetch(
      `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${location}?key=${key}&include=hours`
    );
    let hourlyJson = await hourly.json();
    let weatherDataJson = await weatherData.json();
    return {
      weatherDataJson,
      currentConditions: weatherDataJson.currentConditions,
      resolvedAddress: weatherDataJson.resolvedAddress,
      days: weatherDataJson.days,
      hourlyJson: hourlyJson.days[0].hours,
    };
  };

  const currentConditions = async () => {
    try {
      const { currentConditions } = await getData();
      const {
        conditions,
        feelslike,
        visibility,
        windspeed,
        humidity,
        pressure,
        precip,
        precipprob,
        temp,
      } = currentConditions;
      return {
        conditions,
        feelslike,
        visibility,
        windspeed,
        humidity,
        precip,
        pressure,
        precipprob,
        temp,
      };
    } catch (error) {
      console.log("error");
    }
  };

  const resolvedAddress = async () => {
    try {
      const data = await getData();
      return data.resolvedAddress;
    } catch (error) {
      console.error("Error in resolving address:", error);
      throw error;
    }
  };

  const days = async () => {
    try {
      const data = await getData();
      return data.days;
    } catch (error) {
      console.error("Error in resolving address:", error);
      throw error;
    }
  };

  return { getData, currentConditions, resolvedAddress, days };
};
