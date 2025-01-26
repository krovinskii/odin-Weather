//Converts F to C or C to F

export const conversionLogic = () => {
  const toFarenheit = (c) => {
    return (c * 9) / 5 + 32;
  };
  const toCelsius = (f) => {
    return ((f - 32) * 5) / 9;
  };
  return { toFarenheit, toCelsius };
};
