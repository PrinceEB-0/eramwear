import React from 'react';

const NewArrivals = () => {
  return (
    <div className="container py-5">
      <h2 className="mb-4 text-center fw-bold">New Arrivals</h2>
      <p className="text-center mb-5">
        Discover the freshest styles just added to our collection. These new pieces are handpicked to keep your wardrobe on point this season.
      </p>

      <div className="row">
        <div className="col-md-6 mb-4">
          <img 
            src="/images/new-arrival1.jpg" 
            alt="New Arrival 1" 
            className="img-fluid rounded shadow-sm"
          />
          <h5 className="mt-3">Modern Blazer Set</h5>
          <p>Perfectly tailored for your day-to-night plans.</p>
        </div>
        <div className="col-md-6 mb-4">
          <img 
            src="/images/new-arrival2.jpg" 
            alt="New Arrival 2" 
            className="img-fluid rounded shadow-sm"
          />
          <h5 className="mt-3">Urban Street Hoodie</h5>
          <p>Stylish, bold, and comfortable for everyday wear.</p>
        </div>
      </div>
    </div>
  );
};

export default NewArrivals;
