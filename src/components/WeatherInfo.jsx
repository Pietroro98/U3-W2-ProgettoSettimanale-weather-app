import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Container, Card } from "react-bootstrap";

const WeatherInfo = () => {
  const { city } = useParams();
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchWeatherDetails = async () => {
      try {
        const response = await fetch(
          `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=4e4c53b13695dbaf14eca338fb243928`
        );
        if (!response.ok) {
          throw new Error("City not found");
        }
        const data = await response.json();
        setWeather(data);
      } catch (err) {
        setError(true);
      } finally {
        setLoading(false);
      }
    };

    fetchWeatherDetails();
  }, [city]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error loading weather details</div>;

  return (
    <Container className="mt-4">
      <Card className="text-center card-background">
        <Card.Title>
          {weather.name}, {weather.sys.country}
        </Card.Title>
        <Card.Img
          className="w-25"
          variant="top"
          src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}
          alt={weather.weather[0].description}
        />
        <Card.Body>
          <Card.Text>
            <strong>Temperature:</strong> {Math.round(weather.main.temp)}°C
            <br />
            <strong>Feels Like:</strong> {Math.round(weather.main.feels_like)}°C
            <br />
            <strong>Min Temp:</strong> {Math.round(weather.main.temp_min)}°C
            <br />
            <strong>Max Temp:</strong> {Math.round(weather.main.temp_max)}°C
            <br />
            <strong>Pressure:</strong> {weather.main.pressure} hPa
            <br />
            <strong>Humidity:</strong> {weather.main.humidity}%
            <br />
            <strong>Visibility:</strong> {weather.visibility / 1000} km
            <br />
            <strong>Wind Speed:</strong> {weather.wind.speed} m/s
            <br />
            <strong>Description:</strong> {weather.weather[0].description}
            <br />
            <strong>Coordinates:</strong> Lat {weather.coord.lat}, Lon{" "}
            {weather.coord.lon}
          </Card.Text>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default WeatherInfo;
