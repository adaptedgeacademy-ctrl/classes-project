
import { Link } from "react-router-dom";
import {
  FaMapMarkerAlt,
  FaDirections,
  FaPhoneAlt,
  FaClock,
  FaCheckCircle,
  FaChalkboardTeacher,
  FaLaptopCode,
  FaUserTie,
  FaArrowRight
} from "react-icons/fa";
import "./LocationSection.css";

export default function LocationSection() {
  const directionsUrl = "https://maps.google.com/?q=Vashi+Railway+Station+Commercial+Complex+Navi+Mumbai";
  const mapUrl = "https://www.openstreetmap.org/export/embed.html?bbox=72.8677,19.0660,72.9877,19.1860&layer=mapnik&marker=19.074032,73.002503";

  return (
    <section className="location-section position-relative py-5 overflow-hidden">
      {/* Background Glow */}
      <div className="location-glow-mesh"></div>

      <div className="container position-relative z-2 py-lg-4">
        {/* Section Header */}
        <div className="text-center mb-5">
          <div className="d-inline-flex align-items-center gap-2 px-3 py-1 rounded-pill location-badge-top mb-3">
            <span className="live-radar-ping"></span>
            <span className="fw-semibold text-warning small text-uppercase">Central Campus</span>
          </div>
          <h2 className="section-heading text-white fw-bold display-6">
            Visit Our Modern Learning Hub
          </h2>
          <p className="text-white-50 max-w-600 mx-auto">
            Directly connected above Vashi Railway Station for a fast, seamless commute across Mumbai & Navi Mumbai.
          </p>
        </div>

        {/* Dual-Pane Layout */}
        <div className="row g-4 align-items-stretch">
          
          {/* Left Column: Info Card */}
          <div className="col-lg-5">
            <div className="location-glass-card p-4 p-md-5 rounded-4 h-100 d-flex flex-column justify-content-between">
              <div>
                <div className="d-flex justify-content-between align-items-center mb-3">
                  <h3 className="text-white fw-bold h4 mb-0">AdaptEdge Academy</h3>
                  <span className="badge bg-success-subtle text-success border border-success-subtle rounded-pill px-3 py-1 small">
                    ● Open Today
                  </span>
                </div>

                <p className="text-white-50 small mb-4">
                  <FaMapMarkerAlt className="text-warning me-2 flex-shrink-0" />
                  Office No. E221, VRSCCL, Block-E, Tower 3, Above Vashi Railway Station, Sector 30, Vashi, Navi Mumbai, Maharashtra 400703
                </p>

                {/* Features */}
                <div className="features-list d-flex flex-column gap-3 mb-4">
                  <div className="feature-item-row p-3 rounded-3 d-flex align-items-center gap-3">
                    <div className="feature-icon text-warning">
                      <FaChalkboardTeacher size={18} />
                    </div>
                    <div>
                      <div className="text-white fw-semibold small">Experienced Faculty</div>
                      <div className="text-white-50 extra-small">Chartered Accountants & industry mentors</div>
                    </div>
                  </div>

                  <div className="feature-item-row p-3 rounded-3 d-flex align-items-center gap-3">
                    <div className="feature-icon text-warning">
                      <FaLaptopCode size={18} />
                    </div>
                    <div>
                      <div className="text-white fw-semibold small">Smart Classrooms & Library</div>
                      <div className="text-white-50 extra-small">Equipped for hybrid prep & diagnostic tests</div>
                    </div>
                  </div>

                  <div className="feature-item-row p-3 rounded-3 d-flex align-items-center gap-3">
                    <div className="feature-icon text-warning">
                      <FaUserTie size={18} />
                    </div>
                    <div>
                      <div className="text-white fw-semibold small">Dedicated Career Guidance</div>
                      <div className="text-white-50 extra-small">Articleship counseling & interview prep</div>
                    </div>
                  </div>
                </div>

                {/* Meta Details */}
                <div className="meta-strip p-3 rounded-3 mb-4 d-flex flex-column gap-2 text-white-50 extra-small">
                  <div className="d-flex align-items-center gap-2">
                    <FaClock className="text-warning" />
                    <span>Mon - Sat: 8:00 AM – 8:00 PM | Sun: 9:00 AM – 4:00 PM</span>
                  </div>
                  <div className="d-flex align-items-center gap-2">
                    <FaPhoneAlt className="text-warning" />
                    <span>Desk: +91 9167587322</span>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="d-flex flex-column gap-2">
                <a
                  href={directionsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-warning w-100 py-3 rounded-pill fw-bold text-dark d-flex align-items-center justify-content-center gap-2 shadow-glow-sm btn-action"
                >
                  <FaDirections size={18} /> Get Directions in Maps
                </a>

                <Link
                  to="/contact"
                  className="btn btn-outline-glass w-100 py-2 rounded-pill text-white fw-semibold small d-flex align-items-center justify-content-center gap-2"
                >
                  Contact Admissions Desk <FaArrowRight size={12} />
                </Link>
              </div>
            </div>
          </div>

          {/* Right Column: Embedded Map */}
          <div className="col-lg-7">
            <div className="map-frame-card rounded-4 overflow-hidden h-100 position-relative shadow-lg">
              <div className="map-glass-tag d-flex align-items-center gap-2">
                <FaCheckCircle className="text-success" />
                <span className="text-white extra-small fw-semibold">Above Vashi Station, Tower 3</span>
              </div>

              <iframe
                title="AdaptEdge Academy Location Map"
                src={mapUrl}
                className="w-100 h-100 map-iframe"
                style={{ minHeight: "450px", border: 0 }}
                loading="lazy"
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}