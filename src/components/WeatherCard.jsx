import { Card, Button, Container } from "react-bootstrap";
const WeatherCard = function () {
  return (
    <Container className="d-flex justify-content-center">
    <Card className="text-center my-3 mx-3 w-75"> 
    <Card.Title>city, country</Card.Title>
      <Card.Img className="w-25" variant="top" src="https://th.bing.com/th/id/OIP.xHr5qi93Ah-CuD19R-ISVwHaHa?w=158&h=180&c=7&r=0&o=5&pid=1.7" />
      <Card.Body>
        <Card.Text>
        <p><strong>Temperature:</strong> °C</p>
        <p>Description: </p>
        <p><strong>MAX:</strong> °C <strong>MIN:</strong> °C</p>
        
        
        </Card.Text>
        <Button variant="primary">Weather Info</Button>
      </Card.Body>
    </Card>
    </Container>
   
  );
};
export default WeatherCard;
