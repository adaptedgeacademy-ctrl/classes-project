import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import { Link } from "react-router-dom";
import {
  FaPhoneAlt,
  FaEnvelope,
  FaTelegram,
  FaWhatsapp,
  FaInstagram,
  FaYoutube,
  FaGraduationCap,
  FaUsers,
  FaTrophy,
  FaBookOpen,
  FaCheckCircle,
  FaMapMarkerAlt,
  FaDirections,
  FaArrowRight,
  FaAward,
  FaClock,
  FaChevronRight,
  FaShieldAlt
} from "react-icons/fa";
import { motion } from "framer-motion";
import logo from "../assets/Nirmaan - Vasai.jpg";
import "./About.css";

// Animation Variants
const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" }
  },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.1,
    },
  },
};

const cardHover = {
  hover: {
    y: -8,
    transition: { duration: 0.3, ease: "easeInOut" }
  }
};

const stats = [
  { icon: <FaGraduationCap />, value: "2500+", label: "Successful Students", subtext: "Across CA, CS & CMA" },
  { icon: <FaTrophy />, value: "98%", label: "Passing Rate", subtext: "Consistent First Attempts" },
  { icon: <FaUsers />, value: "35+", label: "Expert Faculty", subtext: "Practicing Industry Mentors" },
  { icon: <FaBookOpen />, value: "15+", label: "Specialized Batches", subtext: "Foundation to Final" },
];

const pillars = [
  {
    title: "Our Vision",
    badge: "Future Ready",
    icon: "🎯",
    desc: "To be the premier destination for commerce and financial education, transforming ambitious students into ethical, globally competent professionals and future industry leaders.",
  },
  {
    title: "Our Mission",
    badge: "Outcome Driven",
    icon: "🚀",
    desc: "Deliver personalized mentorship, conceptual clarity, and comprehensive test series to bridge the gap between academic theory and practical corporate success.",
  },
  {
    title: "Our Methodology",
    badge: "Structured Prep",
    icon: "💡",
    desc: "A hybrid framework combining deep-dive live lectures, real-world case studies, round-the-clock doubt-clearing sessions, and predictive mock assessments.",
  },
];

