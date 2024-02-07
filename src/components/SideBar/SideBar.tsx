import LocationWidget from '../LocationWidget';
import { locationsArray } from './constants';
import styles from "./SideBar.module.scss";

function SideBar() {
  return (
    <div className={styles.menu}>
      <input type='text' placeholder='Search for a city or an airport' />
      {locationsArray.map((city, index) => <LocationWidget key={index} location={city} />)}
    </div>
  );
}

export default SideBar;
