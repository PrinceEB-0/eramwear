import { Link } from "react-router-dom";

const ImageCarousel = () => {
  return (
    <section className="row">
      <div className="col-md-1"></div>
      <div className="col-md-10">
        <div
          className="carousel slide whitish-gradient"
          data-bs-ride="carousel"
          data-bs-interval="3000"
          id="mycarousel"
        >
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img src="images/clothes1.webp" alt="" className="d-block w-100" height="300px" />
            </div>
            <div className="carousel-item">
              <img src="images/Carousel 11.webp" alt="" className="d-block w-100" height="300px" />
            </div>
            <div className="carousel-item">
              <img src="images/ai.jpeg" alt="" className="d-block w-100" height="300px" />
            </div>
            <div className="carousel-item">
              <img src="images/3677016.jpg" alt="" className="d-block w-100" height="300px" />
            </div>
          </div>

          <Link to="#mycarousel" className="carousel-control-prev" data-bs-slide="prev">
            <span className="carousel-control-prev-icon"></span>
          </Link>

          <Link to="#mycarousel" className="carousel-control-next" data-bs-slide="next">
            <span className="carousel-control-next-icon"></span>
          </Link>
        </div>
      </div>
      <div className="col-md-1"></div>
    </section>
  );
};

export default ImageCarousel;
