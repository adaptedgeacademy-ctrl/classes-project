import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "./PrivacyPolicy.css";
import { Link } from "react-router-dom";
import {
  FaFacebookF,
  FaInstagram,
  FaYoutube,
  FaShieldAlt,
  FaUserCheck,
  FaDatabase,
  FaCookieBite,
  FaExternalLinkAlt,
  FaLock,
  FaUserShield,
  FaHeadset,
  FaCheckCircle,
  FaFileContract,
  FaCalendarAlt,
  FaArrowLeft
} from "react-icons/fa";
import { motion } from "framer-motion";
import logo from "../assets/Nirmaan - Vasai.jpg";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.08, delayChildren: 0.1 }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }
};

const sections = [
  {
    icon: <FaShieldAlt className="text-warning" />,
    num: "01",
    title: "Introduction & Commitment",
    content: "Adapt Edge Academy respects your personal privacy and is committed to safeguarding personal data submitted by students, guardians, and website visitors. This policy outlines our standards for collecting, managing, and securing your information across all academic portals and counseling channels."
  },
  {
    icon: <FaDatabase className="text-warning" />,
    num: "02",
    title: "Information We Collect",
    content: "We collect identifiable information submitted voluntarily during inquiries, demo requests, test-series registrations, and fee processing. This includes student names, contact numbers, email addresses, academic background (CA/CS stage or standard), and parent/guardian contact details."
  },
  {
    icon: <FaUserCheck className="text-warning" />,
    num: "03",
    title: "How We Use Your Data",
    content: "Collected data is used strictly for academic administration, providing customized test analytics, sharing timetable/batch alerts, answering course inquiries, and issuing legitimate receipts and tax invoices."
  },
  {
    icon: <FaCookieBite className="text-warning" />,
    num: "04",
    title: "Cookies & Performance Tracking",
    content: "Our website utilizes temporary session cookies and web metrics to analyze user engagement, evaluate site responsiveness, and remember preferences. You can adjust your browser settings to decline cookies at any time."
  },
  {
    icon: <FaExternalLinkAlt className="text-warning" />,
    num: "05",
    title: "Third-Party Services",
    content: "We collaborate with trusted third-party providers including encrypted payment gateways, SMS notification delivery networks, and cloud hosting infrastructure. These partners only access data necessary to fulfill their designated technical services under confidentiality terms."
  },
  {
    icon: <FaLock className="text-warning" />,
    num: "06",
    title: "Data Security Standards",
    content: "We enforce strict SSL encryption protocols, firewalls, and restricted database access to safeguard personal information from unauthorized access, loss, alteration, or unlawful disclosure."
  },
  {
    icon: <FaUserShield className="text-warning" />,
    num: "07",
    title: "Your Rights & Data Access",
    content: "You retain the right to request a summary of the data we hold, modify inaccurate personal records, or request complete removal from marketing communications by reaching out to our admin desk."
  },
  {
    icon: <FaHeadset className="text-warning" />,
    num: "08",
    title: "Grievances & Support Contact",
    content: "For questions, clarifications, or data concerns regarding this Privacy Policy, you can directly connect with our administrative team at Adaptedgeacademy@gmail.com or visit our campus desk at Vashi Railway Station Commercial Complex."
  }
];

