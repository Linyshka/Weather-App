import SideBar from "@/components/SideBar";
import MainPage from "@/components/MainPage";
import { createContext, useEffect, useState } from "react";
import { WeatherContextInterface } from "./interfaces";
import { WeatherInterface } from "@/api/interfaces";
import { fetchWeather } from "@/api";
import { locationsArray } from "./components/SideBar/constants";

import cloudly from "@/assets/videos/cloudly.mp4";
import rainly from "@/assets/videos/rainly.mp4";
import snowly from "@/assets/videos/snowly.mp4";
import sunny from "@/assets/videos/sunny.mp4";
import thunderstorm from "@/assets/videos/thunderstorm.mp4";
import wind from "@/assets/videos/wind.mp4";

import "./App.scss";

export const WeatherContext = createContext<WeatherContextInterface>(null!);

function App() {
  // Скорее всего так не хорошо делать, но по-другому не получается
  const [weatherData, setWeatherData] = useState<WeatherInterface>(
    {} as WeatherInterface
  );
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [videoUrl, setVideoUrl] = useState("");

  useEffect(() => {
    fetchWeather(locationsArray[0].latitude, locationsArray[0].longitude).then(
      (data) => {
        setWeatherData(data);
        setIsLoading(false);
        setBackgroundVideo(data.current.weatherCode);
      }
    );
  }, []);

  const setNewData = (data: WeatherInterface) => {
    setWeatherData(data);
    setBackgroundVideo(data.current.weatherCode);
  };

  const setBackgroundVideo = (code: number) => {
    if (code === 0) setVideoUrl(sunny);
    else if (code <= 48) setVideoUrl(cloudly);
    else if (code <= 67 || (code >= 80 && code <= 82)) setVideoUrl(rainly);
    else if (code <= 77 || code === 85 || code === 86) setVideoUrl(snowly);
    else if (code === 95) setVideoUrl(thunderstorm);
    else setVideoUrl(wind);
  };

  return isLoading ? (
    <div>Loading</div>
  ) : (
    <WeatherContext.Provider value={{ weatherData, setNewData }}>
      <video src={videoUrl} autoPlay muted loop className='background'>
      </video>
      <main className='main'>
        <MainPage />
        <SideBar />
      </main>
    </WeatherContext.Provider>
  );
}

export default App;
