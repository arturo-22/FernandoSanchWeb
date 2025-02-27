import { createContext, useContext, useState } from "react";
import { resetPasswordRequest } from "../api/auth";

const PasswordContext = createContext<any>(null);

export const usePassword = () => {
  const context = useContext(PasswordContext);

  if (!context) {
    throw new Error("usePassword must be used within a PasswordProvider");
  }

  return context;
};

export function PasswordProvider({ children }: any) {
  const [email, setEmail] = useState<string>();
  const [errors, setErrors] = useState<any>([]);

  const sendResetPasswordEmail = async (email: string) => {
    try {
      const res = await resetPasswordRequest(email);
      setEmail(res);
    } catch (error) {
      if (error instanceof Error && (error as any)?.response?.data) {
        const errorData = (error as any).response.data;
        setErrors(Array.isArray(errorData) ? errorData : [errorData]);
      }
    }
  };

  return (
    <PasswordContext.Provider value={{ sendResetPasswordEmail, email, errors }}>
      {children}
    </PasswordContext.Provider>
  );
}
