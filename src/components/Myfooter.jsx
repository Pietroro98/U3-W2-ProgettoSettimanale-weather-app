import React from "react";
import { Container } from "react-bootstrap";

const MyFooter = function () {
  return (
    <footer className="bg-primary text-white py-3 fixed-bottom">
      <Container className="text-center">
        <span>
          Scopri ulteriori informazioni su{" "}
          <a
            href="https://www.meteo.it"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white fw-bold text-decoration-none"
          >
            meteo.it
          </a>
        </span>
      </Container>
    </footer>
  );
};

export default MyFooter;