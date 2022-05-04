/**
 * literal and enum
 */
type Weather =
  | "Sunny"
  | "Cloudy"
  | "Rainy"
  | "Windy"
  | "Snowy"
  | "Typhoon"
  | "Hurricane";

const dateToWeather: Record<number, Weather> = {
  1: "Sunny",
  2: "Cloudy",
  3: "Rainy",
  4: "Windy",
  5: "Snowy",
  6: "Typhoon",
  7: "Hurricane",
};

function getWeather(date: number): Weather {
  return dateToWeather[date];
}

enum Day {
  SUN = "sunday",
  MON = "monday",
  TUE = "tuesday",
  WED = "wednesday",
  THU = "thursday",
  FRI = "friday",
  SAT = "saturday",
}

function sayDays() {
  console.log(`Today is: ${Day.SUN}}`);
  console.log(`Today is: ${Day.MON}}`);
  console.log(`Today is: ${Day.TUE}}`);
  console.log(`Today is: ${Day.WED}}`);
  console.log(`Today is: ${Day.THU}}`);
  console.log(`Today is: ${Day.FRI}}`);
  console.log(`Today is: ${Day.SAT}}`);
}
