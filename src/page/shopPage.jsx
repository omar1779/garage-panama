import React from "react";
import { Link } from "react-router-dom";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import { useCar } from "../context/carProvider";

const ShopPage = () => {
  const car = useCar();
  console.log(car.cars);
  return (
    <Container className="pb-5 pt-5">
      <h1 className="pt-5 mb-3">
        <Link to={"/"} style={{ textDecoration: "none", color: "#000" }}>
          Volver al inicio
        </Link>
      </h1>
      <div style={{ display: "flex",justifyContent: "center", flexWrap: "wrap", gap: "50px" }}>
        {car.cars?.map((e) => (
          <Card
            key={e.nombre}
            className="shadow-lg rounded"
            style={{ width: "18rem" }}
          >
            <Card.Body
              style={{
                display: "flex",
                justifyContent: "space-between",
                flexDirection: "column",
              }}
            >
              <Card.Img variant="top" src={e.imagen} />
              <div className="mt-2">
                <Card.Title>{e.nombre}</Card.Title>
                <Card.Text>precio : {e.precio} $</Card.Text>
                <Button variant="dark" size="sm" className="hero-cta">
                  <Link
                    to={"/shop/"+e.nombre}
                    style={{ textDecoration: "none", color: "#fff" }}
                  >
                    Ver mas...
                  </Link>
                </Button>
              </div>
            </Card.Body>
          </Card>
        ))}
      </div>
    </Container>
  );
};

export default ShopPage;
