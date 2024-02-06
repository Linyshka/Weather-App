import TenDaysForecast from "@/components/TenDaysForecast";
import TimeForecast from "@/components/TimeForecast";
import TodayForecast from "@/components/TodayForecast";
import WeatherProperties from "@/components/WeatherProperties";

function MainPage() {
  return (
    <div>
      <TodayForecast />
      <hr />
      <TimeForecast />
      <hr />
      <TenDaysForecast />
      <hr />
      <WeatherProperties />
    </div>
  );
}

export default MainPage;