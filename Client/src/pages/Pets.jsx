import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Pets.css";
import { apiRequest } from "../services/api";

function Pets() {
  const navigate = useNavigate();

  const [pets, setPets] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  // Fetch logged-in user's pets
  const fetchPets = async () => {
    try {
      setLoading(true);
      setError("");

      const token = localStorage.getItem("token");

      if (!token) {
        navigate("/login");
        return;
      }

      const data = await apiRequest("/pets");

      setPets(data);
    } catch (err) {
      console.error("Fetch pets error:", err);
      setError(err.message || "Failed to fetch pets");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchPets();
  }, []);

  // Delete pet
  const deletePet = async (id) => {
    const confirmed = window.confirm(
      "Are you sure you want to delete this pet?"
    );

    if (!confirmed) return;

    try {
      await apiRequest(`/pets/${id}`, {
        method: "DELETE",
      });

      // Remove deleted pet from screen
      setPets((currentPets) =>
        currentPets.filter((pet) => pet._id !== id)
      );
    } catch (err) {
      console.error("Delete pet error:", err);
      alert(err.message || "Failed to delete pet");
    }
  };

  // Loading state
  if (loading) {
    return (
      <div className="pets-page">
        <div className="pets-loading">
          <div className="loading-icon">🐾</div>

          <h2>Loading your pets...</h2>

          <p>
            Please wait while we fetch your PetVerse profile.
          </p>
        </div>
      </div>
    );
  }

  // Error state
  if (error) {
    return (
      <div className="pets-page">
        <div className="pets-error">
          <div className="error-icon">⚠️</div>

          <h2>Unable to load pets</h2>

          <p>{error}</p>

          <button
            className="add-pet-btn"
            onClick={fetchPets}
          >
            Try Again
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="pets-page">

      {/* HEADER */}
      <div className="pets-header">

        <div>
          <span className="pets-badge">
            🐾 My PetVerse
          </span>

          <h1>My Pets</h1>

          <p>
            Keep all your beloved pets and their information
            in one place.
          </p>
        </div>

        <button
          className="add-pet-btn"
          onClick={() => navigate("/add-pet")}
        >
          + Add Pet
        </button>

      </div>

      {/* NO PETS */}
      {pets.length === 0 ? (

        <div className="empty-pets">

          <div className="empty-icon">
            🐾
          </div>

          <h2>No pets yet</h2>

          <p>
            Add your first pet to your PetVerse profile.
          </p>

          <button
            className="add-pet-btn"
            onClick={() => navigate("/add-pet")}
          >
            + Add Your First Pet
          </button>

        </div>

      ) : (

        /* PET GRID */
        <div className="pets-grid">

          {pets.map((pet) => (

            <div
              className="pet-card"
              key={pet._id}
            >

              {/* PET IMAGE */}
              <div className="pet-image-container">

                {pet.profileImage ? (

                  <img
                    src={pet.profileImage}
                    alt={pet.name}
                  />

                ) : (

                  <div className="pet-placeholder">
                    🐾
                  </div>

                )}

                <span className="pet-type">
                  {pet.species}
                </span>

              </div>

              {/* PET INFORMATION */}
              <div className="pet-info">

                <h2>
                  {pet.name}
                </h2>

                <p className="pet-breed">
                  {pet.breed || "Breed not specified"}
                </p>

                {/* DETAILS */}
                <div className="pet-details">

                  <div>
                    <span>⚥</span>

                    <p>
                      <strong>
                        {pet.gender || "Unknown"}
                      </strong>
                    </p>
                  </div>

                  <div>
                    <span>🐾</span>

                    <p>
                      <strong>
                        {pet.species}
                      </strong>
                    </p>
                  </div>

                  <div>
                    <span>⚖️</span>

                    <p>
                      <strong>
                        {pet.weight
                          ? `${pet.weight} kg`
                          : "N/A"}
                      </strong>
                    </p>
                  </div>

                </div>

                {/* ACTIONS */}
                <div className="pet-actions">

                  {/* VIEW PROFILE */}
                  <button
                    className="view-btn"
                    onClick={() =>
                      navigate(`/pets/${pet._id}`)
                    }
                  >
                    View Profile
                  </button>

                  {/* DELETE */}
                  <button
                    className="delete-btn"
                    onClick={() =>
                      deletePet(pet._id)
                    }
                  >
                    Delete
                  </button>

                </div>

              </div>

            </div>

          ))}

        </div>

      )}

    </div>
  );
}

export default Pets;