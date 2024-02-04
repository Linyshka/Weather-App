export interface LocationInterface {
  city: string;
  isMyLocation: boolean;
  longitude: number;
  latitude: number;
}

export interface WeatherPropInterface {
  title: string;
  value: string;
  description?: string;
}

export interface DayPropInterface {
  day: string;
  minTemperature: number;
  maxTemperature: number;
}

export interface TimeForecastInterface {
  time: string;
  temperature: number;
}