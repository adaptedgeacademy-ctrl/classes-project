import { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import { Link } from "react-router-dom";
import { 
  FaFacebookF, 
  FaInstagram, 
  FaYoutube, 
  FaLock, 
  FaEnvelope, 
  FaGraduationCap, 
  FaChevronRight, 
  FaShieldAlt, 
  FaMapMarkerAlt, 
  FaPhoneAlt 
} from "react-icons/fa";
import "animate.css";
import logo from "../assets/Nirmaan - Vasai.jpg";
import "./contact.css";

// ⚠️ Replace this string with your Google Apps Script Web App URL
const GOOGLE_SCRIPT_URL = "https://script.google.com/macros/s/AKfycbyJusLB0CebM1mJ3CNhZydoG8Jg7FJLHwhtO-Ed1e2QqL6djg2CV6cWXMJPQuLmmSxF/exec";

export default function ContactPage() {
  const [showPopup, setShowPopup] = useState(false);
  const [agreedToTerms, setAgreedToTerms] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  // Controlled form state
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    course: "",
    message: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  useEffect(() => {
    const canvas = document.getElementById("particles");
    if (!canvas) return;
    const ctx = canvas.getContext("2d");

    let animationFrameId;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    let particles = [];

    for (let i = 0; i < 90; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        r: Math.random() * 2,
        dx: Math.random() - 0.5,
        dy: Math.random() - 0.5,
      });
    }

    function animate() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.fillStyle = "rgba(255,255,255,0.6)";

      particles.forEach((p) => {
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fill();

        p.x += p.dx;
        p.y += p.dy;

        if (p.x < 0 || p.x > canvas.width) p.dx *= -1;
        if (p.y < 0 || p.y > canvas.height) p.dy *= -1;
      });

      animationFrameId = requestAnimationFrame(animate);
    }

    animate();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("resize", resizeCanvas);
    };
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!agreedToTerms || isSubmitting) return;

    setIsSubmitting(true);

    try {
      // Send form data to Google Apps Script Web App URL
      await fetch(GOOGLE_SCRIPT_URL, {
        method: "POST",
        mode: "no-cors", // Bypasses CORS restrictions on Google Apps Script endpoints
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      // Show success popup and reset form
      setShowPopup(true);
      setFormData({ name: "", phone: "", email: "", course: "", message: "" });
      setAgreedToTerms(false);
      
      setTimeout(() => setShowPopup(false), 2500);
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("Failed to submit form. Please try again later.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      {/* PARTICLES */}
      <canvas id="particles"></canvas>

      {/* POPUP */}
      {showPopup && (
        <div className="popup-success animate__animated animate__zoomIn">
          🎉 Message Sent Successfully!
        </div>
      )}

      {/* NAVBAR */}
      <nav className="navbar navbar-expand-lg navbar-dark custom-navbar sticky-top">
        <div className="container">
          <Link to="/" className="navbar-brand">
            <img src={logo} className="navbar-logo" alt="Adapt Edge Academy" />
          </Link>

          <button className="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#mainNav">
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="mainNav">
            <ul className="navbar-nav ms-auto align-items-lg-center">
              <li className="nav-item"><Link className="nav-link" to="/">Home</Link></li>
              <li className="nav-item"><Link className="nav-link" to="/about">About</Link></li>
              <li className="nav-item"><Link className="nav-link" to="/courses">Courses</Link></li>
              <li className="nav-item"><Link className="nav-link" to="/contact">Contact</Link></li>
            </ul>
          </div>
        </div>
      </nav>

      {/* HERO */}
      <div className="contact-hero animate__animated animate__fadeInDown">
        <h1>Contact Us</h1>
        <p>We’re here to guide your CA, CS & Commerce journey</p>
      </div>

      {/* MAIN */}
      <div className="container py-5">
        <div className="row g-4">

          {/* FORM */}
          <div className="col-lg-6">
            <div className="glass-card form-glow hover-float">
              <h3>Send Message</h3>

              <form onSubmit={handleSubmit}>
                <input 
                  type="text" 
                  name="name" 
                  placeholder="Your Name" 
                  value={formData.name} 
                  onChange={handleChange} 
                  required 
                />
                <input 
                  type="tel" 
                  name="phone" 
                  placeholder="Your Phone Number" 
                  value={formData.phone} 
                  onChange={handleChange} 
                  required 
                />
                <input 
                  type="email" 
                  name="email" 
                  placeholder="Your Email" 
                  value={formData.email} 
                  onChange={handleChange} 
                  required 
                />
                <input 
                  type="text" 
                  name="course" 
                  placeholder="Course Interested" 
                  value={formData.course} 
                  onChange={handleChange} 
                  required 
                />
                <textarea 
                  rows="4" 
                  name="message" 
                  placeholder="Your Message" 
                  value={formData.message} 
                  onChange={handleChange} 
                  required
                ></textarea>

                {/* PRIVACY POLICY CHECKBOX */}
                <div className="checkbox-container d-flex align-items-center gap-2 mt-3">
                  <input
                    type="checkbox"
                    id="termsAgreement"
                    className="custom-checkbox"
                    checked={agreedToTerms}
                    onChange={(e) => setAgreedToTerms(e.target.checked)}
                  />
                  <label htmlFor="termsAgreement" className="checkbox-label text-white-50 small mb-0">
                    I agree to the{" "}
                    <Link to="/privacy-policy" className="terms-link text-warning fw-semibold">
                      Privacy Policy
                    </Link>{" "}
                    & Terms of Service
                  </label>
                </div>

                <button
                  className={`btn-glow ${(!agreedToTerms || isSubmitting) ? "disabled-btn" : ""}`}
                  type="submit"
                  disabled={!agreedToTerms || isSubmitting}
                >
                  {!agreedToTerms && <FaLock className="me-2" size={13} />}
                  {isSubmitting ? "Sending..." : agreedToTerms ? "Send Message" : "Accept Terms to Send"}
                </button>
              </form>
            </div>
          </div>

          {/* DETAILS */}
          <div className="col-lg-6">
            <div className="glass-card hover-float">
              <h3>Contact Details</h3>

              <p>📍 Office No. E221, VRSCCL, Block - E, Tower 3, above Vashi Railway Station, Sector 30, Vashi, Navi Mumbai, Maharashtra 400703</p>
              <p>📞 +91 9167587322</p>
              <p>✉️ adaptedgeacademy@gmail.com</p>
              <p>⏰ Mon - Sat: 9 AM - 8 PM</p>

              <div className="socials">
                <FaFacebookF />
                <FaInstagram />
                <FaYoutube />
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* FOOTER */}
      <footer className="footer position-relative overflow-hidden pt-5 pb-3">
        <div className="footer-glow-mesh"></div>

        <div className="container position-relative z-2">
          <div className="row g-4 mb-5">

            <div className="col-lg-4 col-md-6">
              <Link to="/" className="d-inline-flex align-items-center gap-3 mb-3 text-decoration-none">
                <div className="footer-logo-frame">
                  <img src={logo} alt="Adaptedge Academy" className="footer-logo" />
                </div>
                <div className="d-flex flex-column">
                  <span className="footer-brand-title">Adaptedge</span>
                  <span className="footer-brand-subtitle">Commerce Academy</span>
                </div>
              </Link>

              <p className="text-white-50 small mb-4 line-height-relaxed">
                Premier commerce coaching institute dedicated to transforming aspiring students into industry-leading CA, CS, and corporate finance professionals.
              </p>

              <div className="d-flex gap-2">
                <a href="#facebook" className="social-btn" aria-label="Facebook">
                  <FaFacebookF />
                </a>
                <a href="#instagram" className="social-btn" aria-label="Instagram">
                  <FaInstagram />
                </a>
                <a href="#youtube" className="social-btn" aria-label="YouTube">
                  <FaYoutube />
                </a>
              </div>
            </div>

            <div className="col-lg-3 col-md-6 col-6">
              <h5 className="footer-section-title text-white fw-bold mb-3 d-flex align-items-center gap-2">
                <FaGraduationCap className="text-warning" /> Navigation
              </h5>
              <ul className="list-unstyled footer-links d-flex flex-column gap-2 mb-0">
                <li>
                  <Link to="/">
                    <FaChevronRight className="link-arrow" /> Home
                  </Link>
                </li>
                <li>
                  <Link to="/about">
                    <FaChevronRight className="link-arrow" /> About Us
                  </Link>
                </li>
                <li>
                  <Link to="/courses">
                    <FaChevronRight className="link-arrow" /> Programs & Courses
                  </Link>
                </li>
                <li>
                  <Link to="/contact">
                    <FaChevronRight className="link-arrow" /> Contact
                  </Link>
                </li>
                <li>
                  <Link to="/privacy-policy" className="text-warning-hover">
                    <FaShieldAlt className="me-1 extra-small" /> Privacy Policy
                  </Link>
                </li>
              </ul>
            </div>

            <div className="col-lg-5 col-md-12">
              <h5 className="footer-section-title text-white fw-bold mb-3">
                Campus & Inquiries
              </h5>

              <div className="d-flex flex-column gap-2">
                <div className="footer-contact-card p-3 rounded-3 d-flex align-items-start gap-3">
                  <div className="contact-icon-box text-warning mt-1">
                    <FaMapMarkerAlt size={16} />
                  </div>
                  <p className="text-white-50 extra-small mb-0 line-height-base">
                    Office No. E221, VRSCCL, Block - E, Tower 3, above Vashi Railway Station, Sector 30, Vashi, Navi Mumbai, Maharashtra 400703
                  </p>
                </div>

                <div className="row g-2">
                  <div className="col-sm-6">
                    <a href="tel:+919167587322" className="footer-contact-card p-2 px-3 rounded-3 d-flex align-items-center gap-2 text-decoration-none h-100">
                      <FaPhoneAlt className="text-warning flex-shrink-0" size={14} />
                      <span className="text-white-50 extra-small">+91 9167587322</span>
                    </a>
                  </div>
                  <div className="col-sm-6">
                    <a href="mailto:Adaptedgeacademy@gmail.com" className="footer-contact-card p-2 px-3 rounded-3 d-flex align-items-center gap-2 text-decoration-none h-100">
                      <FaEnvelope className="text-warning flex-shrink-0" size={14} />
                      <span className="text-white-50 extra-small text-truncate">Adaptedgeacademy@gmail.com</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>

          </div>

          <div className="footer-divider mb-4"></div>

          <div className="d-flex flex-column flex-md-row justify-content-between align-items-center gap-2 text-white-50 extra-small">
            <span>© 2026 Adapt Edge Academy. All Rights Reserved.</span>
            <span className="footer-accreditation">
              Empowering CA, CS & Financial Aspirants Across Mumbai
            </span>
          </div>
        </div>
      </footer>
    </>
  );
}