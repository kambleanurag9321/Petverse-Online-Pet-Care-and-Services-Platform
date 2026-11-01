import { Link } from "react-router-dom";
import "./Home.css";

function Home() {
  const services = [
    {
      icon: "🐕",
      title: "Pet Care",
      description:
        "Discover everything you need to keep your furry friends happy, healthy, and comfortable.",
      link: "/pets",
      button: "Explore Pets",
    },
    {
      icon: "🏡",
      title: "Pet Adoption",
      description:
        "Give a homeless animal a second chance at life by finding your perfect companion.",
      link: "/adoption",
      button: "Adopt a Pet",
    },
    {
      icon: "🩺",
      title: "Veterinary Care",
      description:
        "Find veterinary information and discover professional healthcare for your pets.",
      link: "/veterinary",
      button: "Find Veterinary Care",
    },
    {
      icon: "💬",
      title: "Pet Community",
      description:
        "Connect with fellow pet lovers, share experiences, and learn from other pet parents.",
      link: "/community",
      button: "Join Community",
    },
  ];

  const categories = [
    {
      name: "Dogs",
      emoji: "🐶",
      description: "Loyal friends and loving companions",
    },
    {
      name: "Cats",
      emoji: "🐱",
      description: "Independent, playful, and adorable",
    },
    {
      name: "Birds",
      emoji: "🦜",
      description: "Colorful companions full of life",
    },
    {
      name: "Others",
      emoji: "🐰",
      description: "Meet other wonderful little friends",
    },
  ];

  return (
    <main className="home-page">

      {/* HERO SECTION */}
      <section className="home-hero">
        <div className="home-hero-content">
          <div className="home-badge">
            <span>🐾</span> WELCOME TO PETVERSE
          </div>

          <h1>
            Every Pet Deserves
            <br />
            <span>A Loving Home.</span>
          </h1>

          <p>
            More than just a pet platform. PetVerse brings together pet
            care, adoption, veterinary services, and a community that
            understands the love we share with our furry friends.
          </p>

          <div className="home-hero-buttons">
            <Link to="/pets" className="home-btn home-btn-primary">
              Explore Pets <span>→</span>
            </Link>

            <Link to="/adoption" className="home-btn home-btn-outline">
              Find a Companion
            </Link>
          </div>

          <div className="home-hero-trust">
            <div className="home-trust-icons">
              <span>🐶</span>
              <span>🐱</span>
              <span>🐰</span>
            </div>

            <div>
              <strong>For Every Pet Lover</strong>
              <small>Care, connection and companionship.</small>
            </div>
          </div>
        </div>

        <div className="home-hero-image">
          <div className="hero-image-bg"></div>

          <img
            src="https://images.unsplash.com/photo-1450778869180-41d0601e046e?w=1000&auto=format&fit=crop&q=85"
            alt="Happy dog enjoying the outdoors"
          />

          <div className="hero-floating-card hero-card-top">
            <span>❤️</span>
            <div>
              <strong>Spread Love</strong>
              <small>One paw at a time</small>
            </div>
          </div>

          <div className="hero-floating-card hero-card-bottom">
            <span>🐾</span>
            <div>
              <strong>Pet Happiness</strong>
              <small>Our biggest priority</small>
            </div>
          </div>

          <div className="hero-decoration">✦</div>
        </div>
      </section>

      {/* STATISTICS */}
      <section className="home-stats">
        <div className="home-stat">
          <span>🐾</span>
          <div>
            <h2>Pet First</h2>
            <p>Our Philosophy</p>
          </div>
        </div>

        <div className="home-stat">
          <span>❤️</span>
          <div>
            <h2>More Love</h2>
            <p>Every Single Day</p>
          </div>
        </div>

        <div className="home-stat">
          <span>🏡</span>
          <div>
            <h2>Better Homes</h2>
            <p>Through Adoption</p>
          </div>
        </div>

        <div className="home-stat">
          <span>🩺</span>
          <div>
            <h2>Better Health</h2>
            <p>Through Proper Care</p>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="home-services">
        <div className="home-section-heading">
          <span className="home-eyebrow">WHAT WE OFFER</span>

          <h2>
            Everything Your Pet
            <br />
            <span>Needs in One Place.</span>
          </h2>

          <p>
            From finding a new companion to keeping your existing pets
            healthy, PetVerse makes pet parenting easier.
          </p>
        </div>

        <div className="home-service-grid">
          {services.map((service, index) => (
            <div className="home-service-card" key={index}>
              <div className="home-service-icon">{service.icon}</div>

              <h3>{service.title}</h3>

              <p>{service.description}</p>

              <Link to={service.link} className="home-service-link">
                {service.button} <span>→</span>
              </Link>
            </div>
          ))}
        </div>
      </section>

      {/* PET CATEGORIES */}
      <section className="home-categories">
        <div className="home-category-heading">
          <div>
            <span className="home-eyebrow">MEET YOUR COMPANION</span>
            <h2>Find Your Perfect Friend.</h2>
            <p>
              Every animal has a unique personality. Discover the
              companion that matches your lifestyle.
            </p>
          </div>

          <Link to="/pets" className="home-text-link">
            Explore All Pets →
          </Link>
        </div>

        <div className="home-category-grid">
          {categories.map((category, index) => (
            <Link
              to="/pets"
              className={`home-category-card category-${index + 1}`}
              key={index}
            >
              <div className="category-emoji">{category.emoji}</div>

              <h3>{category.name}</h3>

              <p>{category.description}</p>

              <span className="category-arrow">↗</span>
            </Link>
          ))}
        </div>
      </section>

      {/* ADOPTION SECTION */}
      <section className="home-adoption">
        <div className="home-adoption-image">
          <img
            src="https://images.unsplash.com/photo-1548199973-03cce0bbc87b?w=1000&auto=format&fit=crop&q=85"
            alt="Two happy dogs together"
            loading="lazy"
          />

          <div className="adoption-image-label">
            <span>❤️</span> Love Changes Everything
          </div>
        </div>

        <div className="home-adoption-content">
          <span className="home-eyebrow">GIVE THEM A SECOND CHANCE</span>

          <h2>
            Don't Shop.
            <br />
            <span>Adopt Love.</span>
          </h2>

          <p>
            Thousands of animals need a safe place to call home.
            Adoption is more than bringing a pet home. It is giving
            another living being a chance to experience love, safety,
            and happiness.
          </p>

          <div className="adoption-benefits">
            <div>
              <span>✓</span>
              Give an animal a loving home
            </div>

            <div>
              <span>✓</span>
              Make a meaningful difference
            </div>

            <div>
              <span>✓</span>
              Find a lifelong companion
            </div>
          </div>

          <Link to="/adoption" className="home-btn home-btn-primary">
            Explore Adoption <span>→</span>
          </Link>
        </div>
      </section>

      {/* VETERINARY SECTION */}
      <section className="home-vet">
        <div className="home-vet-content">
          <span className="home-eyebrow">HEALTHY PETS, HAPPY LIVES</span>

          <h2>
            Because Their
            <br />
            Health Matters.
          </h2>

          <p>
            Your pet deserves the best healthcare. Learn about
            vaccinations, routine checkups, dental care, and
            veterinary services.
          </p>

          <Link to="/veterinary" className="home-btn home-btn-light">
            Explore Veterinary Care →
          </Link>
        </div>

        <div className="home-vet-image">
          <img
            src="https://images.unsplash.com/photo-1628009368231-7bb7cfcb0def?w=900&auto=format&fit=crop&q=85"
            alt="Veterinarian caring for a dog"
            loading="lazy"
          />

          <div className="vet-floating-icon">🩺</div>
        </div>
      </section>

      {/* COMMUNITY */}
      <section className="home-community">
        <div className="community-image">
          <img
            src="https://images.unsplash.com/photo-1516734212186-a967f81ad0d7?w=900&auto=format&fit=crop&q=85"
            alt="Person spending time with a dog"
            loading="lazy"
          />
        </div>

        <div className="community-content">
          <span className="home-eyebrow">MORE THAN JUST PETS</span>

          <h2>
            A Community
            <br />
            That Understands.
          </h2>

          <p>
            Being a pet parent comes with countless questions,
            experiences, and memorable moments. Connect with people
            who share your passion for animals.
          </p>

          <div className="community-features">
            <div>
              <span>💬</span>
              Share your experiences
            </div>

            <div>
              <span>🐾</span>
              Connect with pet lovers
            </div>

            <div>
              <span>📚</span>
              Learn and grow together
            </div>
          </div>

          <Link to="/community" className="home-btn home-btn-primary">
            Join Our Community →
          </Link>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="home-final-cta">
        <div className="cta-paw cta-paw-one">🐾</div>
        <div className="cta-paw cta-paw-two">🐾</div>

        <span>YOUR PET JOURNEY STARTS HERE</span>

        <h2>
          Every Paw Has a Story.
          <br />
          <strong>Let's Make It Beautiful.</strong>
        </h2>

        <p>
          Explore PetVerse today and discover a world built around
          the love and happiness of animals.
        </p>

        <Link to="/pets" className="home-btn home-btn-white">
          Get Started <span>→</span>
        </Link>
      </section>

    </main>
  );
}

export default Home;