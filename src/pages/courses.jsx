import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import { Link } from "react-router-dom";
import {
  FaInstagram,
  FaYoutube,
  FaTelegram,
  FaWhatsapp,
  FaArrowRight,
  FaBookOpen,
  FaUserGraduate,
  FaCalculator,
  FaChartLine,
  FaUniversity,
  FaBriefcase,
  FaClock,
  FaStar,
  FaCheckCircle,
  FaLayerGroup,
  FaFileAlt,
  FaChalkboardTeacher,
  FaQuestionCircle,
  FaGraduationCap,
  FaChevronRight,
  FaShieldAlt,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope
} from "react-icons/fa";
import logo from "../assets/Nirmaan - Vasai.jpg";
import "./courses.css";

const coursesData = [
  {
    id: "ca-foundation",
    category: "ca",
    icon: <FaCalculator />,
    title: "CA Foundation",
    duration: "12 Months",
    students: "1,200+ Students",
    badge: "Foundation Level",
    desc: "Strong core fundamentals in Accounting Principles, Business Laws, Quantitative Aptitude & Business Economics.",
    gradient: "gradient-one",
    modules: [
      { name: "Accounting Principles", chapters: "Journal, Ledger, Trial Balance, Final Accounts, Partnership & Company Accounts" },
      { name: "Business Laws", chapters: "Indian Contract Act 1872, Sale of Goods Act, LLP Act & Companies Act Basics" },
      { name: "Quantitative Aptitude", chapters: "Ratio & Proportion, Time Value of Money, Permutations, Calculus & Statistics" },
      { name: "Business Economics", chapters: "Demand-Supply Analysis, Production Theory, Market Structures & National Income" }
    ],
    highlights: ["Weekly Chapter-wise Mock Tests", "Step-by-Step ICAI Rubric Evaluation", "Daily 1-on-1 Doubt Sessions"]
  },
  {
    id: "ca-inter",
    category: "ca",
    icon: <FaChartLine />,
    title: "CA Intermediate",
    duration: "18 Months",
    students: "900+ Students",
    badge: "Both Groups",
    desc: "Advanced corporate accounting, direct & indirect taxation, statutory auditing, and strategic financial management.",
    gradient: "gradient-two",
    modules: [
      { name: "Advanced Accounting", chapters: "AS Standards, Financial Statements of Companies, Buyback & Internal Reconstruction" },
      { name: "Corporate & Other Laws", chapters: "Management & Admin, Dividend, Accounts & Audit, Foreign Exchange Act (FEMA)" },
      { name: "Taxation (Direct & Indirect)", chapters: "Income Tax Heads, Deductions, TDS, GST Input Tax Credit & Returns" },
      { name: "Cost & Management Acc.", chapters: "Material/Labor Costing, Standard Costing, Marginal Costing & Budgetary Control" },
      { name: "Auditing & Ethics", chapters: "Audit Planning, Internal Controls, SA Standards, Bank Audit & Audit Reports" },
      { name: "FM & Strategic Management", chapters: "Capital Budgeting, Cost of Capital, Strategic Analysis & Implementation" }
    ],
    highlights: ["Live Case Studies & Statutory Filings", "Ranker Mentorship by Practicing CAs", "Predictive Test Series Engine"]
  },
  {
    id: "xi-xii-commerce",
    category: "academic",
    icon: <FaBookOpen />,
    title: "XI & XII Commerce",
    duration: "2 Years",
    students: "1,500+ Students",
    badge: "Board Exam Mastery",
    desc: "Comprehensive board prep (HSC/CBSE) covering Book Keeping, Economics, Organization of Commerce & Secretarial Practice.",
    gradient: "gradient-three",
    modules: [
      { name: "Book Keeping & Accounts", chapters: "Partnership Final Accounts, NPO, Bills of Exchange, Issue of Shares & Analysis" },
      { name: "Economics", chapters: "Micro & Macro Economics, Money Market, Public Finance & National Income" },
      { name: "O.C.M. / Business Studies", chapters: "Principles of Management, Business Services, Emerging Modes & Consumer Protection" },
      { name: "Secretarial Practice / Maths", chapters: "Corporate Finance, Capital Raising, Shares/Debentures & Commercial Math" }
    ],
    highlights: ["100% Board Pattern Question Banks", "Handwritten Model Answer Sheets", "Dedicated Answer Writing Drills"]
  },
  {
    id: "bcom-coaching",
    category: "academic",
    icon: <FaUniversity />,
    title: "B.Com / BAF / BBI Coaching",
    duration: "3 Years",
    students: "700+ Students",
    badge: "University Focused",
    desc: "Mumbai University syllabus aligned coaching for Financial Accounting, Direct Tax, Cost Accounting & Business Law.",
    gradient: "gradient-four",
    modules: [
      { name: "Financial Accounting", chapters: "Amalgamation, Foreign Currency Transactions, Liquidation & Branch Accounts" },
      { name: "Cost & Management Acc.", chapters: "Process Costing, Contract Costing, Activity-Based Costing & Working Capital" },
      { name: "Direct & Indirect Taxes", chapters: "Computation of Total Income for Individuals, Firms & GST Framework" },
      { name: "Financial Management", chapters: "Leverages, Valuation of Securities, Ratio Analysis & Capital Structure" }
    ],
    highlights: ["Semester-wise Crash & Full Batches", "University Past 10 Years Solved Papers", "Internal Project Assistance"]
  },
  {
    id: "cs-executive",
    category: "cs",
    icon: <FaBriefcase />,
    title: "CS Executive",
    duration: "15 Months",
    students: "600+ Students",
    badge: "Corporate Law Special",
    desc: "Specialized training in Company Law, Securities Laws & Capital Markets, Jurisprudence, and Economic & Commercial Laws.",
    gradient: "gradient-five",
    modules: [
      { name: "Company Law & Practice", chapters: "Company Formation, Share Capital, Board Meetings, CSR & Corporate Restructuring" },
      { name: "Securities Laws (SEBI)", chapters: "ICDR Regulations, LODR, Takeover Code, Insider Trading & Mutual Funds" },
      { name: "Jurisprudence & General Laws", chapters: "Constitution of India, Interpretation of Statutes, CPC, CrPC & RTI Act" },
      { name: "Economic & Commercial Laws", chapters: "FEMA, Competition Act, Consumer Protection, Real Estate (RERA) & IP Laws" }
    ],
    highlights: ["Drafting, Pleadings & Conveyancing Drills", "Case Law Analytical Breakdowns", "Direct Mentoring by Qualified CSs"]
  },
  {
    id: "career-mentorship",
    category: "career",
    icon: <FaUserGraduate />,
    title: "Articleship & Career Prep",
    duration: "Ongoing",
    students: "5,000+ Students",
    badge: "Executive Career",
    desc: "Strategic 1-on-1 career mapping, Big 4 interview preparation, resume engineering, and articleship placement support.",
    gradient: "gradient-six",
    modules: [
      { name: "Resume & Profile Engineering", chapters: "Optimizing CV for Big 4s, Mid-tier Firms & Corporate Finance Boutiques" },
      { name: "Technical Interview Drills", chapters: "Statutory Audit, GST Audits, Financial Modelling & Excel for Accountants" },
      { name: "HR & Partner Round Prep", chapters: "Psychometric Testing, Behavioral Scenarios & Professional Etiquette" }
    ],
    highlights: ["Mock Interviews by Big 4 Alumni", "Excel & Financial Tools Bootcamp", "Alumni Network Access"]
  }
];


