import { useState } from "react";
import { Link } from "react-router-dom";
import "./Adoption.css";

function Adoption() {
  const [search, setSearch] = useState("");
  const [species, setSpecies] = useState("All");

  const pets = [
    {
      id: 1,
      name: "Bruno",
      species: "Dog",
      breed: "Labrador Retriever",
      age: "2 years",
      gender: "Male",
      location: "Mumbai",
      image: "🐶",
      description:
        "Bruno is a friendly and playful Labrador looking for a loving family.",
    },
    {
      id: 2,
      name: "Luna",
      species: "Cat",
      breed: "Persian",
      age: "1 year",
      gender: "Female",
      location: "Pune",
      image: "🐱",
      description:
        "Luna is a gentle and affectionate cat who loves attention and cuddles.",
    },
    {
      id: 3,
      name: "Max",
      species: "Dog",
      breed: "Golden Retriever",
      age: "3 years",
      gender: "Male",
      location: "Navi Mumbai",
      image: "🐕",
      description:
        "Max is energetic, loyal and loves playing outdoors with people.",
    },
    {
      id: 4,
      name: "Milo",
      species: "Rabbit",
      breed: "Mini Lop",
      age: "8 months",
      gender: "Male",
      location: "Thane",
      image: "🐰",
      description:
        "Milo is a calm and adorable rabbit looking for a peaceful home.",
    },
    {
      id: 5,
      name: "Coco",
      species: "Bird",
      breed: "Cockatiel",
      age: "1 year",
      gender: "Female",
      location: "Mumbai",
      image: "🐦",
      description:
        "Coco is a cheerful little bird who enjoys company and attention.",
    },
    {
      id: 6,
      name: "Bella",
      species: "Dog",
      breed: "Beagle",
      age: "2 years",
      gender: "Female",
      location: "Pune",
      image: "🐕",
      description:
        "Bella is a loving Beagle who would make a wonderful family companion.",
    },
  ];

  const filteredPets = pets.filter((pet) => {
    const matchesSpecies =
      species === "All" || pet.species === species;

    const searchText = search.toLowerCase();

    const matchesSearch =
      pet.name.toLowerCase().includes(searchText) ||
      pet.breed.toLowerCase().includes(searchText) ||
      pet.location.toLowerCase().includes(searchText);

    return matchesSpecies && matchesSearch;
  });

  return (
    <div className="adoption-page">

      {/* HERO */}
      <section className="adoption-hero">

        <div className="adoption-hero-content">

          <span className="adoption-badge">
            🐾 Find a New Friend
          </span>

          <h1>
            Give a Pet a
            <span> Forever Home</span>
          </h1>

          <p>
            Every pet deserves a loving family. Explore pets
            looking for their forever home and find your perfect
            companion.
          </p>

          <div className="adoption-stats">

            <div>
              <strong>120+</strong>
              <span>Pets Available</span>
            </div>

            <div>
              <strong>85+</strong>
              <span>Happy Adoptions</span>
            </div>

            <div>
              <strong>40+</strong>
              <span>Rescue Partners</span>
            </div>

          </div>

        </div>

        <div className="adoption-hero-image">
          <div className="hero-pet">🐶</div>
          <div className="hero-heart">♥</div>
        </div>

      </section>

      {/* SEARCH */}
      <section className="adoption-content">

        <div className="adoption-heading">

          <div>
            <span className="section-badge">
              🏠 Adoption Center
            </span>

            <h2>Find Your Perfect Companion</h2>

            <p>
              Browse through pets waiting for a loving home.
            </p>
          </div>

        </div>

        <div className="adoption-filters">

          <div className="search-box">

            <span>🔍</span>

            <input
              type="text"
              placeholder="Search by name, breed or location..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />

          </div>

          <div className="species-filters">

            {["All", "Dog", "Cat", "Bird", "Rabbit"].map(
              (item) => (
                <button
                  key={item}
                  className={
                    species === item
                      ? "species-btn active"
                      : "species-btn"
                  }
                  onClick={() => setSpecies(item)}
                >
                  {item === "All" && "🐾 "}
                  {item === "Dog" && "🐶 "}
                  {item === "Cat" && "🐱 "}
                  {item === "Bird" && "🐦 "}
                  {item === "Rabbit" && "🐰 "}
                  {item}
                </button>
              )
            )}

          </div>

        </div>

        {/* PET GRID */}
        {filteredPets.length > 0 ? (
          <div className="adoption-grid">

            {filteredPets.map((pet) => (

              <div className="adoption-card" key={pet.id}>

                <div className="adoption-card-image">

                  <div className="adoption-pet-emoji">
                    {pet.image}
                  </div>

                  <span className="available-badge">
                    ● Available
                  </span>

                  <button
                    className="favorite-btn"
                    onClick={() =>
                      alert(
                        `${pet.name} added to favorites ❤️`
                      )
                    }
                  >
                    ♡
                  </button>

                </div>

                <div className="adoption-card-content">

                  <div className="pet-title-row">

                    <div>
                      <h3>{pet.name}</h3>
                      <p>{pet.breed}</p>
                    </div>

                    <span className="pet-gender">
                      {pet.gender === "Male" ? "♂" : "♀"}
                    </span>

                  </div>

                  <div className="pet-meta">

                    <span>🎂 {pet.age}</span>

                    <span>📍 {pet.location}</span>

                  </div>

                  <p className="pet-description">
                    {pet.description}
                  </p>

                  <Link
                    to={`/adoption/${pet.id}`}
                    className="adoption-view-btn"
                  >
                    Meet {pet.name}
                    <span>→</span>
                  </Link>

                </div>

              </div>

            ))}

          </div>
        ) : (

          <div className="no-adoption-results">

            <div>🐾</div>

            <h3>No pets found</h3>

            <p>
              Try searching for another name, breed or location.
            </p>

            <button
              onClick={() => {
                setSearch("");
                setSpecies("All");
              }}
            >
              Clear Filters
            </button>

          </div>

        )}

      </section>

      {/* CTA */}
      <section className="adoption-cta">

        <div>

          <span>❤️ Want to help?</span>

          <h2>
            Can't adopt? You can still make a difference.
          </h2>

          <p>
            Support rescue organizations and help provide
            food, shelter and medical care for pets in need.
          </p>

          <button
            onClick={() =>
              alert("Donation feature coming soon! ❤️")
            }
          >
            Support a Pet →
          </button>

        </div>

        <div className="cta-pets">
          🐶 🐱 🐰
        </div>

      </section>

    </div>
  );
}

export default Adoption;