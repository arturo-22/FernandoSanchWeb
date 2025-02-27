import { BrowserRouter, Route, Routes } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext";
import Index from "./components/Index";
import RegisterPage from "./pages/RegisterPage";
import LoginPage from "./pages/LoginPage";
import CoursesPage from "./pages/CoursesPage";
import PlansPage from "./pages/PlansPage";
import ProtectedRoute from "./ProtectedRoute";
import { PasswordProvider } from "./context/PasswordContext";

function App() {
  return (
    <AuthProvider>
      <PasswordProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />}></Route>
            <Route path="/register" element={<RegisterPage />}></Route>
            <Route path="/login" element={<LoginPage />}></Route>
            <Route element={<ProtectedRoute />}>
              <Route path="/courses" element={<CoursesPage />}></Route>
              <Route path="/plans" element={<PlansPage />}></Route>
            </Route>
          </Routes>
        </BrowserRouter>
      </PasswordProvider>
    </AuthProvider>
  );
}

export default App;
