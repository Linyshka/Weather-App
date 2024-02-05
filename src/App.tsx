import SideBar from "@/components/SideBar";
import TenDaysForecast from '@/components/TenDaysForecast';
import TimeForecast from '@/components/TimeForecast';
import TodayForecast from '@/components/TodayForecast';
import WeatherProperties from '@/components/WeatherProperties';

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
