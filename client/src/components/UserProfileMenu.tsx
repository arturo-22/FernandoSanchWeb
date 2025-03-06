import { Button, Dropdown, Nav, Navbar } from "react-bootstrap";

const UserProfileMenu = () => {
  return (
    <>
      <Navbar bg="dark" variant="dark" className="p-3">
        <Navbar.Brand href="#">Mi Plataforma</Navbar.Brand>
        <Nav className="ms-auto d-flex align-items-center">
          {/* Botón del carrito */}
          <Button variant="warning" className="me-3">
            {/* <BsCart /> */}
          </Button>
          {/* Menú desplegable */}
          <Dropdown align="end">
            <Dropdown.Toggle variant="secondary" className="rounded-circle">
             AR
            </Dropdown.Toggle>
            <Dropdown.Menu>
              <Dropdown.Item href="#">
                {/* <BsGrid className="me-2" /> Dashboard */}
              </Dropdown.Item>
              <Dropdown.Item href="#">
                {/* <BsBook className="me-2" /> Mis cursos */}
              </Dropdown.Item>
              <Dropdown.Item href="#">
                {/* <BsAward className="me-2" /> Certificados */}
              </Dropdown.Item>
              <Dropdown.Item href="#">
                {/* <BsQuestionCircle className="me-2" /> Centro de ayuda */}
              </Dropdown.Item>
              <Dropdown.Item href="#">
                {/* <BsGear className="me-2" /> Configuración */}
              </Dropdown.Item>
              <Dropdown.Divider />
              <Dropdown.Item href="#" className="text-danger">
                {/* <BsBoxArrowRight className="me-2" /> Cerrar sesión */}
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </Nav>
      </Navbar>
    </>
  );
};

export default UserProfileMenu;