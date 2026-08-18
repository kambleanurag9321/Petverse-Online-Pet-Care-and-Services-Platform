import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { apiRequest } from "../services/api";

export default function Register() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    phone: "",
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));

    setError("");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setError("");
    setSuccess("");

    if (!formData.name || !formData.email || !formData.password) {
      setError("Name, email and password are required.");
      return;
    }

    if (formData.password.length < 6) {
      setError("Password must be at least 6 characters.");
      return;
    }

    try {
      setLoading(true);

      await apiRequest("/auth/register", {
        method: "POST",
        body: formData,
      });

      setSuccess("Account created successfully! Redirecting...");

      setTimeout(() => {
        navigate("/login");
      }, 1200);
    } catch (err) {
      setError(err.message || "Unable to create account.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="register-page">

      {/* LEFT SIDE */}
      <div className="register-visual">
        <div className="register-brand">

          <div className="register-paw">
            🐾
          </div>

          <h1>PetVerse</h1>

          <p>
            Your pet's life,
            <br />
            organized in one place.
          </p>

          <div className="register-pets">
            <span>🐶</span>
            <span>🐱</span>
            <span>🐰</span>
            <span>🐦</span>
          </div>

        </div>
      </div>

      {/* RIGHT SIDE */}
      <div className="register-container">

        <div className="register-card">

          <Link to="/" className="register-mobile-logo">
            🐾 PetVerse
          </Link>

          <div className="register-header">

            <span className="register-badge">
              🐾 Join PetVerse
            </span>

            <h2>Create your account</h2>

            <p>
              Start managing everything your pet needs.
            </p>

          </div>

          {error && (
            <div className="register-error">
              ⚠️ {error}
            </div>
          )}

          {success && (
            <div className="register-success">
              ✓ {success}
            </div>
          )}

          <form onSubmit={handleSubmit}>

            {/* NAME */}
            <div className="register-field">

              <label htmlFor="name">
                Full name
              </label>

              <div className="register-input">

                <span>👤</span>

                <input
                  id="name"
                  name="name"
                  type="text"
                  placeholder="Enter your name"
                  value={formData.name}
                  onChange={handleChange}
                  autoComplete="name"
                />

              </div>

            </div>

            {/* EMAIL */}
            <div className="register-field">

              <label htmlFor="email">
                Email address
              </label>

              <div className="register-input">

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

            {/* PHONE */}
            <div className="register-field">

              <label htmlFor="phone">
                Phone number
                <small> (optional)</small>
              </label>

              <div className="register-input">

                <span>📱</span>

                <input
                  id="phone"
                  name="phone"
                  type="tel"
                  placeholder="Enter your phone number"
                  value={formData.phone}
                  onChange={handleChange}
                  autoComplete="tel"
                />

              </div>

            </div>

            {/* PASSWORD */}
            <div className="register-field">

              <label htmlFor="password">
                Password
              </label>

              <div className="register-input">

                <span>🔒</span>

                <input
                  id="password"
                  name="password"
                  type="password"
                  placeholder="At least 6 characters"
                  value={formData.password}
                  onChange={handleChange}
                  autoComplete="new-password"
                />

              </div>

            </div>

            {/* SUBMIT */}
            <button
              type="submit"
              className="register-submit"
              disabled={loading}
            >
              {loading ? (
                <>
                  <span className="register-spinner"></span>
                  Creating account...
                </>
              ) : (
                <>
                  Create Account
                  <span>→</span>
                </>
              )}
            </button>

          </form>

          <div className="register-login">

            <span>
              Already have an account?
            </span>

            <Link to="/login">
              Sign in
            </Link>

          </div>

          <Link to="/" className="register-home">
            ← Back to PetVerse
          </Link>

        </div>

      </div>

    </div>
  );
}