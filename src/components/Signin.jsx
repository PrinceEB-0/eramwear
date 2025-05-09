import axios from 'axios';
import React, { useState } from 'react'
import { useNavigate } from "react-router-dom";
import Navbar from './Navbar';  // Import Navbar component

const Signin = () => {
  // create different hooks that will help manage the different states
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // set the states your application can be in
  const [loading, setLoading] = useState("");
  const [error, setError] = useState("");
  // after a successful login and verification of details, we need to redirect a user to a certain page
  // below is a hook for the same.
  const navigate = useNavigate()

  // a function to help us submit the details to the backend API
  const submit = async (e) =>{
    // below line of code will make sure that our app does not reload when a user clicks the signup button
    e.preventDefault()

    // update the loading hook with some information
    setLoading("Please wait as we log you in")

    // create a try and catch block that will add the details to the API
    try{
      // create an object that will be used to hold our data.
      const data = new FormData();
      // add the two details gotten from the input (hooks) onto the object
      data.append("email", email) 
      data.append("password", password)

      // access the POST method from the axios library.
      // add the details to the backend API.
      const response = await axios.post("https://princeeb.pythonanywhere.com", data)

      // set the loading hook back to empty
      setLoading("");

      if (response.data.user){
        // save the details of the user into the local storage
        localStorage.setItem("user", JSON.stringify(response.data.user));
        // redirect the person to another page
        // use the navigate hook to do this
        navigate("/")
      }
      else{
        // the user was not found, show a message
        setError(response.data.Message)
      }
    }
    catch(error){
      setLoading("");
      setError(error.response.data.Message)
    }
  }

  return (
    <div>
      <Navbar /> {/* Add Navbar here */}
      <div className='row justify-content-center mt-5'>
        <div className='card shadow col-md-6 p-4'>
          {error && <div className="alert alert-danger">{error}</div>}
          {loading && <div className="alert alert-info">{loading}</div>}
          <h2>Sign In</h2>
          <form onSubmit={submit}>
            <input 
              type="email"
              placeholder="Enter your email address here"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="form-control" 
            />
            <br />
            <input 
              type="password"
              placeholder="Enter the password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="form-control" 
            /> 
            <br /> 
            <br />
            <button type="submit" className="btn btn-success">Sign In</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Signin;
