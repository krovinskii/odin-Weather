export const apiData = (location) => {
  const apiKey = "69H48HQ5FGM2LD927N29XU465";
  const getData = async () => {
    let weatherData = await fetch(
      `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${location}?key=69H48HQ5FGM2LD927N29XU465`
    );
    let weatherDataJson = await weatherData.json();
    const { currentConditions, description, resolvedAddress } = weatherDataJson;
    return { weatherDataJson, currentConditions, resolvedAddress }; //return all data, current data, and address for the search
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
      } = currentConditions;
      return {
        conditions, //overcast / sunny, whatever
        feelslike,
        visibility,
        windspeed,
        humidity,
        precip, //not sure if we are returning chance or what it is
        pressure,
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

  return { getData, currentConditions, resolvedAddress };
};
