import "../styles/Register.css"
import { useNavigate } from "react-router-dom";

export function Register() {
  const navigate = useNavigate();
  return (
    <>
      <div
        className="container-fluid d-flex justify-content-center align-items-center vh-100"
        id="registerContainer"
      >
        <div className="d-flex flex-column" id="register">
          <h1 className="text-center fw-bold">Crear una Cuenta</h1>
          <p className="text-center">
            ¿Ya tienes una cuenta?
            <a  onClick={() => navigate("/acceso")}  className="fw-bold" id="enlaceIniciaSesion">
              {" "}
              Inicia sesión!
            </a>
          </p>
          <div className="mb-3">
            <label className="form-label">Nombre Completo</label>
            <input type="email" className="form-control form-control-sm" id="nombreCompleto" />
          </div>
          <div className="mb-3">
            <label className="form-label">DNI</label>
            <input type="email" className="form-control form-control-sm" id="dni" />
          </div>
          <div className="mb-3">
            <label className="form-label">Email</label>
            <input type="email" className="form-control form-control-sm" id="email" />
          </div>
          <div className="mb-3">
            <label className="form-label">Contraseña</label>
            <input type="password" className="form-control form-control-sm" id="password" />
          </div>
          <button
            onClick={() => navigate("/")}
            className="btn mb-3 fw-bold"
            id="btnRegistrarme"
          >
            Registrarme
          </button>
          <button
            onClick={() => navigate("/")}
            className="btn fw-bold"
            id="btnInicioRegister"
          >
            Inicio
          </button>
        </div>
      </div>
    </>
  );
}
