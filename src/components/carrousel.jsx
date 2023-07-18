import React, { useState } from "react";

import Carousel from "react-bootstrap/Carousel";

import image1 from "../assets/image1.jpg";
import image2 from "../assets/image2.jpg";
import image3 from "../assets/image3.jpg";
import image4 from "../assets/image4.jpg";
import image5 from "../assets/image5.jpg";

import "bootstrap/dist/css/bootstrap.min.css";

function CarrouselComponent() {
  const image = [image1, image2, image3, image4, image5];
  const [imagenes, setImagenes] = useState(image);
  return (
    <Carousel variant="light" className="shadow-lg">
      {imagenes.map((e,index) => (
        <Carousel.Item interval={2000} key={index}>
          <div style={{
            display: "flex",
            justifyContent:"center"
          }}>
            <img
              style={{
                width: "100%",
              }}
              className="d-block rounded"
              src={e}
              alt={e}
            />
          </div>
          <Carousel.Caption>
            <h3>Garage Panamá</h3>
            <p>Servicios a domicilio en toda la ciudad de Panama</p>
          </Carousel.Caption>
        </Carousel.Item>
      ))}
    </Carousel>
  );
}

export default CarrouselComponent;
