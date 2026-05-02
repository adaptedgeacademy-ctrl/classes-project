import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { FaPhoneAlt, FaEnvelope } from 'react-icons/fa';
import './App.css'

function App() {
  const cards = [1, 2, 3, 4, 5];
  return (
    <>
      <div className="container-fluid bg-primary text-white py-2">
        <div className="d-flex flex-column flex-md-row justify-content-between align-items-center gap-2 gap-md-0">

          <div className="d-flex flex-column flex-sm-row gap-3">

            <div className="d-flex align-items-center">
              <FaPhoneAlt style={{ marginRight: "8px", color: "lightgreen" }} />
              <strong>+91-912345678</strong>
            </div>

            <div className="d-flex align-items-center">
              <FaEnvelope style={{ marginRight: "8px", color: "yellow" }} />
              <strong>someone@wishone.co.in</strong>
            </div>

          </div>

          <div className="mt-2 mt-md-0">
            <strong>JOIN US NOW</strong>
          </div>

        </div>
      </div>

      <nav className="navbar navbar-expand-lg navbar-light bg-light shadow-sm">
        <div className="container-fluid">

          <a className="navbar-brand" href="#">
            Neptune Academy
          </a>

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#mainNav"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="mainNav">
            <ul className="navbar-nav ms-auto">

              <li className="nav-item">
                <a className="nav-link" href="#"><strong>Home</strong></a>
              </li>

              <li className="nav-item">
                <a className="nav-link" href="#"><strong>About</strong></a>
              </li>

              <li className="nav-item">
                <a className="nav-link" href="#"><strong>Courses</strong></a>
              </li>

              <li className="nav-item">
                <a className="nav-link" href="#"><strong>contact</strong></a>
              </li>

            </ul>
          </div>

        </div>
      </nav>

      {/* hero section  */}

      <div className="container my-8">
        <div className="row align-items-center">

          <div className="col-md-5 text-center mb-4 mb-md-0">
            <img
              src="data:image/jpeg;base64,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"
              alt="About"
              className="img-fluid rounded-circle shadow"
              style={{
                width: "350px",
                height: "350px",
                objectFit: "cover",
                border: "5px solid #0d6efd"   // Bootstrap blue
              }}
            />
          </div>

          {/* Right Text */}
          <div className="col-md-6">
            <h2>About Neptune Academy</h2>
            <p>
              Neptune Academy is dedicated to providing high-quality coaching for
              NEET, JEE, MHT-CET, and ICSE students. Our expert faculty ensures
              conceptual clarity and strong exam preparation.
            </p>

            <p>
              We focus on discipline, practice, and personalized guidance to help
              students achieve top results in competitive exams.
            </p>

            <button className="btn btn-primary">
              Learn More
            </button>
          </div>

        </div>
      </div>

      {/* ection 2  */}

      <div className="container my-5">

        <div className="row g-4 justify-content-center">

          {cards.map((item) => (
            <div className="col-lg-2 col-md-10 col-sm-6 d-flex" key={item}>

              <div className="card custom-card w-100 shadow-sm">

                <img
                  src="data:image/jpeg;base64,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"
                  className="card-img-top"
                  alt="card"
                />

                <div className="card-body text-center">
                  <h5 className="card-title">Card {item}</h5>
                  <p className="card-text">
                    Short description goes here.
                  </p>
                </div>

                <div className="card-footer bg-white border-0 text-center">
                  <button className="btn btn-primary w-100">
                    Read More
                  </button>
                </div>

              </div>

            </div>
          ))}

        </div>
      </div>

      {/* whoo we are */}
      <div className="container my-2 hero-wrapper">
        <div className="row align-items-center g-2">

          {/* LEFT SIDE */}
          <div className="col-md-6 text-center text-md-start">

            <h1 className="fw-bold hero-title">
              Welcome to Neptune Academy
            </h1>

            <p className="text-muted">
              Best coaching for NEET, JEE, MHT-CET and school education with expert guidance and structured learning.
            </p>

            <button className="btn btn-primary hero-btn mt-3">
              Get Started
            </button>

          </div>

          {/* RIGHT SIDE - SLIDER */}
          <div className="col-md-6">

            <div id="heroCarousel" className="carousel slide shadow rounded overflow-hidden" data-bs-ride="carousel">

              <div className="carousel-inner">

                <div className="carousel-item active">
                  <img
                    src="https://picsum.photos/600/400?1"
                    className="d-block w-100 hero-img"
                    alt="slide1"
                  />
                </div>

                <div className="carousel-item">
                  <img
                    src="https://picsum.photos/600/400?2"
                    className="d-block w-100 hero-img"
                    alt="slide2"
                  />
                </div>

                <div className="carousel-item">
                  <img
                    src="https://picsum.photos/600/400?3"
                    className="d-block w-100 hero-img"
                    alt="slide3"
                  />
                </div>

              </div>

              <button className="carousel-control-prev" type="button" data-bs-target="#heroCarousel" data-bs-slide="prev">
                <span className="carousel-control-prev-icon"></span>
              </button>

              <button className="carousel-control-next" type="button" data-bs-target="#heroCarousel" data-bs-slide="next">
                <span className="carousel-control-next-icon"></span>
              </button>

            </div>

          </div>

        </div>
      </div>

      {/* why us */}
      <div className="container my-5">
        {/* ================= SECTION 1 ================= */}
        <h3 className="mb-4 fw-bold">Featured Courses</h3>

        <div className="row g-4">

          {[1, 2, 3].map((item) => (
            <div className="col-md-6" key={item}>

              <div className="card big-card shadow-lg border-0">

                <div className="row g-0 align-items-center">

                  {/* IMAGE (8 style part) */}
                  <div className="col-5">
                    <img
                      src={`https://picsum.photos/300/300?random=${item}`}
                      className="img-fluid rounded-start big-img"
                      alt="course"
                    />
                  </div>

                  {/* TEXT + BUTTON (4 style part) */}
                  <div className="col-7 p-3">

                    <h5 className="fw-bold">Premium Course {item}</h5>

                    <p className="text-muted small">
                      High quality structured learning with expert teachers.
                    </p>

                    <button className="btn btn-primary btn-sm hero-btn">
                      Enroll Now
                    </button>

                  </div>

                </div>

              </div>

            </div>
          ))}

        </div>

        <h3 className="mt-5 mb-4 fw-bold">Quick Learn Modules</h3>

        <div className="row g-4">

          {[1, 2, 3, 4].map((item) => (
            <div className="col-lg-3 col-md-4 col-sm-6" key={item}>

              <div className="card simple-card border-0 text-center">

                <img
                  src={`https://picsum.photos/200/200?random=${item + 10}`}
                  className="card-img-top simple-img"
                  alt="module"
                />

                <div className="card-body">
                  <h6 className="fw-bold">Module {item}</h6>
                  <p className="text-muted small">
                    Learn at your own pace with structured content.
                  </p>
                </div>

              </div>

            </div>
          ))}

        </div>

      </div>

      <div id="mainSlider" className="carousel slide full-slider" data-bs-ride="carousel" data-bs-interval="5000">

  <div className="carousel-inner">

    {/* Slide 1 */}
    <div className="carousel-item active">
      <img
        src="https://picsum.photos/1920/1080?random=1"
        className="d-block w-100 slider-img"
        alt="slide1"
      />
      <div className="carousel-caption d-none d-md-block">
        <h1 className="fw-bold">Welcome to Neptune Academy</h1>
        <p>Learn. Grow. Succeed.</p>
      </div>
    </div>

    {/* Slide 2 */}
    <div className="carousel-item">
      <img
        src="https://picsum.photos/1920/1080?random=2"
        className="d-block w-100 slider-img"
        alt="slide2"
      />
      <div className="carousel-caption d-none d-md-block">
        <h1 className="fw-bold">Expert Faculty</h1>
        <p>Top coaching for NEET, JEE & CET</p>
      </div>
    </div>

    {/* Slide 3 */}
    <div className="carousel-item">
      <img
        src="https://picsum.photos/1920/1080?random=3"
        className="d-block w-100 slider-img"
        alt="slide3"
      />
      <div className="carousel-caption d-none d-md-block">
        <h1 className="fw-bold">Achieve Your Dreams</h1>
        <p>Structured learning with proven results</p>
      </div>
    </div>

  </div>

  {/* Controls */}
  <button className="carousel-control-prev" type="button" data-bs-target="#mainSlider" data-bs-slide="prev">
    <span className="carousel-control-prev-icon"></span>
  </button>

  <button className="carousel-control-next" type="button" data-bs-target="#mainSlider" data-bs-slide="next">
    <span className="carousel-control-next-icon"></span>
  </button>

</div>

{/* ================= MAP SECTION ================= */}
<div className="container-fluid p-0">
  <iframe
    title="location-map"
    src="https://www.openstreetmap.org/export/embed.html?bbox=72.8777%2C19.0760%2C72.9777%2C19.1760&layer=mapnik"
    style={{ width: "100%", height: "300px", border: 0 }}
    loading="lazy"
  ></iframe>
</div>

{/* ================= FOOTER ================= */}
<footer className="footer-dark text-white pt-5">

  <div className="container">
    <div className="row g-4">

      {/* LEFT */}
      <div className="col-md-4">
        <h3 className="fw-bold">Neptune Academy</h3>

        <p className="text-muted">
          Providing quality education for NEET, JEE & CET with expert faculty and structured learning approach.
        </p>

        {/* SOCIAL ICONS */}
        <div className="d-flex gap-3 social-icons">
          <i className="bi bi-facebook"></i>
          <i className="bi bi-instagram"></i>
          <i className="bi bi-twitter-x"></i>
          <i className="bi bi-youtube"></i>
        </div>
      </div>

      {/* MIDDLE LINKS */}
      <div className="col-md-4">
        <h5 className="fw-bold">Quick Links</h5>

        <ul className="list-unstyled footer-links">
          <li>Home</li>
          <li>About</li>
          <li>Courses</li>
          <li>Contact</li>
        </ul>
      </div>

      {/* RIGHT CONTACT */}
      <div className="col-md-4">
        <h5 className="fw-bold">Contact Us</h5>

        <p>📍 Mumbai, Maharashtra</p>
        <p>📞 +91 9123456789</p>
        <p>📧 info@neptuneacademy.com</p>
      </div>

    </div>
  </div>

  {/* SUB FOOTER */}
  <div className="sub-footer text-center mt-4 py-3">
    <p className="mb-0">
      © 2026 Neptune Academy. All Rights Reserved.
    </p>
  </div>

</footer>

    </>
  );
}

export default App;