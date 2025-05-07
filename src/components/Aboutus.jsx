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
            <p>Eram Wear is more than just a fashion label — it is a lifestyle movement designed to empower, inspire, and redefine style for the modern era. Founded under the visionary leadership of Rahim B., Eram Wear stands at the intersection of cultural identity, global trends, and individual expression. We believe that fashion is not only about looking good but also about feeling confident, bold, and authentically yourself.</p>
 

            <h3 className='text-success'>Over 50+ services, over 1700+ customers served...</h3>
 

           
        </div>
        <Footer/>
    </div>
  )
}
 

export default Aboutus;