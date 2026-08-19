import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import "./AddPet.css";
import { apiRequest } from "../services/api";

function EditPet() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    species: "",
    breed: "",
    gender: "Unknown",
    dateOfBirth: "",
    weight: "",
    medicalInfo: "",
    notes: "",
  });

  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState("");

  // Load existing pet
  useEffect(() => {
    const fetchPet = async () => {
      try {
        const token = localStorage.getItem("token");

        if (!token) {
          navigate("/login");
          return;
        }

        const pet = await apiRequest(`/pets/${id}`);

        setFormData({
          name: pet.name || "",
          species: pet.species || "",
          breed: pet.breed || "",
          gender: pet.gender || "Unknown",
          dateOfBirth: pet.dateOfBirth
            ? pet.dateOfBirth.substring(0, 10)
            : "",
          weight:
            pet.weight !== undefined && pet.weight !== null
              ? pet.weight
              : "",
          medicalInfo: pet.medicalInfo || "",
          notes: pet.notes || "",
        });
      } catch (err) {
        console.error("Fetch pet error:", err);
        setError(err.message || "Failed to load pet");
      } finally {
        setLoading(false);
      }
    };

    fetchPet();
  }, [id, navigate]);

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));

    setError("");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setSaving(true);
    setError("");

    try {
      const token = localStorage.getItem("token");

      if (!token) {
        navigate("/login");
        return;
      }

      await apiRequest(`/pets/${id}`, {
        method: "PUT",
        body: {
          name: formData.name,
          species: formData.species,
          breed: formData.breed,
          gender: formData.gender,
          dateOfBirth: formData.dateOfBirth || undefined,
          weight: formData.weight
            ? Number(formData.weight)
            : undefined,
          medicalInfo: formData.medicalInfo,
          notes: formData.notes,
        },
      });

      alert("Pet updated successfully! 🐾");

      navigate(`/pets/${id}`);
    } catch (err) {
      console.error("Update pet error:", err);
      setError(err.message || "Failed to update pet");
    } finally {
      setSaving(false);
    }
  };

  if (loading) {
    return (
      <div className="add-pet-page">
        <div className="add-pet-container">
          <div className="add-pet-header">
            <span className="pet-icon">🐾</span>
            <h1>Loading Pet...</h1>
            <p>Please wait while we load the pet information.</p>
          </div>
        </div>
      </div>
    );
  }

  if (error && !formData.name) {
    return (
      <div className="add-pet-page">
        <div className="add-pet-container">
          <div className="add-pet-header">
            <span className="pet-icon">⚠️</span>
            <h1>Unable to load pet</h1>
            <p>{error}</p>
          </div>

          <button
            className="add-pet-btn"
            onClick={() => navigate("/pets")}
          >
            ← Back to My Pets
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="add-pet-page">
      <div className="add-pet-container">

        <div className="add-pet-header">
          <span className="pet-icon">✏️</span>

          <h1>Edit Pet</h1>

          <p>
            Update {formData.name}'s information.
          </p>
        </div>

        {error && (
          <div className="error-message">
            {error}
          </div>
        )}

        <form
          onSubmit={handleSubmit}
          className="add-pet-form"
        >

          {/* NAME */}
          <div className="form-group">
            <label>Pet Name</label>

            <input
              type="text"
              name="name"
              placeholder="e.g. Bruno"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>

          {/* SPECIES + GENDER */}
          <div className="form-row">

            <div className="form-group">
              <label>Species</label>

              <select
                name="species"
                value={formData.species}
                onChange={handleChange}
                required
              >
                <option value="">Select species</option>
                <option value="Dog">Dog</option>
                <option value="Cat">Cat</option>
                <option value="Bird">Bird</option>
                <option value="Rabbit">Rabbit</option>
                <option value="Other">Other</option>
              </select>
            </div>

            <div className="form-group">
              <label>Gender</label>

              <select
                name="gender"
                value={formData.gender}
                onChange={handleChange}
                required
              >
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="Unknown">Unknown</option>
              </select>
            </div>

          </div>

          {/* BREED + DOB */}
          <div className="form-row">

            <div className="form-group">
              <label>Breed</label>

              <input
                type="text"
                name="breed"
                placeholder="e.g. Labrador"
                value={formData.breed}
                onChange={handleChange}
              />
            </div>

            <div className="form-group">
              <label>Date of Birth</label>

              <input
                type="date"
                name="dateOfBirth"
                value={formData.dateOfBirth}
                onChange={handleChange}
              />
            </div>

          </div>

          {/* WEIGHT */}
          <div className="form-group">
            <label>Weight (kg)</label>

            <input
              type="number"
              name="weight"
              placeholder="e.g. 12.5"
              min="0"
              step="0.1"
              value={formData.weight}
              onChange={handleChange}
            />
          </div>

          {/* MEDICAL INFO */}
          <div className="form-group">
            <label>Medical Information</label>

            <textarea
              name="medicalInfo"
              placeholder="Allergies, medical conditions, medications, etc."
              rows="4"
              value={formData.medicalInfo}
              onChange={handleChange}
            />
          </div>

          {/* NOTES */}
          <div className="form-group">
            <label>Notes</label>

            <textarea
              name="notes"
              placeholder="Any additional information about your pet..."
              rows="4"
              value={formData.notes}
              onChange={handleChange}
            />
          </div>

          {/* BUTTONS */}
          <div
            style={{
              display: "flex",
              gap: "12px",
            }}
          >
            <button
              type="button"
              className="add-pet-btn"
              style={{
                background: "#eee",
                color: "#555",
              }}
              onClick={() => navigate(`/pets/${id}`)}
            >
              Cancel
            </button>

            <button
              type="submit"
              className="add-pet-btn"
              disabled={saving}
            >
              {saving
                ? "Saving..."
                : "💾 Save Changes"}
            </button>
          </div>

        </form>
      </div>
    </div>
  );
}

export default EditPet;