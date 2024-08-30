import React, { useState } from "react";
import { Navbar, Form, FormControl, Button, Container } from "react-bootstrap";
import WeatherCard from './WeatherCard'; 
import Homepage from './Homepage';

const MyNavbar = () => {
  const [city, setCity] = useState("");
  const { weatherData, fetchWeatherData, loading, error } = Homepage(
    "4e4c53b13695dbaf14eca338fb243928"
  );

  const handleSearch = (event) => {
    event.preventDefault();
    if (city.trim()) {
      fetchWeatherData(city);
    }
  };

  return (
    <>
      <Navbar bg="primary" expand="lg" className="p-3">
        <Container>
          <Navbar.Brand href="/" className="text-white">
            Weather-App
          </Navbar.Brand>
          <Form
            className="w-100 d-flex justify-content-center"
            onSubmit={handleSearch}
          >
            <FormControl
              type="text"
              placeholder="Enter city"
              className="me-4 w-75"
              value={city}
              onChange={(e) => setCity(e.target.value)}
            />
            <Button type="submit" variant="outline-light">
              Search
            </Button>
          </Form>
        </Container>
      </Navbar>
      {loading && <p>Loading...</p>}
      {error && <p className="text-danger">{error}</p>}
      {weatherData && <WeatherCard {...weatherData} />}
    </>
  );
};

export default MyNavbar;
