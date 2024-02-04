import SideBar from "./conponents/SideBar";
import TenDaysForecast from './conponents/TenDaysForecast';
import WeatherProperties from './conponents/WeatherProperties';

function App() {
  return (
    <>
      <TenDaysForecast />
      <hr />
      <WeatherProperties />
      <hr />
      <SideBar />
    </>
  );
}

export default App;
