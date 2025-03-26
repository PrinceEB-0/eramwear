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
    <div className='row justify-content-center mt-4'>
      <div className='col-md-6 card shadow p-4'>
        <h2>Signup</h2>
        <form onSubmit={submit}>

          {loading}
          {success}
          {error}

          <input 
          type="text" 
          placeholder='Enter the username' 
          className='form-control' 
          value={username}
          onChange={(e) => { setUsername(e.target.value); }}
          required/>
        </form> <br />

        {username}

        <form>
          <input type="email" 
          placeholder='Enter Email Address'
          className='form-control'
          value={email}
          onChange={(e) => { setEmail(e.target.value); }}
          required/> <br />
        
        {email}

          <input type="password" 
          placeholder='Enter your password'
          className='form-control'
          value={password}
          onChange={(e) => { setPassword(e.target.value); }}
          required/> <br />

        {password}

          <input type="number" 
          placeholder='Enter the phone number'
          className='form-control'
          value={phone}
          onChange={(e) => {setPhone(e.target.value);}}
          required/> <br />

        {phone} <br />

          <button type='submit' className='btn btn-primary'>Signup</button>
        </form>

        <p>Already have an account?</p> <Link to={"/signin"}>Signin</Link>
      </div>
    </div>
  )
}

export default Signup


