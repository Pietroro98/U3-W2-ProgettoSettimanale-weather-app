import React from "react";
import { Link } from "react-router-dom";
import { Container, Card, Button } from "react-bootstrap";

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
    <Container className="d-flex justify-content-center">
      <Card className="text-center my-3 mx-3 card-background">
        <Card.Title>
          {city}, {country}
        </Card.Title>
        <Card.Img
          className="card-img-top"
          variant="top"
          src={`https://openweathermap.org/img/wn/${icon}@2x.png`}
        />
        <Card.Body>
          <div>
            <strong>Temperature:</strong> {Math.round(temp)} °C
          </div>
          <div>{description}</div>
          <div>
            <strong>MAX:</strong> {Math.round(tempMax)} °C{" "}
            <strong>MIN:</strong> {Math.round(tempMin)} °C
          </div>
          <Link to={`/weather-info/${city}`}>
            <Button variant="primary">Weather Info</Button>
          </Link>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default WeatherCard;
