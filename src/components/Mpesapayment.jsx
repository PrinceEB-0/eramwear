import axios from 'axios';
import React, { useState } from 'react'
import { useLocation } from 'react-router-dom';
import Navbar from './Navbar';

const Makepayment = () => {
    // We passed the state of our card from the component getproducts component
    // We shall use the useLocation hook to extract the different details passed from getproducts component
    const {product} = useLocation().state || {};

    // create use state hooks: phone number, message
    const [phone, setPhone] = useState("");
    const [message, setMessage] = useState("");

    // create a function that will handle the payment process
    const submit = async (e) => {
        // prevent your site from reloading
        e.preventDefault()

        // update the message hook with some message
        setMessage("Please wait as we process your payment...")

        // create a form data object and add the phone
        const data= new FormData();

        // append the phone
        data.append("phone", phone);

        // append the cost of the product
        // the cost of the product you get it from the details passed from the useLocation hook
        data.append("amount", product.product_cost);

        // use axios to access the http method post
        const response = await axios.post("https://princeeb.pythonanywhere.com/api/mpesa_payment", data)


        // update the message hook with a new message
        setMessage(response.data.message)

    }

    // console.log(product.product_name)
    // console.log(product.product_description)
    // console.log(product.product_cost)
    // console.log(product.product_photo)


return (
  <div className='container mt-5'>
    <Navbar />
    <div className='text-center mb-4'>
      <h1 className='text-dark fw-bold'>Lipa na Mpesa</h1>
      {message && <p className='text-success fw-medium'>{message}</p>}
    </div>
    
    <div className="row justify-content-center">
      <div className="col-md-6">
        <div className="card shadow-lg p-4 rounded-4">
          <h5 className="mb-3">
            Product Name: <span className='text-primary'>{product.product_name}</span>
          </h5>
          <h5 className="mb-4">
            Price: <span className='text-primary'>KES {product.product_cost}</span>
          </h5>

          <form onSubmit={submit}>
            <label className="form-label">Mpesa Number</label>
            <input
              type="number"
              placeholder='Enter your Mpesa number'
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className='form-control mb-4'
            />
            <div className="d-grid">
              <button className='btn btn-success btn-lg rounded-pill'>Make Payment</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
);

}

export default Makepayment;