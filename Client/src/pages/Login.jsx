import { Link } from "react-router-dom";

function Login() {
  return (
    <div className="auth-page">
      <div className="auth-card">

        <div className="auth-logo">🐾</div>

        <h1>Welcome Back</h1>

        <p className="auth-subtitle">
          Login to your PetVerse account
        </p>

        <form className="auth-form">

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
              placeholder="Enter your password"
            />
          </div>

          <div className="form-options">
            <label className="remember">
              <input type="checkbox" />
              Remember me
            </label>

            <a href="#">Forgot password?</a>
          </div>

          <button type="submit" className="auth-btn">
            Login
          </button>

        </form>

        <p className="auth-switch">
          Don't have an account?
          <Link to="/register"> Create one</Link>
        </p>

      </div>
    </div>
  );
}

export default Login;