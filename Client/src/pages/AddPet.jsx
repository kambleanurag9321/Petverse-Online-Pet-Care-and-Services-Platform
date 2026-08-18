import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./AddPet.css";

const API_URL = "http://localhost:5000/api";

function AddPet() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    species: "",
    breed: "",
    age: "",
    gender: "",
    weight: "",
    medicalNotes: "",
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setLoading(true);
    setError("");

    try {
      const token = localStorage.getItem("token");

      if (!token) {
        navigate("/login");
        return;
      }

      const response = await fetch(`${API_URL}/pets`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
          ...formData,
          age: Number(formData.age),
          weight: Number(formData.weight),
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Failed to add pet");
      }

      alert("Pet added successfully! 🐾");

      navigate("/pets");
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="add-pet-page">
      <div className="add-pet-container">
        <div className="add-pet-header">
          <span className="pet-icon">🐾</span>
          <h1>Add Your Pet</h1>
          <p>Tell us a little about your furry friend.</p>
        </div>

        {error && <div className="error-message">{error}</div>}

        <form onSubmit={handleSubmit} className="add-pet-form">
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
                <option value="">Select gender</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
              </select>
            </div>
          </div>

          <div className="form-row">
            <div className="form-group">
              <label>Breed</label>
              <input
                type="text"
                name="breed"
                placeholder="e.g. Labrador"
                value={formData.breed}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label>Age</label>
              <input
                type="number"
                name="age"
                placeholder="Age in years"
                min="0"
                value={formData.age}
                onChange={handleChange}
                required
              />
            </div>
          </div>

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

          <div className="form-group">
            <label>Medical Notes</label>
            <textarea
              name="medicalNotes"
              placeholder="Allergies, medical conditions, medications, etc."
              rows="4"
              value={formData.medicalNotes}
              onChange={handleChange}
            />
          </div>

          <button
            type="submit"
            className="add-pet-btn"
            disabled={loading}
          >
            {loading ? "Adding Pet..." : "🐾 Add Pet"}
          </button>
        </form>
      </div>
    </div>
  );
}

export default AddPet;