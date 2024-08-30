import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import MyNavbar from "../src/components/MyNavbar";
import MyFooter from "../src/components/Myfooter";
import SingleCard from "../src/components/SingleCard";
import WeatherInfo from './components/WeatherInfo';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import WeatherCard from './components/WeatherCard';

function App() {
  const backgroundStyle = {
    backgroundImage: 'url(https://sfondo.info/i/original/f/0/e/82816.jpg)',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    height: '100vh',
    
};

  return (
    
    <div  style={backgroundStyle}>
     <Router>
     <MyNavbar />
      <Routes>
      <Route path="/" element={<SingleCard />} />
        <Route path="/search" element={<WeatherCard />} />
        <Route path="/weather-info/:city" element={<WeatherInfo />} />
      </Routes>
      <MyFooter />
    </Router>
    </div>
  );
}

export default App;
