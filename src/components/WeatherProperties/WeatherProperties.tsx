import styles from "./WeatherProperties.module.scss";
import { useContext } from "react";
import { WeatherContext } from "@/App";

function WeatherProperties() {
  const weatherData = useContext(WeatherContext);

  const properties = [
    [
      "UV INDEX",
      Math.floor(weatherData?.weatherData.daily.uvIndexMax[0] as number),
      "Middle for the rest of the day",
    ],
    [
      // Почему-то приходят очень большие числа...
      "WIND",
      `${Math.floor(
        weatherData?.weatherData.current.weatherCode as number
      )} м\\с`,
      "",
    ],
    [
      "FEELS LIKE",
      `${Math.floor(
        weatherData?.weatherData.current.apparentTemperature as number
      )}°`,
      "Similar to the actual temperature",
    ],
    [
      "HUMIDITY",
      `${Math.floor(
        weatherData?.weatherData.current.relativeHumidity2m as number
      )} %`,
      `The dew point is ${Math.floor(
        weatherData?.weatherData.hourly.dewPoint2m[0] as number
      )}° right now.`,
    ],
    [
      // А здесь приходит отрицательное число...
      "VISIBILITY",
      `${Math.floor(
        (weatherData?.weatherData.hourly.visibility[0] as number) / 1000
      )} км`,
      "Visibility is poor due to weather conditions",
    ],
  ];

  return (
    <div className={styles.weatherProperties}>
      {properties.map((property, index) => {
        return (
          <div className={styles.property} key={index}>
            <div>
              <h2>{property[0]}</h2>
              <span>{property[1]}</span>
            </div>
            {property[2] && <p>{property[2]}</p>}
          </div>
        );
      })}
    </div>
  );
}

export default WeatherProperties;
