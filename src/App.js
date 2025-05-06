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
import Chatbot from './components/Chatbot'; // ✅ Import Chatbot

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
        </Routes>

        <Footer />
        <Chatbot /> {/* ✅ Include the Chatbot */}
      </div>
    </Router>
  );
}

export default App;
