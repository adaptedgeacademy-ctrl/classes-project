/* eslint-disable react-hooks/static-components */
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import { Link } from "react-router-dom";
import CAimg from "../assets/CA.jpg"
import CSimg from "../assets/CS.jpg"
import CMA from "../assets/CMA.jpg"
import CFA from "../assets/CFA.jpg"
import elev from "../assets/11th.jpg"
import twe from "../assets/12th.jpg"
import aboutimg from "../assets/About us Adaptage.jpg"
import accaimg from "../assets/Acca.jpg"
import logo from "../assets/Nirmaan - Vasai.jpg"
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
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { useState, useEffect } from "react";

import "./Home.css";

function Home() {
  const courses = [
    {
      title: "CA",
      subtitle: "Become a Chartered Accountant",
      description:
        "Master accounting, taxation, auditing, and finance to build a prestigious career as a trusted financial professional.",

      image:
        CAimg,

      duration: "4-5Y",
      projects: "Articleship",
      placement: "High",

      technologies: [
        "Accounting",
        "Taxation",
        "Audit",
        "Finance"
      ]
    },

    {
      title: "CS",
      subtitle: "Corporate Law & Governance Expert",
      description:
        "Develop expertise in company law, compliance, and corporate governance to become a key advisor to organizations.",

      image: CSimg,

      duration: "3-4Y",
      projects: "Training",
      placement: "High",

      technologies: [
        "Corporate Law",
        "Compliance",
        "Governance",
        "Secretarial Practice"
      ]
    },

    {
      title: "CMA",
      subtitle: "Cost & Management Accounting",
      description:
        "Learn cost control, financial planning, and strategic decision-making to help businesses maximize profitability.",

      image: CMA,

      duration: "3-4Y",
      projects: "Training",
      placement: "High",

      technologies: [
        "Costing",
        "Budgeting",
        "Finance",
        "Analytics"
      ]
    },

    {
      title: "ACCA",
      subtitle: "Global Accounting Qualification",
      description:
        "Gain internationally recognized accounting and finance skills and unlock career opportunities across the world.",

      image: accaimg,

      duration: "2-3Y",
      projects: "Case Studies",
      placement: "Global",

      technologies: [
        "IFRS",
        "Audit",
        "Taxation",
        "Finance"
      ]
    },

    {
      title: "CFA",
      subtitle: "Investment & Financial Analysis",
      description:
        "Master investment management, equity research, and portfolio analysis for careers in global finance.",

      image: CFA,

      duration: "2-4Y",
      projects: "Research",
      placement: "Premium",

      technologies: [
        "Investments",
        "Portfolio",
        "Equity",
        "Finance"
      ]
    },

    {
      title: "11TH COMMERCE",
      subtitle: "Build a Strong Commerce Foundation",
      description:
        "Develop a clear understanding of accounts, economics, business studies, and mathematics from the beginning.",

      image: elev,

      duration: "1Y",
      projects: "Practical Learning",
      placement: "Foundation",

      technologies: [
        "Accounts",
        "Economics",
        "Business Studies",
        "Maths"
      ]
    },

    {
      title: "12TH COMMERCE",
      subtitle: "Prepare for Board Exams & Professional Courses",
      description:
        "Score higher in board examinations while preparing for future professional courses like CA, CS, CMA, and ACCA.",

      image: twe,

      duration: "1Y",
      projects: "Board Prep",
      placement: "Career Ready",

      technologies: [
        "Accounts",
        "Economics",
        "Business Studies",
        "Preparation"
      ]
    }
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
    {
      name: "Testing",
      marks: "AIR 21 - CA Foundation",
      image:
        "https://randomuser.me/api/portraits/men/32.jpg",
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

  function Counter({ end, suffix = "" }) {

    const [count, setCount] = useState(0);

    useEffect(() => {

      let current = 0;

      const step = end / 100;

      const timer = setInterval(() => {

        current += step;

        if (current >= end) {

          setCount(end);

          clearInterval(timer);

        } else {

          setCount(Math.floor(current));

        }

      }, 20);

      return () => clearInterval(timer);

    }, [end]);

    return <>{count}{suffix}</>;
  }

  return (
    <>
      {/* TOP BAR */}

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

            <div className="col-lg-7">

              <span className="hero-badge">
                India's Trusted Commerce Academy
              </span>

              <h1 className="hero-title">
                Build Your Career In{" "}
                <span>CA, CS & Commerce</span>{" "}
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
                  <h3>
                    <Counter end={5000} suffix="+" />
                  </h3>
                  <p>Students</p>
                </div>

                <div>
                  <h3>
                    <Counter end={98} suffix="%" />
                  </h3>
                  <p>Results</p>
                </div>

                <div>
                  <h3>
                    <Counter end={15} suffix="+" />
                  </h3>
                  <p>Faculty</p>
                </div>

              </div>

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
                src={aboutimg}
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

      <section className="course-section">
        {courses.map((course, index) => (
          <div className="course-slide" key={index}>
            <div className="course-left">
              <img src={course.image} alt={course.title} />
            </div>

            <div className="course-right">
              <div className="course-info">
                <div className="watermark">
                  {String(index + 1).padStart(2, "0")}
                </div>

                <span className="course-label">
                  Featured Program
                </span>

                <h2 className="course-title">
                  {course.title}
                </h2>

                <h3 className="course-subtitle">
                  {course.subtitle}
                </h3>

                <p className="course-description">
                  {course.description}
                </p>

                <div className="tech-stack">
                  {course.technologies.map((tech, i) => (
                    <span key={i}>{tech}</span>
                  ))}
                </div>

                <div className="course-stats">
                  <div>
                    <strong>{course.duration}</strong>
                    <span>Duration</span>
                  </div>

                  <div>
                    <strong>{course.projects}</strong>
                    <span>Projects</span>
                  </div>

                  <div>
                    <strong>{course.placement}</strong>
                    <span>Placement</span>
                  </div>
                </div>


              </div>
              <Link to="/courses" className="premium-btn">
                <span>Explore Course</span>
                <div className="icon-wrap">
                  →
                </div>
              </Link>
            </div>
          </div>

        ))}

      </section>

      {/* TOPPERS */}

      <section className="section-space topper-section">

        <div className="container">

          <div className="text-center mb-5">

            <span className="small-title">
              OUR TOPPERS
            </span>

            <h2 className="section-title">
              Student Achievements
            </h2>
          </div>

          <Swiper
            modules={[
              Navigation,
              Pagination,
              Autoplay
            ]}
            spaceBetween={30}
            slidesPerView={3}
            navigation
            pagination={{
              clickable: true
            }}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false
            }}
            loop={true}
            breakpoints={{
              320: {
                slidesPerView: 1
              },
              768: {
                slidesPerView: 2
              },
              1200: {
                slidesPerView: 3
              }
            }}
          >

            {toppers.map((topper, index) => (
              <SwiperSlide key={index}>
                <div className="topper-card text-center">
                  <img
                    src={topper.image}
                    alt={topper.name}
                    className="topper-img"
                  />
                  <h4 className="tname">{topper.name}</h4>
                  <p className="tmarks">{topper.marks}</p>

                  <div className="stars">
                    ★★★★★
                  </div>

                </div>

              </SwiperSlide>

            ))}

          </Swiper>

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

      <section className="location-section">

        <div className="location-card">

          <div className="location-badge">
            📍 Visit Our Campus
          </div>

          <h2>
            AdaptEdge Academy
          </h2>

          <p className="location-text">
            Mumbai, Maharashtra
          </p>

          <div className="location-features">

            <div>
              ✓ Experienced Faculty
            </div>

            <div>
              ✓ Modern Classrooms
            </div>

            <div>
              ✓ Career Guidance
            </div>

          </div>

          <div className="location-buttons">

            <a
              href="contact"
              className="contact-btn"
            >
              Contact Us
            </a>

          </div>

        </div>

        <div className="map-wrapper">

          <iframe
            title="map"
            src="https://www.openstreetmap.org/export/embed.html?bbox=72.8677,19.0660,72.9877,19.1860&layer=mapnik&marker=19.074032,73.002503"
            className="map-frame"
            loading="lazy"
          />

        </div>

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
  );
}

export default Home;