import { TimeProps } from './types';
import styles from "./TimeItem.module.scss";

import sun from "@/assets/images/sun.svg";

function TimeItem({ item }: TimeProps) {
  return (
    <div className={styles.timeItem}>
      <span>{item.time.toLocaleString("en-US", {hour: "2-digit"})}</span>
      <img src={sun} alt='weather-icon' />
      <span>{Math.floor(item.temperature)}&deg;</span>
    </div>
  );
}

export default TimeItem;
