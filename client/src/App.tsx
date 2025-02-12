import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Index } from "./components/Index";
import { Register } from "./components/Register";
import { Login } from "./components/Login";
import { Courses } from "./components/Courses";
import { Plans } from "./components/Plans";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Index />}></Route>
        <Route path="/acceso" element={<Login />}></Route>
        <Route path="/registro" element={<Register />}></Route>
        <Route path="/cursos" element={<Courses />}></Route>
        <Route path="/planes" element={<Plans />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
