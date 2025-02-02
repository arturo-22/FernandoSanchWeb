import "../styles/Login.css";
import { useNavigate } from "react-router-dom";

export function Login() {

    const navigate = useNavigate();

  return (
    <>
      <div className="container-fluid d-flex justify-content-center align-items-center vh-100" id="loginContainer">
        <div className="d-flex flex-column" id="login">
          <h1 className="text-center fw-bold">Iniciar Sesión</h1>
          <p className="text-center">
            ¿No tienes cuenta?
            <a onClick={() => navigate("/registro")}className="fw-bold" id="enlaceRegistrate">
              {" "}
              ¡Regístrate aquí!
            </a>
          </p>
          <div className="mb-3">
            <label className="form-label">DNI o Email</label>
            <input type="email" className="form-control" id="email" />
          </div>
          <div className="mb-3">
            <label className="form-label">Contraseña</label>
            <input type="password" className="form-control" id="password" />
          </div>
          <a className="text-dark text-center mb-3" href="/">
            ¿Olvidaste tu contraseña?
          </a>
          <button onClick={() => navigate("/")} className="btn mb-3 fw-bold" id="btnIngresar">Ingresar</button>
          <button onClick={() => navigate("/")} className="btn fw-bold" id="btnInicio">Inicio</button>
        </div>
      </div>
    </>
  );
}
