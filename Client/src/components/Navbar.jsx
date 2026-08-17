import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-container">

        <Link to="/" className="logo">
          🐾 PetVerse
        </Link>

        <div className="nav-links">
          <Link to="/">Home</Link>
          <Link to="/pets">Pets</Link>
          <Link to="/adoption">Adoption</Link>
          <Link to="/veterinary">Veterinary</Link>
          <Link to="/community">Community</Link>
        </div>

        <div className="nav-actions">
          <Link to="/login">
            <button className="login-btn">
              Login
            </button>
          </Link>

          <Link to="/register">
            <button className="register-btn">
              Register
            </button>
          </Link>
        </div>

      </div>
    </nav>
  );
}

export default Navbar;