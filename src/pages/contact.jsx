import { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import { Link } from "react-router-dom";
import { FaFacebookF, FaInstagram, FaYoutube } from "react-icons/fa";
import "animate.css";
import logo from "../assets/Nirmaan - Vasai.jpg";
import "./contact.css";

export default function ContactPage() {
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    const canvas = document.getElementById("particles");
    const ctx = canvas.getContext("2d");

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

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

      requestAnimationFrame(animate);
    }

    animate();
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    setShowPopup(true);
    setTimeout(() => setShowPopup(false), 2500);
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
            <img src={logo} className="navbar-logo" />
          </Link>

          <button className="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#mainNav">
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="mainNav">
            <ul className="navbar-nav ms-auto align-items-lg-center">
              <li className="nav-item"><Link className="nav-link" to="/">Home</Link></li>
              <li className="nav-item"><Link className="nav-link" to="/about">About</Link></li>
              <li className="nav-item"><Link className="nav-link" to="/courses">Courses</Link></li>
              <li className="nav-item"><Link className="nav-link" to="/faculty">Faculty</Link></li>
              <li className="nav-item"><Link className="nav-link" to="/contact">Contact</Link></li>
              <li className="nav-item"><Link className="nav-link" to="/privacy-policy">Privacy Policy</Link></li>
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
                <input type="text" placeholder="Your Name" />
                <input type="email" placeholder="Your Email" />
                <input type="text" placeholder="Course Interested" />
                <textarea rows="4" placeholder="Your Message"></textarea>

                <button className="btn-glow" type="submit">
                  Send Message
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
      <footer className="footer">
        <div className="container">
          <div className="row g-4">

            <div className="col-lg-4">
              <h3>Adapt Edge Academy</h3>
              <p>Premium coaching for CA, CS & Commerce students.</p>

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
              <p> Office No. E221, VRSCCL, Block - E, Tower 3, above Vashi Railway Station, Sector 30, Vashi, Navi Mumbai, Maharashtra 400703</p>
              <p>+91 9167587322</p>
              <p>adaptedgeacademy@gmail.com</p>
            </div>

          </div>

          <hr />
          <p className="text-center">© 2026 adaptedgeacademy Academy. All Rights Reserved.</p>
        </div>
      </footer>
    </>
  );
}
