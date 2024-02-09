import { fetchWeatherApi } from "openmeteo";
import { convertDate, getStartHour, range } from "./helpers";
import { url } from "./constants";
import { ApiParamsInterface, WeatherInterface } from "./interfaces";

export async function fetchWeather(
  latitude: number,
  longitude: number
): Promise<WeatherInterface> {
  const today = new Date();
  const after10Days = new Date();
  after10Days.setDate(after10Days.getDate() + 9);
  const params: ApiParamsInterface = {
    latitude,
    longitude,
    current: [
      "temperature_2m",
      "relative_humidity_2m",
      "apparent_temperature",
      "weather_code",
      "wind_speed_10m",
    ],
    hourly: ["temperature_2m", "dew_point_2m", "visibility"],
    daily: [
      "weather_code",
      "temperature_2m_max",
      "temperature_2m_min",
      "sunrise",
      "sunset",
      "uv_index_max",
      "precipitation_sum",
      "precipitation_probability_max"
    ],
    wind_speed_unit: "ms",
    timezone: "GMT",
    start_date: convertDate(today),
    end_date: convertDate(after10Days),
  };
  const responses = await fetchWeatherApi(url, params);

  const response = responses[0];

  const utcOffsetSeconds = response.utcOffsetSeconds();

  const current = response.current()!;
  const hourly = response.hourly()!;
  const daily = response.daily()!;

  const startIndex = getStartHour();

  return {
    current: {
      time: new Date((Number(current.time()) + utcOffsetSeconds) * 1000),
      temperature2m: current.variables(0)!.value(),
      relativeHumidity2m: current.variables(1)!.value(),
      apparentTemperature: current.variables(2)!.value(),
      weatherCode: current.variables(3)!.value(),
      windSpeed10m: current.variables(4)!.value(),
    },
    hourly: {
      time: range(
        Number(hourly.time()),
        Number(hourly.timeEnd()),
        hourly.interval()
      )
        .map((t) => new Date((t + utcOffsetSeconds) * 1000))
        .slice(startIndex, startIndex + 10),
      temperature2m: hourly.variables(0)!.valuesArray()!,
      dewPoint2m: hourly.variables(1)!.valuesArray()!,
      visibility: hourly.variables(2)!.valuesArray()!,
    },
    daily: {
      time: range(
        Number(daily.time()),
        Number(daily.timeEnd()),
        daily.interval()
      ).map((t) => new Date((t + utcOffsetSeconds) * 1000)),
      weatherCode: daily.variables(0)!.valuesArray()!,
      temperature2mMax: daily.variables(1)!.valuesArray()!,
      temperature2mMin: daily.variables(2)!.valuesArray()!,
      sunrise: daily.variables(3)!.valuesArray()!,
      sunset: daily.variables(4)!.valuesArray()!,
      uvIndexMax: daily.variables(5)!.valuesArray()!,
      precipitationSum: daily.variables(6)!.valuesArray()!,
      precipitationProbabilityMax: daily.variables(7)!.valuesArray()!,
    },
  };
}

fetchWeather(53.9, 27.5667).then((weather) => console.log(weather));