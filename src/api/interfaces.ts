export interface ApiParamsInterface {
  latitude: number;
  longitude: number;
  current: string[];
  hourly: string[];
  daily: string[];
  wind_speed_unit: "ms";
  timezone: string;
  start_date: string;
  end_date: string;
}

export interface CurrentDayInterface {
  time: Date;
  temperature2m: number;
  relativeHumidity2m: number;
  apparentTemperature: number;
  weatherCode: number;
  windSpeed10m: number;
}

export interface HourlyInterface {
  time: Date[];
  temperature2m: Float32Array;
  dewPoint2m: Float32Array;
  visibility: Float32Array;
}

export interface DailyInterface {
  time: Date[];
  temperature2mMax: Float32Array;
  temperature2mMin: Float32Array;
  sunrise: Float32Array;
  sunset: Float32Array;
  uvIndexMax: Float32Array;
  precipitationSum: Float32Array;
}

export interface WeatherInterface {
  current: CurrentDayInterface;
  hourly: HourlyInterface;
  daily: DailyInterface;
}
