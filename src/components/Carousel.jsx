import { useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import * as bootstrap from 'bootstrap'; // <--- Add this line

const ImageCarousel = () => {
  useEffect(() => {
    const myCarousel = document.getElementById('mycarousel');
    if (myCarousel) {
      new bootstrap.Carousel(myCarousel); // <--- Use imported bootstrap
    }
  }, []);


  return (
    <section className="row">
      <div className="col-md-1"></div>
      <div className="col-md-10">
        <div
          id="mycarousel"
          className="carousel slide whitish-gradient"
          data-bs-ride="carousel"
          data-bs-interval="3000"
          data-bs-pause="false"
        >
          {/* Carousel indicators */}
          <div className="carousel-indicators">
            <button
              type="button"
              data-bs-target="#mycarousel"
              data-bs-slide-to="0"
              className="active"
              aria-current="true"
              aria-label="Slide 1"
            ></button>
            <button
              type="button"
              data-bs-target="#mycarousel"
              data-bs-slide-to="1"
              aria-label="Slide 2"
            ></button>
            <button
              type="button"
              data-bs-target="#mycarousel"
              data-bs-slide-to="2"
              aria-label="Slide 3"
            ></button>
            <button
              type="button"
              data-bs-target="#mycarousel"
              data-bs-slide-to="3"
              aria-label="Slide 4"
            ></button>
          </div>

          {/* Carousel slides */}
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img
                src="images/clothes1.webp"
                alt="Model wearing stylish clothes"
                className="d-block w-100"
                height="300px"
              />
            </div>
            <div className="carousel-item">
              <img
                src="images/Carousel 11.webp"
                alt="Fashion collection banner"
                className="d-block w-100"
                height="300px"
              />
            </div>
            <div className="carousel-item">
              <img
                src="images/ai.jpeg"
                alt="AI-powered digital fashion art"
                className="d-block w-100"
                height="300px"
              />
            </div>
            <div className="carousel-item">
              <img
                src="images/3677016.jpg"
                alt="Scenic nature view with trees and sunlight"
                className="d-block w-100"
                height="300px"
              />
            </div>
            <div className="carousel-item">
              <img
                src="images/10095398.jpg"
                alt="Scenic nature view with trees and sunlight"
                className="d-block w-100"
                height="300px"
              />
            </div>
          </div>

          {/* Controls */}
          <a
            className="carousel-control-prev"
            href="#mycarousel"
            role="button"
            data-bs-slide="prev"
          >
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </a>
          <a
            className="carousel-control-next"
            href="#mycarousel"
            role="button"
            data-bs-slide="next"
          >
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </a>
        </div>
      </div>
      <div className="col-md-1"></div>
    </section>
  );
};

export default ImageCarousel;
