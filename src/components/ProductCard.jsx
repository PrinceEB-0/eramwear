import React from 'react';

const ProductCard = ({ image, name, description, price }) => {
  return (
    <div className="card h-100 shadow-sm">
      <img src={image} className="card-img-top" alt={name} />
      <div className="card-body d-flex flex-column">
        <h5 className="card-title">{name}</h5>
        <p className="card-text">{description}</p>
        <div className="mt-auto">
          <p className="fw-bold text-primary">{price}</p>
          <button className="btn btn-dark w-100">Purchase Now</button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
