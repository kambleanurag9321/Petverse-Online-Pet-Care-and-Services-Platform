function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <span className="hero-badge">🐾 Welcome to PetVerse</span>

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
            <button className="primary-btn">
              Explore Pets
            </button>

            <button className="secondary-btn">
              Find a Vet
            </button>
          </div>
        </div>

        <div className="hero-image">
          🐶
        </div>
      </section>

      {/* Why PetVerse Section */}
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
      {/* Pet Types Section */}
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

    <div className="pet-type-card">
      <div className="pet-type-icon">🐶</div>
      <h3>Dogs</h3>
      <p>Loyal companions full of love and energy.</p>
      <button>Explore Dogs →</button>
    </div>

    <div className="pet-type-card">
      <div className="pet-type-icon">🐱</div>
      <h3>Cats</h3>
      <p>Independent, playful, and affectionate companions.</p>
      <button>Explore Cats →</button>
    </div>

    <div className="pet-type-card">
      <div className="pet-type-icon">🐰</div>
      <h3>Rabbits</h3>
      <p>Gentle and adorable pets for loving homes.</p>
      <button>Explore Rabbits →</button>
    </div>

    <div className="pet-type-card">
      <div className="pet-type-icon">🐦</div>
      <h3>Birds</h3>
      <p>Colorful, intelligent, and fascinating companions.</p>
      <button>Explore Birds →</button>
    </div>

    <div className="pet-type-card">
      <div className="pet-type-icon">🐹</div>
      <h3>Small Pets</h3>
      <p>Discover hamsters, guinea pigs, and other small pets.</p>
      <button>Explore Small Pets →</button>
    </div>

    <div className="pet-type-card">
      <div className="pet-type-icon">🐠</div>
      <h3>Fish</h3>
      <p>Create a beautiful underwater world in your home.</p>
      <button>Explore Fish →</button>
    </div>

  </div>
</section>
{/* Adoption Section */}
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

    <div className="pet-card">
      <div className="pet-card-image">
        🐶
        <button className="favorite-btn">♡</button>
      </div>

      <div className="pet-card-content">
        <div className="pet-card-header">
          <h3>Buddy</h3>
          <span className="status">Available</span>
        </div>

        <p className="pet-breed">Golden Retriever</p>

        <div className="pet-info">
          <span>♂ 2 Years</span>
          <span>📍 Mumbai</span>
        </div>

        <button className="profile-btn">
          View Profile
        </button>
      </div>
    </div>

    <div className="pet-card">
      <div className="pet-card-image">
        🐱
        <button className="favorite-btn">♡</button>
      </div>

      <div className="pet-card-content">
        <div className="pet-card-header">
          <h3>Luna</h3>
          <span className="status">Available</span>
        </div>

        <p className="pet-breed">Persian Cat</p>

        <div className="pet-info">
          <span>♀ 1 Year</span>
          <span>📍 Navi Mumbai</span>
        </div>

        <button className="profile-btn">
          View Profile
        </button>
      </div>
    </div>

    <div className="pet-card">
      <div className="pet-card-image">
        🐰
        <button className="favorite-btn">♡</button>
      </div>

      <div className="pet-card-content">
        <div className="pet-card-header">
          <h3>Coco</h3>
          <span className="status">Available</span>
        </div>

        <p className="pet-breed">Holland Lop</p>

        <div className="pet-info">
          <span>♀ 8 Months</span>
          <span>📍 Thane</span>
        </div>

        <button className="profile-btn">
          View Profile
        </button>
      </div>
    </div>

    <div className="pet-card">
      <div className="pet-card-image">
        🐦
        <button className="favorite-btn">♡</button>
      </div>

      <div className="pet-card-content">
        <div className="pet-card-header">
          <h3>Rio</h3>
          <span className="status">Available</span>
        </div>

        <p className="pet-breed">Budgerigar</p>

        <div className="pet-info">
          <span>♂ 1 Year</span>
          <span>📍 Mumbai</span>
        </div>

        <button className="profile-btn">
          View Profile
        </button>
      </div>
    </div>

  </div>

  <div className="adoption-action">
    <button className="primary-btn">
      View All Pets →
    </button>
  </div>
</section>
{/* Veterinary Section */}
<section className="veterinary">
  <div className="vet-container">

    <div className="vet-content">
      <span className="vet-badge">🩺 Pet Healthcare</span>

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

      <button className="primary-btn">
        Find a Veterinarian →
      </button>
    </div>

    <div className="vet-visual">
      <div className="vet-circle">
        🩺
      </div>

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
{/* Community Section */}
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

    <div className="community-post">
      <div className="post-header">
        <div className="post-avatar">👨🏻</div>

        <div>
          <h3>Rahul Sharma</h3>
          <span>2 hours ago</span>
        </div>
      </div>

      <p className="post-text">
        My Golden Retriever finally learned how to sit on command!
        🐶❤️ It took a few weeks, but the training is paying off.
      </p>

      <div className="post-actions">
        <button>❤️ 24 Likes</button>
        <button>💬 8 Comments</button>
      </div>
    </div>

    <div className="community-post">
      <div className="post-header">
        <div className="post-avatar">👩🏻</div>

        <div>
          <h3>Priya Patel</h3>
          <span>5 hours ago</span>
        </div>
      </div>

      <p className="post-text">
        Does anyone have recommendations for healthy homemade
        treats for cats? 🐱 Looking for something Luna will love!
      </p>

      <div className="post-actions">
        <button>❤️ 18 Likes</button>
        <button>💬 12 Comments</button>
      </div>
    </div>

    <div className="community-post">
      <div className="post-header">
        <div className="post-avatar">👨🏻</div>

        <div>
          <h3>Arjun Mehta</h3>
          <span>Yesterday</span>
        </div>
      </div>

      <p className="post-text">
        Adopted this little guy last week! 🐾 Thank you PetVerse
        community for helping me find my new best friend.
      </p>

      <div className="post-actions">
        <button>❤️ 42 Likes</button>
        <button>💬 15 Comments</button>
      </div>
    </div>

  </div>

  <div className="community-action">
    <button className="primary-btn">
      Join PetVerse Community →
    </button>
  </div>
</section>
{/* Final CTA */}
<section className="final-cta">
  <div className="cta-content">
    <span>🐾 Your pet deserves the best.</span>

    <h2>
      Join the PetVerse community today.
    </h2>

    <p>
      Discover pets, find adoption opportunities, connect with
      veterinarians, and meet thousands of fellow pet lovers.
    </p>

    <div className="cta-buttons">
      <button className="cta-primary">
        Get Started →
      </button>

      <button className="cta-secondary">
        Explore PetVerse
      </button>
    </div>
  </div>
</section>

{/* Footer */}
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
      <a href="#">Pets</a>
      <a href="#">Adoption</a>
      <a href="#">Veterinary</a>
      <a href="#">Community</a>
    </div>

    <div className="footer-column">
      <h3>PetVerse</h3>
      <a href="#">About Us</a>
      <a href="#">Contact</a>
      <a href="#">Privacy Policy</a>
      <a href="#">Terms</a>
    </div>

    <div className="footer-column">
      <h3>Connect</h3>
      <a href="#">Instagram</a>
      <a href="#">Facebook</a>
      <a href="#">Twitter</a>
      <a href="#">Email Us</a>
    </div>

  </div>

  <div className="footer-bottom">
    <p>© 2026 PetVerse. All rights reserved.</p>

    <p>
      Made with ❤️ for pets and pet lovers.
    </p>
  </div>
</footer>
    </>
  );
}

export default Home;