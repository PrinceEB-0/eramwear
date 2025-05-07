import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import "bootstrap/dist/js/bootstrap.min.js";

import GetProducts from './components/Getproducts';
import Footer from './components/Footer';
import Signup from './components/Signup';
import Addproducts from './components/Addproducts';
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
          <Route path="/aboutus" element={<Aboutus />} />
          <Route path="/casualwear" element={<CasualWear />} />
          <Route path="/fitnessapparel" element={<FitnessApparel />} />
          <Route path="/partyandnightout" element={<PartyAndNightOut />} />
          <Route path="/officewear" element={<OfficeWear />} />
          <Route path="/streetwear" element={<Streetwear />} />
          <Route path="/formalwear" element={<FormalWear />} /> {/* ✅ Formal Wear Route */}
          <Route path="/boho" element={<Boho />} />
          <Route path="/vintage" element={<Vintage />} />
          <Route path="/accessories" element={<Accessories />} /> {/* ✅ Accessories Route */}
          <Route path="/newarrivals" element={<NewArrivals />} /> {/* ✅ New Arrivals Route */}
        </Routes>

        <Footer />
        <Chatbot />
      </div>
    </Router>
  );
}

export default App;
