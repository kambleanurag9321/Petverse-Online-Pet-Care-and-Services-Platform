import {
  MapContainer,
  TileLayer,
  CircleMarker,
  Popup
} from "react-leaflet";

import "leaflet/dist/leaflet.css";
import { useState } from "react";

function NearbyVets() {
  const [userLocation, setUserLocation] = useState(null);
  const [vets, setVets] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [radius, setRadius] = useState(10000);

  const searchNearbyVets = () => {
    setLoading(true);
    setError("");
    setVets([]);

    if (!navigator.geolocation) {
      setError("Your browser does not support location services.");
      setLoading(false);
      return;
    }

    navigator.geolocation.getCurrentPosition(
      async (position) => {
        const lat = position.coords.latitude;
        const lon = position.coords.longitude;
        setUserLocation([lat, lon]);

        const query = `
          [out:json][timeout:25];
          (
            node["amenity"="veterinary"](around:${radius},${lat},${lon});
            way["amenity"="veterinary"](around:${radius},${lat},${lon});
            relation["amenity"="veterinary"](around:${radius},${lat},${lon});
          );
          out center tags;
        `;

        try {
          const response = await fetch(
            "https://overpass-api.de/api/interpreter",
            {
              method: "POST",
              body: query,
              headers: {
                "Content-Type": "text/plain"
              }
            }
          );

          if (!response.ok) {
            throw new Error("Unable to search nearby clinics.");
          }

          const data = await response.json();

          const results = data.elements.map((item) => {
            const itemLat = item.lat ?? item.center?.lat;
            const itemLon = item.lon ?? item.center?.lon;

            const distance = calculateDistance(
              lat,
              lon,
              itemLat,
              itemLon
            );

            return {
              id: item.id,
              name: item.tags?.name || "Veterinary Clinic",
              address: [
                item.tags?.["addr:street"],
                item.tags?.["addr:city"]
              ].filter(Boolean).join(", "),
              phone:
                item.tags?.phone ||
                item.tags?.["contact:phone"] ||
                "",
              lat: itemLat,
              lon: itemLon,
              distance
            };
          })
          .filter((item) =>
            Number.isFinite(item.lat) &&
            Number.isFinite(item.lon)
          )
          .sort((a, b) => a.distance - b.distance);

          setVets(results);

          if (results.length === 0) {
            setError(
              "No veterinary clinics found. Try increasing your search radius."
            );
          }

        } catch (err) {
          setError(err.message);
        } finally {
          setLoading(false);
        }
      },

      () => {
        setError(
          "Location permission denied. Please enable location access."
        );
        setLoading(false);
      },

      {
        enableHighAccuracy: true,
        timeout: 15000
      }
    );
  };

  function calculateDistance(lat1, lon1, lat2, lon2) {
    const R = 6371;

    const dLat = (lat2 - lat1) * Math.PI / 180;
    const dLon = (lon2 - lon1) * Math.PI / 180;

    const a =
      Math.sin(dLat / 2) ** 2 +
      Math.cos(lat1 * Math.PI / 180) *
      Math.cos(lat2 * Math.PI / 180) *
      Math.sin(dLon / 2) ** 2;

    return (
      R * 2 *
      Math.atan2(Math.sqrt(a), Math.sqrt(1 - a))
    );
  }

  return (
    <section className="nearby-vets">

      <div className="nearby-header">

        <span>📍 LOCATION BASED SEARCH</span>

        <h2>
          Find Veterinary Doctors
          <span> Near You</span>
        </h2>

        <p>
          Discover veterinary clinics and animal hospitals
          around your current location.
        </p>

      </div>

      <div className="nearby-search">

        <div className="radius-select">

          <label>Search Radius</label>

          <select
            value={radius}
            onChange={(e) => setRadius(Number(e.target.value))}
          >
            <option value="5000">5 KM</option>
            <option value="10000">10 KM</option>
            <option value="20000">20 KM</option>
            <option value="50000">50 KM</option>
          </select>

        </div>

        <button
          onClick={searchNearbyVets}
          disabled={loading}
        >
          {loading
            ? "Searching..."
            : "📍 Find Nearby Veterinarians"}
        </button>

      </div>

      {error && (
        <div className="nearby-error">
          {error}
        </div>
      )}

      {vets.length > 0 && (

        <div className="nearby-results">
              {userLocation && (
  <div className="nearby-map-section">

    <h3>🗺️ Nearby Veterinary Clinics Map</h3>

    <p>
      Explore veterinary clinics around your current location.
    </p>

    <MapContainer
      center={userLocation}
      zoom={13}
      scrollWheelZoom={true}
      style={{
        height: "400px",
        width: "100%",
        borderRadius: "20px",
        marginBottom: "30px"
      }}
    >

      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />

      {/* USER LOCATION */}

      <CircleMarker
        center={userLocation}
        radius={10}
        pathOptions={{
          color: "#2563eb",
          fillColor: "#3b82f6",
          fillOpacity: 1
        }}
      >
        <Popup>
          📍 Your Current Location
        </Popup>
      </CircleMarker>

      {/* VETERINARY CLINICS */}

      {vets.map((vet) => (

        <CircleMarker
          key={vet.id}
          center={[vet.lat, vet.lon]}
          radius={9}
          pathOptions={{
            color: "#e66f56",
            fillColor: "#ff795e",
            fillOpacity: 0.9
          }}
        >

          <Popup>
            <strong>{vet.name}</strong>
            <br />
            {vet.distance.toFixed(2)} KM away
            <br />

            <a
              href={`https://www.google.com/maps/dir/?api=1&destination=${vet.lat},${vet.lon}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              Get Directions
            </a>

          </Popup>

        </CircleMarker>

      ))}

    </MapContainer>

  </div>
)}
          <h3>
            Found {vets.length} Veterinary Clinics
          </h3>

          <div className="nearby-grid">

            {vets.map((vet) => (

              <div className="nearby-card" key={vet.id}>

                <div className="nearby-card-icon">
                  🏥
                </div>

                <h3>{vet.name}</h3>

                <p>
                  📍 {vet.address || "Address not available"}
                </p>

                <div className="nearby-distance">
                  📏 {vet.distance.toFixed(2)} KM away
                </div>

                <div className="nearby-actions">

                  {vet.phone && (
                    <a href={`tel:${vet.phone}`}>
                      📞 Call
                    </a>
                  )}

                  <a
                    href={`https://www.google.com/maps/dir/?api=1&destination=${vet.lat},${vet.lon}`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    🗺️ Directions
                  </a>

                </div>

              </div>

            ))}

          </div>

        </div>

      )}

    </section>
  );
}

export default NearbyVets;