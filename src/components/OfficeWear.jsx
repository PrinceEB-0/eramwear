import React from 'react';

const officeWearProducts = [
  {
    id: 1,
    name: "Tailored Blazer",
    price: "KES 4,500",
    image: "/images/blazer.jpg",
    description: "Perfectly structured for a sleek, professional look.",
  },
  {
    id: 2,
    name: "Pencil Skirt",
    price: "KES 2,800",
    image: "/images/pencilskirt.jpg",
    description: "Elegant and comfortable, ideal for office settings.",
  },
  {
    id: 3,
    name: "Men’s Formal Shirt",
    price: "KES 3,200",
    image: "/images/formalshirt.jpg",
    description: "Classic button-up with a modern fit.",
  },
  {
    id: 4,
    name: "Women’s Trousers",
    price: "KES 3,000",
    image: "/images/trousers.jpg",
    description: "Tailored and versatile office trousers.",
  }
];

const OfficeWear = () => {
  return (
    <div className="container py-5">
      {/* Hero Section */}
      <div className="mb-5">
        <h2 className="mt-4 fw-bold">Office Wear Collection</h2>
        <p className="text-muted">
          Step into your workday with confidence and style. Our Office Wear selection is tailored to keep you looking sharp and professional — whether you're at a meeting, on a Zoom call, or running the boardroom.
        </p>
      </div>

      {/* Product Grid */}
      <div className="row">
        {officeWearProducts.map(product => (
          <div key={product.id} className="col-md-6 col-lg-4 mb-4">
            <div className="card h-100 shadow-sm">
              <img src={product.image} className="card-img-top" alt={product.name} />
              <div className="card-body d-flex flex-column">
                <h5 className="card-title">{product.name}</h5>
                <p className="card-text text-muted">{product.description}</p>
                <div className="mt-auto">
                  <p className="fw-bold">{product.price}</p>
                  <button className="btn btn-dark w-100">Add to Cart</button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OfficeWear;