function PrivacyPolicy() {
  return (
    <div className="privacy-page-wrapper">
      {/* TOP COMPACT BAR WITH BACK BUTTON */}
      <header className="policy-top-nav sticky-top py-3">
        <div className="container d-flex justify-content-between align-items-center">
          <Link to="/" className="d-flex align-items-center">
            <img src={logo} alt="Adaptedge Academy" className="navbar-logo rounded-3 shadow-sm" />
          </Link>

          <Link
            to="/"
            className="btn btn-outline-glass-back px-3 py-2 rounded-pill text-white fw-semibold small d-flex align-items-center gap-2"
          >
            <FaArrowLeft className="text-warning" /> Back to Home
          </Link>
        </div>
      </header>

      {/* HERO SECTION */}
      <section className="privacy-hero py-5 position-relative overflow-hidden text-center">
        <div className="hero-glow-mesh"></div>
        <div className="container position-relative z-2 py-lg-4">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="badge bg-warning-subtle text-warning border border-warning-subtle px-3 py-1 rounded-pill fw-bold text-uppercase small mb-3">
              <FaFileContract className="me-1" /> Legal & Compliance
            </span>
            <h1 className="hero-title text-white fw-bold mb-3">
              Privacy & Data <span className="gradient-text">Protection Policy</span>
            </h1>
            <p className="hero-desc text-white-50 max-w-650 mx-auto small mb-3">
              We are committed to transparent student data stewardship, robust SSL encryption, and maintaining strict confidentiality across all academy interactions.
            </p>
            <div className="d-inline-flex align-items-center gap-2 text-white-50 extra-small bg-dark-glass px-3 py-1 rounded-pill border border-secondary border-opacity-25">
              <FaCalendarAlt className="text-warning" />
              <span>Last Revised & Effective: <strong>Academic Year 2026–27</strong></span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* MAIN CONTENT SECTION */}
      <section className="privacy-content-section py-5">
        <div className="container">
          <div className="row g-4">
            {/* Sidebar Summary Card */}
            <div className="col-lg-4">
              <div className="policy-summary-card p-4 rounded-4 sticky-top">
                <h5 className="text-white fw-bold mb-3 d-flex align-items-center gap-2">
                  <FaShieldAlt className="text-warning" /> Trust Highlights
                </h5>
                <p className="text-white-50 extra-small mb-4">
                  Quick summary of our student privacy principles:
                </p>

                <div className="d-flex flex-column gap-3 mb-4">
                  <div className="summary-pill p-3 rounded-3 d-flex align-items-start gap-3">
                    <FaCheckCircle className="text-success mt-1 flex-shrink-0" />
                    <div>
                      <h6 className="text-white fw-semibold extra-small mb-1">No Data Selling</h6>
                      <p className="text-white-50 extra-small mb-0">We never sell student databases or contact lists to marketing vendors.</p>
                    </div>
                  </div>

                  <div className="summary-pill p-3 rounded-3 d-flex align-items-start gap-3">
                    <FaCheckCircle className="text-success mt-1 flex-shrink-0" />
                    <div>
                      <h6 className="text-white fw-semibold extra-small mb-1">256-Bit SSL Security</h6>
                      <p className="text-white-50 extra-small mb-0">All online enrollment queries and payments are encrypted.</p>
                    </div>
                  </div>

                  <div className="summary-pill p-3 rounded-3 d-flex align-items-start gap-3">
                    <FaCheckCircle className="text-success mt-1 flex-shrink-0" />
                    <div>
                      <h6 className="text-white fw-semibold extra-small mb-1">Controlled Academic Use</h6>
                      <p className="text-white-50 extra-small mb-0">Data is solely utilized for lectures, test papers, and progress alerts.</p>
                    </div>
                  </div>
                </div>

                <div className="p-3 rounded-3 helpline-box border border-warning border-opacity-25">
                  <h6 className="text-warning fw-bold extra-small mb-1">Need Clarification?</h6>
                  <p className="text-white-50 extra-small mb-3">Reach our administrative grievance desk directly.</p>
                  <a href="mailto:Adaptedgeacademy@gmail.com" className="btn btn-warning w-100 py-2 rounded-pill fw-bold text-dark extra-small">
                    Email Privacy Officer
                  </a>
                </div>
              </div>
            </div>

            {/* Policy Clauses (Numbered Cards) */}
            <div className="col-lg-8">
              <motion.div
                className="d-flex flex-column gap-3"
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-40px" }}
              >
                {sections.map((sec, idx) => (
                  <motion.div
                    className="clause-card p-4 rounded-4"
                    key={idx}
                    variants={itemVariants}
                    whileHover={{ y: -3, transition: { duration: 0.2 } }}
                  >
                    <div className="d-flex justify-content-between align-items-center mb-3">
                      <div className="d-flex align-items-center gap-3">
                        <div className="clause-icon-box">{sec.icon}</div>
                        <h5 className="text-white fw-bold mb-0 clause-title">{sec.title}</h5>
                      </div>
                      <span className="clause-number text-white-50 fw-bold">{sec.num}</span>
                    </div>
                    <p className="text-white-50 small mb-0 line-height-relaxed">
                      {sec.content}
                    </p>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="footer pt-5 pb-3">
        <div className="container">
          <div className="row g-4 mb-4">
            <div className="col-lg-4 col-md-6">
              <h4 className="fw-bold text-white mb-3">Adapt Edge Academy</h4>
              <p className="text-white-50 mb-4 small">
                Premier commerce coaching institute dedicated to empowering ambitious students into leading CA, CS, and financial professionals.
              </p>
              <div className="d-flex gap-3">
                <a href="#facebook" className="social-btn"><FaFacebookF /></a>
                <a href="#instagram" className="social-btn"><FaInstagram /></a>
                <a href="#youtube" className="social-btn"><FaYoutube /></a>
              </div>
            </div>

            <div className="col-lg-2 col-md-6">
              <h5 className="text-white fw-semibold mb-3">Quick Links</h5>
              <ul className="list-unstyled footer-links d-flex flex-column gap-2 small">
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">About Us</Link></li>
                <li><Link to="/courses">Courses</Link></li>
                <li><Link to="/contact">Contact</Link></li>
                <li><Link to="/privacy-policy">Privacy Policy</Link></li>
              </ul>
            </div>

            <div className="col-lg-6 col-md-12">
              <h5 className="text-white fw-semibold mb-3">Campus Desk</h5>
              <p className="text-white-50 small mb-2">
                📍 Office No. E221, VRSCCL, Block - E, Tower 3, above Vashi Railway Station, Sector 30, Vashi, Navi Mumbai, Maharashtra 400703
              </p>
              <p className="text-white-50 small mb-2">📞 +91 9167587322</p>
              <p className="text-white-50 small mb-0">✉️ Adaptedgeacademy@gmail.com</p>
            </div>
          </div>

          <hr className="border-secondary border-opacity-50 my-4" />

          <div className="text-center text-white-50 small">
            © 2026 Adapt Edge Academy. All Rights Reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}

export default PrivacyPolicy;