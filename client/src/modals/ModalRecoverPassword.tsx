import React from "react";
import { Modal, Button, Form } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { usePassword } from "../context/PasswordContext";

interface ModalRecoverPasswordProps {
  isOpen: boolean;
  onClose: () => void;
}

const ModalRecoverPassword: React.FC<ModalRecoverPasswordProps> = ({
  isOpen,
  onClose,
}) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const { sendResetPasswordEmail, errors: emailErrors } = usePassword();

  const onSubmit = handleSubmit((data: any) => {
    sendResetPasswordEmail(data);
  });

  return (
    <Modal show={isOpen} onHide={onClose} centered>
      <Modal.Header className="position-relative border-0">
        <Modal.Title className="fw-bold fs-2 mt-4 text-center w-100">
          Recuperar Contraseña
        </Modal.Title>
        <button
          type="button"
          className="btn-close"
          aria-label="Close"
          style={{
            position: "absolute",
            top: "1rem",
            right: "1rem",
          }}
          onClick={onClose}
        ></button>
      </Modal.Header>

      <Form onSubmit={onSubmit}>
        <Modal.Body>
          {emailErrors.map((error: string, i: number) => (
            <div className="bg-danger text-white text-center mb-2" key={i}>
              {error}
            </div>
          ))}
          <p className="text-muted fs-5 mx-4" style={{ textAlign: "justify" }}>
            Ingresa el email de tu cuenta y te enviaremos un link para
            reestablecer la contraseña.
          </p>
          <Form.Group controlId="email" className="mx-4 mt-4">
            <Form.Control
              type="email"
              placeholder="Ingresa tu correo"
              className="form-control-lg"
              {...register("email", { required: true })}
            />
            {errors.email && (
              <p className="text-danger mt-2"> Ingrese su correo eléctronico</p>
            )}
          </Form.Group>
        </Modal.Body>
        <Modal.Footer className="border-0 mb-4">
          <Button
            type="submit"
            className="fw-bold btn-lg w-100 mx-4"
            style={{
              backgroundColor: "#fac52a",
              border: "none",
              color: "#000000",
            }}
          >
            Enviar
          </Button>
        </Modal.Footer>
      </Form>
    </Modal>
  );
};

export default ModalRecoverPassword;
