import SideBar from "@/components/SideBar";
import MainPage from "@/components/MainPage";
import cloudly from "@/assets/videos/cloudly.mp4";
import "./App.scss";
import { createContext, useEffect, useState } from "react";
import { WeatherContextInterface } from "./interfaces";
import { WeatherInterface } from "@/api/interfaces";
import { fetchWeather } from "@/api";
import { locationsArray } from './components/SideBar/constants';

export const WeathereContext = createContext<WeatherContextInterface>(
  null!
);

function App() {
  // Скорее всего так не хорошо делать, но по-другому не получается
  const [weatherData, setWeatherData] = useState<WeatherInterface>({} as WeatherInterface);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    fetchWeather(locationsArray[0].latitude, locationsArray[0].longitude).then((data) => {
      setWeatherData(data);
      setIsLoading(false);
    });
  }, []);

  const setNewData = (data: WeatherInterface) => {
    setWeatherData(data);
  }

  return isLoading ? (
    <div>Loading</div>
  ) : (
    <WeathereContext.Provider value={{ weatherData, setNewData }}>
      <main className='main'>
        <video autoPlay muted loop className='background'>
          <source src={cloudly} type='video/mp4' />
        </video>
        <MainPage />
        <SideBar />
      </main>
    </WeathereContext.Provider>
  );
}

export default App;
