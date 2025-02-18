import "../styles/Register.css";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { useAuth } from "../context/AuthContext";

export function Register() {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const { signup, isAuthenticated, errors: registerErrors } = useAuth();

  const onSubmit = handleSubmit((values: any) => {
    signup(values);
  });

  useEffect(() => {
    if (isAuthenticated) navigate("/login");
  }, [isAuthenticated]);

  return (
    <>
      <div
        className="container-fluid d-flex justify-content-center align-items-center min-vh-100"
        id="registerContainer"
      >
        <form className="d-flex flex-column" id="register" onSubmit={onSubmit}>
          <h1 className="text-center fw-bold">Crear una Cuenta</h1>
          <p className="text-center">
            ¿Ya tienes una cuenta?
            <a
              onClick={() => navigate("/login")}
              className="fw-bold"
              id="enlaceIniciaSesion"
            >
              {" "}
              Inicia sesión!
            </a>
          </p>
          {registerErrors.map((error: string, i: number) => (
            <div className="bg-danger text-white text-center mb-2" key={i}>
              {error}
            </div>
          ))}
          <div className="mb-3">
            <label htmlFor="full_name" className="form-label">
              Nombre Completo
            </label>
            <input
              type="text"
              {...register("full_name", { required: true })}
              className="form-control form-control-sm"
              id="full_name"
              name="full_name"
            />
            {errors.full_name && (
              <p className="text-danger mt-2"> Nombre Completo es requerido</p>
            )}
          </div>
          <div className="mb-3">
            <label htmlFor="dni" className="form-label">
              DNI
            </label>
            <input
              type="text"
              {...register("dni", { required: true })}
              className="form-control form-control-sm"
              id="dni"
              name="dni"
              maxLength={8}
            />
            {errors.dni && (
              <p className="text-danger mt-2"> DNI es requerido</p>
            )}
          </div>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">
              Email
            </label>
            <input
              type="email"
              {...register("email", { required: true })}
              className="form-control form-control-sm"
              id="email"
              name="email"
            />
            {errors.email && (
              <p className="text-danger mt-2"> Email es requerido</p>
            )}
          </div>
          <div className="mb-3">
            <label htmlFor="password" className="form-label">
              Contraseña
            </label>
            <input
              type="password"
              {...register("password", { required: true })}
              className="form-control form-control-sm"
              id="password"
              name="password"
            />
            {errors.password && (
              <p className="text-danger mt-2"> Contraseña es requerida</p>
            )}
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
