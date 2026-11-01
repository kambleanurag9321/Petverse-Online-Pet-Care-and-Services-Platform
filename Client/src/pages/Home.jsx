import { Link } from "react-router-dom";

function Home() {
  return (
    <>
      {/* HERO SECTION */}
      <section className="hero">
        <div className="hero-content">
          <span className="hero-badge">
            🐾 Welcome to PetVerse
          </span>

          <h1>
            Everything Your
            <span> Pet Deserves.</span>
          </h1>

          <p>
            A complete digital community for pet lovers.
            Discover pets, find adoption opportunities,
            connect with veterinarians, and give your pets
            the care they deserve.
          </p>

          <div className="hero-buttons">
            <Link to="/pets" className="primary-btn">
              Explore Pets <span>→</span>
            </Link>

            <Link to="/veterinary" className="secondary-btn">
              Find a Vet <span>↗</span>
            </Link>
          </div>
        </div>

        <div className="hero-image">
          <img
            src="https://images.unsplash.com/photo-1552053831-71594a27632d?auto=format&fit=crop&w=1000&q=85"
            alt="Happy golden retriever"
          />

          <div className="hero-float-card">
            <span>♥</span>
            <div>
              <strong>Made for pet lovers</strong>
              <small>Care • Connect • Adopt</small>
            </div>
          </div>

          <span className="hero-sparkle sparkle-one">✦</span>
          <span className="hero-sparkle sparkle-two">✦</span>
        </div>
      </section>

      {/* FEATURES SECTION */}
      <section className="features">
        <div className="section-heading">
          <span>Why PetVerse?</span>

          <h2>
            Everything your pet needs, in one place.
          </h2>

          <p>
            PetVerse connects pet owners with the people, services,
            and community they need to give their pets a better life.
          </p>
        </div>

        <div className="feature-grid">
          <div className="feature-card">
            <div className="feature-icon">🐾</div>
            <h3>Discover Pets</h3>
            <p>
              Explore different pets, breeds, and pet-friendly
              resources in one simple platform.
            </p>
          </div>

          <div className="feature-card">
            <div className="feature-icon">🏠</div>
            <h3>Pet Adoption</h3>
            <p>
              Discover pets looking for loving homes and connect
              with adoption opportunities.
            </p>
          </div>

          <div className="feature-card">
            <div className="feature-icon">🩺</div>
            <h3>Veterinary Care</h3>
            <p>
              Find veterinary services and useful information to
              help keep your pet healthy.
            </p>
          </div>

          <div className="feature-card">
            <div className="feature-icon">💬</div>
            <h3>Pet Community</h3>
            <p>
              Connect with other pet lovers, share experiences,
              and build a community around your pets.
            </p>
          </div>
        </div>
      </section>

      {/* PET TYPES SECTION */}
      <section className="pet-types">
        <div className="section-heading">
          <span>Explore Pets</span>

          <h2>Find your perfect companion.</h2>

          <p>
            Explore different types of pets and discover everything
            you need to know about caring for them.
          </p>
        </div>

        <div className="pet-type-grid">
          {[
            ["🐶", "Dogs", "Loyal companions full of love and energy."],
            ["🐱", "Cats", "Independent, playful, and affectionate companions."],
            ["🐰", "Rabbits", "Gentle and adorable pets for loving homes."],
            ["🐦", "Birds", "Colorful, intelligent, and fascinating companions."],
            ["🐹", "Small Pets", "Discover hamsters, guinea pigs, and other small pets."],
            ["🐠", "Fish", "Create a beautiful underwater world in your home."]
          ].map(([icon, name, description]) => (
            <div className="pet-type-card" key={name}>
              <div className="pet-type-icon">{icon}</div>
              <h3>{name}</h3>
              <p>{description}</p>

              <Link to="/pets" className="pet-type-link">
                Explore {name} →
              </Link>
            </div>
          ))}
        </div>
      </section>

      {/* ADOPTION SECTION */}
      <section className="adoption">
        <div className="section-heading">
          <span>Pet Adoption</span>

          <h2>Meet pets looking for a home.</h2>

          <p>
            Every pet deserves a loving family. Discover pets available
            for adoption and find your new best friend.
          </p>
        </div>

        <div className="adoption-grid">
          {[
            {
              name: "Buddy",
              breed: "Golden Retriever",
              age: "2 Years",
              location: "Mumbai",
              gender: "♂",
              icon: "🐶"
            },
            {
              name: "Luna",
              breed: "Persian Cat",
              age: "1 Year",
              location: "Navi Mumbai",
              gender: "♀",
              icon: "🐱"
            },
            {
              name: "Coco",
              breed: "Holland Lop",
              age: "8 Months",
              location: "Thane",
              gender: "♀",
              icon: "🐰"
            },
            {
              name: "Rio",
              breed: "Budgerigar",
              age: "1 Year",
              location: "Mumbai",
              gender: "♂",
              icon: "🐦"
            }
          ].map((pet) => (
            <div className="pet-card" key={pet.name}>
              <div className="pet-card-image">
                {pet.icon}

                <button
                  className="favorite-btn"
                  aria-label={`Favorite ${pet.name}`}
                >
                  ♡
                </button>
              </div>

              <div className="pet-card-content">
                <div className="pet-card-header">
                  <h3>{pet.name}</h3>
                  <span className="status">Available</span>
                </div>

                <p className="pet-breed">{pet.breed}</p>

                <div className="pet-info">
                  <span>{pet.gender} {pet.age}</span>
                  <span>📍 {pet.location}</span>
                </div>

                <Link to="/pets" className="profile-btn">
                  View Pets
                </Link>
              </div>
            </div>
          ))}
        </div>

        <div className="adoption-action">
          <Link to="/pets" className="primary-btn">
            View All Pets →
          </Link>
        </div>
      </section>

      {/* VETERINARY SECTION */}
      <section className="veterinary">
        <div className="vet-container">
          <div className="vet-content">
            <span className="vet-badge">
              🩺 Pet Healthcare
            </span>

            <h2>
              Professional care for
              <span> healthier pets.</span>
            </h2>

            <p>
              Find veterinary services, book appointments, and keep track
              of your pet's healthcare needs — all from PetVerse.
            </p>

            <div className="vet-features">
              <div className="vet-feature">
                <div className="vet-icon">🔎</div>
                <div>
                  <h3>Find Veterinarians</h3>
                  <p>Discover veterinary professionals near you.</p>
                </div>
              </div>

              <div className="vet-feature">
                <div className="vet-icon">📅</div>
                <div>
                  <h3>Book Appointments</h3>
                  <p>Schedule veterinary visits with ease.</p>
                </div>
              </div>

              <div className="vet-feature">
                <div className="vet-icon">💊</div>
                <div>
                  <h3>Health Records</h3>
                  <p>Keep your pet's important health information organized.</p>
                </div>
              </div>
            </div>

            <Link to="/veterinary" className="primary-btn">
              Find a Veterinarian →
            </Link>
          </div>

          <div className="vet-visual">
            <div className="vet-circle">🩺</div>

            <div className="vet-card-small">
              <span>❤️</span>
              <div>
                <strong>Pet Health</strong>
                <p>Care made simple</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* COMMUNITY SECTION */}
      <section className="community">
        <div className="section-heading">
          <span>PetVerse Community</span>

          <h2>Connect with fellow pet lovers.</h2>

          <p>
            Share your pet's journey, ask questions, exchange advice,
            and connect with a growing community of pet owners.
          </p>
        </div>

        <div className="community-grid">
          {[
            {
              avatar: "👨🏻",
              name: "Rahul Sharma",
              time: "2 hours ago",
              message:
                "My Golden Retriever finally learned how to sit on command! 🐶❤️ It took a few weeks, but the training is paying off.",
              likes: 24,
              comments: 8
            },
            {
              avatar: "👩🏻",
              name: "Priya Patel",
              time: "5 hours ago",
              message:
                "Does anyone have recommendations for healthy homemade treats for cats? 🐱 Looking for something Luna will love!",
              likes: 18,
              comments: 12
            },
            {
              avatar: "👨🏻",
              name: "Arjun Mehta",
              time: "Yesterday",
              message:
                "Adopted this little guy last week! 🐾 Thank you PetVerse community for helping me find my new best friend.",
              likes: 42,
              comments: 15
            }
          ].map((post) => (
            <div className="community-post" key={post.name}>
              <div className="post-header">
                <div className="post-avatar">{post.avatar}</div>

                <div>
                  <h3>{post.name}</h3>
                  <span>{post.time}</span>
                </div>
              </div>

              <p className="post-text">{post.message}</p>

              <div className="post-actions">
                <button>❤️ {post.likes} Likes</button>
                <button>💬 {post.comments} Comments</button>
              </div>
            </div>
          ))}
        </div>

        <div className="community-action">
          <Link to="/community" className="primary-btn">
            Join PetVerse Community →
          </Link>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="final-cta">
        <div className="cta-content">
          <span>🐾 Your pet deserves the best.</span>

          <h2>
            Join the PetVerse community today.
          </h2>

          <p>
            Discover pets, find adoption opportunities, connect with
            veterinarians, and meet fellow pet lovers.
          </p>

          <div className="cta-buttons">
            <Link to="/register" className="cta-primary">
              Get Started →
            </Link>

            <Link to="/pets" className="cta-secondary">
              Explore PetVerse
            </Link>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="footer">
        <div className="footer-container">
          <div className="footer-brand">
            <div className="footer-logo">
              🐾 PetVerse
            </div>

            <p>
              A complete digital community built to make
              life better for pets and their owners.
            </p>
          </div>

          <div className="footer-column">
            <h3>Explore</h3>
            <Link to="/pets">Pets</Link>
            <Link to="/pets">Adoption</Link>
            <Link to="/veterinary">Veterinary</Link>
            <Link to="/community">Community</Link>
          </div>

          <div className="footer-column">
            <h3>PetVerse</h3>
            <Link to="/">Home</Link>
            <Link to="/register">Join Us</Link>
            <Link to="/login">Login</Link>
          </div>

          <div className="footer-column">
            <h3>Connect</h3>
            <a href="https://www.instagram.com/" target="_blank" rel="noreferrer">Instagram</a>
            <a href="https://www.facebook.com/" target="_blank" rel="noreferrer">Facebook</a>
            <a href="mailto:contact@petverse.com">Email Us</a>
          </div>
        </div>

        <div className="footer-bottom">
          <p>© 2026 PetVerse. All rights reserved.</p>
          <p>Made with ❤️ for pets and pet lovers.</p>
        </div>
      </footer>
    </>
  );
}

export default Home;