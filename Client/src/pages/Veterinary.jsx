import { useState } from "react";
import "./Veterinary.css";

function Veterinary() {
  const [selectedService, setSelectedService] = useState("");

  const services = [
    {
      icon: "🩺",
      title: "General Checkup",
      description:
        "Routine health examinations to keep your pet happy and healthy.",
    },
    {
      icon: "💉",
      title: "Vaccination",
      description:
        "Stay up to date with important vaccines and preventive care.",
    },
    {
      icon: "🦷",
      title: "Dental Care",
      description:
        "Professional dental checkups and advice for your pet's oral health.",
    },
    {
      icon: "🩹",
      title: "Emergency Care",
      description:
        "Get professional veterinary assistance when your pet needs it most.",
    },
  ];

  const vets = [
    {
      name: "Dr. Sarah Wilson",
      specialty: "Veterinary Physician",
      experience: "8+ Years Experience",
      icon: "👩‍⚕️",
    },
    {
      name: "Dr. Michael Brown",
      specialty: "Pet Surgeon",
      experience: "10+ Years Experience",
      icon: "👨‍⚕️",
    },
    {
      name: "Dr. Emily Davis",
      specialty: "Animal Nutritionist",
      experience: "6+ Years Experience",
      icon: "👩‍⚕️",
    },
  ];

  return (
    <div className="veterinary-page">

      {/* HERO */}
      <section className="vet-hero">

        <div className="vet-hero-content">
          <span className="vet-badge">
            🐾 PetVerse Veterinary Care
          </span>

          <h1>
            Because every pet
            <span> deserves great care.</span>
          </h1>

          <p>
            Find trusted veterinary services, experienced professionals,
            and helpful healthcare resources for your beloved companion.
          </p>

          <div className="vet-hero-buttons">
            <button
              className="vet-primary-btn"
              onClick={() =>
                document
                  .getElementById("vet-services")
                  .scrollIntoView({ behavior: "smooth" })
              }
            >
              Explore Services →
            </button>

            <button
              className="vet-secondary-btn"
              onClick={() =>
                document
                  .getElementById("vet-doctors")
                  .scrollIntoView({ behavior: "smooth" })
              }
            >
              Find a Veterinarian
            </button>
          </div>
        </div>

        <div className="vet-hero-visual">
          <div className="vet-circle"></div>

          <div className="vet-pet-card">
            <div className="vet-pet-icon">🐶</div>

            <div>
              <strong>Buddy</strong>
              <span>Healthy & Happy</span>
            </div>

            <div className="health-check">
              ✓
            </div>
          </div>

          <div className="floating-card vet-card-one">
            💉
            <span>Vaccination</span>
          </div>

          <div className="floating-card vet-card-two">
            ❤️
            <span>Healthy Pet</span>
          </div>
        </div>

      </section>

      {/* STATS */}
      <section className="vet-stats">

        <div>
          <strong>500+</strong>
          <span>Pets Helped</span>
        </div>

        <div>
          <strong>50+</strong>
          <span>Veterinarians</span>
        </div>

        <div>
          <strong>24/7</strong>
          <span>Emergency Support</span>
        </div>

        <div>
          <strong>98%</strong>
          <span>Happy Pet Parents</span>
        </div>

      </section>

      {/* SERVICES */}
      <section className="vet-services" id="vet-services">

        <div className="section-heading">
          <span>WHAT WE OFFER</span>

          <h2>
            Complete care for
            <em> every companion.</em>
          </h2>

          <p>
            From routine checkups to specialized treatment, PetVerse
            helps you find the right care for your pet.
          </p>
        </div>

        <div className="services-grid">

          {services.map((service, index) => (
            <div
              className={`service-card ${
                selectedService === service.title
                  ? "service-selected"
                  : ""
              }`}
              key={index}
              onClick={() => setSelectedService(service.title)}
            >
              <div className="service-icon">
                {service.icon}
              </div>

              <h3>{service.title}</h3>

              <p>{service.description}</p>

              <button>
                Learn More →
              </button>
            </div>
          ))}

        </div>

      </section>

      {/* APPOINTMENT */}
      <section className="vet-appointment">

        <div className="appointment-content">

          <span>📅 QUICK APPOINTMENT</span>

          <h2>
            Your pet's health
            <br />
            shouldn't have to wait.
          </h2>

          <p>
            Book a veterinary consultation and get professional
            guidance for your pet.
          </p>

          <button
            onClick={() =>
              alert("Online appointment booking coming soon! 🐾")
            }
          >
            Book an Appointment →
          </button>

        </div>

        <div className="appointment-visual">
          <div className="appointment-circle">
            🐕
          </div>

          <div className="appointment-bubble bubble-one">
            🩺
          </div>

          <div className="appointment-bubble bubble-two">
            ❤️
          </div>

          <div className="appointment-bubble bubble-three">
            🐾
          </div>
        </div>

      </section>

      {/* DOCTORS */}
      <section className="vet-doctors" id="vet-doctors">

        <div className="section-heading">
          <span>MEET THE EXPERTS</span>

          <h2>
            Trusted veterinary
            <em> professionals.</em>
          </h2>

          <p>
            Experienced professionals dedicated to keeping your pets
            healthy and comfortable.
          </p>
        </div>

        <div className="doctors-grid">

          {vets.map((vet, index) => (
            <div className="doctor-card" key={index}>

              <div className="doctor-avatar">
                {vet.icon}
              </div>

              <div className="doctor-info">

                <span className="doctor-online">
                  ● Available
                </span>

                <h3>{vet.name}</h3>

                <p>{vet.specialty}</p>

                <small>
                  ⭐ 4.9 &nbsp; • &nbsp; {vet.experience}
                </small>

              </div>

              <button
                onClick={() =>
                  alert(`Booking with ${vet.name} coming soon!`)
                }
              >
                Book Visit
              </button>

            </div>
          ))}

        </div>

      </section>

      {/* HEALTH TIPS */}
      <section className="vet-tips">

        <div className="tips-content">

          <span>💡 PET HEALTH TIP</span>

          <h2>
            Prevention is better
            <br />
            than treatment.
          </h2>

          <p>
            Regular checkups, vaccinations, proper nutrition, and
            exercise can help your pet live a longer and happier life.
          </p>

          <button
            onClick={() =>
              alert("Pet health resources coming soon! 🐾")
            }
          >
            Explore Pet Health Tips →
          </button>

        </div>

        <div className="tips-pet">
          🐱
        </div>

      </section>

    </div>
  );
}

export default Veterinary;