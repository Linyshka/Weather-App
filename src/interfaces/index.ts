import { WeatherInterface } from '@/api/interfaces';

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
  day: Date;
  code: number;
  minTemperature: number;
  maxTemperature: number;
  precipitation: number;
}

export interface TimeForecastInterface {
  time: Date;
  code: number;
  temperature: number;
}

export interface WeatherContextInterface {
  weatherData: WeatherInterface;
  setNewData: (data: WeatherInterface) => void;
}