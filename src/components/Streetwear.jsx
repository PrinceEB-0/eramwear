import React from 'react';
import Navbar from './Navbar';  // Import the Navbar component

const Streetwear = () => {
  return (
    <div>
      <Navbar /> {/* Add Navbar here */}
      <div className="container my-5">
        <h2 className="text-center mb-4">Streetwear</h2>
        <p className="text-center text-muted mb-5">
          Discover edgy, urban styles that make a bold statement. Our streetwear line blends comfort, creativity, and culture.
        </p>

        <div className="row">
          <div className="col-md-4 mb-4">
            <div className="card h-100 shadow-sm">
              <img src="/images/hoodie.jpg" className="card-img-top" alt="Graphic Hoodie" />
              <div className="card-body">
                <h5 className="card-title">Graphic Hoodie</h5>
                <p className="card-text">Oversized street hoodie with bold prints and ultra-soft lining.</p>
                <p className="fw-bold">KES 2,500</p>
              </div>
            </div>
          </div>

          <div className="col-md-4 mb-4">
            <div className="card h-100 shadow-sm">
              <img src="/images/bucket-hat.jpg" className="card-img-top" alt="Bucket Hat" />
              <div className="card-body">
                <h5 className="card-title">Bucket Hat</h5>
                <p className="card-text">Retro-style bucket hat perfect for sunny days and bold looks.</p>
                <p className="fw-bold">KES 950</p>
              </div>
            </div>
          </div>

          <div className="col-md-4 mb-4">
            <div className="card h-100 shadow-sm">
              <img src="/images/cargo-pants.jpg" className="card-img-top" alt="Cargo Pants" />
              <div className="card-body">
                <h5 className="card-title">Cargo Pants</h5>
                <p className="card-text">Functional and stylish cargo pants with a relaxed street fit.</p>
                <p className="fw-bold">KES 2,300</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Streetwear;
