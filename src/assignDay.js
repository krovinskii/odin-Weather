import { elements } from "./elements";
import { userSearch } from "./userSearch";

export const assignDay = async () => {
  const data = await userSearch();
  const { weeklyForecastMinMax } = await data.getLocationData();
  const { dayName } = await weeklyForecastMinMax;
  console.log(dayName);
}; //No idea if this is working. Brain fried, can't think.
// It's purpose should be to get the name of the days and the date. then order them from sunday to saturday. then send them to the UI.
