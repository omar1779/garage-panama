import React,{useState} from "react";

import { Link, useNavigate } from "react-router-dom";

import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Offcanvas from "react-bootstrap/Offcanvas";
import garage from '../../public/G.jpg'
import { useService } from "../context/servicesProvider";
import "bootstrap/dist/css/bootstrap.min.css";

function NavbarComponent() {
  const navigate = useNavigate();
  const service = useService();
  const changePageAndFilter = (e) => {
    service.filter(e.target.innerHTML);
    setShowSidebar(!showSidebar)
    navigate("/service");
  };
  const [showSidebar, setShowSidebar] = useState(false);
  const handleToggleSidebar = () => {
    console.log('hola')
    setShowSidebar((prevShowSidebar) => !prevShowSidebar);
  };

  return (
    <>
      {[false].map((expand) => (
        <Navbar
          fixed="top"
          key={expand}
          bg="dark"
          variant="dark"
          expand={expand}
          className="mb-5"
        >
          <Container fluid>
            <Navbar.Brand>
              <Link
                to="/"
                style={{
                  textDecoration: "none",
                  color: "#fff",
                }}
              >
                GARAGE PANAMÁ
              </Link>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} onClick={handleToggleSidebar}/>
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="end"
              show={showSidebar}
              onHide={() => setShowSidebar(false)}
            >
              <Offcanvas.Header
                closeButton={true}
                style={{
                  backgroundColor: "#404040",
                }}
              >
                <Offcanvas.Title
                  id={`offcanvasNavbarLabel-expand-${expand}`}
                  style={{
                    color: "white",
                  }}
                >
                  Garage Panamá
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className="justify-content-end flex-grow-1 pe-3">
                  <Link
                    to="/home"
                    style={{
                      textDecoration: "none",
                      color: "#000",
                    }}
                    onClick={()=> setShowSidebar(!showSidebar)}
                  >
                    Inicio
                  </Link>
                  <NavDropdown
                    menuVariant="dark"
                    title="Servicios"
                    id={`offcanvasNavbarDropdown-expand-${expand}`}
                  >
                    <NavDropdown.Item onClick={(e) => changePageAndFilter(e)}>
                      Scanner Automotriz
                    </NavDropdown.Item>
                    <NavDropdown.Item onClick={(e) => changePageAndFilter(e)}>
                      Inyeccion electronica
                    </NavDropdown.Item>
                    <NavDropdown.Item onClick={(e) => changePageAndFilter(e)}>
                      Limpieza de inyectores
                    </NavDropdown.Item>
                    <NavDropdown.Item onClick={(e) => changePageAndFilter(e)}>
                      Inyeccion Diesel
                    </NavDropdown.Item>
                    <NavDropdown.Item onClick={(e) => changePageAndFilter(e)}>
                      Aire acondicionado
                    </NavDropdown.Item>
                    <NavDropdown.Item onClick={(e) => changePageAndFilter(e)}>
                      Mantenimiento preventivo
                    </NavDropdown.Item>
                    <NavDropdown.Item onClick={(e) => changePageAndFilter(e)}>
                      Mantenimineot de Transmision
                    </NavDropdown.Item>
                    <NavDropdown.Item onClick={(e) => changePageAndFilter(e)}>
                      Suspension
                    </NavDropdown.Item>
                    <NavDropdown.Item onClick={(e) => changePageAndFilter(e)}>
                      Direccion
                    </NavDropdown.Item>
                    <NavDropdown.Item onClick={(e) => changePageAndFilter(e)}>
                      Frenos
                    </NavDropdown.Item>
                    <NavDropdown.Item onClick={(e) => changePageAndFilter(e)}>
                      Cadena de tiempo
                    </NavDropdown.Item>
                    <NavDropdown.Item onClick={(e) => changePageAndFilter(e)}>
                      Correa de accesorios
                    </NavDropdown.Item>
                    <NavDropdown.Item onClick={(e) => changePageAndFilter(e)}>
                      Reparacion de fuga de aceite
                    </NavDropdown.Item>
                    <NavDropdown.Item onClick={(e) => changePageAndFilter(e)}>
                      Reparacion de calentamiento
                    </NavDropdown.Item>
                    <NavDropdown.Item onClick={(e) => changePageAndFilter(e)}>
                      Reparacion de motor de arranque
                    </NavDropdown.Item>
                    <NavDropdown.Item onClick={(e) => changePageAndFilter(e)}>
                      Reparacion de motor de alternador
                    </NavDropdown.Item>
                    <NavDropdown.Item onClick={(e) => changePageAndFilter(e)}>
                      Overhaul completo
                    </NavDropdown.Item>
                    <NavDropdown.Item onClick={(e) => changePageAndFilter(e)}>
                      Torneria completa
                    </NavDropdown.Item>
                  </NavDropdown>
                  <Link
                    to="/shop"
                    style={{
                      textDecoration: "none",
                      color: "#000",
                    }}
                    onClick={()=> setShowSidebar(!showSidebar)}
                  >
                    Vehiculos a la venta
                  </Link>
                  <NavDropdown
                    menuVariant="dark"
                    title="Redes sociales"
                    id={`offcanvasNavbarDropdown-expand-${expand}`}
                  >
                    <NavDropdown.Item
                      href="https://www.instagram.com/garage__panama"
                      target="_blank"
                    >
                      Instagram
                    </NavDropdown.Item>
                    <NavDropdown.Item
                      href="https://wa.me/message/R74SCJ45USPSF1"
                      target="_blank"
                    >
                      WhatsApp
                    </NavDropdown.Item>
                    <NavDropdown.Item href="#action3">
                      Facebook
                    </NavDropdown.Item>
                  </NavDropdown>
                  <img src={garage} alt="garage panama" />
                </Nav>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      ))}
    </>
  );
}

export default NavbarComponent;
