import React, { useContext } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link, useNavigate } from 'react-router-dom';
import { authContext } from '../../Contexts/AuthContext';
import { CartContext } from '../../Contexts/CartContext';
import { MdDashboard } from "react-icons/md";
import './NavBar.css';

export default function NavBar() {
  const { userIsLoggedIn, logout } = useContext(authContext);
  const { cartCount } = useContext(CartContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.clear();
    Window.reload();
  };

  return (
    <Navbar expand="lg" className="bg-transparent py-4 navbar">
      <Container>
        <Link to="/home" className='text-uppercase fw-bolder fs-3'>gaz<span className='logo-color'>ier</span></Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto nav-icon">
            {userIsLoggedIn ?
              <>
                <Link to="/account" className='d-flex justify-content-center align-items-center me-3 fs-5'>My Account</Link>
                <Link to="/" onClick={handleLogout} className='d-flex justify-content-center align-items-center me-3 fs-5'>Logout</Link>
              </>
              :
              <>
                <Link to="/signup" className='d-flex justify-content-center align-items-center me-3 fs-5'>SignUp</Link>
                <Link to="/login" className='d-flex justify-content-center align-items-center me-3 fs-5'>Login</Link>
              </>
            }
            <Link to="/cart" className='d-flex justify-content-center align-items-center fs-5'>
              <span className='me-2 position-relative'>
                <i className="fa-solid fa-cart-shopping"></i>
                {cartCount > 0 && <span className='cart-counter'>{cartCount}</span>}
              </span>
              Cart
            </Link>

            {localStorage.getItem("roleUser") === "Admin" && (
              <button
                onClick={() => navigate("/dashboard")}
                className='navbar-icon user d-flex justify-content-center align-items-center ms-2 fs-5'
              >
                <MdDashboard />
              </button>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
