import { z } from "zod";

export const registerSchema = z.object({
  full_name: z.string({
    required_error: "Debe ingresar su nombre completo",
  }),
  dni: z.string({
    required_error: "Debe ingresar su DNI",
  }),
  email: z
    .string({
      required_error: "Debe ingresar su correo electronico",
    })
    .email({
      message: "Correo electronico inválido",
    }),
  password: z
    .string({
      required_error: "Debe ingresar su contraseña",
    })
    .min(8, {
      message: "La contraseña debe tener al menos 8 caracteres",
    }),
});

export const loginSchema = z.object({
  userName: z
    .string({
      required_error: "DNI o Email is required",
    }),
  password: z
    .string({
      required_error: "Password is required",
    })
    .min(8, {
      message: "La contraseña debe tener al menos 8 caracteres",
    }),
});
