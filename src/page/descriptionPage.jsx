import React, { useEffect, useState } from "react";
import { useCar } from "../context/carProvider";
import { useParams, Link } from "react-router-dom";
import Container from "react-bootstrap/Container";

function DescriptionPage() {
  const car = useCar();
  const [currentCar, setCurrentCar] = useState(null);
  const { id } = useParams();
  console.log(id, currentCar);

  useEffect(() => {
    if (car.cars.length !== 0) {
      const filteredCars = car.cars.filter((e) => e.nombre === id);
      if (filteredCars.length > 0) {
        setTimeout(() => {
          setCurrentCar(filteredCars[0]);
        }, 0);
      }
    }
  }, [id, car.cars]);

  return (
    <Container className="pb-5 pt-5">
      {currentCar === null ? (
        <h1>hola mundo</h1>
      ) : (
        <>
          <h1 className="pt-5 mb-3">
            <Link
              to={"/shop"}
              style={{ textDecoration: "none", color: "#000" }}
            >
              Volver al catalogo
            </Link>
          </h1>
          {currentCar && (
            <div className="card mt-5 mb-5" style={{ height: "50%" , display: "flex",flexDirection: "row"}}>
              <img
                src={currentCar.imagen}
                className="card-img-top mx-auto"
                style={{
                  height: "30%",
                  width: "30%",
                }}
                alt="..."
              />
              <div className="card-body" style={{display: "flex",flexDirection: "column",justifyContent:"space-evenly"}}>
                <h4>{currentCar.nombre}</h4>
                <p className="card-text">{currentCar.descripcion}</p>
                <p className="card-text">{currentCar.specs}</p>
                <p className="card-text">precio : {currentCar.precio} $</p>
              </div>
            </div>
          )}
        </>
      )}
    </Container>
  );
}

export default DescriptionPage;
