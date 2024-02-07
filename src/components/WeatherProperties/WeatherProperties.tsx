import { weatherProperties } from '@/data';
import styles from "./WeatherProperties.module.scss";

function WeatherProperties() {

  return (
    <div className={styles.weatherProperties}>
      {weatherProperties.map((property, index) => {
        return (
          <div className={styles.property} key={index}>
            <div>
              <h2>{property.title}</h2>
              <span>{property.value}</span>
            </div>
            {property.description && <p>{property.description}</p>}
          </div>
        )
      } )}
    </div>
  )
}

export default WeatherProperties