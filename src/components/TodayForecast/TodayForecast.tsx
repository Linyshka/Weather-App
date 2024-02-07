import styles from "./TodayForecast.module.scss";

function TodayForecast() {
  return (
    <div className={styles.todayForecast}>
      <h1>Minsk</h1>
      <span>18&deg;</span>
      <p>Rainy</p>
      <p>H:29&deg; L:15&deg;</p>
    </div>
  );
}

export default TodayForecast;