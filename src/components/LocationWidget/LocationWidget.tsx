import { LocationProps } from "./types";
import styles from "./LocationWidget.module.scss";
import { useState, useEffect, useContext } from "react";
import { fetchWeather } from "@/api";
import { WeatherInterface } from "@/api/interfaces";
import { weatherCodes } from "@/api/constants";
import { WeatherContext } from '@/App';

function LocationWidget({ location }: LocationProps) {
  const [weatherData, setWeatherData] = useState<WeatherInterface>();
  const setNewData = useContext(WeatherContext).setNewData;

  useEffect(() => {
    fetchWeather(location.latitude, location.longitude).then((data) =>
      setWeatherData(data)
    );
  }, [location.latitude, location.longitude]);

  const changeMainWeather = () => {
    if (weatherData) {
      setNewData(weatherData);
    }
  }

  return (
    <div className={styles.location} onClick={changeMainWeather}>
      <div className={styles.place}>
        {location.isMyLocation ? (
          <div>
            <h2>My location</h2>
            <p>{location.city}</p>
          </div>
        ) : (
          <div>
            <h2>{location.city}</h2>
            <p>
              {weatherData?.current.time?.toLocaleString("ru", {
                hour: "2-digit",
                minute: "2-digit",
                hour12: true,
              })}
            </p>
          </div>
        )}
        <p>{weatherCodes.get(weatherData?.current.weatherCode as number)}</p>
      </div>
      <div className={styles.forecast}>
        <span>
          {Math.floor(weatherData?.current.temperature2m as number)}&deg;
        </span>
        <p>
          H: {Math.floor(weatherData?.daily.temperature2mMax[0] as number)}&deg;
          L: {Math.floor(weatherData?.daily.temperature2mMin[0] as number)}&deg;
        </p>
      </div>
    </div>
  );
}

export default LocationWidget;
