import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import image15 from '../image/slide2.avif';
import image16 from '../image/slide3.avif';
import image17 from '../image/slide4.jpg';
import image18 from '../image/back1.jpg';
import './home.css';

const HomePage = () => {
  return (
    <div style={{ padding: '2rem' }}>

      {/* Hero Section with Carousel */}
      <header
  style={{
    backgroundImage: `url(${image18})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    position: "relative",
  }}
  className="text-white text-center py-5"
>
  {/* Semi-transparent overlay for better contrast */}
  <div
    style={{
      position: "absolute",
      top: 0,
      left: 0,
      width: "100%",
      height: "100%",
      backgroundColor: "rgba(0, 0, 0, 0.5)", // Black overlay with 50% transparency
      zIndex: 1,
    }}
  ></div>
  {/* Content section */}
  <div className="container" style={{ position: "relative", zIndex: 2 }}>
    <h1 style={{ color: "#fff", textShadow: "2px 2px 5px rgba(0, 0, 0, 0.7)" }}>
      Welcome to ClickIn
    </h1>
    <p
      className="lead"
      style={{
        color: "#f0f0f0",
        textShadow: "1px 1px 3px rgba(0, 0, 0, 0.7)",
      }}
    >
      Find Your Dream Job or Internship Today!
    </p>
    <button className="btn btn-light btn-lg mt-3">Get Started</button>
  </div>
</header>


      {/* Content Section */}
      <section className="py-5">
        <div className="container">
          <h2 className="text-center mb-4">Why Choose JobPortal?</h2>
          <div className="row">
            <div className="col-md-4">
              <div className="card shadow">
                <div className="card-body">
                  <h5 className="card-title">Explore Jobs</h5>
                  <p className="card-text">
                    Browse through thousands of job listings tailored to your skills and experience.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card shadow">
                <div className="card-body">
                  <h5 className="card-title">Top Internships</h5>
                  <p className="card-text">
                    Find exciting internships to kickstart your career in the industry.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card shadow">
                <div className="card-body">
                  <h5 className="card-title">Track Applications</h5>
                  <p className="card-text">
                    Easily apply and track your applications with a user-friendly dashboard.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Carousel Section */}
      <section className="my-5">
        <div className="container">
          <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
            <div className="carousel-indicators">
              <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
              <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
              <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
            </div>
            <div className="carousel-inner">
              <div className="carousel-item active">
                <img src={image15} className="d-block w-100" alt="AI Pioneers" style={{ height: '500px', objectFit: 'cover' }} />
              </div>
              <div className="carousel-item">
                <img src={image16} className="d-block w-100" alt="ChainLink" style={{ height: '500px', objectFit: 'cover' }} />
              </div>
              <div className="carousel-item">
                <img src={image17} className="d-block w-100" alt="DataMind" style={{ height: '500px', objectFit: 'cover' }} />
              </div>
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
              <span className="carousel-control-prev-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
              <span className="carousel-control-next-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Next</span>
            </button>
          </div>
        </div>
      </section>

      {/* Footer Section */}
      <footer className="bg-dark text-white text-center py-3">
        <p>&copy; 2024 ClickIn. All Rights Reserved.</p>
      </footer>
    </div>
  );
};

export default HomePage;
