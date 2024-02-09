import { TimeProps } from './types';
import styles from "./TimeItem.module.scss";

import sun from "@/assets/images/sun.svg";
import rain from "@/assets/images/rain.svg";
import cloud from "@/assets/images/cloud.svg";

function TimeItem({ item }: TimeProps) {
  let weatherIcon;

  if (item.code === 0) weatherIcon = sun;
  else if (item.code <= 48) weatherIcon = cloud;
  else weatherIcon = rain;

  return (
    <div className={styles.timeItem}>
      <span>{item.time.toLocaleString("en-US", {hour: "2-digit"})}</span>
      <img src={weatherIcon} alt='weather-icon' />
      <span>{Math.floor(item.temperature)}&deg;</span>
    </div>
  );
}

export default TimeItem;
