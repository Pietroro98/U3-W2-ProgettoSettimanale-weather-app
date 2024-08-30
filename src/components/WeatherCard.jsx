import React from "react";
import { Link } from "react-router-dom";
import { Card, Button } from "react-bootstrap";

const WeatherCard = ({
  city,
  country,
  temp,
  description,
  icon,
  tempMin,
  tempMax,
}) => {
  return (
    <Card className="text-center card-background">
      <Card.Img
        className="card-img-top"
        variant="top"
        src={`https://openweathermap.org/img/wn/${icon}@2x.png`}
      />
      <Card.Body>
        <Card.Title>
          {city}, {country}
        </Card.Title>
        <Card.Text>
          <p>
            <strong>Temperature:</strong> {Math.round(temp)} °C
          </p>
          <p>{description}</p>
          <p>
            <strong>MAX:</strong> {Math.round(tempMax)} °C{" "}
            <strong>MIN:</strong> {Math.round(tempMin)} °C
          </p>
        </Card.Text>
        <Link to={`/weather-info/${city}`}>
          <Button variant="primary">Weather Info</Button>
        </Link>
      </Card.Body>
    </Card>
  );
};

export default WeatherCard;
