import { DayProps } from "./types";
import sun from "@/assets/images/sun.svg";
import styles from "./DayItem.module.scss";

function DayItem({ day }: DayProps) {
  return (
    <div className={styles.day}>
      <div>
        <span>{day.day.toLocaleString("en-US", { weekday: "short" })}</span>
        <img src={sun} alt='weather-icon' />
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
