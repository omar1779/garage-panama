import React, { useEffect } from "react";
import Container from "react-bootstrap/Container";
import { Link } from "react-router-dom";
import { useService } from "../context/servicesProvider";
import Service from "../components/service";
import SocialMediaIcons from "../components/socialMedia";

function ServicePage() {
  const service = useService();
  return (
    <Container className="pb-5 pt-5">
      <h1 className="pt-5">
        <Link to={"/"} style={{ textDecoration: "none", color: "#000" }}>
          Volver al inicio
        </Link>
      </h1>
      {service.serviceFilter && (
        <Container className="">
          <Service
            title={service?.serviceFilter[0].titulo}
            description={service?.serviceFilter[0].descripcion}
          />
        </Container>
      )}
      <Container>
        <SocialMediaIcons />
      </Container>
    </Container>
  );
}

export default ServicePage;
