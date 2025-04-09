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
import { useNavigate } from "react-router-dom";
import ModalEnlace from "../modals/ModalEnlace";
import { useState } from "react";
import { useAuth } from "../context/AuthContext";
import UserProfileMenu from "./UserProfileMenu";

const NavbarComponent = () => {
  const [showModal, setShowModal] = useState(false);
  const navigate = useNavigate();
  const { isAuthenticated } = useAuth();

  const handleCloseModal = () => setShowModal(false);
  const handleShowModal = () => setShowModal(true);

  return (
    <>
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
          <Navbar.Toggle
            aria-controls="basic-navbar-nav"
            id="menu"
            onClick={handleShowModal}
          />
          <Navbar.Collapse className="d-none d-md-block">
            <Nav className="me-auto">
              <Nav.Link onClick={() => navigate("/")} id="inicio">
                Inicio
              </Nav.Link>
              <Nav.Link onClick={() => navigate("/courses")} id="cursos">
                Cursos
              </Nav.Link>
              <Nav.Link onClick={() => navigate("/plans")} id="planes">
                Planes
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
          <InputGroup
            className="d-flex align-items-center w-50"
            id="input-search"
          >
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
          {isAuthenticated ? (
            <UserProfileMenu />
          ) : (
            <>
              <Button
                onClick={() => navigate("/login")}
                className="ms-3"
                id="btn-ingresar"
              >
                Ingresar
              </Button>
              <Button onClick={() => navigate("/register")} id="btn-registrate">
                Registrate
              </Button>
            </>
          )}
        </Container>
      </Navbar>

      <ModalEnlace show={showModal} handleClose={handleCloseModal} />
    </>
  );
};

export default NavbarComponent;
