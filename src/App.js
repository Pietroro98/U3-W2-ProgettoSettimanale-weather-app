import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import MyNavbar from "../src/components/MyNavbar";
import MyFooter from "../src/components/Myfooter";
import WeatherCard from "../src/components/WeatherCard";

function App() {
  return (
    <>
      <header>
      <MyNavbar />
      </header>
      
      <WeatherCard />
      <footer>
        <MyFooter />
      </footer>
    </>
  );
}

export default App;
