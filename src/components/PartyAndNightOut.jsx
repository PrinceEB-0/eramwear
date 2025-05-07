import React from "react";
import { Link } from "react-router-dom";


const PartyAndNightOut = () => {
  return (
    <div className="container py-5">
      {/* Section Title */}
      <div className="text-center mb-4">
        <h1 className="fw-bold text-dark">Party & Night Out</h1>
        <p className="lead text-muted">
          Look your best for every night out with our exclusive collection of party and nightwear. From bold dresses to stylish suits, we have everything you need for a night to remember.
        </p>
      </div>

      {/* Featured Products Section */}
      <div className="row">
        <div className="col-md-4 mb-4">
          <div className="card shadow-sm border-0">
            <img src="/images/party.jpg" className="card-img-top" alt="Party Dress" />
            <div className="card-body">
              <h5 className="card-title">Elegant Party Dress</h5>
              <p className="card-text">A stunning dress perfect for any party or event. Available in various sizes and colors.</p>
              <Link to="/productdetails/1" className="btn btn-danger">Shop Now</Link>
            </div>
          </div>
        </div>
        <div className="col-md-4 mb-4">
          <div className="card shadow-sm border-0">
            <img src="/images/suit.jpg" className="card-img-top" alt="Night Out Suit" />
            <div className="card-body">
              <h5 className="card-title">Chic Night Out Suit</h5>
              <p className="card-text">A sharp and sophisticated suit for your night out. Comfortable and stylish for any event.</p>
              <Link to="/productdetails/2" className="btn btn-danger">Shop Now</Link>
            </div>
          </div>
        </div>
        <div className="col-md-4 mb-4">
          <div className="card shadow-sm border-0">
            <img src="/images/top.jpg" className="card-img-top" alt="Sparkling Top" />
            <div className="card-body">
              <h5 className="card-title">Sparkling Party Top</h5>
              <p className="card-text">Shine bright with this sparkling top. Perfect for a night out dancing or a cocktail party.</p>
              <Link to="/productdetails/3" className="btn btn-danger">Shop Now</Link>
            </div>
          </div>
        </div>
      </div>

      {/* Popular Categories */}
      <div className="mt-5">
        <h2 className="fw-bold text-dark">Popular Categories</h2>
        <div className="row">
          <div className="col-md-3 mb-3">
            <div className="card shadow-sm border-0">
              <img src="/images/dresses.jpg" className="card-img-top" alt="Dresses" />
              <div className="card-body text-center">
                <h5 className="card-title">Dresses</h5>
                <Link to="/partyandnightout/dresses" className="btn btn-outline-dark">Explore</Link>
              </div>
            </div>
          </div>
          <div className="col-md-3 mb-3">
            <div className="card shadow-sm border-0">
              <img src="/images/suits.jpg" className="card-img-top" alt="Suits" />
              <div className="card-body text-center">
                <h5 className="card-title">Suits</h5>
                <Link to="/partyandnightout/suits" className="btn btn-outline-dark">Explore</Link>
              </div>
            </div>
          </div>
          <div className="col-md-3 mb-3">
            <div className="card shadow-sm border-0">
              <img src="/images/tops.jpg" className="card-img-top" alt="Tops" />
              <div className="card-body text-center">
                <h5 className="card-title">Tops</h5>
                <Link to="/partyandnightout/tops" className="btn btn-outline-dark">Explore</Link>
              </div>
            </div>
          </div>
          <div className="col-md-3 mb-3">
            <div className="card shadow-sm border-0">
              <img src="/images/accesories.jpg" className="card-img-top" alt="Accessories" />
              <div className="card-body text-center">
                <h5 className="card-title">Accessories</h5>
                <Link to="/partyandnightout/accessories" className="btn btn-outline-dark">Explore</Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Styling Tips Section */}
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
  );
};

export default PartyAndNightOut;
