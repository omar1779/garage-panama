import React from "react";
import CarrouselComponent from "../components/carrousel";
import Container from "react-bootstrap/Container";
import SobreNosotros from "../components/sobreNosotros";
import { serviciosAutomotrices } from "../utils/data";
import Row from "react-bootstrap/Row";
import HeroComponent from "../components/hero";

function LandingPage() {
  return (
    <Container className="justify-content-md-center pb-5 pt-5">
      <CarrouselComponent />
      <HeroComponent/>
      <Container
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
        }}
        className="p-4"
        >
         <h1 className="hero-title mt-5 mb-5" id="services">Servicios disponibles</h1>
        <Row
          style={{
            gap: "50px",
            justifyContent: "center",
          }}
          >
          {serviciosAutomotrices.map((e) => (
            <SobreNosotros title={e.titulo} description={e.descripcion} key={e.titulo}/>
            ))}
        </Row>
      </Container>
    </Container>
  );
}

export default LandingPage;
