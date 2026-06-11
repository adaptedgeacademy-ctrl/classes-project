import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import { Link } from "react-router-dom";
import {
  FaFacebookF,
  FaInstagram,
  FaYoutube,
  FaArrowRight,
  FaBookOpen,
  FaUserGraduate,
  FaCalculator,
  FaChartLine,
  FaUniversity,
  FaBriefcase,
  FaClock,
  FaStar
} from "react-icons/fa";

import "./courses.css";

function Courses() {

  const courses = [
    {
      icon: <FaCalculator />,
      title: "CA Foundation",
      duration: "12 Months",
      students: "1200+ Students",
      desc:
        "Strong fundamentals in Accounts, Law, Economics & Mathematics with weekly tests and mentorship.",
      gradient: "gradient-one",
    },

    {
      icon: <FaChartLine />,
      title: "CA Intermediate",
      duration: "18 Months",
      students: "900+ Students",
      desc:
        "Advanced taxation, auditing and financial management taught by industry experts.",
      gradient: "gradient-two",
    },

    {
      icon: <FaBookOpen />,
      title: "XI/XII Commerce",
      duration: "2 Years",
      students: "1500+ Students",
      desc:
        "Complete commerce board preparation with Accounts, Economics and Business Studies.",
      gradient: "gradient-three",
    },

    {
      icon: <FaUniversity />,
      title: "B.Com Coaching",
      duration: "3 Years",
      students: "700+ Students",
      desc:
        "University-focused learning with concept clarity and practical business understanding.",
      gradient: "gradient-four",
    },

    {
      icon: <FaBriefcase />,
      title: "CS Executive",
      duration: "15 Months",
      students: "600+ Students",
      desc:
        "Professional company secretary preparation with corporate law expertise.",
      gradient: "gradient-five",
    },

    {
      icon: <FaUserGraduate />,
      title: "Career Mentorship",
      duration: "Ongoing",
      students: "5000+ Students",
      desc:
        "One-on-one mentoring, career guidance and personal growth support for every student.",
      gradient: "gradient-six",
    },
  ];

  return (
    <>

      <nav className="navbar navbar-expand-lg navbar-dark custom-navbar sticky-top">

        <div className="container">

          <a className="navbar-brand fw-bold fs-3" href="#">
            adaptedgeacademy
          </a>

          <button
            className="navbar-toggler"
            data-bs-toggle="collapse"
            data-bs-target="#mainNav"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="mainNav">

            <ul className="navbar-nav ms-auto align-items-lg-center">

              <li className="nav-item">

                <Link className="nav-link" to="/">
                  Home
                </Link>

              </li>

              <li className="nav-item">

                <Link className="nav-link" to="/about">
                  About
                </Link>

              </li>

              <li className="nav-item">

                <Link className="nav-link" to="/courses">
                  Courses
                </Link>

              </li>

              <li className="nav-item">

                <Link className="nav-link" to="/faculty">
                  Faculty
                </Link>

              </li>

              <li className="nav-item">

                <Link className="nav-link" to="/contact">
                  Contact
                </Link>

              </li>

              <li className="nav-item ms-lg-3 mt-3 mt-lg-0">

                <Link to="/contact">

                  <button className="btn btn-warning enroll-btn">
                    Enroll Now
                  </button>

                </Link>

              </li>

            </ul>

          </div>

        </div>

      </nav>

      {/* HERO */}

      <section className="courses-hero">

        <div className="floating-circle one"></div>
        <div className="floating-circle two"></div>

        <div className="container">

          <div className="text-center hero-content">

            <span className="small-tag">
              ADOPTAGE ACADEMY
            </span>

            <h1>
              Explore Our
              <span> Premium Courses </span>
            </h1>

            <p>
              Industry-leading commerce coaching for CA, CS,
              B.Com and Commerce students with expert faculty,
              mentorship and result-oriented preparation.
            </p>

          </div>

        </div>

      </section>

      {/* COURSES */}

      <section className="courses-section">

        <div className="container">

          <div className="row g-4">

            {courses.map((course, index) => (
              <div className="col-lg-4 col-md-6" key={index}>

                <div className={`course-box ${course.gradient}`}>

                  <div className="course-glow"></div>

                  <div className="course-icon">
                    {course.icon}
                  </div>

                  <h3>
                    {course.title}
                  </h3>

                  <div className="course-meta">

                    <span>
                      <FaClock />
                      {course.duration}
                    </span>

                    <span>
                      <FaStar />
                      {course.students}
                    </span>

                  </div>

                  <p>
                    {course.desc}
                  </p>

                  <button className="explore-btn">

                    Explore Course

                    <FaArrowRight className="arrow-icon" />

                  </button>

                </div>

              </div>
            ))}

          </div>

        </div>

      </section>

      {/* WHY CHOOSE US */}

      <section className="why-section">

        <div className="container">

          <div className="text-center mb-5">

            <span className="small-tag">
              WHY ADOPTAGE
            </span>

            <h2 className="why-title">
              Why Students Choose Us
            </h2>

          </div>

          <div className="row g-4">

            <div className="col-lg-3 col-md-6">

              <div className="why-card">

                <div className="why-icon">
                  📚
                </div>

                <h4>
                  Structured Learning
                </h4>

                <p>
                  Smart study plans with weekly targets and tests.
                </p>

              </div>

            </div>

            <div className="col-lg-3 col-md-6">

              <div className="why-card">

                <div className="why-icon">
                  🧠
                </div>

                <h4>
                  Expert Faculty
                </h4>

                <p>
                  Learn from experienced CA and commerce experts.
                </p>

              </div>

            </div>

            <div className="col-lg-3 col-md-6">

              <div className="why-card">

                <div className="why-icon">
                  🏆
                </div>

                <h4>
                  Proven Results
                </h4>

                <p>
                  Thousands of successful students and rankers.
                </p>

              </div>

            </div>

            <div className="col-lg-3 col-md-6">

              <div className="why-card">

                <div className="why-icon">
                  🎯
                </div>

                <h4>
                  Personal Mentorship
                </h4>

                <p>
                  Career guidance and one-on-one student support.
                </p>

              </div>

            </div>

          </div>

        </div>

      </section>

      <section className="map-section">

        <div className="map-overlay">

          <h2>
            Visit adaptedgeacademy Academy
          </h2>

          <p>
            Mumbai, Maharashtra
          </p>

        </div>

        <iframe
            title="map"
            src="https://www.openstreetmap.org/export/embed.html?bbox=72.8677,19.0660,72.9877,19.1860&layer=mapnik&marker=19.074032,73.002503"
            className="map-frame"
            loading="lazy"
          />

      </section>

      {/* FOOTER */}

      <footer className="footer">

        <div className="container">

          <div className="row g-4">

            <div className="col-lg-4">

              <h3>adaptedgeacademy Academy</h3>

              <p>
                Premium coaching institute for CA, CS & Commerce students.
              </p>

              <div className="socials">

                <FaFacebookF />
                <FaInstagram />
                <FaYoutube />

              </div>

            </div>

            <div className="col-lg-4">

              <h4>Quick Links</h4>

              <ul className="footer-links">

                <li>Home</li>
                <li>Courses</li>
                <li>Faculty</li>
                <li>Contact</li>

              </ul>

            </div>

            <div className="col-lg-4">

              <h4>Contact</h4>

              <p>Mumbai, Maharashtra</p>

              <p>+91 9123456789</p>

              <p>info@neptuneacademy.com</p>

            </div>

          </div>

          <hr />

          <div className="text-center">
            © 2026 adaptedgeacademy Academy. All Rights Reserved.
          </div>

        </div>

      </footer>
    </>
  );
}

export default Courses;