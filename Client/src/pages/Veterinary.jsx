import { useState } from "react";
import "./Veterinary.css";

function Veterinary() {
  const [selectedService, setSelectedService] = useState("General Checkup");
  const [locationLoading, setLocationLoading] = useState(false);

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
      specialization: "Veterinary Physician",
      experience: "8+ Years Experience",
      icon: "👩‍⚕️",
    },
    {
      name: "Dr. Michael Brown",
      specialization: "Pet Surgeon",
      experience: "10+ Years Experience",
      icon: "👨‍⚕️",
    },
    {
      name: "Dr. Emily Davis",
      specialization: "Animal Nutritionist",
      experience: "6+ Years Experience",
      icon: "👩‍⚕️",
    },
  ];

  const stats = [
    { number: "500+", label: "Pets Helped" },
    { number: "50+", label: "Veterinarians" },
    { number: "24/7", label: "Emergency Support" },
    { number: "98%", label: "Happy Pet Parents" },
  ];

  const findVeterinarians = () => {
    // Open a tab immediately so that the browser does not block the popup.
    const mapWindow = window.open("about:blank", "_blank");

    if (!mapWindow) {
      alert(
        "Your browser blocked the new tab. Please allow pop-ups for this website and try again."
      );
      return;
    }

    setLocationLoading(true);

    const openMaps = (query) => {
      mapWindow.location.href =
        "https://www.google.com/maps/search/?api=1&query=" +
        encodeURIComponent(query);

      setLocationLoading(false);
    };

    // If location permission is unavailable, use Google's nearby search.
    if (!navigator.geolocation) {
      openMaps("veterinary clinics near me");
      return;
    }

    navigator.geolocation.getCurrentPosition(
      (position) => {
        const latitude = position.coords.latitude;
        const longitude = position.coords.longitude;

        openMaps(
          `veterinary clinics near ${latitude},${longitude}`
        );
      },
      (error) => {
        console.error("Location error:", error);

        openMaps("veterinary clinics near me");
      },
      {
        enableHighAccuracy: true,
        timeout: 10000,
        maximumAge: 60000,
      }
    );
  };

  const handleAppointment = () => {
    alert(
      `You selected ${selectedService}. Appointment booking will be available soon!`
    );
  };

  const handleDoctorAppointment = (doctorName) => {
    alert(`Appointment booking with ${doctorName} will be available soon!`);
  };

  const handleHealthTips = () => {
    alert(
      "Remember to provide your pet with regular exercise, fresh water, healthy food, and routine veterinary checkups!"
    );
  };

  return (
    <div className="veterinary-page">
      {/* HERO SECTION */}
      <section className="vet-hero">
        <div className="vet-hero-content">
          <span className="vet-badge">🐾 Professional Pet Healthcare</span>

          <h1>
            Your Pet's Health,
            <br />
            <span>Our Priority.</span>
          </h1>

          <p>
            Give your furry friends the care they deserve. Connect with
            veterinary professionals and keep your pets healthy, happy,
            and protected.
          </p>

          <div className="vet-hero-buttons">
            <button
              className="vet-primary-btn"
              onClick={handleAppointment}
            >
              Book Appointment →
            </button>

            <button
              className="vet-secondary-btn"
              onClick={findVeterinarians}
            >
              📍 Find Nearby Vets
            </button>
          </div>
        </div>

        <div className="vet-hero-visual">
          <div className="vet-circle">
            <div className="vet-pet-card">
              <span className="vet-pet-icon">🐶</span>
              <h3>Healthy Pets</h3>
              <p>Happy Lives ❤️</p>
            </div>

            <div className="health-check">🩺</div>
          </div>

          <div className="floating-card vet-card-one">
            ❤️ Healthy
          </div>

          <div className="floating-card vet-card-two">
            🐾 Pet Care
          </div>
        </div>
      </section>

      {/* STATS SECTION */}
      <section className="vet-stats">
        {stats.map((stat, index) => (
          <div className="stat-item" key={index}>
            <h2>{stat.number}</h2>
            <p>{stat.label}</p>
          </div>
        ))}
      </section>

      {/* SERVICES SECTION */}
      <section className="vet-services">
        <div className="section-heading">
          <span>OUR SERVICES</span>
          <h2>Complete Care for Your Pets</h2>
          <p>
            Everything your pet needs to live a healthy and comfortable life.
          </p>
        </div>

        <div className="services-grid">
          {services.map((service, index) => (
            <div
              className={`service-card ${
                selectedService === service.title ? "service-selected" : ""
              }`}
              key={index}
              onClick={() => setSelectedService(service.title)}
            >
              <div className="service-icon">{service.icon}</div>

              <h3>{service.title}</h3>

              <p>{service.description}</p>

              <button
                type="button"
                onClick={() => setSelectedService(service.title)}
              >
                Select Service →
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* APPOINTMENT SECTION */}
      <section className="vet-appointment">
        <div className="appointment-content">
          <span>BOOK AN APPOINTMENT</span>

          <h2>Give Your Pet the Care They Deserve</h2>

          <p>
            Regular veterinary visits help prevent health problems and
            ensure your pet stays healthy.
          </p>

          <div className="appointment-selection">
            <label htmlFor="vet-service">Choose a service:</label>

            <select
              id="vet-service"
              value={selectedService}
              onChange={(event) => setSelectedService(event.target.value)}
            >
              {services.map((service) => (
                <option key={service.title} value={service.title}>
                  {service.title}
                </option>
              ))}
            </select>
          </div>

          <button
            className="vet-primary-btn"
            onClick={handleAppointment}
          >
            Book Your Appointment →
          </button>
        </div>

        <div className="appointment-visual">
          <div className="appointment-circle">
            <span>🐕</span>
          </div>

          <div className="appointment-bubble bubble-one">❤️</div>
          <div className="appointment-bubble bubble-two">🩺</div>
          <div className="appointment-bubble bubble-three">🐾</div>
        </div>
      </section>

      {/* DOCTORS SECTION */}
      <section className="vet-doctors">
        <div className="section-heading">
          <span>OUR PROFESSIONALS</span>
          <h2>Meet Our Veterinary Experts</h2>
          <p>
            Dedicated professionals who care about your pet's health.
          </p>
        </div>

        <div className="doctors-grid">
          {vets.map((vet, index) => (
            <div className="doctor-card" key={index}>
              <div className="doctor-avatar">
                <span>{vet.icon}</span>
              </div>

              <div className="doctor-info">
                <span className="doctor-online">● Available</span>

                <h3>{vet.name}</h3>

                <p>{vet.specialization}</p>

                <small>{vet.experience}</small>
              </div>

              <button
                onClick={() => handleDoctorAppointment(vet.name)}
              >
                Book Appointment →
              </button>
            </div>
          ))}
        </div>

        {/* GOOGLE MAPS NEARBY VET SEARCH */}
        <div className="vet-map-search">
          <div>
            <span>📍 FIND A VET NEAR YOU</span>
            <h2>Looking for a nearby veterinary clinic?</h2>
            <p>
              Find veterinary clinics, animal hospitals, and pet doctors
              around your current location using Google Maps.
            </p>
          </div>

          <button
            className="vet-primary-btn map-button"
            onClick={findVeterinarians}
            disabled={locationLoading}
          >
            {locationLoading
              ? "Finding Clinics..."
              : "📍 Find Nearby Vets on Google Maps →"}
          </button>
        </div>
      </section>

      {/* HEALTH TIPS SECTION */}
      <section className="vet-tips">
        <div className="tips-content">
          <span>HEALTH & WELLNESS</span>

          <h2>Small Steps, Healthier Pets</h2>

          <p>
            A healthy pet starts with good habits. Provide balanced
            nutrition, regular exercise, fresh water, and routine
            veterinary checkups.
          </p>

          <button
            className="vet-primary-btn"
            onClick={handleHealthTips}
          >
            Explore Health Tips →
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