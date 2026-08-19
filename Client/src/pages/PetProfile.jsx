import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import "./PetProfile.css";
import { apiRequest } from "../services/api";

function PetProfile() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [pet, setPet] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchPet = async () => {
      try {
        const token = localStorage.getItem("token");

        if (!token) {
          navigate("/login");
          return;
        }

        const data = await apiRequest(`/pets/${id}`);

        setPet(data);
      } catch (err) {
        console.error("Fetch pet error:", err);
        setError(err.message || "Failed to load pet");
      } finally {
        setLoading(false);
      }
    };

    fetchPet();
  }, [id, navigate]);

  if (loading) {
    return (
      <div className="pet-profile-page">
        <div className="pet-profile-loading">
          <div>🐾</div>
          <h2>Loading pet profile...</h2>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="pet-profile-page">
        <div className="pet-profile-error">
          <div>⚠️</div>

          <h2>Unable to load pet</h2>

          <p>{error}</p>

          <button onClick={() => navigate("/pets")}>
            ← Back to My Pets
          </button>
        </div>
      </div>
    );
  }

  if (!pet) {
    return null;
  }

  return (
    <div className="pet-profile-page">

      <div className="pet-profile-container">

        {/* BACK BUTTON */}
        <Link to="/pets" className="pet-back">
          ← Back to My Pets
        </Link>

        {/* PROFILE CARD */}
        <div className="pet-profile-card">

          {/* IMAGE */}
          <div className="pet-profile-image">

            {pet.profileImage ? (
              <img
                src={pet.profileImage}
                alt={pet.name}
              />
            ) : (
              <div className="pet-profile-placeholder">
                🐾
              </div>
            )}

          </div>

          {/* MAIN INFO */}
          <div className="pet-profile-main">

            <span className="pet-profile-badge">
              {pet.species}
            </span>

            <h1>{pet.name}</h1>

            <p className="pet-profile-breed">
              {pet.breed || "Breed not specified"}
            </p>

            <div className="pet-profile-details">

              <div>
                <span>⚥</span>

                <small>Gender</small>

                <strong>
                  {pet.gender || "Unknown"}
                </strong>
              </div>

              <div>
                <span>⚖️</span>

                <small>Weight</small>

                <strong>
                  {pet.weight
                    ? `${pet.weight} kg`
                    : "Not specified"}
                </strong>
              </div>

              <div>
                <span>🎂</span>

                <small>Date of Birth</small>

                <strong>
                  {pet.dateOfBirth
                    ? new Date(
                        pet.dateOfBirth
                      ).toLocaleDateString()
                    : "Not specified"}
                </strong>
              </div>

            </div>

            {/* ACTION BUTTONS */}
            <div className="pet-profile-actions">

              <button
                onClick={() =>
                  navigate(`/pets/${pet._id}/edit`)
                }
                className="edit-pet-button"
              >
                ✏️ Edit Pet
              </button>

              <button
                onClick={() => navigate("/pets")}
                className="back-pets-button"
              >
                🐾 My Pets
              </button>

            </div>

          </div>

        </div>

        {/* MEDICAL INFORMATION */}
        <div className="pet-information-card">

          <div className="information-header">

            <span>🩺</span>

            <div>
              <h2>Medical Information</h2>

              <p>
                Important health information about {pet.name}.
              </p>
            </div>

          </div>

          <div className="medical-content">

            {pet.medicalInfo ? (
              <p>{pet.medicalInfo}</p>
            ) : (
              <p className="empty-info">
                No medical information has been added yet.
              </p>
            )}

          </div>

        </div>

        {/* VACCINATIONS */}
        <div className="pet-information-card">

          <div className="information-header">

            <span>💉</span>

            <div>
              <h2>Vaccinations</h2>

              <p>
                Keep track of {pet.name}'s vaccinations.
              </p>
            </div>

          </div>

          {pet.vaccinations &&
          pet.vaccinations.length > 0 ? (
            <div className="vaccination-list">

              {pet.vaccinations.map(
                (vaccination, index) => (
                  <div
                    className="vaccination-item"
                    key={index}
                  >
                    <strong>
                      {vaccination.name}
                    </strong>

                    <span>
                      {vaccination.date
                        ? new Date(
                            vaccination.date
                          ).toLocaleDateString()
                        : "Date not specified"}
                    </span>
                  </div>
                )
              )}

            </div>
          ) : (
            <p className="empty-info">
              No vaccinations have been added yet.
            </p>
          )}

        </div>

        {/* NOTES */}
        <div className="pet-information-card">

          <div className="information-header">

            <span>📝</span>

            <div>
              <h2>Notes</h2>

              <p>
                Additional information about {pet.name}.
              </p>
            </div>

          </div>

          <div className="medical-content">

            {pet.notes ? (
              <p>{pet.notes}</p>
            ) : (
              <p className="empty-info">
                No additional notes.
              </p>
            )}

          </div>

        </div>

      </div>

    </div>
  );
}

export default PetProfile;