import { Link } from "react-router-dom";

function Register() {
  return (
    <div className="auth-page">
      <div className="auth-card">

        <div className="auth-logo">🐾</div>

        <h1>Create Account</h1>

        <p className="auth-subtitle">
          Join the PetVerse community
        </p>

        <form className="auth-form">

          <div className="form-group">
            <label htmlFor="name">Full Name</label>

            <input
              type="text"
              id="name"
              placeholder="Enter your full name"
            />
          </div>

          <div className="form-group">
            <label htmlFor="email">Email Address</label>

            <input
              type="email"
              id="email"
              placeholder="Enter your email"
            />
          </div>

          <div className="form-group">
            <label htmlFor="password">Password</label>

            <input
              type="password"
              id="password"
              placeholder="Create a password"
            />
          </div>

          <div className="form-group">
            <label htmlFor="confirmPassword">
              Confirm Password
            </label>

            <input
              type="password"
              id="confirmPassword"
              placeholder="Confirm your password"
            />
          </div>

          <button type="submit" className="auth-btn">
            Create Account
          </button>

        </form>

        <p className="auth-switch">
          Already have an account?
          <Link to="/login"> Login</Link>
        </p>

      </div>
    </div>
  );
}

export default Register;