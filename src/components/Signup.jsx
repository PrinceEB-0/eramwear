import { Link } from "react-router-dom"
//import the useState hook library
import { useState } from "react"
import React from 'react'
import axios from "axios";

const Signup = () => {
  //initialize the hooks
const[username, setUsername]=useState("");
const[email, setEmail]=useState("");
const[password, setPassword]=useState("");
const[phone, setPhone]=useState("");
//create 3 hooks that will capture the state of our application when the signup button is clicked
const [loading, setLoading]=useState("");
const [error, setError]=useState("");
const [success, setSuccess]=useState("");

//We create a function below that will handle the data submitted on the form all the way to the database
const submit = async(e)=>{
  //loading
  //below we shall prevent our site from an entire reload whenever the details are submitted
  e.preventDefault();

  //update a loading hook that will be displayed when a user clicks on the signup button.
  setLoading("Please wait as we upload your details")

  try{
    //we create an object that will hold all the data on hooks(username, email, password, phone)
    const data = new FormData();

    //below we append the different details onto mount object
    data.append("username", username);
    data.append("email", password);
    data.append("password", password);
    data.append("phone", phone);

    //use the axios that will help us interpret the http request
    //the particular method we shall use is the POST method
    const response = await axios.post("https://princeeb.pythonanywhere.com", data)

    //After the data has been inserted successfully, set the Loading hook to empty.
    setLoading("");

    //Set the success hook with the message you get from a successful registration.
    setSuccess(response.data.Message)

    //clear all the input fields on the form(return the form to default)
    setUsername("");
    setEmail("");
    setPassword("");
    setPhone("");

  }
  catch(error){
    //Update the Loading hook to empty.
    setLoading("");

    //Update the error hook with the error message.
    setError(error.Message)

  }

}

  return (
  <div className="d-flex justify-content-center align-items-center min-vh-100 bg-light">
    <div className="card shadow-lg p-5 rounded-4" style={{ maxWidth: "500px", width: "100%" }}>
      <h2 className="text-center mb-4 text-primary">Create Your Account</h2>

      <form onSubmit={submit}>
        {loading && <div className="alert alert-info">Loading...</div>}
        {success && <div className="alert alert-success">{success}</div>}
        {error && <div className="alert alert-danger">{error}</div>}

        <div className="mb-3">
          <input
            type="text"
            className="form-control"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </div>

        <div className="mb-3">
          <input
            type="email"
            className="form-control"
            placeholder="Email Address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>

        <div className="mb-3">
          <input
            type="password"
            className="form-control"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>

        <div className="mb-4">
          <input
            type="tel"
            className="form-control"
            placeholder="Phone Number"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            required
          />
        </div>

        <div className="d-grid">
          <button type="submit" className="btn btn-primary btn-lg rounded-pill">
            Sign Up
          </button>
        </div>
      </form>

      <div className="text-center mt-4">
        <p className="mb-0">Already have an account?</p>
        <Link to="/signin" className="text-decoration-none text-primary fw-semibold">Sign In</Link>
      </div>
    </div>
  </div>
);

}

export default Signup


