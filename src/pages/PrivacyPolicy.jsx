import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "./PrivacyPolicy.css";
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


function PrivacyPolicy() {
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
              className="col-md-12 mb-4"
              initial={{ opacity: 0, x: -80 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="privacy-policy">
      <div className="privacy-container">

        <h1>Privacy Policy</h1>
        
        <section className="privacy-section">
          <h2>1. Introduction</h2>
          <p>
            We respect your privacy and are committed to protecting your
            personal information. This Privacy Policy explains how we
            collect, use, and protect information when you use our website.
          </p>
        </section>

        <section className="privacy-section">
          <h2>2. Information We Collect</h2>
          <p>
            We may collect information that you voluntarily provide to us,
            such as your name, email address, and other information submitted
            through our website.
          </p>
        </section>

        <section className="privacy-section">
          <h2>3. How We Use Your Information</h2>
          <p>
            We may use collected information to provide and improve our
            services, respond to inquiries, and communicate with you.
          </p>
        </section>

        <section className="privacy-section">
          <h2>4. Cookies</h2>
          <p>
            Our website may use cookies or similar technologies to improve
            functionality and understand how visitors use the website.
          </p>
        </section>

        <section className="privacy-section">
          <h2>5. Third-Party Services</h2>
          <p>
            We may use third-party services such as analytics, hosting,
            payment providers, or other service providers.
          </p>
        </section>

        <section className="privacy-section">
          <h2>6. Data Security</h2>
          <p>
            We take reasonable measures to protect your information from
            unauthorized access, alteration, disclosure, or destruction.
          </p>
        </section>

        <section className="privacy-section">
          <h2>7. Your Rights</h2>
          <p>
            Depending on applicable law, you may have rights regarding your
            personal information, including requesting access, correction,
            or deletion.
          </p>
        </section>

        <section className="privacy-section">
          <h2>8. Contact Us</h2>
          <p>
            If you have questions about this Privacy Policy, please contact
            us through the contact information provided on our website.
          </p>
        </section>

      </div>
    </div>

             
            </motion.div>

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

export default PrivacyPolicy
