import { createContext, useState, useContext } from "react";
import { registerRequest } from "../api/users.api";
import { User } from "../interfaces/user.ts";

export const AuthContext = createContext<any>(null);

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};

export const AuthProvider = ({ children }: any) => {
  const [user, setUser] = useState<User | null>(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [errors, setErrors] = useState<any>([]);

  const signup = async (user: User) => {
    try {
      const res = await registerRequest(user);
      setUser(res);
      setIsAuthenticated(true);
    } catch (error) {
      if (error instanceof Error && (error as any)?.response?.data)
        setErrors((error as any).response.data);
    }
  };

  return (
    <AuthContext.Provider
      value={{
        signup,
        user,
        isAuthenticated,
        errors,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
