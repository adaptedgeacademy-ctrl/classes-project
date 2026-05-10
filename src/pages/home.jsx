import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import { Link } from "react-router-dom";
import {
  FaPhoneAlt,
  FaEnvelope,
  FaFacebookF,
  FaInstagram,
  FaYoutube,
  FaArrowRight,
  FaBookOpen,
  FaChalkboardTeacher,
  FaUserGraduate,
  FaAward,
} from "react-icons/fa";

import "./Home.css";

function Home() {
  const courses = [
    {
      title: "CA Foundation",
      desc: "Complete preparation with expert mentorship and test series.",
      image:
        "https://images.unsplash.com/photo-1523240795612-9a054b0db644",
    },
    {
      title: "CA Intermediate",
      desc: "Advanced commerce & taxation preparation.",
      image:
        "https://images.unsplash.com/photo-1513258496099-48168024aec0",
    },
    {
      title: "B.Com Coaching",
      desc: "Strong academic support for commerce students.",
      image:
        "https://images.unsplash.com/photo-1523580846011-d3a5bc25702b",
    },
  ];

  const toppers = [
    {
      name: "Rahul Jain",
      marks: "AIR 21 - CA Foundation",
      image:
        "https://randomuser.me/api/portraits/men/32.jpg",
    },
    {
      name: "Priya Shah",
      marks: "95% - Commerce Boards",
      image:
        "https://randomuser.me/api/portraits/women/44.jpg",
    },
    {
      name: "Aditya Mehta",
      marks: "AIR 31 - CA Inter",
      image:
        "https://randomuser.me/api/portraits/men/51.jpg",
    },
  ];

  const faculty = [
    {
      name: "CA Rahul Verma",
      subject: "Accounts & Taxation",
      image:
        "https://randomuser.me/api/portraits/men/41.jpg",
    },
    {
      name: "CA Sneha Shah",
      subject: "Law & Auditing",
      image:
        "https://randomuser.me/api/portraits/women/52.jpg",
    },
    {
      name: "Prof. Aditya Joshi",
      subject: "Economics",
      image:
        "https://randomuser.me/api/portraits/men/55.jpg",
    },
  ];

  return (
    <>
      {/* TOP BAR */}

      <div className="top-bar">
        <div className="container d-flex justify-content-between align-items-center flex-wrap">

          <div className="d-flex gap-4 flex-wrap">

            <span>
              <FaPhoneAlt /> +91 9123456789
            </span>

            <span>
              <FaEnvelope /> info@neptuneacademy.com
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

      <section className="hero-section">

        <div className="container">

          <div className="row align-items-center min-vh-100">

            <div className="col-lg-6">

              <span className="hero-badge">
                India's Trusted Commerce Academy
              </span>

              <h1 className="hero-title">
                Build Your Career In
                <span> CA, CS & Commerce </span>
                With Expert Guidance
              </h1>

              <p className="hero-text">
                Expert faculty, structured learning, regular
                test series and mentorship for CA Foundation,
                CA Intermediate, B.Com & Commerce students.
              </p>

              <div className="d-flex gap-3 flex-wrap mt-4">

                <button className="btn btn-warning hero-btn-main">
                  Start Learning
                </button>

                <button className="btn btn-outline-light hero-btn-outline">
                  View Courses
                </button>

              </div>

              <div className="hero-stats">

                <div>
                  <h3>5000+</h3>
                  <p>Students</p>
                </div>

                <div>
                  <h3>98%</h3>
                  <p>Results</p>
                </div>

                <div>
                  <h3>15+</h3>
                  <p>Faculty</p>
                </div>

              </div>

            </div>

            <div className="col-lg-6 text-center mt-5 mt-lg-0">

              <img
                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f"
                alt="students"
                className="img-fluid hero-image"
              />

            </div>

          </div>

        </div>

      </section>

      {/* ABOUT */}

      <section className="section-space">

        <div className="container">

          <div className="row align-items-center g-5">

            <div className="col-lg-6">

              <img
                src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3"
                className="img-fluid about-image"
                alt="about"
              />

            </div>

            <div className="col-lg-6">

              <span className="small-title">
                ABOUT US
              </span>

              <h2 className="section-title">
                About adaptedgeacademy
              </h2>

              <p className="section-text">
                adaptedgeacademy Academy is one of the leading commerce
                coaching institutes focused on CA, CS, B.Com
                and XI/XII Commerce preparation.
              </p>

              <div className="feature-box">
                <FaBookOpen />
                <span>Weekly Test Series</span>
              </div>

              <div className="feature-box">
                <FaChalkboardTeacher />
                <span>Expert Faculty</span>
              </div>

              <div className="feature-box">
                <FaUserGraduate />
                <span>Career Mentorship</span>
              </div>

            </div>

          </div>

        </div>

      </section>

      {/* COURSES */}

      <section className="section-space dark-section">

        <div className="container">

          <div className="text-center mb-5">

            <span className="small-title">
              OUR COURSES
            </span>

            <h2 className="section-title">
              Popular Courses
            </h2>

          </div>

          <div className="row g-4">

            {courses.map((course, index) => (
              <div className="col-lg-4 col-md-6" key={index}>

                <div className="course-card">

                  <img
                    src={course.image}
                    className="course-image"
                    alt="course"
                  />

                  <div className="course-body">

                    <h4>{course.title}</h4>

                    <p>{course.desc}</p>

                    <button className="btn btn-warning w-100">
                      Enquire Now
                    </button>

                  </div>

                </div>

              </div>
            ))}

          </div>

        </div>

      </section>

      {/* TOPPERS */}

      <section className="section-space">

        <div className="container">

          <div className="text-center mb-5">

            <span className="small-title">
              OUR TOPPERS
            </span>

            <h2 className="section-title">
              Student Achievements
            </h2>

          </div>

          <div className="row g-4">

            {toppers.map((topper, index) => (
              <div className="col-lg-4 col-md-6" key={index}>

                <div className="topper-card text-center">

                  <img
                    src={topper.image}
                    alt="topper"
                    className="topper-img"
                  />

                  <h4>{topper.name}</h4>

                  <p>{topper.marks}</p>

                  <div className="stars">
                    ★★★★★
                  </div>

                </div>

              </div>
            ))}

          </div>

        </div>

      </section>

      {/* FACULTY */}

      <section className="section-space dark-section">

        <div className="container">

          <div className="text-center mb-5">

            <span className="small-title">
              OUR FACULTY
            </span>

            <h2 className="section-title">
              Meet Our Teachers
            </h2>

          </div>

          <div className="row g-4">

            {faculty.map((teacher, index) => (
              <div className="col-lg-4 col-md-6" key={index}>

                <div className="faculty-card text-center">

                  <img
                    src={teacher.image}
                    className="faculty-img"
                    alt="faculty"
                  />

                  <h4>{teacher.name}</h4>

                  <p>{teacher.subject}</p>

                </div>

              </div>
            ))}

          </div>

        </div>

      </section>

      {/* TESTIMONIALS */}

      <section className="section-space testimonial-section">

        <div className="container">

          <div className="text-center mb-5">

            <span className="small-title">
              STUDENT REVIEWS
            </span>

            <h2 className="section-title">
              What Students Say
            </h2>

          </div>

          <div
            id="testimonialSlider"
            className="carousel slide"
            data-bs-ride="carousel"
            data-bs-interval="2500"
          >

            <div className="carousel-inner">

              <div className="carousel-item active">

                <div className="testimonial-card">

                  <img
                    src="https://randomuser.me/api/portraits/men/32.jpg"
                    className="testimonial-img"
                    alt=""
                  />

                  <h4>Rahul Jain</h4>

                  <span>CA Foundation Student</span>

                  <div className="stars">
                    ★★★★★
                  </div>

                  <p>
                    adaptedgeacademy Academy completely changed my preparation.
                    Weekly tests and mentorship helped me score
                    AIR 21 in CA Foundation.
                  </p>

                </div>

              </div>

              <div className="carousel-item">

                <div className="testimonial-card">

                  <img
                    src="https://randomuser.me/api/portraits/women/44.jpg"
                    className="testimonial-img"
                    alt=""
                  />

                  <h4>Priya Shah</h4>

                  <span>Commerce Topper</span>

                  <div className="stars">
                    ★★★★★
                  </div>

                  <p>
                    Best faculty for Accounts and Economics.
                    The environment is motivating and the teachers
                    are always supportive.
                  </p>

                </div>

              </div>

              <div className="carousel-item">

                <div className="testimonial-card">

                  <img
                    src="https://randomuser.me/api/portraits/men/51.jpg"
                    className="testimonial-img"
                    alt=""
                  />

                  <h4>Aditya Mehta</h4>

                  <span>CA Inter Student</span>

                  <div className="stars">
                    ★★★★★
                  </div>

                  <p>
                    Amazing test series and doubt solving sessions.
                    One of the best commerce coaching institutes
                    in Mumbai.
                  </p>

                </div>

              </div>

            </div>

            <button
              className="carousel-control-prev"
              type="button"
              data-bs-target="#testimonialSlider"
              data-bs-slide="prev"
            >
              <span className="carousel-control-prev-icon"></span>
            </button>

            <button
              className="carousel-control-next"
              type="button"
              data-bs-target="#testimonialSlider"
              data-bs-slide="next"
            >
              <span className="carousel-control-next-icon"></span>
            </button>

          </div>

        </div>

      </section>

      {/* CTA */}

      <section className="cta-section">

        <div className="container text-center">

          <FaAward className="cta-icon" />

          <h2>
            Ready To Start Your CA Journey?
          </h2>

          <p>
            Join adaptedgeacademy Academy today and achieve your dream career.
          </p>

          <button className="btn btn-warning cta-btn">
            Apply Now <FaArrowRight />
          </button>

        </div>

      </section>

      {/* MAP */}

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
          src="https://www.openstreetmap.org/export/embed.html?bbox=72.8777%2C19.0760%2C72.9777%2C19.1760&layer=mapnik"
          className="map-frame"
          loading="lazy"
        ></iframe>

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

export default Home;