import React from 'react';
import ProductCard from './ProductCard'; 
import Navbar from './Navbar';

const FitnessApparel = () => {
  return (
    <>
      <Navbar />
      <div className="container my-5">
        <h2 className="text-center mb-4">Fitness Apparel</h2>
        <p className="text-center text-muted mb-5">
          Stay active and stylish with our premium collection of fitness wear. Designed for performance, comfort, and fashion.
        </p>

        <div className="row">
          <div className="col-md-4 mb-4">
            <ProductCard
              image="/images/yoga-set.jpg"
              name="Yoga Set"
              description="Breathable, stretchable, and moisture-wicking fabric perfect for yoga and pilates."
              price="KES 2,800"
            />
          </div>

          <div className="col-md-4 mb-4">
            <ProductCard
              image="/images/gym-tank.jpg"
              name="Men's Gym Tank"
              description="Lightweight and sweat-resistant tank top ideal for intense workouts."
              price="KES 1,500"
            />
          </div>

          <div className="col-md-4 mb-4">
            <ProductCard
              image="/images/running-shorts.jpg"
              name="Running Shorts"
              description="Quick-dry running shorts with zip pockets and built-in support."
              price="KES 1,900"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default FitnessApparel;
