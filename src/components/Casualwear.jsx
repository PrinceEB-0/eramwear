import React from 'react';
import Navbar from './Navbar';
import './CasualWear.css'; // import the CSS for styling

const products = [
  {
    name: "Eram Basic Tee",
    image: "images/tees.jpg",
    desc: "A must-have everyday essential. Soft, breathable, and stylish."
  },
  {
    name: "Relaxed Joggers",
    image: "images/joggers.jpg",
    desc: "The perfect blend of comfort and style for active days or chilling."
  },
  {
    name: "Chic Button-Up",
    image: "images/chic.jpg",
    desc: "Dress it up or down—this shirt always looks sharp."
  },
  {
    name: "Comfy Hoodie",
    image: "images/comfy.jpg",
    desc: "Stay warm and relaxed with our ultra-cozy hoodie."
  }
];

const CasualWear = () => {
  return (
    <>
      <Navbar />
      <div className="container my-5">
        <h2 className="text-center mb-4">Casual Wear Collection: Effortless Style for Every Day 👕👟</h2>
        <p className="text-center text-muted mb-5">
          At <strong>Eram Wear</strong>, we believe that style should be effortless.
        </p>

        <h3 className="mb-4">Featured Items:</h3>
        <div className="row">
          {products.map((product, index) => (
            <div className="col-md-3 mb-4" key={index}>
              <div className="card h-100 shadow-sm">
                <img src={product.image} className="card-img-top" alt={product.name} />
                <div className="card-body">
                  <h5 className="card-title">{product.name}</h5>
                  <p className="card-text">{product.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default CasualWear;
