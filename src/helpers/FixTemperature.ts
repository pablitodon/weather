export const fixTemperature = (t: number): string => {
  const kelvins = 273.15;
  const celsius = (t - kelvins).toFixed(1);

  return celsius;
};
