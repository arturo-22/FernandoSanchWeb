import { BrowserRouter, Route, Routes } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext";
import { Index } from "./components/Index";
import { Register } from "./components/Register";
import { Login } from "./components/Login";
import { Courses } from "./components/Courses";
import { Plans } from "./components/Plans";

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />}></Route>
          <Route path="/register" element={<Register />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/cursos" element={<Courses />}></Route>
          <Route path="/planes" element={<Plans />}></Route>
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
