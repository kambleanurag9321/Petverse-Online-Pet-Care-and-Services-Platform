import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import "./Profile.css";

function Profile() {
  const navigate = useNavigate();
  const { user, logout } = useAuth();

  if (!user) {
    return (
      <div className="profile-page">
        <div className="profile-card">
          <h2>Please login first</h2>

          <button
            onClick={() => navigate("/login")}
            className="profile-btn"
          >
            Go to Login
          </button>
        </div>
      </div>
    );
  }

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  return (
    <div className="profile-page">

      <div className="profile-card">

        {/* HEADER */}
        <div className="profile-header">

          <div className="profile-avatar">
            {user.name
              ? user.name.charAt(0).toUpperCase()
              : "U"}
          </div>

          <div>
            <span className="profile-badge">
              👤 My Profile
            </span>

            <h1>
              {user.name}
            </h1>

            <p>
              Manage your PetVerse account.
            </p>
          </div>

        </div>

        {/* USER DETAILS */}
        <div className="profile-details">

          <div className="profile-detail">
            <span className="detail-icon">👤</span>

            <div>
              <small>Full Name</small>
              <strong>{user.name}</strong>
            </div>
          </div>

          <div className="profile-detail">
            <span className="detail-icon">✉️</span>

            <div>
              <small>Email Address</small>
              <strong>{user.email}</strong>
            </div>
          </div>

          <div className="profile-detail">
            <span className="detail-icon">🛡️</span>

            <div>
              <small>Account Type</small>
              <strong>
                {user.role || "user"}
              </strong>
            </div>
          </div>

        </div>

        {/* ACTIONS */}
        <div className="profile-actions">

          <button
            className="profile-btn secondary"
            onClick={() => navigate("/pets")}
          >
            🐾 My Pets
          </button>

          <button
            className="profile-btn logout"
            onClick={handleLogout}
          >
            Logout
          </button>

        </div>

      </div>

    </div>
  );
}

export default Profile;