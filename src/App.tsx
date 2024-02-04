import SideBar from "./conponents/SideBar";
import TenDaysForecast from './conponents/TenDaysForecast';
import TodayForecast from './conponents/TodayForecast';
import WeatherProperties from './conponents/WeatherProperties';

function App() {
  return (
    <>
      <TodayForecast />
      <hr />
      <TenDaysForecast />
      <hr />
      <WeatherProperties />
      <hr />
      <SideBar />
    </>
  );
}

export default App;
