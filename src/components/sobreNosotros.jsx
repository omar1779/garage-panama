import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button"
import { useService } from "../context/servicesProvider";
import { useNavigate } from "react-router-dom";

function SobreNosotros(props) {
  const navigate = useNavigate()
  const service = useService()
  const changePageAndFilter = (serviceTitle) => {
    service.filter(serviceTitle);
    navigate("/service");
  };
  return (
    <Card key={props.title} className="shadow-lg rounded" style={{ width: "18rem" }}>
      <Card.Body >
        <Card.Title>{props.title}</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">
          {props.subtitle}
        </Card.Subtitle>
        <Card.Text>{props.description}</Card.Text>
        <Button variant="dark" size="sm" className="hero-cta"
          onClick={()=>changePageAndFilter(props.title)}
        >
          Ver mas...
        </Button>
      </Card.Body>
    </Card>
  );
}

export default SobreNosotros;
