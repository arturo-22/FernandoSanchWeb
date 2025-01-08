import "../styles/Navbar.css";
import logo from "../images/logo.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMagnifyingGlass,
  faShoppingCart,
} from "@fortawesome/free-solid-svg-icons";
import {
  Button,
  Container,
  Form,
  InputGroup,
  Nav,
  Navbar,
} from "react-bootstrap";

const NavbarComponent = () => {
  return (
    <Navbar expand="md" id="navbar">
      <Container fluid>
        <Navbar.Brand href="#home">
          <img
            src={logo}
            alt="Navbar Logo"
            className="navbar-logo"
            id="img-logo"
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" id="menu" />
        <Navbar.Collapse>
          <Nav className="me-auto">
            <Nav.Link href="#home" id="inicio">
              Inicio
            </Nav.Link>
            <Nav.Link href="#link" id="cursos">
              Cursos
            </Nav.Link>
            <Nav.Link href="#link" id="planes">
              Planes
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
        <InputGroup className="d-flex align-items-center" id="input-search">
          <Form.Control
            placeholder="¿Qué curso quieres aprender hoy?"
            aria-label="Recipient's username"
            aria-describedby="basic-addon2"
          />
          <Button variant="outline-secondary" id="btn-search">
            <FontAwesomeIcon icon={faMagnifyingGlass} />
          </Button>
        </InputGroup>
        <FontAwesomeIcon
          className="ms-4"
          icon={faShoppingCart}
          id="icon-shoppingCart"
        />
        <Button className="ms-3" variant="primary" id="btn-ingresar">
          Ingresar
        </Button>
        <Button variant="primary" id="btn-registrate">
          Registrate
        </Button>
      </Container>
    </Navbar>
  );
};

export default NavbarComponent;