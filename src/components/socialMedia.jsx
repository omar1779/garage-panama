import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { BsFacebook, BsWhatsapp, BsInstagram } from "react-icons/bs";

function SocialMediaIcons() {
  return (
    <Container className="mt-5 pt-5">
      <Row className="justify-content-center">
        <Col xs={12} md={4} className="text-center">
          <a
            style={{
              textDecoration: "none",
              color: "#000",
            }}
            href="https://www.instagram.com/garage__panama"
            target="_blank"
            rel="noopener noreferrer"
          >
            <BsInstagram
              style={{
                width: "2rem",
                height: "2rem",
              }}
            />
            <h2>Instagram</h2>
          </a>
        </Col>
        <Col xs={12} md={4} className="text-center">
          <a
            style={{
              textDecoration: "none",
              color: "#000",
            }}
            href="https://www.facebook.com/profile.php?id=100092557200087&mibextid=ZbWKwL"
            target="_blank"
            rel="noopener noreferrer"
          >
            <BsFacebook
              style={{
                width: "2rem",
                height: "2rem",
              }}
            />
            <h2>Facebook</h2>
          </a>
        </Col>
        <Col xs={12} md={4} className="text-center">
          <a
            style={{
              textDecoration: "none",
              color: "#000",
            }}
            href="https://wa.me/message/R74SCJ45USPSF1"
            target="_blank"
            rel="noopener noreferrer"
          >
            <BsWhatsapp
              style={{
                width: "2rem",
                height: "2rem",
              }}
            />
            <h2>Whatsapp</h2>
          </a>
        </Col>
      </Row>
    </Container>
  );
}

export default SocialMediaIcons;
