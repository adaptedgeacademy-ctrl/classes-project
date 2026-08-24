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
// import aboutimg from "../assets/About us Adaptage.jpg"
import aboutimg from "../assets/WhatsApp Image 2026-06-23 at 9.49.29 PM.jpeg"
import topper from "../assets/student.jpeg"
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
  FaGraduationCap,
  FaBookReader,
  FaChartLine,
  FaQuoteLeft,
  FaStar,
  FaCheckCircle,
  FaChevronRight,
  FaShieldAlt,
  FaMapMarkerAlt
} from "react-icons/fa";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { useState, useEffect } from "react";
import { Helmet } from 'react-helmet-async';
import moni from '../assets/mani.jpeg'
import LocationSection from "./component/location";
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
      name: "Manasvi Saraogi",
      marks: "97% And 99 in accounts",
      image: topper,
    },
    {
      name: "Avni Bhyankar",
      marks: "99 - Accounts",
      image: moni,
    },
    {
      name: "Aditya Mehta",
      marks: "AIR 31 - CA Inter",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTiCh0lNisFErTStjB0DL9z8eCq3gBjcWXoQnSDY9x9Ag&s=10",
    }
  ];

  // const faculty = [
  //   {
  //     name: "CA Rahul Verma",
  //     subject: "Accounts & Taxation",
  //     image:
  //       "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT3yrYrlmWvYAIgKCAI-XViMe3PsHsKT09Q1r3Jpqj4tQ&s=10",
  //   },
  //   {
  //     name: "CA Sneha Shah",
  //     subject: "Law & Auditing",
  //     image:
  //       "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSLaiJoKOZO0Ww3JyBIvkzIxhVZFiVk7J8TymVAhlzrtg&s=10",
  //   },
  //   {
  //     name: "Prof. Aditya Joshi",
  //     subject: "Economics",
  //     image:
  //       "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTzInF8B0ATKne6JG7-r33IGEApZh8I9MtQg7unHw4pyg&s=10",
  //   },
  // ];

  const testimonials = [
    {
      name: "Rahul Jain",
      role: "CA Foundation Student",
      badge: "AIR 21",
      rating: 5,
      icon: <FaAward className="testimonial-avatar-icon text-warning" />,
      initials: "RJ",
      review:
        "Adapt Edge Academy completely transformed my study approach. The weekly predictive test series and 1-on-1 mentor guidance were the key factors behind securing AIR 21 in CA Foundation.",
    },
    {
      name: "Priya Shah",
      role: "Commerce Top Ranker",
      badge: "99 Percentile",
      rating: 5,
      icon: <FaGraduationCap className="testimonial-avatar-icon text-info" />,
      initials: "PS",
      review:
        "The conceptual clarity provided in Accounts and Economics is unmatched. Every doubt was resolved proactively, giving me absolute confidence during board exams.",
    },
    {
      name: "Aditya Mehta",
      role: "CA Intermediate Student",
      badge: "Both Groups Cleared",
      rating: 5,
      icon: <FaUserGraduate className="testimonial-avatar-icon text-success" />,
      initials: "AM",
      review:
        "Unbelievable doubt resolution system and practical case study drills. Truly one of the finest commerce coaching academies in the Mumbai & Navi Mumbai region.",
    },
    {
      name: "Sneha Kulkarni",
      role: "CS Executive Aspirant",
      badge: "Rank Holder",
      rating: 5,
      icon: <FaBookReader className="testimonial-avatar-icon text-danger" />,
      initials: "SK",
      review:
        "Corporate Law and Jurisprudence were simplified with structured flowcharts and summary notes. The personalized mentorship here is an absolute game changer.",
    },
    {
      name: "Karan Verma",
      role: "CMA Inter Student",
      badge: "1st Attempt Pass",
      rating: 5,
      icon: <FaChartLine className="testimonial-avatar-icon text-warning" />,
      initials: "KV",
      review:
        "The strategic study plans, faculty accessibility, and exam-simulated mock papers allowed me to clear both CMA modules seamlessly on my first attempt.",
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
      <Helmet>
        <title>Adapt Edge Academy | Empowering Your Skills</title>
        <meta name="description" content="Welcome to Adapt Edge Academy. Explore our professional courses designed to give you a competitive edge in your career." />

        {/* Optional: Open Graph tags for when links are shared on WhatsApp/Social Media */}
        <meta property="og:title" content="Adapt Edge Academy | Empowering Your Skills" />
        <meta property="og:description" content="Explore our professional courses designed to give you a competitive edge." />
      </Helmet>

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

      <section className="hero-section">
        <div className="container">
          {/* justify-content-end pushes the column to the right side */}
          <div className="row align-items-center min-vh-100 justify-content-end">

            <div className="col-lg-7">
              <span className="hero-badge">
                India's Trusted Commerce Academy
              </span>

              <h1 className="hero-title">
                Build Your Career In <span>CA, CS & Commerce</span> With Expert Guidance
              </h1>

              <p className="hero-text">
                Expert faculty, structured learning, regular test series and
                mentorship for CA Foundation, CA Intermediate, B.Com & Commerce
                students.
              </p>

              <div className="d-flex gap-3 flex-wrap mt-4">
                <Link to="/contact" className="btn btn-warning hero-btn-main">
                  Start Learning
                </Link>

                <Link to="/courses" className="btn btn-outline-light hero-btn-outline">
                   View Courses
                </Link>
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

      {/* <section className="section-space dark-section">

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

      </section> */}

      {/* TESTIMONIALS */}

      <section className="section-space testimonial-section position-relative overflow-hidden py-5">
        {/* Background glow effects */}
        <div className="testimonial-glow-mesh"></div>

        <div className="container position-relative z-2 py-4">
          {/* Section Header */}
          <div className="text-center mb-5">
            <span className="badge bg-warning-subtle text-warning border border-warning-subtle px-3 py-2 rounded-pill fw-bold text-uppercase tracking-wider small">
              Student Success Stories
            </span>
            <h2 className="section-title text-white fw-bold mt-2">
              Trusted by Ambitious Achievers
            </h2>
            <p className="text-white-50 max-w-600 mx-auto small">
              Discover how Adapt Edge Academy empowers students to conquer CA, CS & CMA milestones.
            </p>
          </div>

          {/* Carousel */}
          <div
            id="testimonialSlider"
            className="carousel slide testimonial-carousel"
            data-bs-ride="carousel"
            data-bs-interval="4000"
            data-bs-pause="hover"
          >
            {/* Indicators / Dots */}
            <div className="carousel-indicators custom-indicators mb-n4">
              {testimonials.map((_, idx) => (
                <button
                  key={idx}
                  type="button"
                  data-bs-target="#testimonialSlider"
                  data-bs-slide-to={idx}
                  className={idx === 0 ? "active" : ""}
                  aria-current={idx === 0 ? "true" : "false"}
                  aria-label={`Slide ${idx + 1}`}
                ></button>
              ))}
            </div>

            {/* Carousel Items */}
            <div className="carousel-inner py-3">
              {testimonials.map((item, index) => (
                <div
                  className={`carousel-item ${index === 0 ? "active" : ""}`}
                  key={index}
                >
                  <div className="row justify-content-center">
                    <div className="col-11 col-md-9 col-lg-7">
                      <div className="testimonial-card p-4 p-md-5 rounded-4 position-relative text-center">
                        <FaQuoteLeft className="quote-icon position-absolute" />

                        {/* Avatar Icon Badge */}
                        <div className="avatar-wrapper mx-auto mb-3 d-flex align-items-center justify-content-center">
                          <div className="avatar-initials fw-bold">{item.initials}</div>
                          <div className="avatar-sub-icon">{item.icon}</div>
                        </div>

                        {/* Stars */}
                        <div className="stars d-flex justify-content-center gap-1 mb-3 text-warning">
                          {[...Array(item.rating)].map((_, i) => (
                            <FaStar key={i} size={16} />
                          ))}
                        </div>

                        {/* Review Content */}
                        <p className="testimonial-quote text-white-50 lead fs-6 fst-italic mb-4 line-height-lg">
                          "{item.review}"
                        </p>

                        {/* Author Info */}
                        <div className="author-meta">
                          <h5 className="text-white fw-bold mb-1 d-inline-flex align-items-center gap-1 justify-content-center">
                            {item.name}
                            <FaCheckCircle className="text-primary verified-badge" size={14} title="Verified Student" />
                          </h5>
                          <div className="d-flex align-items-center justify-content-center gap-2 flex-wrap mt-1">
                            <span className="text-white-50 small">{item.role}</span>
                            <span className="badge-achievement px-2 py-0-5 rounded-pill extra-small">
                              {item.badge}
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Controls */}
            <button
              className="carousel-control-prev custom-nav-btn"
              type="button"
              data-bs-target="#testimonialSlider"
              data-bs-slide="prev"
            >
              <span className="carousel-control-prev-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Previous</span>
            </button>
            <button
              className="carousel-control-next custom-nav-btn"
              type="button"
              data-bs-target="#testimonialSlider"
              data-bs-slide="next"
            >
              <span className="carousel-control-next-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Next</span>
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

          <Link to="/contact" className="btn btn-warning cta-btn">
            Apply Now <FaArrowRight />
          </Link>

        </div>

      </section>

      {/* MAP */}

      <LocationSection />

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
                <a href="#facebook" className="social-btn" aria-label="Facebook">
                  <FaFacebookF />
                </a>
                <a href="#instagram" className="social-btn" aria-label="Instagram">
                  <FaInstagram />
                </a>
                <a href="#youtube" className="social-btn" aria-label="YouTube">
                  <FaYoutube />
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
    </>
  );
}

export default Home;
