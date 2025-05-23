import React, { useState } from 'react';
import axios from 'axios';
import Navbar from './Navbar'; // Import the Navbar component

const Addproducts = () => {
  // Create hooks to store different data
  const [product_name, setProductName] = useState("");
  const [product_description, setProductDescription] = useState("");
  const [product_cost, setProductCost] = useState("");
  const [product_photo, setProductPhoto] = useState("");

  // Create 3 additional hooks to manage the state of your application when a person clicks the Add Product button
  const [loading, setLoading] = useState("");
  const [message, setMessage] = useState("");

  // Create a function that will handle the submit event
  const submit = async (e) => {
    // Prevent the site from reloading
    e.preventDefault();

    // Update the loading hook with a message
    setLoading("Please wait as we update your product details......");

    // Create a form data variable that will hold all details from the hook
    const data = new FormData();

    // Append the information from the hooks
    data.append("product_name", product_name);
    data.append("product_description", product_description);
    data.append("product_cost", product_cost);
    data.append("product_photo", product_photo);

    try {
      // Make the API call
      const response = await axios.post("https://princeeb.pythonanywhere.com/api/addproduct", data);

      // Check if the response status is OK (200)
      if (response.status === 200) {
        setMessage("Product added successfully.");
      } else {
        setMessage("Failed to add product.");
      }

      // Set loading back to default
      setLoading("");

      // Clear the data on the other four hooks
      setProductName("");
      setProductDescription("");
      setProductCost("");
      setProductPhoto("");

    } catch (error) {
      // Handle error if the request fails
      setLoading("");
      setMessage("An error occurred while adding the product.");
    }
  };

  return (
    <div>
      {/* Add Navbar at the top of the page */}
      <Navbar />

      <div className="row justify-content-center mt-4">
        <div className="col-md-6 card shadow p-4">
          <form onSubmit={submit}>
            <h2>Add Product</h2>

            {loading}
            {message}

            <input
              type="text"
              placeholder="Enter the product name here"
              value={product_name}
              onChange={(e) => setProductName(e.target.value)}
              className="form-control"
              required
            />
            <br />
            {product_name}

            <textarea
              placeholder="Enter the description of the product"
              value={product_description}
              onChange={(e) => setProductDescription(e.target.value)}
              className="form-control"
              required
            ></textarea>
            <br />
            {product_description}

            <input
              type="number"
              placeholder="Enter the price"
              value={product_cost}
              onChange={(e) => setProductCost(e.target.value)}
              className="form-control"
            />
            <br />
            {product_cost}

            <label>Product Photo</label>
            <br />
            <input
              type="file"
              placeholder="Enter the photo URL"
              accept="image/*"
              onChange={(e) => setProductPhoto(e.target.files[0])}
              className="form-control"
              required
            />
            <br />
            {product_photo && product_photo.name}

            <br />

            <button type="submit" className="btn btn-danger">Add product</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Addproducts;
