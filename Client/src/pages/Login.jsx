import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Login.css";

function Login() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });

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

      const API_URL =
        import.meta.env.VITE_API_URL || "http://localhost:5000/api";

      const response = await fetch(`${API_URL}/auth/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: formData.email.trim(),
          password: formData.password,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Invalid email or password.");
      }

      if (!data.token) {
        throw new Error("Login response did not contain an authentication token.");
      }

      const storage = rememberMe ? localStorage : sessionStorage;

      storage.setItem("petverse_token", data.token);

      if (data.user) {
        storage.setItem("petverse_user", JSON.stringify(data.user));
      }

      navigate("/");
    } catch (err) {
      setError(err.message || "Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="login-page">
      <div className="login-container">

        {/* LEFT SIDE */}
        <div className="login-visual">
          <div className="login-brand">
            <span className="brand-icon">🐾</span>
            <span>PetVerse</span>
          </div>

          <div className="login-visual-content">
            <span className="visual-tag">WELCOME TO PETVERSE</span>

            <h1>
              Every pet deserves
              <br />
              a <span>loving home.</span>
            </h1>

            <p>
              Connect with fellow pet lovers, discover adorable pets,
              find veterinary care, and give your furry friends the
              happiness they deserve.
            </p>

            <div className="visual-features">
              <div>
                <span>🐶</span>
                <p>Pet Care</p>
              </div>

              <div>
                <span>🏡</span>
                <p>Adoption</p>
              </div>

              <div>
                <span>🩺</span>
                <p>Veterinary</p>
              </div>
            </div>
          </div>

          <div className="visual-footer">
            Made with ❤️ for every pet lover
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className="login-form-section">

          <div className="mobile-brand">
            <span>🐾</span> PetVerse
          </div>

          <div className="login-form-wrapper">
            <div className="login-heading">
              <span className="welcome-label">WELCOME BACK</span>

              <h2>Sign in to PetVerse</h2>

              <p>
                Enter your details to access your account.
              </p>
            </div>

            <form onSubmit={handleSubmit}>

              {/* EMAIL */}
              <div className="login-input-group">
                <label htmlFor="email">Email Address</label>

                <div className="login-input-wrapper">
                  <span className="input-icon">✉</span>

                  <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="Enter your email"
                    value={formData.email}
                    onChange={handleChange}
                    autoComplete="email"
                    required
                  />
                </div>
              </div>

              {/* PASSWORD */}
              <div className="login-input-group">
                <label htmlFor="password">Password</label>

                <div className="login-input-wrapper">
                  <span className="input-icon">🔒</span>

                  <input
                    type={showPassword ? "text" : "password"}
                    id="password"
                    name="password"
                    placeholder="Enter your password"
                    value={formData.password}
                    onChange={handleChange}
                    autoComplete="current-password"
                    required
                  />

                  <button
                    type="button"
                    className="password-toggle"
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    {showPassword ? "Hide" : "Show"}
                  </button>
                </div>
              </div>

              {/* REMEMBER ME */}
              <div className="login-options">
                <label className="remember-label">
                  <input
                    type="checkbox"
                    checked={rememberMe}
                    onChange={(e) => setRememberMe(e.target.checked)}
                  />

                  <span>Remember me</span>
                </label>

                <span className="forgot-password">
                  Forgot password?
                </span>
              </div>

              {/* ERROR */}
              {error && (
                <div className="login-error">
                  {error}
                </div>
              )}

              {/* LOGIN BUTTON */}
              <button
                type="submit"
                className="login-submit-btn"
                disabled={loading}
              >
                {loading ? "Signing in..." : "Sign In"}
                {!loading && <span>→</span>}
              </button>

            </form>

            <div className="login-divider">
              <span>OR</span>
            </div>

            <p className="register-text">
              Don't have an account?

              <Link to="/register">
                Create an account
              </Link>
            </p>

            <Link to="/" className="back-home">
              ← Back to Home
            </Link>

          </div>

          <div className="login-bottom-text">
            © 2026 PetVerse. All rights reserved.
          </div>

        </div>
      </div>
    </div>
  );
}

export default Login;