function About() {
  const mapEmbedUrl = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3770.8354747209794!2d72.9995583!3d19.074032!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c62fb529ff7b%3A0x6b2e3e5c94285b7b!2sVashi%20Railway%20Station!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin";
  const directionsUrl = "https://maps.google.com/?q=Vashi+Railway+Station+Commercial+Complex+Navi+Mumbai";

  return (
    <div className="about-page-wrapper">
      {/* TOP ANNOUNCEMENT BAR */}
      <div className="top-bar">
        <div className="container d-flex justify-content-between align-items-center flex-wrap">

          <div className="d-flex gap-4 flex-wrap">

            <span>
              <FaPhoneAlt /> +91 9167587322
            </span>

            <span>
              <FaEnvelope /> Adaptedgeacademy@gmail.com
            </span>

          </div>

          <div>
            Admissions Open 2026
          </div>

        </div>
      </div>

      {/* NAVBAR */}
      <nav className="navbar navbar-expand-lg navbar-dark custom-navbar sticky-top">
        <div className="container">
          <Link to="/" className="navbar-brand d-flex align-items-center gap-3">
            <div className="logo-frame">
              <img
                src={logo}
                alt="Adapt Edge Academy Logo"
                className="navbar-logo"
              />
            </div>
            <div className="d-flex flex-column brand-text-group d-none d-sm-flex">
              <span className="brand-title">Adaptedge</span>
              <span className="brand-subtitle">Academy of Commerce</span>
            </div>
          </Link>

          <button
            className="navbar-toggler custom-toggler border-0 shadow-none p-2"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#mainNav"
            aria-controls="mainNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="mainNav">
            <ul className="navbar-nav ms-auto align-items-lg-center gap-lg-4">
              <li className="nav-item">
                <Link className="nav-link nav-link-custom" to="/">Home</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link nav-link-custom" to="/about">About</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link nav-link-custom" to="/courses">Courses</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link nav-link-custom" to="/contact">Contact</Link>
              </li>
              <li className="nav-item ms-lg-2 mt-3 mt-lg-0">
                <Link to="/contact" className="btn btn-warning btn-nav-cta px-4 py-2 rounded-pill fw-bold text-dark">
                  Enroll Now
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      {/* HERO SECTION (NO IMAGES - PURE UI & GLASS CARD) */}
      <section className="hero-sections py-5 position-relative overflow-hidden">
        <div className="hero-mesh-glow"></div>
        <div className="container position-relative z-2 py-lg-5">
          <div className="row align-items-center gy-5">
            <motion.div
              className="col-lg-6"
              initial="hidden"
              animate="visible"
              variants={fadeInUp}
            >
              <div className="d-inline-flex align-items-center gap-2 px-3 py-1 rounded-pill hero-badge mb-3">
                <FaAward className="text-warning" />
                <span>Pioneering Professional Commerce Coaching</span>
              </div>

              <h1 className="hero-heading mb-4 text-white fw-bold">
                Empowering The Next Generation of <span className="gradient-text">CA, CS & Finance</span> Leaders
              </h1>

              <p className="hero-text text-white-50 mb-4 lead">
                At Adapt Edge Academy, we move past rote learning. We build sharp analytical instincts, financial acumen, and high-impact professionals ready for corporate boardrooms.
              </p>

              <div className="d-flex gap-3 flex-wrap">
                <Link to="/courses" className="btn btn-warning btn-lg px-4 rounded-pill fw-bold text-dark shadow-glow d-flex align-items-center gap-2">
                  Explore Courses <FaArrowRight size={14} />
                </Link>
                <Link to="/contact" className="btn btn-glass-outline btn-lg px-4 rounded-pill fw-semibold text-white">
                  Get in Touch
                </Link>
              </div>
            </motion.div>

            <motion.div
              className="col-lg-6"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.2 }}
            >
              <div className="hero-card-glass p-4 p-md-5 rounded-4 position-relative">
                <div className="d-flex align-items-center justify-content-between mb-4 pb-2 border-bottom border-secondary border-opacity-25">
                  <h4 className="text-white fw-bold mb-0">The Adapt Edge Advantage</h4>
                  <span className="badge bg-warning text-dark px-3 py-1 rounded-pill fw-semibold">Proven Track</span>
                </div>

                <div className="d-flex flex-column gap-3">
                  <div className="feature-item p-3 rounded-3 d-flex align-items-start gap-3">
                    <div className="feature-icon-wrapper text-warning">
                      <FaCheckCircle />
                    </div>
                    <div>
                      <h6 className="text-white fw-bold mb-1">1-on-1 Mentorship & Doubt Resolution</h6>
                      <p className="text-white-50 small mb-0">Direct access to rank-holder Chartered Accountants and subject specialists.</p>
                    </div>
                  </div>

                  <div className="feature-item p-3 rounded-3 d-flex align-items-start gap-3">
                    <div className="feature-icon-wrapper text-warning">
                      <FaCheckCircle />
                    </div>
                    <div>
                      <h6 className="text-white fw-bold mb-1">Industry Case Studies</h6>
                      <p className="text-white-50 small mb-0">Syllabus synced with live taxation, corporate law, and statutory audit models.</p>
                    </div>
                  </div>

                  <div className="feature-item p-3 rounded-3 d-flex align-items-start gap-3">
                    <div className="feature-icon-wrapper text-warning">
                      <FaCheckCircle />
                    </div>
                    <div>
                      <h6 className="text-white fw-bold mb-1">Predictive Mock Series</h6>
                      <p className="text-white-50 small mb-0">Detailed performance analytics with step-by-step marking rubrics.</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* STATS STRIP */}
      <section className="stats-strip py-4">
        <div className="container">
          <motion.div
            className="row g-3 g-md-4 text-center"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={staggerContainer}
          >
            {stats.map((item, idx) => (
              <motion.div className="col-6 col-md-3" key={idx} variants={fadeInUp}>
                <div className="stat-card p-4 rounded-4 h-100 d-flex flex-column justify-content-center">
                  <div className="stat-icon mb-2 text-warning">{item.icon}</div>
                  <h2 className="stat-value fw-bold text-white mb-1">{item.value}</h2>
                  <p className="text-white fw-semibold small mb-1">{item.label}</p>
                  <span className="text-white-50 extra-small">{item.subtext}</span>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CORE PILLARS SECTION */}
      <section className="py-5 pillars-section">
        <div className="container py-lg-4">
          <div className="text-center mb-5">
            <span className="badge bg-warning text-dark px-3 py-1 rounded-pill fw-bold mb-2">Our Foundation</span>
            <h2 className="fw-bold text-white mb-2">Our Guiding Pillars</h2>
            <p className="text-white-50 max-w-600 mx-auto">Driven by professional ethics, backed by student success stories.</p>
          </div>

          <motion.div
            className="row g-4"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={staggerContainer}
          >
            {pillars.map((pillar, idx) => (
              <motion.div
                className="col-md-4"
                key={idx}
                variants={fadeInUp}
                whileHover="hover"
              >
                <motion.div
                  className="pillar-card p-4 rounded-4 h-100 d-flex flex-column justify-content-between"
                  variants={cardHover}
                >
                  <div>
                    <div className="d-flex justify-content-between align-items-center mb-3">
                      <div className="pillar-icon-box">{pillar.icon}</div>
                      <span className="badge pillar-pill">{pillar.badge}</span>
                    </div>
                    <h4 className="fw-bold text-white mb-3">{pillar.title}</h4>
                    <p className="text-white-50 line-height-relaxed">{pillar.desc}</p>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* LOCATION & MAP SECTION (REDESIGNED PREMIUM DUAL-PANE) */}
      <section className="map-section py-5">
        <div className="container py-lg-4">
          <div className="text-center mb-5">
            <span className="badge bg-warning text-dark px-3 py-2 rounded-pill fw-bold mb-2">
              <FaMapMarkerAlt className="me-1" /> Campus Location
            </span>
            <h2 className="fw-bold text-white">Visit Our Modern Academy</h2>
            <p className="text-white-50">Directly connected to Vashi Railway Station for seamless commute</p>
          </div>

          <div className="row g-4 align-items-stretch">
            {/* Campus Highlights Card */}
            <div className="col-lg-5">
              <div className="campus-info-card p-4 p-md-5 rounded-4 h-100 d-flex flex-column justify-content-between">
                <div>
                  <h4 className="text-white fw-bold mb-3 d-flex align-items-center gap-2">
                    <span className="location-pin-pulse"></span> Navi Mumbai Campus
                  </h4>
                  <p className="text-white-50 mb-4">
                    Office No. E221, VRSCCL, Block - E, Tower 3, above Vashi Railway Station, Sector 30, Vashi, Navi Mumbai, Maharashtra 400703
                  </p>

                  <div className="d-flex flex-column gap-3 mb-4">
                    <div className="d-flex align-items-center gap-3 text-white-50 small">
                      <FaClock className="text-warning flex-shrink-0" />
                      <span>Mon - Sat: 8:00 AM – 8:00 PM | Sun: 9:00 AM – 4:00 PM</span>
                    </div>
                    <div className="d-flex align-items-center gap-3 text-white-50 small">
                      <FaPhoneAlt className="text-warning flex-shrink-0" />
                      <span>Counseling Desk: +91 9167587322</span>
                    </div>
                  </div>
                </div>

                <a
                  href={directionsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-warning w-100 py-3 rounded-pill fw-bold text-dark d-flex align-items-center justify-content-center gap-2 shadow-sm get-directions-btn"
                >
                  <FaDirections size={18} /> Open in Google Maps
                </a>
              </div>
            </div>

            {/* Embedded Interactive Map */}
            <div className="col-lg-7">
              <div className="map-frame-wrapper rounded-4 overflow-hidden h-100 position-relative shadow-lg">
                <iframe
                  title="Adapt Edge Academy Location"
                  src={mapEmbedUrl}
                  className="w-100 h-100"
                  style={{ minHeight: "380px", border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="footer position-relative overflow-hidden pt-5 pb-3">
        {/* Ambient Background Glow */}
        <div className="footer-glow-mesh"></div>

        <div className="container position-relative z-2">
          <div className="row g-4 mb-5">

            {/* Brand & Mission Column */}
            <div className="col-lg-4 col-md-6">
              <Link to="/" className="d-inline-flex align-items-center gap-3 mb-3 text-decoration-none">
                <div className="footer-logo-frame">
                  <img src={logo} alt="Adapt Edge Academy" className="footer-logo" />
                </div>
                <div className="d-flex flex-column">
                  <span className="footer-brand-title">Adapt Edge</span>
                  <span className="footer-brand-subtitle">Commerce Academy</span>
                </div>
              </Link>

              <p className="text-white-50 small mb-4 line-height-relaxed">
                Premier commerce coaching institute dedicated to transforming aspiring students into industry-leading CA, CS, and corporate finance professionals.
              </p>

              {/* Social Icons */}
              <div className="d-flex gap-2">
                <a href="https://t.me/+fZJqsFrZQJFIMGVI" className="social-btn" aria-label="Facebook">
                  <FaTelegram />
                </a>
                <a href="https://www.instagram.com/adaptedgeacademy?igsh=ZjN6cHB0aTVtaXYy" className="social-btn" aria-label="Instagram">
                  <FaInstagram />
                </a>
                <a href="https://www.youtube.com/@minasharma9832" className="social-btn" aria-label="YouTube">
                  <FaYoutube />
                </a>
                <a href="https://whatsapp.com/channel/0029Vb7zMxx8kyyHrmlaol0q" className="social-btn" aria-label="YouTube">
                  <FaWhatsapp />
                </a>
              </div>
            </div>

            {/* Quick Links Column */}
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
                    <FaChevronRight className="link-arrow" /> Contact Desk
                  </Link>
                </li>
                <li>
                  <Link to="/privacy-policy" className="text-warning-hover">
                    <FaShieldAlt className="me-1 extra-small" /> Privacy Policy
                  </Link>
                </li>
              </ul>
            </div>

            {/* Contact Details Column (Interactive Glass Cards) */}
            <div className="col-lg-5 col-md-12">
              <h5 className="footer-section-title text-white fw-bold mb-3">
                Campus & Inquiries
              </h5>

              <div className="d-flex flex-column gap-2">
                {/* Address Card */}
                <div className="footer-contact-card p-3 rounded-3 d-flex align-items-start gap-3">
                  <div className="contact-icon-box text-warning mt-1">
                    <FaMapMarkerAlt size={16} />
                  </div>
                  <p className="text-white-50 extra-small mb-0 line-height-base">
                    Office No. E221, VRSCCL, Block - E, Tower 3, above Vashi Railway Station, Sector 30, Vashi, Navi Mumbai, Maharashtra 400703
                  </p>
                </div>

                {/* Helpline & Email in responsive flex */}
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

          {/* Gradient Divider Line */}
          <div className="footer-divider mb-4"></div>

          {/* Bottom Bar */}
          <div className="d-flex flex-column flex-md-row justify-content-between align-items-center gap-2 text-white-50 extra-small">
            <span>© 2026 Adapt Edge Academy. All Rights Reserved.</span>
            <span className="footer-accreditation">
              Empowering CA, CS & Financial Aspirants Across Mumbai
            </span>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default About;