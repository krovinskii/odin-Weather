import { userSearch } from "./userSearch";

export const assignDay = async () => {
  try {
    const data = await userSearch();
    const { weeklyForecastMinMax } = await data.getLocationData();

    // Sort days starting from Sunday
    const dayDetails = weeklyForecastMinMax
      .sort((a, b) => {
        const days = [
          "Sunday",
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
        ];
        return days.indexOf(a.dayName) - days.indexOf(b.dayName);
      })
      .map((day) => ({
        dayName: day.dayName,
        tempMin: day.tempmin,
        tempMax: day.tempmax,
      }));

    console.log("Day details:", dayDetails);
    return dayDetails;
  } catch (error) {
    console.error("Error in assignDay:", error);
    return null;
  }
};
