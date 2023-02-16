import { BrowserRouter, Routes, Route } from "react-router-dom";
import routes from "./Constants/routes";
import Login from "./pages/login/login";
import Register from "./pages/registration/registration";
import Home from "./pages/home/home";
import "./App.css";

export default function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path={routes.home} element={<Home />} />
          <Route path={routes.register} element={<Register />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
