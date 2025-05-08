import './App.css';
import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom'; // Import useNavigate
import 'bootstrap/dist/css/bootstrap.min.css';
import "bootstrap/dist/js/bootstrap.min.js";

import GetProducts from './components/Getproducts';
import Footer from './components/Footer';
import Signup from './components/Signup';
import Addproducts from './components/Addproducts';
import Mpesapayment from './components/Mpesapayment';
import Signin from './components/Signin';
import Aboutus from './components/Aboutus';
import Chatbot from './components/Chatbot';

import CasualWear from './components/Casualwear';
import PartyAndNightOut from './components/PartyAndNightOut';
import OfficeWear from './components/OfficeWear';
import Streetwear from './components/Streetwear';
import Boho from './components/Boho';
import Vintage from './components/Vintage';
import Accessories from './components/Accessories'; // ✅ Added Accessories
import NewArrivals from './components/NewArrivals'; // ✅ Added New Arrivals
import FormalWear from './components/FormalWear'; // ✅ Import Formal Wear
import FitnessApparel from './components/FitnessApparel';

// Floating Chatbot Button Component
const ChatbotButton = () => {
  const navigate = useNavigate(); // useNavigate hook for navigation

  const handleClick = () => {
    navigate("/chatbot");  // Navigate to the chatbot page
  };

  return (
    <div 
      onClick={handleClick}
      style={{
        position: "fixed",
        bottom: "20px",
        right: "20px",
        backgroundColor: "#007bff",
        padding: "15px",
        borderRadius: "50%",
        cursor: "pointer",
        boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.3)"
      }}
    >
      <span style={{ color: "white", fontSize: "24px" }}>💬</span> {/* Chat icon */}
    </div>
  );
};

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <h1>Eram Wear</h1>
        </header>

        <Routes>
          <Route path="/" element={<GetProducts />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/signin" element={<Signin />} />
          <Route path="/addproducts" element={<Addproducts />} />
          <Route path="/mpesapayment" element={<Mpesapayment />} />
          <Route path="/aboutus" element={<Aboutus />} />
          <Route path="/casualwear" element={<CasualWear />} />
          <Route path="/fitnessapparel" element={<FitnessApparel />} />
          <Route path="/partyandnightout" element={<PartyAndNightOut />} />
          <Route path="/officewear" element={<OfficeWear />} />
          <Route path="/streetwear" element={<Streetwear />} />
          <Route path="/formalwear" element={<FormalWear />} />
          <Route path="/boho" element={<Boho />} />
          <Route path="/vintage" element={<Vintage />} />
          <Route path="/accessories" element={<Accessories />} />
          <Route path="/newarrivals" element={<NewArrivals />} />
          <Route path="/chatbot" element={<Chatbot />} /> {/* Add route for chatbot */}
        </Routes>

        <Footer />

        {/* Floating chatbot button */}
        <ChatbotButton />
      </div>
    </Router>
  );
}

export default App;
