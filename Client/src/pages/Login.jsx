import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { apiRequest } from "../services/api";

export default function Login() {
  const navigate = useNavigate();
  const { login } = useAuth();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));

    setError("");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.email || !formData.password) {
      setError("Please enter your email and password.");
      return;
    }

    try {
      setLoading(true);
      setError("");

      const data = await apiRequest("/auth/login", {
        method: "POST",
        body: formData,
      });

      login(data);

      navigate("/pets");
    } catch (error) {
      setError(error.message || "Invalid email or password.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="login-page">

      {/* LEFT SIDE */}
      <div className="login-visual">

        <div className="login-overlay"></div>

        <div className="login-brand">
          <div className="login-paw">🐾</div>

          <h1>PetVerse</h1>

          <p>
            A better world for
            <br />
            you and your pets.
          </p>

          <div className="login-pets">
            <span>🐶</span>
            <span>🐱</span>
            <span>🐰</span>
            <span>🐦</span>
          </div>
        </div>

      </div>

      {/* RIGHT SIDE */}
      <div className="login-container">

        <div className="login-card">

          <Link to="/" className="login-mobile-logo">
            🐾 PetVerse
          </Link>

          <div className="login-header">
            <span className="welcome-badge">
              👋 Welcome back
            </span>

            <h2>Sign in to PetVerse</h2>

            <p>
              Continue your pet's journey with us.
            </p>
          </div>

          {error && (
            <div className="login-error">
              <span>⚠️</span>
              {error}
            </div>
          )}

          <form onSubmit={handleSubmit}>

            {/* EMAIL */}
            <div className="login-field">

              <label htmlFor="email">
                Email address
              </label>

              <div className="login-input">

                <span>✉️</span>

                <input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="you@example.com"
                  value={formData.email}
                  onChange={handleChange}
                  autoComplete="email"
                />

              </div>

            </div>

            {/* PASSWORD */}
            <div className="login-field">

              <div className="password-top">

                <label htmlFor="password">
                  Password
                </label>

                <button
                  type="button"
                  className="forgot-btn"
                  onClick={() =>
                    alert("Password reset will be added soon.")
                  }
                >
                  Forgot password?
                </button>

              </div>

              <div className="login-input">

                <span>🔒</span>

                <input
                  id="password"
                  name="password"
                  type={showPassword ? "text" : "password"}
                  placeholder="Enter your password"
                  value={formData.password}
                  onChange={handleChange}
                  autoComplete="current-password"
                />

                <button
                  type="button"
                  className="show-password"
                  onClick={() =>
                    setShowPassword(!showPassword)
                  }
                >
                  {showPassword ? "🙈" : "👁️"}
                </button>

              </div>

            </div>

            {/* REMEMBER */}
            <label className="remember-me">

              <input type="checkbox" />

              <span>
                Remember me
              </span>

            </label>

            {/* LOGIN BUTTON */}
            <button
              type="submit"
              className="login-submit"
              disabled={loading}
            >
              {loading ? (
                <>
                  <span className="login-spinner"></span>
                  Signing in...
                </>
              ) : (
                <>
                  Sign In
                  <span>→</span>
                </>
              )}
            </button>

          </form>

          <div className="login-divider">
            <span>OR</span>
          </div>

          <div className="login-register">

            <p>
              Don't have an account?
            </p>

            <Link to="/register">
              Create an account
            </Link>

          </div>

          <Link to="/" className="login-home">
            ← Back to PetVerse
          </Link>

        </div>

      </div>

    </div>
  );
}