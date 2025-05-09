import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';

const Accessories = () => {
  return (
    <>
      {/* Fixed Navbar */}
      <Navbar />

      {/* Main Content */}
      <div className="container pt-5 mt-4">
        <h2 className="text-center mb-4">Accessories Collection</h2>
        <p className="text-center text-muted mb-5">
          Complete your look with our collection of must-have accessories — from trendy bags to timeless jewelry.
        </p>

        <div className="row">
          <div className="col-md-4 mb-4">
            <div className="card h-100 shadow-sm">
              <img src="/images/leather-bag.jpg" className="card-img-top" alt="Leather Handbag" />
              <div className="card-body">
                <h5 className="card-title">Leather Handbag</h5>
                <p className="card-text">Elegant and spacious with a minimalist finish — perfect for everyday use.</p>
                <p className="fw-bold">KES 2,500</p>
              </div>
            </div>
          </div>

          <div className="col-md-4 mb-4">
            <div className="card h-100 shadow-sm">
              <img src="/images/sunglasses.jpg" className="card-img-top" alt="Retro Sunglasses" />
              <div className="card-body">
                <h5 className="card-title">Retro Sunglasses</h5>
                <p className="card-text">Bold frames with UV protection — a statement piece for sunny days.</p>
                <p className="fw-bold">KES 1,200</p>
              </div>
            </div>
          </div>

          <div className="col-md-4 mb-4">
            <div className="card h-100 shadow-sm">
              <img src="/images/hoop-earrings.jpg" className="card-img-top" alt="Gold Hoop Earrings" />
              <div className="card-body">
                <h5 className="card-title">Gold Hoop Earrings</h5>
                <p className="card-text">Timeless gold-plated hoops — simple, bold, and always in style.</p>
                <p className="fw-bold">KES 900</p>
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <Footer />
      </div>
    </>
  );
};

export default Accessories;
