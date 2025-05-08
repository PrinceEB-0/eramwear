import { useEffect, useState } from 'react'

import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import ImageCarousel from './Carousel';
import Navbar from './Navbar';


const Getproducts = () => {

  // CREATE hooks
  const [products, setProducts] = useState([]); // this usestate hook contains an empty array
  const [loading, setLoading] = useState("");
  const [error, setError] = useState("");


  //Create the navigate hook-It will help navigate to the Mpesa paymnet page when the purchase button is clicked.
const navigate=useNavigate();

  // specify the loaction of the image
  const img_url = "https://princeeb.pythonanywhere.com/static/images/"

  // create a function that will handle the get operation(method)
  const getproducts = async () =>{
    // update the loading hook with a message
    setLoading("Please wait as we retrieve the products...")

    try{
      // handle the response given from pythonanywhere
      const response = await axios.get("https://princeeb.pythonanywhere.com/api/getproducts")

      // update the products hook with the products recieved from the API
      setProducts(response.data)

      // set the loading hook back to default
      setLoading("");
    }
    catch(error){
      // set the loading hook back to default
      setLoading("");

      // project an error message
      setError("There was an error encountered")
    }
  } // end getproducts function

  // below we shall use the useEffect hook to call our getproducts function.
  // useEffect is hook that applies new effects/changes to the user interface after an action has happened.
  useEffect(
    () => {getproducts()},
    []) //dependency. This hook contains an empty array depency to ensure that it only runs once when the component (Getproducts component) renders.

     // Filtered products based on search
     const [search, setSearch] = useState("");
     const filtered_products = products.filter((item) =>
       item.product_name.toLowerCase().includes(search.toLowerCase())||
       item.product_description.toLowerCase().includes(search.toLowerCase()));
    

  return (
    <div className="row">

      <Navbar/>
      <ImageCarousel/>
      <h3 className="text-info mt-3 text-center">Available Products</h3>
      <div className="row justify-content-center mt-3 mb-3">
        <input
          className="form-control w-50"
          type="search"
          placeholder="Search Products..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
    </div>


      {/* bind the loading and error */}
      {loading}
      {error}

      {filtered_products.map((product) => (

      <div className="col-md-3 d-flex justify-content-center mb-4">
      <div className="card shadow h-100 d-flex flex-column">
        <img
          src={img_url + product.product_photo}
          className="product_img mt-4"
          alt={product.product_name}
        />

        <div className="card-body d-flex flex-column">
          <h5 className='mt-2'>{product.product_name}</h5>
          <p className='text-muted'>
            {product.product_description.slice(0, 50)}...
          </p>
          <b className='text-warning mb-2'>Kes {product.product_cost}</b>
          <button
            className='btn btn-primary mt-auto'
            onClick={() => navigate("mpesapayment", { state: { product } })}
          >
            Purchase now
          </button>
        </div>
      </div>
      </div>

      ))}

       
    </div>
  )
}

export default Getproducts