const faqs = [
  {
    q: "How does the 1-on-1 doubt resolution process work?",
    a: "Every student gets direct access to faculty mentors after lectures and via our dedicated doubt-solving portal. Rank-holder mentors conduct weekly remedial workshops for tricky topics."
  },
  {
    q: "Are test series included with course enrollment?",
    a: "Yes. All programs include scheduled chapter-wise tests and 3 full-length predictive mock exams evaluated strictly according to ICAI/ICSI/Board marking guidelines."
  },
  {
    q: "Do you offer backup lectures if a student misses class?",
    a: "Yes. All offline students receive access to high-definition recorded backups for missed lectures, available until the final exam date."
  },
  {
    q: "What are the installment and fee payment structures?",
    a: "We offer zero-cost EMI plans, flexible semester-wise installment options, and merit-based scholarship discounts for top academic achievers."
  }
];

function Courses() {
  return (
    <div className="courses-page-wrapper">
      {/* NAVBAR */}
      <nav className="navbar navbar-expand-lg navbar-dark custom-navbar sticky-top">
        <div className="container">
          <Link to="/" className="navbar-brand d-flex align-items-center gap-3">
            <div className="logo-frame">
              <img
                src={logo}
                alt="Adaptedge Academy Logo"
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

      {/* HERO SECTION */}
      <section className="courses-hero position-relative overflow-hidden py-4 text-center">
        <div className="hero-glow-core"></div>
        <div className="container position-relative z-2 py-3">
          <span className="badge bg-warning-subtle text-warning border border-warning-subtle px-3 py-1 rounded-pill fw-semibold text-uppercase extra-small mb-2">
            Curriculum & Batches
          </span>
          <h1 className="hero-title text-white fw-bold mb-2">
            Professional <span className="gradient-text">Commerce Programs</span>
          </h1>
          <p className="hero-subtext text-white-50 max-w-600 mx-auto small mb-0">
            Comprehensive preparation for CA, CS, and Board exams with rank-holder faculty and structured predictive test rubrics.
          </p>
        </div>
      </section>

      {/* COURSES GRID */}
      <section className="courses-section py-4">
        <div className="container">
          <div className="row g-4">
            {coursesData.map((course) => (
              <div className="col-lg-4 col-md-6" key={course.id}>
                <div className={`course-card-premium h-100 p-4 rounded-4 position-relative d-flex flex-column justify-content-between ${course.gradient}`}>
                  <div>
                    <div className="d-flex justify-content-between align-items-center mb-3">
                      <div className="course-icon-badge">
                        {course.icon}
                      </div>
                      <span className="badge badge-course-level">
                        {course.badge}
                      </span>
                    </div>

                    <h3 className="course-title text-white fw-bold h5 mb-2">
                      {course.title}
                    </h3>

                    <div className="course-meta-pills d-flex align-items-center gap-3 mb-3 text-white-50 extra-small">
                      <span className="d-flex align-items-center gap-1">
                        <FaClock className="text-warning" /> {course.duration}
                      </span>
                      <span className="d-flex align-items-center gap-1">
                        <FaStar className="text-warning" /> {course.students}
                      </span>
                    </div>

                    <p className="course-desc text-white-50 small line-height-relaxed mb-4">
                      {course.desc}
                    </p>
                  </div>

                  <div className="d-flex flex-column gap-2 mt-2">
                    <button
                      type="button"
                      className="btn btn-syllabus-trigger w-100 py-2 rounded-pill fw-semibold small d-flex align-items-center justify-content-center gap-2"
                      data-bs-toggle="modal"
                      data-bs-target={`#modal-${course.id}`}
                    >
                      <FaLayerGroup size={13} /> View Syllabus & Chapters
                    </button>

                    <Link to="/contact" className="btn btn-warning w-100 py-2 rounded-pill fw-bold text-dark d-flex align-items-center justify-content-center gap-2 shadow-sm explore-btn">
                      Enroll / Inquire <FaArrowRight size={13} />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="why-section py-4 position-relative">
        <div className="container py-3">
          <div className="text-center mb-5">
            <span className="badge bg-warning-subtle text-warning border border-warning-subtle px-3 py-1 rounded-pill fw-semibold extra-small mb-2">
              The Adapt Advantage
            </span>
            <h2 className="text-white fw-bold h3">Why Students Rank With Us</h2>
          </div>

          <div className="row g-4">
            <div className="col-lg-3 col-md-6">
              <div className="why-card-pro p-4 rounded-4 h-100">
                <div className="why-icon-box mb-3">📚</div>
                <h5 className="text-white fw-bold h6 mb-2">Structured Roadmaps</h5>
                <p className="text-white-50 extra-small mb-0">Daily targets, chapter completions, and revision schedules tailored to ICAI & ICSI patterns.</p>
              </div>
            </div>

            <div className="col-lg-3 col-md-6">
              <div className="why-card-pro p-4 rounded-4 h-100">
                <div className="why-icon-box mb-3">🧠</div>
                <h5 className="text-white fw-bold h6 mb-2">Rank-Holder Mentors</h5>
                <p className="text-white-50 extra-small mb-0">Learn directly from practicing Chartered Accountants, Company Secretaries, and tax consultants.</p>
              </div>
            </div>

            <div className="col-lg-3 col-md-6">
              <div className="why-card-pro p-4 rounded-4 h-100">
                <div className="why-icon-box mb-3">🏆</div>
                <h5 className="text-white fw-bold h6 mb-2">Predictive Test Series</h5>
                <p className="text-white-50 extra-small mb-0">Step-by-step evaluation rubrics simulating actual board and council grading criteria.</p>
              </div>
            </div>

            <div className="col-lg-3 col-md-6">
              <div className="why-card-pro p-4 rounded-4 h-100">
                <div className="why-icon-box mb-3">🎯</div>
                <h5 className="text-white fw-bold h6 mb-2">1-on-1 Doubt Engine</h5>
                <p className="text-white-50 extra-small mb-0">Never get stuck. 24/7 dedicated faculty query support and weekly remedial workshops.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ SECTION */}
      <section className="faq-section py-5">
        <div className="container">
          <div className="text-center mb-5">
            <span className="badge bg-warning-subtle text-warning border border-warning-subtle px-3 py-1 rounded-pill fw-semibold extra-small mb-2">
              <FaQuestionCircle className="me-1" /> Quick Answers
            </span>
            <h2 className="text-white fw-bold h3">Frequently Asked Questions</h2>
          </div>

          <div className="row justify-content-center">
            <div className="col-lg-8">
              <div className="accordion custom-accordion" id="courseFaqAccordion">
                {faqs.map((faq, idx) => (
                  <div className="accordion-item mb-3 rounded-3 overflow-hidden border-0" key={idx}>
                    <h2 className="accordion-header" id={`heading-${idx}`}>
                      <button
                        className={`accordion-button ${idx !== 0 ? "collapsed" : ""} text-white fw-semibold small shadow-none`}
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target={`#collapse-${idx}`}
                        aria-expanded={idx === 0 ? "true" : "false"}
                        aria-controls={`collapse-${idx}`}
                      >
                        {faq.q}
                      </button>
                    </h2>
                    <div
                      id={`collapse-${idx}`}
                      className={`accordion-collapse collapse ${idx === 0 ? "show" : ""}`}
                      aria-labelledby={`heading-${idx}`}
                      data-bs-parent="#courseFaqAccordion"
                    >
                      <div className="accordion-body text-white-50 extra-small pt-0 line-height-relaxed">
                        {faq.a}
                      </div>
                    </div>
                  </div>
                ))}
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
                    <FaGraduationCap className="link-arrow" /> Home
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

      {/* MODALS */}
      {coursesData.map((course) => (
        <div
          className="modal fade course-syllabus-modal"
          id={`modal-${course.id}`}
          tabIndex="-1"
          aria-labelledby={`label-${course.id}`}
          aria-hidden="true"
          key={`modal-${course.id}`}
        >
          <div className="modal-dialog modal-dialog-centered modal-lg">
            <div className="modal-content modal-glass p-3 p-md-4 rounded-4 border-0">
              <div className="modal-header border-bottom border-secondary border-opacity-25 pb-3">
                <div className="d-flex align-items-center gap-3">
                  <div className="course-icon-badge fs-5">
                    {course.icon}
                  </div>
                  <div>
                    <h4 className="modal-title text-white fw-bold mb-0 h5" id={`label-${course.id}`}>
                      {course.title}
                    </h4>
                    <span className="text-warning extra-small">{course.duration} Comprehensive Program</span>
                  </div>
                </div>
                <button
                  type="button"
                  className="btn-close btn-close-white shadow-none"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>

              <div className="modal-body py-4">
                <h6 className="text-white fw-bold mb-3 small d-flex align-items-center gap-2">
                  <FaFileAlt className="text-warning" /> Core Subjects & Curriculum Breakdown
                </h6>

                <div className="d-flex flex-column gap-3 mb-4">
                  {course.modules.map((mod, i) => (
                    <div className="module-item-box p-3 rounded-3" key={i}>
                      <div className="text-warning fw-bold small mb-1">{mod.name}</div>
                      <p className="text-white-50 extra-small mb-0 line-height-base">
                        <strong>Key Coverage:</strong> {mod.chapters}
                      </p>
                    </div>
                  ))}
                </div>

                <h6 className="text-white fw-bold mb-3 small d-flex align-items-center gap-2">
                  <FaChalkboardTeacher className="text-warning" /> Included Prep Features
                </h6>

                <div className="row g-2">
                  {course.highlights.map((highlight, idx) => (
                    <div className="col-md-6" key={idx}>
                      <div className="highlight-pill p-2 rounded-2 d-flex align-items-center gap-2 text-white-50 extra-small">
                        <FaCheckCircle className="text-success flex-shrink-0" />
                        <span>{highlight}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="modal-footer border-top border-secondary border-opacity-25 pt-3">
                <button
                  type="button"
                  className="btn btn-outline-secondary text-white-50 btn-sm rounded-pill px-4 extra-small"
                  data-bs-dismiss="modal"
                >
                  Close
                </button>
                <Link
                  to="/contact"
                  className="btn btn-warning btn-sm rounded-pill px-4 fw-bold text-dark extra-small"
                  onClick={() => {
                    const backdrop = document.querySelector('.modal-backdrop');
                    if (backdrop) backdrop.remove();
                  }}
                >
                  Apply For Next Batch
                </Link>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Courses;