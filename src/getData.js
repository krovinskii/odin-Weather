const apiKey = "VTY3U4N3S8U94ZWSTQ9F3AQSC";
let location = "The Woodlands"; //change this later to take input from DOM
export const getData = async () => {
  let weatherData = await fetch(
    `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${location}?key=${apiKey}`
  );
  let weatherDataJson = await weatherData.json();
  const { currentConditions, description, resolvedAddress } = weatherDataJson;
  console.log(currentConditions);
  console.log(description);
  console.log(resolvedAddress);

  return { weatherDataJson, currentConditions, resolvedAddress };
};
export const currentConditions = async () => {
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
