import Footer from './Footer';
 

const Aboutus = () => {
  return (
    <div className="row justify-content-center">
 

        <h1 className='display-4 text-danger'>About Us</h1>
 

        <div className="col-md-6">
            <div className="card shadow p-4 m-3">
                <img src="images/team.webp" alt="our team" />
            </div>
        </div>
        <div className="col-md-6 justify-content-start">
            <h2 className='text-success'>Members:</h2>
            <ul >
                <li>Harry : CEO</li>
                <li>Liz: COO</li>
                <li>Gael: Member</li>
                <li>Jace: Member</li>
            </ul>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Neque dicta atque, voluptatum minima iste nulla animi excepturi laboriosam? Cum impedit exercitationem minus dolor velit itaque?</p>
 

            <h3 className='text-success'>Over 50+ services, over 1700+ customers served...</h3>
 

           
        </div>
        <Footer/>
    </div>
  )
}
 

export default Aboutus;