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
    <div>
      <Navbar />
      <h2>Casual Wear Collection: Effortless Style for Every Day 👕👟</h2>
      <p>
        At <strong>Eram Wear</strong>, we believe that style should be effortless.
      </p>

      {/* Existing content here */}

      <h3>Featured Items:</h3>
      <div className="card-grid">
        {products.map((product, index) => (
          <div className="product-card" key={index}>
            <img src={product.image} alt={product.name} />
            <h4>{product.name}</h4>
            <p>{product.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CasualWear;
