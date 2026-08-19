import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import PetProfile  from "./pages/PetProfile";
import EditPet from "./pages/EditPet";
import Profile from "./pages/Profile";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Pets from "./pages/Pets";
import AddPet from "./pages/AddPet";
import Adoption from "./pages/Adoption";
import Veterinary from "./pages/Veterinary";
import Community from "./pages/Community";

function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/profile" element={<Profile />} />
      
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/pets" element={<Pets />} />
        <Route path="/add-pet" element={<AddPet />} />
        <Route path="/pets/:id" element={<PetProfile />} />
        <Route path="/pets/:id/edit" element={<EditPet />} />
        <Route path="/adoption" element={<Adoption />} />
        <Route path="/veterinary" element={<Veterinary />} />
        <Route path="/community" element={<Community />} />

      </Routes>
    </>
  );
}

export default App;