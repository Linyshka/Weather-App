import LocationWidget from '../LocationWidget';
import { locationsArray } from './constants';

function SideBar() {
  return (
    <>
      <input type='text' placeholder='Search for a city or an airport' />
      {locationsArray.map((city, index) => <LocationWidget key={index} location={city} />)}
    </>
  );
}

export default SideBar;
