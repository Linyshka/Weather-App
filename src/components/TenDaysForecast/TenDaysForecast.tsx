import DayItem from "../DayItem";

import styles from "./TenDaysForecast.module.scss";
import { useContext } from "react";
import { WeatherContext } from "@/App";

function TenDaysForecast() {
  const weatherData = useContext(WeatherContext);
  return (
    <div className={styles.daysForecast}>
      <h2>10-DAY FORECAST</h2>
      {weatherData?.weatherData.daily.time.map((item, index) => (
        <DayItem
          //не знаю, какой можно придумать ключ тут
          key={item.toString()}
          day={{
            day: item,
            code: weatherData.weatherData.daily.weatherCode[index],
            maxTemperature:
              weatherData.weatherData.daily.temperature2mMax[index],
            minTemperature:
              weatherData.weatherData.daily.temperature2mMin[index],
            precipitation:
              weatherData.weatherData.daily.precipitationProbabilityMax[index],
          }}
        />
      ))}
    </div>
  );
}

export default TenDaysForecast;
