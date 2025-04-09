import "../styles/pages/Login.css";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useAuth } from "../context/AuthContext";
import ModalRecoverPassword from "../modals/ModalRecoverPassword";
import { useState } from "react";

const LoginPage = () => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const { signin, errors: signinErrors } = useAuth();
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const onSubmit = handleSubmit((data: any) => {
    signin(data);
    navigate("/");
  });

  return (
    <>
      <div
        className="container-fluid d-flex justify-content-center align-items-center min-vh-100"
        id="loginContainer"
      >
        <form className="d-flex flex-column" id="login" onSubmit={onSubmit}>
          <h1 className="text-center fw-bold">Iniciar Sesión</h1>
          <p className="text-center">
            ¿No tienes cuenta?
            <Link to="/register" className="fw-bold" id="enlaceRegistrate">
              {" "}
              ¡Regístrate aquí!
            </Link>
          </p>
          {signinErrors.map((error: string, i: number) => (
            <div className="bg-danger text-white text-center mb-2" key={i}>
              {error}
            </div>
          ))}
          <div className="mb-3">
            <label className="form-label">DNI o Email</label>
            <input
              type="text"
              {...register("userName", { required: true })}
              className="form-control"
              id="userName"
              name="userName"
            />
            {errors.userName && (
              <p className="text-danger mt-2"> DNI o Email es requerido</p>
            )}
          </div>
          <div className="mb-3">
            <label className="form-label">Contraseña</label>
            <input
              type="password"
              {...register("password", { required: true })}
              className="form-control"
              id="password"
              name="password"
            />
            {errors.password && (
              <p className="text-danger mt-2"> Contraseña es requerido</p>
            )}
          </div>
          <span
            className="text-dark text-center mb-3"
            onClick={handleOpenModal}
            style={{ cursor: "pointer", textDecoration: "none" }}
          >
            ¿Olvidaste tu contraseña?
          </span>
          <button type="submit" className="btn mb-3 fw-bold" id="btnIngresar">
            Ingresar
          </button>
          <button
            onClick={() => navigate("/")}
            className="btn fw-bold"
            id="btnInicio"
          >
            Inicio
          </button>
        </form>
      </div>
      <ModalRecoverPassword isOpen={isModalOpen} onClose={handleCloseModal} />
    </>
  );
};
export default LoginPage;
