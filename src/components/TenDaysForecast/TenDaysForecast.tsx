import { daysForecastArray } from "@/data";
import DayItem from "../DayItem";

import styles from "./TenDaysForecast.module.scss"

function TenDaysForecast() {
  return (
    <div className={styles.daysForecast}>
      <h2>10-DAY FORECAST</h2>
      {daysForecastArray.map((item, index) => (
        <DayItem key={index} day={item} />
      ))}
    </div>
  );
}

export default TenDaysForecast;
