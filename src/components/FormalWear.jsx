import React from 'react';

const FormalWear = () => {
  return (
    <div className="container py-5">
      <h2 className="mb-4 text-center fw-bold">Formal Wear</h2>
      <p className="text-center mb-5">
        Step into sophistication with our formal collection. Whether it’s for the boardroom, a gala, or a classy dinner, our pieces are designed to impress.
      </p>

      <div className="row">
        <div className="col-md-6 mb-4">
          <img
            src="/images/formal-wear1.jpg"
            alt="Elegant Suit"
            className="img-fluid rounded shadow-sm"
          />
          <h5 className="mt-3">Elegant 3-Piece Suit</h5>
          <p>Sharp, sleek, and timeless for formal events and meetings.</p>
        </div>
        <div className="col-md-6 mb-4">
          <img
            src="/images/formal-wear2.jpg"
            alt="Formal Dress"
            className="img-fluid rounded shadow-sm"
          />
          <h5 className="mt-3">Classic Formal Dress</h5>
          <p>Graceful and refined—perfect for elegant occasions.</p>
        </div>
      </div>
    </div>
  );
};

export default FormalWear;
