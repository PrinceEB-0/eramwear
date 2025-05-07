import React from 'react';

const Boho = () => {
  return (
    <div className="container my-5">
      <h2 className="text-center mb-4">Boho Collection</h2>
      <p className="text-center text-muted mb-5">
        Embrace free-spirited fashion with our bohemian styles — flowing fabrics, earthy tones, and artistic patterns.
      </p>

      <div className="row">
        <div className="col-md-4 mb-4">
          <div className="card h-100 shadow-sm">
            <img src="/images/boho-dress.jpg" className="card-img-top" alt="Boho Maxi Dress" />
            <div className="card-body">
              <h5 className="card-title">Boho Maxi Dress</h5>
              <p className="card-text">A flowing, floral maxi dress with lace details and a relaxed fit.</p>
              <p className="fw-bold">KES 3,200</p>
            </div>
          </div>
        </div>

        <div className="col-md-4 mb-4">
          <div className="card h-100 shadow-sm">
            <img src="/images/fringe-bag.jpg" className="card-img-top" alt="Fringe Bag" />
            <div className="card-body">
              <h5 className="card-title">Fringe Bag</h5>
              <p className="card-text">Handmade sling bag with soft fringe and tribal embroidery.</p>
              <p className="fw-bold">KES 1,800</p>
            </div>
          </div>
        </div>

        <div className="col-md-4 mb-4">
          <div className="card h-100 shadow-sm">
            <img src="/images/wide-brim-hat.jpg" className="card-img-top" alt="Wide Brim Hat" />
            <div className="card-body">
              <h5 className="card-title">Wide Brim Hat</h5>
              <p className="card-text">Earth-toned wide brim hat perfect for sunny days and vintage looks.</p>
              <p className="fw-bold">KES 1,400</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Boho;
