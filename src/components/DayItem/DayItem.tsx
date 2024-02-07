import { DayProps } from "./types";
import sun from "@/assets/images/sun.svg";
import styles from "./DayItem.module.scss";

function DayItem({ day }: DayProps) {
  return (
    <div className={styles.day}>
      <div>
        <span>{day.day}</span>
        <img src={sun} alt='weather-icon'/>
      </div>
      <div>
        <span>
          {day.minTemperature}&deg;
        </span>
        <progress max={10} value={10} />
        <span>
          {day.maxTemperature}&deg;
        </span>
      </div>
    </div>
  );
}

export default DayItem;
