import nodemailer from "nodemailer";
import dotenv from "dotenv";
dotenv.config();

const transportConfigs = {
  gmail: {
    host: process.env.EMAIL_HOST_GMAIL,
    port: process.env.EMAIL_PORT_GMAIL,
    secure: false,
    auth: {
      user: process.env.EMAIL_USER_GMAIL,
      pass: process.env.EMAIL_PASS_GMAIL,
    },
  },
  outlook: {
    host: process.env.EMAIL_HOST_OUTLOOK,
    port: process.env.EMAIL_PORT_OUTLOOK,
    secure: false,
    auth: {
      user: process.env.EMAIL_USER_OUTLOOK,
      pass: process.env.EMAIL_PASS_OUTLOOK,
    },
  },
  yahoo: {
    host: process.env.EMAIL_HOST_YAHOO,
    port: process.env.EMAIL_PORT_YAHOO,
    secure: true,
    auth: {
      user: process.env.EMAIL_USER_YAHOO,
      pass: process.env.EMAIL_PASS_YAHOO,
    },
  },
};

export const createTransporter = (email) => {
  const domain = email.split("@")[1];
  if (domain === "gmail.com") {
    return nodemailer.createTransport(transportConfigs.gmail);
  } else if (domain === "outlook.com" || domain === "hotmail.com") {
    return nodemailer.createTransport(transportConfigs.outlook);
  } else if (domain === "yahoo.com") {
    return nodemailer.createTransport(transportConfigs.yahoo);
  } else {
    throw new Error("El dominio del correo no está soportado.");
  }
};

export const createMailOptions = (email, resetURL) => {
  return {
    to: email,
    from: "romero.culqui.arturo.20@gmail.com",
    subject: "Solicitud de restablecimiento de contraseña",
    text: `
      Estás recibiendo esto porque tú (o alguien más) solicitó el restablecimiento de la contraseña de tu cuenta.
      
      Por favor, haz clic en el siguiente enlace o pégalo en tu navegador para completar el proceso:
      ${resetURL}
      
      Si no solicitaste esto, ignora este correo y tu contraseña permanecerá sin cambios.
    `,
  };
};