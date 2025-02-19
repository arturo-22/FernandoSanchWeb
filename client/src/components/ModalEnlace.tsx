import React from "react";
import { Modal, Button, Nav } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

interface ModalEnlaceProps {
  show: boolean;
  handleClose: () => void;
}

const ModalEnlace: React.FC<ModalEnlaceProps> = ({ show, handleClose }) => {

  const navigate = useNavigate();

  return (
    <Modal show={show} onHide={handleClose} centered>
      <Modal.Header closeButton>
        <Modal.Title>Menú</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Nav className="flex-column">
          <Nav.Link
            onClick={() => {
              navigate("/");
              handleClose();
            }}
            className="text-dark text-center"
          >
            Inicio
          </Nav.Link>
          <Nav.Link
            onClick={() => {
              navigate("/courses");
              handleClose();
            }}
            className="text-dark text-center"
          >
            Cursos
          </Nav.Link>
          <Nav.Link
            onClick={() => {
              navigate("/plans");
              handleClose();
            }}
            className="text-dark text-center"
          >
            Planes
          </Nav.Link>
        </Nav>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="dark" onClick={handleClose}>
          Cerrar
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default ModalEnlace;
