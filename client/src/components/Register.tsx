import "../styles/Register.css";
import { useNavigate } from "react-router-dom";
import { createUserRequest } from "../api/users.api";
import { useState } from "react";

export function Register() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    full_name: "",
    dni: "",
    email: "",
    password: "",
  });

  const [message, setMessage] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (formData.dni.length !== 8) {
      setMessage("El DNI debe tener exactamente 8 caracteres.");
      return;
    }

    try {
      await createUserRequest(formData);
      setMessage("Usuario registrado exitosamente. ID: ");
      navigate("/acceso");
    } catch (error) {
      setMessage("Error al registrar el usuario.");
    }
  };

  return (
    <>
      <div
        className="container-fluid d-flex justify-content-center align-items-center min-vh-100"
        id="registerContainer"
      >
        <form
          className="d-flex flex-column"
          id="register"
          onSubmit={handleSubmit}
        >
          <h1 className="text-center fw-bold">Crear una Cuenta</h1>
          <p className="text-center">
            ¿Ya tienes una cuenta?
            <a
              onClick={() => navigate("/acceso")}
              className="fw-bold"
              id="enlaceIniciaSesion"
            >
              {" "}
              Inicia sesión!
            </a>
          </p>
          {message && <p className="text-center text-danger">{message}</p>}
          <div className="mb-3">
            <label htmlFor="full_name" className="form-label">
              Nombre Completo
            </label>
            <input
              type="text"
              className="form-control form-control-sm"
              id="full_name"
              name="full_name"
              value={formData.full_name}
              onChange={handleChange}
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="dni" className="form-label">
              DNI
            </label>
            <input
              type="text"
              className="form-control form-control-sm"
              id="dni"
              name="dni"
              value={formData.dni}
              onChange={handleChange}
              maxLength={8}
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">
              Email
            </label>
            <input
              type="email"
              className="form-control form-control-sm"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="password" className="form-label">
              Contraseña
            </label>
            <input
              type="password"
              className="form-control form-control-sm"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              required
            />
          </div>
          <button
            type="submit"
            className="btn mb-3 fw-bold"
            id="btnRegistrarme"
          >
            Registrarme
          </button>
          <button
            type="button"
            onClick={() => navigate("/")}
            className="btn fw-bold"
            id="btnInicioRegister"
          >
            Inicio
          </button>
        </form>
      </div>
    </>
  );
}
