import { fetchWeatherApi } from "openmeteo";
import { convertDate, range } from "./helpers";
import { url } from "./constants";
import { ApiParamsInterface, WeatherInterface } from "./interfaces";

export async function fetchWeather(): Promise<WeatherInterface> {
  const today = new Date();
  const after10Days = new Date();
  after10Days.setDate(after10Days.getDate() + 10);
  const params: ApiParamsInterface = {
    latitude: 53.9,
    longitude: 27.5667,
    current: ["temperature_2m", "is_day", "weather_code"],
    hourly: ["temperature_2m", "is_day"],
    daily: [
      "temperature_2m_max",
      "temperature_2m_min",
      "sunrise",
      "sunset",
      "uv_index_max",
      "precipitation_sum",
    ],
    timezone: "Europe/Moscow",
    start_date: convertDate(today),
    end_date: convertDate(after10Days),
  };
  const responses = await fetchWeatherApi(url, params);

  const response = responses[0];

  const utcOffsetSeconds = response.utcOffsetSeconds();

  const current = response.current()!;
  const hourly = response.hourly()!;
  const daily = response.daily()!;

  return {
    current: {
      time: new Date((Number(current.time()) + utcOffsetSeconds) * 1000),
      temperature2m: current.variables(0)!.value(),
      isDay: current.variables(1)!.value(),
      weatherCode: current.variables(2)!.value(),
    },
    hourly: {
      time: range(
        Number(hourly.time()),
        Number(hourly.timeEnd()),
        hourly.interval()
      ).map((t) => new Date((t + utcOffsetSeconds) * 1000)),
      temperature2m: hourly.variables(0)!.valuesArray()!,
      isDay: hourly.variables(1)!.valuesArray()!,
    },
    daily: {
      time: range(
        Number(daily.time()),
        Number(daily.timeEnd()),
        daily.interval()
      ).map((t) => new Date((t + utcOffsetSeconds) * 1000)),
      temperature2mMax: daily.variables(0)!.valuesArray()!,
      temperature2mMin: daily.variables(1)!.valuesArray()!,
      sunrise: daily.variables(2)!.valuesArray()!,
      sunset: daily.variables(3)!.valuesArray()!,
      uvIndexMax: daily.variables(4)!.valuesArray()!,
      precipitationSum: daily.variables(5)!.valuesArray()!,
    },
  };
}

fetchWeather().then((weather) => console.log(weather));