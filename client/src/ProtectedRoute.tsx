import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "./context/AuthContext";

const ProtectedRoute = () => {
  const { loading, isAuthenticated } = useAuth();

  if (loading) return <h1>Loanding...</h1>;
  if (!loading && !isAuthenticated) return <Navigate to="/login" replace></Navigate>;

  return <Outlet></Outlet>;
};

export default ProtectedRoute;
