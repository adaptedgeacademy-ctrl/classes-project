import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import { Link } from "react-router-dom";
import {
  FaPhoneAlt,
  FaEnvelope,
  FaFacebookF,
  FaInstagram,
  FaYoutube,
} from "react-icons/fa";
import { motion } from "framer-motion";
// import { Swiper, SwiperSlide } from "swiper/react";
// import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/autoplay";
import logo from "../assets/Nirmaan - Vasai.jpg"


function About() {
  // const slides = [
  //   {
  //     img: "https://images.unsplash.com/photo-1506744038136-46273834b3fb",
  //     title: "Modern Living Spaces",
  //     desc: "Experience comfort and elegance with beautifully designed homes."
  //   },
  //   {
  //     img: "https://images.unsplash.com/photo-1494526585095-c41746248156",
  //     title: "Luxury Interiors",
  //     desc: "Designed to impress with premium materials and aesthetics."
  //   },
  //   {
  //     img: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85",
  //     title: "Smart Investments",
  //     desc: "Find properties that grow your future and secure your wealth."
  //   }
  // ];
  return (
    <>
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

      <nav className="navbar navbar-expand-lg navbar-dark custom-navbar sticky-top">

        <div className="container">

          <Link
            to="/"
            className="navbar-brand d-flex align-items-center"
          >
            <img
              src={logo}
              alt="Adapt Edge Academy"
              className="navbar-logo"
            />
          </Link>

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

              {/* <li className="nav-item">

                <Link className="nav-link" to="/faculty">
                  Faculty
                </Link>

              </li> */}

              <li className="nav-item">

                <Link className="nav-link" to="/contact">
                  Contact
                </Link>

              </li>

              <li className="nav-item">

                <Link className="nav-link" to="/privacy-policy">
                  Privacy Policy
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

      <div
        className="container-fluid py-5"
        style={{
          background: "linear-gradient(135deg, #0f2027, #203a43, #2c5364)",
          color: "white",
        }}
      >
        <div className="container">
          <div className="row align-items-center">

            {/* LEFT CONTENT */}
            <motion.div
              className="col-md-6 mb-4"
              initial={{ opacity: 0, x: -80 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 style={{ fontWeight: "800", fontSize: "3rem" }}>
                About Us
              </h1>

              <p style={{ fontSize: "1.1rem", lineHeight: "1.8" }}>
                We are building modern digital experiences that combine design,
                performance, and innovation. Our mission is to create products
                that not only look stunning but also solve real-world problems
                with efficiency.
              </p>

              <motion.button
                whileHover={{ scale: 1.1 }}
                className="btn btn-light mt-3"
              >
                Learn More
              </motion.button>
            </motion.div>

            {/* RIGHT SIDE CARD */}
            <motion.div
              className="col-md-6"
              initial={{ opacity: 0, x: 80 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <motion.div
                whileHover={{ scale: 1.05 }}
                style={{
                  background: "rgba(255,255,255,0.1)",
                  padding: "30px",
                  borderRadius: "15px",
                  backdropFilter: "blur(10px)",
                }}
              >
                <h4> Our Vision</h4>
                <p>
                  To be the premier destination for commerce and financial education, recognized for transforming ambitious students into ethical, globally competent professionals.
                  Our vision is to bridge the gap between academic potential and professional achievement, ensuring our students consistently lead the fields of finance, accounting, and corporate governance."
                </p>

                <h4>💡 Innovation</h4>
                <p>
                  We focus on delivering scalable, high-performance solutions
                  for modern businesses.
                </p>
              </motion.div>
            </motion.div>

          </div>
        </div>
      </div>

      <div
        className="container-fluid py-5"
        style={{
          background: "linear-gradient(135deg, #141e30, #243b55)",
          color: "white",
        }}
      >
        <div className="container text-center mb-5">
          <h1 style={{ fontWeight: "800" }}>Our Journey</h1>
          <p style={{ opacity: 0.8 }}>
            Built with passion, driven by innovation, and focused on impact.
          </p>
        </div>

        <div className="container">
          <div className="row g-4">

            {/* VISION CARD */}
            <div className="col-md-6">
              <motion.div
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                whileHover={{ scale: 1.05 }}
                className="p-4 h-100"
                style={{
                  background: "rgba(255,255,255,0.08)",
                  borderRadius: "20px",
                  backdropFilter: "blur(12px)",
                  boxShadow: "0 10px 30px rgba(0,0,0,0.3)",
                  cursor: "pointer",
                }}
              >
                <img
                  src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f"
                  alt="Vision"
                  className="img-fluid mb-3"
                  style={{ borderRadius: "15px" }}
                />

                <h3 style={{ fontWeight: "700" }}>
                  <i className="bi bi-eye-fill me-2"></i> Our Vision
                </h3>

                <p style={{ opacity: 0.9 }}>
                  To build powerful digital platforms that redefine user experience
                  and bring innovation to everyday life. We envision a future where
                  technology feels seamless and human.
                </p>
              </motion.div>
            </div>

            {/* MISSION CARD */}
            <div className="col-md-6">
              <motion.div
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                whileHover={{ scale: 1.05 }}
                className="p-4 h-100"
                style={{
                  background: "rgba(255,255,255,0.08)",
                  borderRadius: "20px",
                  backdropFilter: "blur(12px)",
                  boxShadow: "0 10px 30px rgba(0,0,0,0.3)",
                  cursor: "pointer",
                }}
              >
                <img
                  src="https://images.unsplash.com/photo-1504384308090-c894fdcc538d"
                  alt="Mission"
                  className="img-fluid mb-3"
                  style={{ borderRadius: "15px" }}
                />

                <h3 style={{ fontWeight: "700" }}>
                  <i className="bi bi-bullseye me-2"></i> Our Mission
                </h3>

                <p style={{ opacity: 0.9 }}>
                  Our mission is to deliver scalable, high-performance solutions
                  with modern technologies. We focus on solving real-world problems
                  while maintaining elegance in design and code.
                </p>
              </motion.div>
            </div>

          </div>
        </div>
      </div>

      {/* <div className="container-fluid" style={{ background: "#0f172a" }}>
        <Swiper
          modules={[Autoplay]}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          loop={true}
          speed={900}
        >
          {slides.map((slide, index) => (
            <SwiperSlide key={index}>
              <div className="container py-5">
                <div className="row align-items-center">

                  <div className="col-md-6 mb-4 mb-md-0">
                    <img
                      src={slide.img}
                      alt=""
                      className="img-fluid slider-img"
                    />
                  </div>

                  <div className="col-md-6 text-white">
                    <h1 className="slider-title">{slide.title}</h1>
                    <p className="slider-desc">{slide.desc}</p>

                    <button className="btn btn-light slider-btn">
                      Explore
                    </button>
                  </div>

                </div>
              </div>
            </SwiperSlide>
          ))}

          <style>{`
      .slider-img {
        border-radius: 20px;
        transition: transform 0.6s ease;
      }

      .slider-img:hover {
        transform: scale(1.05);
      }

      .slider-title {
        font-size: 2.8rem;
        font-weight: 800;
        animation: slideRight 0.8s ease;
      }

      .slider-desc {
        font-size: 1.2rem;
        opacity: 0.9;
        margin-top: 10px;
        animation: slideRight 1.2s ease;
      }

      .slider-btn {
        margin-top: 20px;
        transition: all 0.3s ease;
      }

      .slider-btn:hover {
        transform: scale(1.1);
        background: black;
        color: white;
      }

      @keyframes slideRight {
        from {
          opacity: 0;
          transform: translateX(50px);
        }
        to {
          opacity: 1;
          transform: translateX(0);
        }
      }
    `}</style>
        </Swiper>
      </div> */}

      <section className="map-section">

        <div className="container py-5">
          <div className="row justify-content-center">
            <div className="col-12 col-md-6 col-lg-4">
              <div className="card border-0 shadow-lg rounded-4 text-center p-4">
                <div className="card-body p-0">
                  <span className="badge bg-warning text-dark rounded-pill mb-3 px-3 py-2 fw-bold">
                    📍 Location
                  </span>
                  <h2 className="card-title h4 fw-bold text-dark mb-2">
                    Visit Adaptedge Academy
                  </h2>
                  <p className="card-text text-muted mb-4 small">
                    Mumbai, Maharashtra
                  </p>
                </div>
              </div>
            </div>
          </div>
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

              <p> Office No. E221, VRSCCL, Block - E, Tower 3, above Vashi Railway Station, Sector 30, Vashi, Navi Mumbai, Maharashtra 400703</p>

              <p>+91 9167587322</p>

              <p>Adaptedgeacademy@gmail.com</p>

            </div>

          </div>

          <hr />

          <div className="text-center">
            © 2026 adaptedgeacademy Academy. All Rights Reserved.
          </div>

        </div>

      </footer>
    </>
  )
}

export default About
