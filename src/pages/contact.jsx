
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import { Link } from "react-router-dom";
import {
  FaFacebookF,
  FaInstagram,
  FaYoutube
} from "react-icons/fa";
import "animate.css";

export default function ContactPage() {
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
      <div className="container-fluid p-0">
        {/* HERO SECTION */}
        <div className="bg-dark text-white text-center py-5">
          <h1 className="display-4 animate__animated animate__fadeInDown">
            Contact Us
          </h1>
          <p className="lead animate__animated animate__fadeInUp">
            Join our adaptedgeacademy and grow your skills with experts
          </p>
        </div>

        {/* MAIN SECTION */}
        <div className="container py-5">
          <div className="row g-4">
            {/* CONTACT FORM */}
            <div className="col-lg-6">
              <div className="card shadow-lg p-4 border-0 animate__animated animate__fadeInLeft">
                <h3 className="mb-4">Send a Message</h3>

                <form>
                  <div className="mb-3">
                    <input
                      type="text"
                      className="form-control form-control-lg"
                      placeholder="Your Name"
                    />
                  </div>

                  <div className="mb-3">
                    <input
                      type="email"
                      className="form-control form-control-lg"
                      placeholder="Your Email"
                    />
                  </div>

                  <div className="mb-3">
                    <input
                      type="text"
                      className="form-control form-control-lg"
                      placeholder="Course Interested In"
                    />
                  </div>

                  <div className="mb-3">
                    <textarea
                      className="form-control"
                      rows="4"
                      placeholder="Your Message"
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="btn btn-primary w-100 btn-lg hover-btn"
                  >
                    Submit
                  </button>
                </form>
              </div>
            </div>

            {/* CONTACT DETAILS */}
            <div className="col-lg-6">
              <div className="card shadow-lg p-4 border-0 animate__animated animate__fadeInRight">
                <h3 className="mb-4">Contact Details</h3>

                <p>
                  <strong>Address:</strong><br />
                  2nd Floor, Tech Hub Building,<br />
                  Andheri East, Mumbai, India
                </p>

                <p>
                  <strong>Phone:</strong><br />
                  +91 9167587322
                </p>

                <p>
                  <strong>Email:</strong><br />
                  Adaptedgeacademy@gmail.com
                </p>

                <p>
                  <strong>Timings:</strong><br />
                  Mon - Sat: 9 AM - 8 PM
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* MAP SECTION */}
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

                <p>Adaptedgeacademy@gmail.com</p>

              </div>

            </div>

            <hr />

            <div className="text-center">
              © 2026 adaptedgeacademy Academy. All Rights Reserved.
            </div>

          </div>

        </footer>

        {/* CUSTOM STYLES */}
        <style jsx>{`
        .hover-btn {
          transition: all 0.3s ease;
        }

        .hover-btn:hover {
          transform: scale(1.05);
          background-color: #0d6efd;
          box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
        }

        .card:hover {
          transform: translateY(-5px);
          transition: 0.3s ease;
        }

        input:focus,
        textarea:focus {
          box-shadow: 0 0 10px rgba(13, 110, 253, 0.5);
          border-color: #0d6efd;
        }
      `}</style>
      </div>
    </>
  );
}
