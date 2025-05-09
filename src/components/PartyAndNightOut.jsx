import React from "react";
import {useNavigate } from "react-router-dom";
import Navbar from './Navbar';

const PartyAndNightOut = () => {
  const navigate = useNavigate();

  const handleShopNow = (product) => {
    navigate("/mpesapayment", { state: { product } });
  };

  return (
    <div>
      <Navbar />
      <div className="container py-5">
        <div className="text-center mb-4">
          <h1 className="fw-bold text-dark">Party & Night Out</h1>
          <p className="lead text-muted">
            Look your best for every night out with our exclusive collection of party and nightwear. From bold dresses to stylish suits, we have everything you need for a night to remember.
          </p>
        </div>

        <div className="row">
          <div className="col-md-4 mb-4">
            <div className="card h-100 d-flex flex-column shadow-sm border-0">
              <img src="/images/party.jpg" className="card-img-top" alt="Party Dress" />
              <div className="card-body d-flex flex-column">
                <h5 className="card-title">Elegant Party Dress</h5>
                <p className="card-text">A stunning dress perfect for any party or event. Available in various sizes and colors.</p>
                <button
                  className="btn btn-danger mt-auto"
                  onClick={() =>
                    handleShopNow({
                      product_name: "Elegant Party Dress",
                      product_description: "A stunning dress perfect for any party or event. Available in various sizes and colors.",
                      product_cost: 3000,
                      product_photo: "/images/party.jpg",
                    })
                  }
                >
                  Shop Now
                </button>
              </div>
            </div>
          </div>
          <div className="col-md-4 mb-4">
            <div className="card h-100 d-flex flex-column shadow-sm border-0">
              <img src="/images/suit.jpg" className="card-img-top" alt="Night Out Suit" />
              <div className="card-body d-flex flex-column">
                <h5 className="card-title">Chic Night Out Suit</h5>
                <p className="card-text">A sharp and sophisticated suit for your night out. Comfortable and stylish for any event.</p>
                <button
                  className="btn btn-danger mt-auto"
                  onClick={() =>
                    handleShopNow({
                      product_name: "Chic Night Out Suit",
                      product_description: "A sharp and sophisticated suit for your night out. Comfortable and stylish for any event.",
                      product_cost: 5000,
                      product_photo: "/images/suit.jpg",
                    })
                  }
                >
                  Shop Now
                </button>
              </div>
            </div>
          </div>
          <div className="col-md-4 mb-4">
            <div className="card h-100 d-flex flex-column shadow-sm border-0">
              <img src="/images/top.jpg" className="card-img-top" alt="Sparkling Top" />
              <div className="card-body d-flex flex-column">
                <h5 className="card-title">Sparkling Party Top</h5>
                <p className="card-text">Shine bright with this sparkling top. Perfect for a night out dancing or a cocktail party.</p>
                <button
                  className="btn btn-danger mt-auto"
                  onClick={() =>
                    handleShopNow({
                      product_name: "Sparkling Party Top",
                      product_description: "Shine bright with this sparkling top. Perfect for a night out dancing or a cocktail party.",
                      product_cost: 2500,
                      product_photo: "/images/top.jpg",
                    })
                  }
                >
                  Shop Now
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-5">
          <h2 className="fw-bold text-dark">Popular Categories</h2>
          <div className="row">
            <div className="col-md-3 mb-3">
              <div className="card h-100 d-flex flex-column shadow-sm border-0">
                <img src="/images/dresses.jpg" className="card-img-top" alt="Dresses" />
                <div className="card-body d-flex flex-column text-center">
                  <h5 className="card-title">Dresses</h5>
                  <a href="https://vogue.com" target="_blank" rel="noopener noreferrer" className="btn btn-outline-dark mt-auto">Explore</a>
                </div>
              </div>
            </div>
            <div className="col-md-3 mb-3">
              <div className="card h-100 d-flex flex-column shadow-sm border-0">
                <img src="/images/suits.jpg" className="card-img-top" alt="Suits" />
                <div className="card-body d-flex flex-column text-center">
                  <h5 className="card-title">Suits</h5>
                  <a href="https://vogue.com" target="_blank" rel="noopener noreferrer" className="btn btn-outline-dark mt-auto">Explore</a>
                </div>
              </div>
            </div>
            <div className="col-md-3 mb-3">
              <div className="card h-100 d-flex flex-column shadow-sm border-0">
                <img src="/images/tops.jpg" className="card-img-top" alt="Tops" />
                <div className="card-body d-flex flex-column text-center">
                  <h5 className="card-title">Tops</h5>
                  <a href="https://vogue.com" target="_blank" rel="noopener noreferrer" className="btn btn-outline-dark mt-auto">Explore</a>
                </div>
              </div>
            </div>
            <div className="col-md-3 mb-3">
              <div className="card h-100 d-flex flex-column shadow-sm border-0">
                <img src="/images/accesories.jpg" className="card-img-top" alt="Accessories" />
                <div className="card-body d-flex flex-column text-center">
                  <h5 className="card-title">Accessories</h5>
                  <a href="https://vogue.com" target="_blank" rel="noopener noreferrer" className="btn btn-outline-dark mt-auto">Explore</a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-5">
          <h2 className="fw-bold text-dark">Styling Tips for Your Night Out</h2>
          <p className="lead text-muted">
            Whether you're going to a chic cocktail party, a glamorous gala, or a fun night on the town, we’ve got the perfect pieces to elevate your style. 
            Check out these styling tips:
          </p>
          <ul>
            <li><strong>Dress for the Occasion:</strong> Choose outfits that suit the event, whether it’s a formal party or a casual night out.</li>
            <li><strong>Accessorize Wisely:</strong> Keep it simple yet stylish with statement pieces like elegant jewelry or a fashionable clutch.</li>
            <li><strong>Confidence is Key:</strong> Whatever you wear, own it! Confidence is the best accessory for any night out.</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default PartyAndNightOut;
