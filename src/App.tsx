import SideBar from "@/components/SideBar";
import MainPage from './components/MainPage';
import cloudly from './assets/videos/cloudly.mp4';
import "./App.scss";

function App() {
  return (
    <main className="main">
      <video autoPlay muted loop className="background">
        <source src={cloudly} type="video/mp4" />
      </video>
      <MainPage />
      <SideBar />
    </main>
  );
}

export default App;
