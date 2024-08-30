import { Card, Button, Container } from "react-bootstrap";

const WeatherCard = ({ city, country, temp, tempMin, tempMax, description, icon }) => {
  return (
    <Container className="d-flex justify-content-center">
      <Card className="text-center my-3 mx-3 w-75"> 
        <Card.Title>{city}, {country}</Card.Title>
        <Card.Img className="w-25" variant="top" src={`https://openweathermap.org/img/wn/${icon}@2x.png`} />
        <Card.Body>
          <Card.Text>
            <p><strong>Temperature:</strong> {Math.round(temp)} °C</p>
            <p>{description}</p>
            <p><strong>MAX:</strong> {Math.round(tempMax)} °C <strong>MIN:</strong> {Math.round(tempMin)} °C</p>
          </Card.Text>
          <Button variant="primary">Weather Info</Button>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default WeatherCard;
