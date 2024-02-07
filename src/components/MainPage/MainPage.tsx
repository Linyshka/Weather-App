import TenDaysForecast from "@/components/TenDaysForecast";
import TimeForecast from "@/components/TimeForecast";
import TodayForecast from "@/components/TodayForecast";
import WeatherProperties from "@/components/WeatherProperties";

import styles from "./MainPage.module.scss";

function MainPage() {
  return (
    <div className={styles.main}>
      <TodayForecast />
      <div className={styles.info}>
        <TenDaysForecast />
        <div className={styles.dayForecast}>
          <TimeForecast />
          <WeatherProperties />
        </div>
      </div>
    </div>
  );
}

export default MainPage;
