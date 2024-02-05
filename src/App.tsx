import SideBar from "@/conponents/SideBar";
import TenDaysForecast from '@/conponents/TenDaysForecast';
import TimeForecast from '@/conponents/TimeForecast';
import TodayForecast from '@/conponents/TodayForecast';
import WeatherProperties from '@/conponents/WeatherProperties';

function App() {
  return (
    <>
      <TodayForecast />
      <hr />
      <TimeForecast />
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
