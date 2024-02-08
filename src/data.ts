// Это тестовые данные, которые потом будут удалены

import { TimeForecastInterface, WeatherPropInterface } from "@/interfaces/";

export const weatherProperties: Array<WeatherPropInterface> = [
  {
    title: "UV INDEX",
    value: "2 Middle",
    description: "Low for the rest of the day",
  },
  {
    title: "SUNRISE",
    value: "11.28 AM",
    description: "Sunrise: 9:45 PM",
  },
  {
    title: "WIND",
    value: "25 m/s",
  },
  {
    title: "FEELS LIKE",
    value: "25°",
    description: "Similar to the actual temperature",
  },
  {
    title: "HUMIDITY",
    value: "98%",
    description: "The dew point is 18° right now.",
  },
  {
    title: "VISIBILITY",
    value: "5 км",
    description: "Visibility is poor due to weather conditions",
  },
];

// export const daysForecastArray: Array<DayPropInterface> = [
//   {
//     day: "Mon",
//     minTemperature: 0,
//     maxTemperature: 12
//   },
//   {
//     day: "Mon",
//     minTemperature: 0,
//     maxTemperature: 12
//   },
//   {
//     day: "Mon",
//     minTemperature: 0,
//     maxTemperature: 12
//   },
//   {
//     day: "Mon",
//     minTemperature: 0,
//     maxTemperature: 12
//   },
//   {
//     day: "Mon",
//     minTemperature: 0,
//     maxTemperature: 12
//   },
//   {
//     day: "Mon",
//     minTemperature: 0,
//     maxTemperature: 12
//   },
//   {
//     day: "Mon",
//     minTemperature: 0,
//     maxTemperature: 12
//   }
// ];

export const timeForecastArray: Array<TimeForecastInterface> = [
  {
    time: "Now",
    temperature: 25
  },
  {
    time: "10AM",
    temperature: 25
  },
  {
    time: "11AM",
    temperature: 25
  },
  {
    time: "12AM",
    temperature: 25
  },
]