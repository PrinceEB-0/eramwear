import React from 'react';

const Vintage = () => {
  return (
    <div className="container my-5">
      <h2 className="text-center mb-4">Vintage Collection</h2>
      <p className="text-center text-muted mb-5">
        Step back in time with our curated vintage collection — classic silhouettes, retro prints, and timeless charm.
      </p>

      <div className="row">
        <div className="col-md-4 mb-4">
          <div className="card h-100 shadow-sm">
            <img src="/images/vintage-blazer.jpg" className="card-img-top" alt="Vintage Blazer" />
            <div className="card-body">
              <h5 className="card-title">Vintage Blazer</h5>
              <p className="card-text">Classic checked blazer with padded shoulders and a fitted waist.</p>
              <p className="fw-bold">KES 3,500</p>
            </div>
          </div>
        </div>

        <div className="col-md-4 mb-4">
          <div className="card h-100 shadow-sm">
            <img src="/images/highwaist-jeans.jpg" className="card-img-top" alt="High-Waist Jeans" />
            <div className="card-body">
              <h5 className="card-title">High-Waist Jeans</h5>
              <p className="card-text">Retro-style high-rise denim with a straight-leg cut and faded wash.</p>
              <p className="fw-bold">KES 2,800</p>
            </div>
          </div>
        </div>

        <div className="col-md-4 mb-4">
          <div className="card h-100 shadow-sm">
            <img src="/images/polka-dress.jpg" className="card-img-top" alt="Polka Dot Dress" />
            <div className="card-body">
              <h5 className="card-title">Polka Dot Dress</h5>
              <p className="card-text">Nostalgic 60s-inspired dress with a flattering A-line silhouette and tie waist.</p>
              <p className="fw-bold">KES 2,900</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Vintage;
