import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import {scrollToElement} from "../utils/scrollToElement"

function HeroComponent() {
/*   function scrollToElement() {
    // Obtiene el elemento de destino por su ID
    const element = document.getElementById("services");
    // Hace scroll suavemente hasta el elemento de destino
    element.scrollIntoView({ behavior: "smooth" });
  } */
  return (
      <Container fluid className="pt-5 mb-5">
        <Row style={{
            paddingTop: "20px"
        }}>
          <Col>
            <h1 className="hero-title">¡Bienvenido a Garage Panamá!</h1>
            <p className="">
              Bienvenido a nuestra página de ventas de mecánica automotriz,
              donde nos enorgullece ofrecer servicios automotrices confiables y
              de alta calidad. Sabemos lo importante que es para nuestros
              clientes tener un automóvil que funcione correctamente y de manera
              segura, y es por eso que nuestros técnicos altamente capacitados y
              con experiencia están listos para brindar los mejores servicios.
              En nuestra página de ventas, encontrará una amplia gama de
              servicios para su automóvil, desde mantenimiento y reparación
              hasta diagnóstico y solución de problemas. Utilizamos solo las
              mejores herramientas y piezas de repuesto para asegurarnos de que
              su automóvil esté en óptimas condiciones, lo que le brinda
              tranquilidad mientras conduce. Nuestro equipo de técnicos
              altamente capacitados y con experiencia se esfuerza por brindar un
              servicio excepcional en todo momento. Nos aseguramos de que cada
              cliente reciba un servicio personalizado y se sienta satisfecho
              con el trabajo realizado en su automóvil. Además, mantenemos
              nuestros precios competitivos para garantizar que nuestros
              servicios estén disponibles para todos.
            </p>
            <Button
            onClick={()=> scrollToElement("services")}
            variant="dark" size="lg" className="hero-cta">
              Ver servicios automotrices
            </Button>
          </Col>
        </Row>
      </Container>
  );
}
export default HeroComponent;
