import { LocationProps } from "./types";
import styles from "./LocationWidget.module.scss";
import { useState, useEffect, useContext } from "react";
import { fetchWeather } from "@/api";
import { WeatherInterface } from "@/api/interfaces";
import { weatherCodes } from "@/api/constants";
import { WeatherContext } from "@/App";

import cloudly from "@/assets/videos/cloudly.mp4";
import rainly from "@/assets/videos/rainly.mp4";
import snowly from "@/assets/videos/snowly.mp4";
import sunny from "@/assets/videos/sunny.mp4";
import thunderstorm from "@/assets/videos/thunderstorm.mp4";
import wind from "@/assets/videos/wind.mp4";

function LocationWidget({ location }: LocationProps) {
  const [weatherData, setWeatherData] = useState<WeatherInterface>();
  const setNewData = useContext(WeatherContext).setNewData;
  const [videoUrl, setVideoUrl] = useState("");

  useEffect(() => {
    fetchWeather(location.latitude, location.longitude).then((data) => {
      setWeatherData(data);
      setBackgroundVideo(data.current.weatherCode);
    });
  }, [location.latitude, location.longitude]);

  const changeMainWeather = () => {
    if (weatherData) {
      setNewData(weatherData);
    }
  };

  const setBackgroundVideo = (code: number) => {
    if (code === 0) setVideoUrl(sunny);
    else if (code <= 48) setVideoUrl(cloudly);
    else if (code <= 67 || (code >= 80 && code <= 82)) setVideoUrl(rainly);
    else if (code <= 77 || code === 85 || code === 86) setVideoUrl(snowly);
    else if (code === 95) setVideoUrl(thunderstorm);
    else setVideoUrl(wind);
  };

  return (
    <div className={styles.location} onClick={changeMainWeather}>
      <video src={videoUrl} autoPlay muted loop></video>
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
          H: {Math.floor(weatherData?.daily.temperature2mMax[0] as number)}
          &deg; L:{" "}
          {Math.floor(weatherData?.daily.temperature2mMin[0] as number)}&deg;
        </p>
      </div>
    </div>
  );
}

export default LocationWidget;
