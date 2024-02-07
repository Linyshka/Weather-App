import { LocationProps } from "./types";
import styles from "./LocationWidget.module.scss";

function LocationWidget({ location }: LocationProps) {
  const date = new Date();

  return (
    <div className={styles.location}>
      <div className={styles.place}>
        {location.isMyLocation ? (
          <div>
            <h2>My location</h2>
            <p>{location.city}</p>
          </div>
        ) : (
          <div>
            <h2>{location.city}</h2>
            <p>
              {date.getHours()}:{date.getMinutes()}
            </p>
          </div>
        )}
        <p>Partly cloudy</p>
      </div>
      <div className={styles.forecast}>
        <span>21&deg;</span>
        <p>H:29&deg; L:15&deg;</p>
      </div>
    </div>
  );
}

export default LocationWidget;
