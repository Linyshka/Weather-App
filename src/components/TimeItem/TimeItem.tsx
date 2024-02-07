import { TimeProps } from './types';
import styles from "./TimeItem.module.scss";

import sun from "@/assets/images/sun.svg";

function TimeItem({ item }: TimeProps) {
  return (
    <div className={styles.timeItem}>
      <span>{item.time}</span>
      <img src={sun} alt='weather-icon' />
      <span>{item.temperature}&deg;</span>
    </div>
  );
}

export default TimeItem;
