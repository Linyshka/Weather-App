import TimeItem from "../TimeItem";

import style from "./TimeForecast.module.scss";
import { useContext } from "react";
import { WeatherContext } from "@/App";

function TimeForecast() {
  const weatherData = useContext(WeatherContext).weatherData;
  return (
    <div className={style.timeForecast}>
      <h2>Cloudy conditions from 1AM-9AM, with showers expected at 9AM.</h2>
      <div className={style.timeBlock}>
        {weatherData.hourly.time.map((item, index) => (
          <TimeItem
            key={item.toISOString()}
            item={{
              time: item,
              code: weatherData.hourly.weatherCode[index],
              temperature: weatherData.hourly.temperature2m[index],
            }}
          />
        ))}
      </div>
    </div>
  );
}

export default TimeForecast;
