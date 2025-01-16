
import './App.css';
import Footer from './components/Footer';
import Navbars from './components/Navbar';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import { Routes, Route } from 'react-router-dom'

import Cart from "./pages/Cart";
import Notfindpage from './pages/Notfindpage';
import Productspage from './pages/Productspage';
import Contact from './pages/Contact';
import About from './pages/About';
import Checkout from './pages/checkout';

function App() {
  return (
    <div className="App">

      <Navbars />
      <div className='homepage'>
      <Routes >
        <Route path="/" element={<Home/>} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Register" element={<Register />} />
        <Route path="/Cart" element={<Cart/>} />
        <Route path="/Contact" element={<Contact/>} />
        <Route path="/About" element={<About/>} />
        <Route path="/Checkout" element={<Checkout/>} />
        <Route path="/Products/:id" element={<Productspage/>} />
        <Route path="*" element={<Notfindpage/>} />
      </Routes>
      </div>

      <Footer/>


    </div>
  );
}

export default App;
