import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { FaShoppingCart } from "react-icons/fa";
import { IoPersonAdd } from "react-icons/io5";
import { RiLoginBoxLine } from "react-icons/ri";
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

function Navbars() {
  const state=useSelector(state=>state)
  return (
    <Navbar  style={{background:"rgb(182, 192, 196)", position:"fixed",zIndex:"100" ,width:"100%", top:"0",}} collapseOnSelect expand="lg" className='opacity-80'>
      <Container className='d-flex justify-content-between'>
        <Navbar.Brand to="/" className='mx-5 fw-bold fs-4' >E-commerce</Navbar.Brand>
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto pe-4 ">
            <Link to={"/"} className='navlink'>Home</Link>
            <Link to={"#pricing"} className='navlink'>Products</Link>
            <Link to={"/About"} className='navlink'>About</Link>
            <Link to={"/Contact"} className='navlink'>Contact</Link>
          </Nav>
          <Nav>
            <Link to={"/Login"} className='fs-5 border border-dark me-2 btn btn-outline-dark m-2 '> <RiLoginBoxLine /> Login</Link>
            <Link  to={"/Register"} className='fs-5 border border-dark me-2 btn btn-outline-dark m-2'> <IoPersonAdd  />  Register</Link>
            <Link className=' fs-5 border border-dark me-2 btn btn-outline-dark m-2' to={"/Cart"}> <FaShoppingCart  /> Cart({state.length})</Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navbars;