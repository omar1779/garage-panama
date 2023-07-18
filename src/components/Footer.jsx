import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import "bootstrap/dist/css/bootstrap.min.css";

function Footer() {
  return (
    <footer className="bg-dark text-light p-2">
      <Container>
        <Row>
          <Col md={6}>
            <h3>Garage Panamá</h3>
            <p>© {new Date().getFullYear()} Todos los derechos reservados</p>
          </Col>
          <Col md={6}>
            <h3>@garage__panama</h3>
            <p>Teléfono: +507 61986828</p>
            <p>Correo electrónico: garagepanama8@gmail.com</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default Footer;
