import { useEffect, useState } from "react";
import "./Pets.css";

const demoPets = [
  {
    id: 1,
    name: "Buddy",
    type: "Dog",
    breed: "Golden Retriever",
    age: 3,
    image:
      "https://images.unsplash.com/photo-1552053831-71594a27632d?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: 2,
    name: "Milo",
    type: "Cat",
    breed: "Persian",
    age: 2,
    image:
      "https://images.unsplash.com/photo-1573865526739-10659fec78a5?auto=format&fit=crop&w=600&q=80",
  },
];

function Pets() {
  const [pets, setPets] = useState([]);

  useEffect(() => {
    const savedPets = localStorage.getItem("petverse_pets");

    if (savedPets) {
      setPets(JSON.parse(savedPets));
    } else {
      setPets(demoPets);
      localStorage.setItem("petverse_pets", JSON.stringify(demoPets));
    }
  }, []);

  const deletePet = (id) => {
    const updatedPets = pets.filter((pet) => pet.id !== id);

    setPets(updatedPets);
    localStorage.setItem("petverse_pets", JSON.stringify(updatedPets));
  };

  return (
    <div className="pets-page">
      <div className="pets-header">
        <div>
          <span className="pets-badge">🐾 My PetVerse</span>

          <h1>My Pets</h1>

          <p>
            Keep all your beloved pets and their information in one place.
          </p>
        </div>

        <button
          className="add-pet-btn"
          onClick={() => alert("Pet form will be connected to backend later!")}
        >
          + Add Pet
        </button>
      </div>

      {pets.length === 0 ? (
        <div className="empty-pets">
          <div className="empty-icon">🐾</div>

          <h2>No pets yet</h2>

          <p>Add your first pet to your PetVerse profile.</p>

          <button className="add-pet-btn">
            + Add Your First Pet
          </button>
        </div>
      ) : (
        <div className="pets-grid">
          {pets.map((pet) => (
            <div className="pet-card" key={pet.id}>
              <div className="pet-image-container">
                <img src={pet.image} alt={pet.name} />

                <span className="pet-type">
                  {pet.type}
                </span>
              </div>

              <div className="pet-info">
                <h2>{pet.name}</h2>

                <p className="pet-breed">
                  {pet.breed}
                </p>

                <div className="pet-details">
                  <div>
                    <span>🎂</span>
                    <p>
                      <strong>{pet.age}</strong> years old
                    </p>
                  </div>

                  <div>
                    <span>🐾</span>
                    <p>
                      <strong>{pet.type}</strong>
                    </p>
                  </div>
                </div>

                <div className="pet-actions">
                  <button
                    className="view-btn"
                    onClick={() =>
                      alert(`Viewing ${pet.name}'s profile`)
                    }
                  >
                    View Profile
                  </button>

                  <button
                    className="delete-btn"
                    onClick={() => deletePet(pet.id)}
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