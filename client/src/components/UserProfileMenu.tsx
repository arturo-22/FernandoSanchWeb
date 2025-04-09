import { Dropdown, Nav, Navbar } from "react-bootstrap";
import { CiBookmark, CiFlag1, CiSettings } from "react-icons/ci";
import { LuCirclePower } from "react-icons/lu";
import { MdOutlineSlowMotionVideo } from "react-icons/md";
import { RiDashboard3Line } from "react-icons/ri";

const UserProfileMenu = () => {
  return (
    <>
      <Navbar className="p-3">
        <Nav className="ms-auto d-flex align-items-center">
          <Dropdown align="end">
            <Dropdown.Toggle variant="secondary" className="rounded-circle">
              AR
            </Dropdown.Toggle>
            <Dropdown.Menu>
              <Dropdown.Item href="#">
                <RiDashboard3Line className="me-2 text-dark" />{" "}
                <span className="text-dark">Dashboard</span>
              </Dropdown.Item>
              <Dropdown.Item href="#">
                <MdOutlineSlowMotionVideo className="me-2 text-dark" />{" "}
                <span className="text-dark">Mis Cursos</span>
              </Dropdown.Item>
              <Dropdown.Item href="#">
                <CiBookmark  className="me-2 text-dark" />{" "}
                <span className="text-dark">Certificados</span>
              </Dropdown.Item>
              <Dropdown.Item href="#">
                <CiFlag1  className="me-2 text-dark" />{" "}
                <span className="text-dark">Centro de ayuda</span>
              </Dropdown.Item>
              <Dropdown.Item href="#">
                <CiSettings  className="me-2 text-dark" />{" "}
                <span className="text-dark">Configuración</span>
              </Dropdown.Item>
              <Dropdown.Divider />
              <Dropdown.Item href="#" className="text-danger">
                <LuCirclePower  className="me-2 text-dark" />{" "}
                <span className="text-dark">Cerrar sesión</span>
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </Nav>
      </Navbar>
    </>
  );
};

export default UserProfileMenu;
