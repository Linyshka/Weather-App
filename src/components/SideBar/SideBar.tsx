import { useState } from "react";
import LocationWidget from "../LocationWidget";
import { locationsArray } from "./constants";
import styles from "./SideBar.module.scss";

function SideBar() {
  const [locations, setLocations] = useState(locationsArray);

  const searchLocation = (e: React.ChangeEvent<HTMLInputElement>) => {
    const searchLocations = locationsArray.filter(
      (item) =>
        item.city.toLowerCase().search(e.target.value.toLowerCase()) !== -1
    );
    setLocations(searchLocations);
  };

  return (
    <div className={styles.menu}>
      <div className={styles.search}>
        <input
          type='text'
          placeholder='Search for a city or an airport'
          onChange={(e) => searchLocation(e)}
        />
      </div>

      {locations.map((city, index) => (
        <LocationWidget key={index} location={city} />
      ))}
    </div>
  );
}

export default SideBar;
