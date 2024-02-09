import { DayProps } from "./types";
import sun from "@/assets/images/sun.svg";
import rain from "@/assets/images/rain.svg";
import cloud from "@/assets/images/cloud.svg";
import styles from "./DayItem.module.scss";

function DayItem({ day }: DayProps) {

  let weatherIcon;

    if (day.code === 0) weatherIcon = sun;
    else if (day.code <= 48) weatherIcon = cloud;
    else weatherIcon = rain;

  return (
    <div className={styles.day}>
      <div>
        <span>{day.day.toLocaleString("en-US", { weekday: "short" })}</span>
        <div className={styles.iconBlock}>
          <img src={weatherIcon} alt='weather-icon' />
          {day.precipitation && <span>{Math.floor(day.precipitation)}%</span>}
        </div>
        
      </div>
      <div>
        <span>{Math.floor(day.minTemperature)}&deg;</span>
        <progress max={10} value={10} />
        <span>{Math.floor(day.maxTemperature)}&deg;</span>
      </div>
    </div>
  );
}

export default DayItem;
