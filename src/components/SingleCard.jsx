import React, { useEffect, useState } from "react";
import WeatherCard from "./WeatherCard";
import { Container } from "react-bootstrap";

const API_KEY = "dbb76c5d98d5dbafcb94441c6a10236e";
const fetchWeatherData = async (city, apiKey) => {
  const response = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`
  );
  const data = await response.json();
  return {
    city: data.name,
    country: data.sys.country,
    temp: data.main.temp,
    description: data.weather[0].description,
    icon: data.weather[0].icon,
    tempMin: data.main.temp_min,
    tempMax: data.main.temp_max,
  };
};

const SingleCard = () => {
  const [weatherData, setWeatherData] = useState(null);

  useEffect(() => {
    const loadInitialData = async () => {
      const data = await fetchWeatherData("Palermo", API_KEY);
      setWeatherData(data);
    };
    loadInitialData();
  }, []);

  return (
    <Container className="my-4 ">
      <h2 className="text-center fw-bold text-light">
        La tua posizione attuale:
      </h2>
      {weatherData && (
        <WeatherCard 
          city={weatherData.city}
          country={weatherData.country}
          temp={weatherData.temp}
          description={weatherData.description}
          icon={weatherData.icon}
          tempMax={weatherData.tempMax}
          tempMin={weatherData.tempMin}
        />
      )}
    </Container>
  );
};

export default SingleCard;
