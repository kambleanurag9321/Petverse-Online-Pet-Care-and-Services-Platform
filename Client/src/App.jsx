import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar.jsx";

import Home from "./pages/Home.jsx";
import Pets from "./pages/Pets.jsx";
import Adoption from "./pages/Adoption.jsx";
import Veterinary from "./pages/Veterinary.jsx";
import Community from "./pages/Community.jsx";
import Login from "./pages/Login.jsx";
import Register from "./pages/Register.jsx";

function App() {
  return (
    <BrowserRouter>

      <Navbar />

      <Routes>

        <Route path="/" element={<Home />} />

        <Route path="/pets" element={<Pets />} />

        <Route path="/adoption" element={<Adoption />} />

        <Route path="/veterinary" element={<Veterinary />} />

        <Route path="/community" element={<Community />} />

        <Route path="/login" element={<Login />} />

        <Route path="/register" element={<Register />} />

      </Routes>

    </BrowserRouter>
  );
}

export default App;