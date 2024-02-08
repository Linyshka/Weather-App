import { useContext } from 'react';
import styles from "./TodayForecast.module.scss";
import { WeathereContext } from '@/App';
import { weatherCodes } from '@/api/constants';

function TodayForecast() {
  const weatherData = useContext(WeathereContext);

  const weatherCode = weatherData?.weatherData.current.weatherCode as number;
  const description = weatherCodes.get(weatherCode);
  const maxTemerature = Math.floor(weatherData?.weatherData.daily.temperature2mMax[0] as number);
  const minTemperature = Math.floor(weatherData?.weatherData.daily.temperature2mMin[0] as number);

  return (
    <div className={styles.todayForecast}>
      <h1>Minsk</h1>
      <span>{Math.floor(weatherData?.weatherData.current.temperature2m as number)}&deg;</span>
      <p>{description}</p>
      <p>H: {maxTemerature}&deg; L: {minTemperature}&deg;</p>
    </div>
  );
}

export default TodayForecast;