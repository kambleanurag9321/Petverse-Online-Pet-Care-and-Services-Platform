import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import "./Navbar.css";

function Navbar() {
  const navigate = useNavigate();
  const { user, isAuthenticated, logout } = useAuth();

  const [menuOpen, setMenuOpen] = useState(false);

  const handleLogout = () => {
    logout();
    setMenuOpen(false);
    navigate("/login");
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">

        {/* LOGO */}
        <Link to="/" className="navbar-logo">
          <div className="logo-icon">🐾</div>

          <div className="logo-text">
            <span>Pet</span>Verse
          </div>
        </Link>

        {/* NAVIGATION */}
        <div className="navbar-links">

          <Link to="/" className="nav-link">
            <span>⌂</span>
            Home
          </Link>

          <Link to="/pets" className="nav-link">
            <span>🐾</span>
            My Pets
          </Link>

          <Link to="/adoption" className="nav-link">
            <span>🏠</span>
            Adoption
          </Link>

          <Link to="/veterinary" className="nav-link">
            <span>🩺</span>
            Veterinary
          </Link>

          <Link to="/community" className="nav-link">
            <span>💬</span>
            Community
          </Link>

        </div>

        {/* RIGHT SIDE */}
        <div className="navbar-actions">

          {isAuthenticated ? (
            <div className="user-menu">

              {/* USER BUTTON */}
              <button
                className="user-button"
                onClick={() => setMenuOpen(!menuOpen)}
              >
                <div className="user-avatar">
                  {user?.name
                    ? user.name.charAt(0).toUpperCase()
                    : "U"}
                </div>

                <div className="user-info">
                  <span className="user-welcome">
                    Welcome back
                  </span>

                  <span className="user-name">
                    {user?.name || user?.email}
                  </span>
                </div>

                <span
                  className={`user-arrow ${
                    menuOpen ? "rotate" : ""
                  }`}
                >
                  ▼
                </span>
              </button>

              {/* DROPDOWN */}
              {menuOpen && (
                <div className="user-dropdown">

                  <div className="dropdown-header">
                    <div className="dropdown-avatar">
                      {user?.name
                        ? user.name.charAt(0).toUpperCase()
                        : "U"}
                    </div>

                    <div>
                      <strong>
                        {user?.name || "PetVerse User"}
                      </strong>

                      <small>
                        {user?.email}
                      </small>
                    </div>
                  </div>

                  <div className="dropdown-divider"></div>

                  <Link
                    to="/pets"
                    className="dropdown-item"
                    onClick={() => setMenuOpen(false)}
                  >
                    <span>🐾</span>
                    <div>
                      <strong>My Pets</strong>
                      <small>Manage your pets</small>
                    </div>
                  </Link>

                  <Link
                    to="/profile"
                    className="dropdown-item"
                    onClick={() => setMenuOpen(false)}
                  >
                    <span>👤</span>
                    <div>
                      <strong>My Profile</strong>
                      <small>View your account</small>
                    </div>
                  </Link>

                  <div className="dropdown-divider"></div>

                  <button
                    className="dropdown-logout"
                    onClick={handleLogout}
                  >
                    <span>↪</span>
                    Logout
                  </button>

                </div>
              )}

            </div>
          ) : (
            <>
              <Link to="/login" className="nav-login">
                Login
              </Link>

              <Link to="/register" className="nav-register">
                <span>Get Started</span>
                <span>→</span>
              </Link>
            </>
          )}

        </div>

      </div>
    </nav>
  );
}

export default Navbar;