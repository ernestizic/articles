import React from "react";
import { Link } from "react-router-dom";
import { FaUserAlt } from "react-icons/fa";
import "./navbar.css";

const Navbar = () => {
  const openNav =()=>{
    const nav = document.querySelector(".small-screen-nav");
    nav.style.height = "100%";
  }
  const closeNav = () => {
    const nav = document.querySelector(".small-screen-nav");
    nav.style.height = "0%";
  };
  return (
    <>
    <nav className='navbar'>
      <span className='ham' onClick={openNav}> &#9776;</span>

      <Link className='navbar-brand' to='/'>
        <span className='lg'>i</span>Blog
      </Link>

      <ul className='nav-ul'>
        <li className='nav-item'>
          <Link className='navlink' to='/technology'>
            TECHNOLOGY
          </Link>
        </li>
        <li className='nav-item'>
          <Link className='navlink' to='/sport'>
            SPORT
          </Link>
        </li>
        <li className='nav-item'>
          <Link className='navlink' to='/entertainment'>
            ENTERTAINMENT
          </Link>
        </li>
        <li className='nav-item'>
          <Link className='navlink' to='/politics'>
            POLITICS
          </Link>
        </li>
      </ul>
      
      <div className='login-dropdown'>
        <button className='dropdown-icon'> 
          <FaUserAlt />
        </button>
        
        <div className='login-dropdown-content'>
          <Link className='login' to='/login'>
            Login
          </Link>

          <p>Don't have an account?</p>
          <Link className='signup' to='/signup'>
            Join iBlog now!
          </Link>
        </div>
      </div>
    </nav>

    <div className='small-screen-nav'>
    <span className='ham' id='ham-close' onClick={closeNav}> &times;</span>
    <Link className='navbar-brand' to='/'>
      <span className='lg'>i</span>Blog
    </Link>
      <ul className='navbar-nav'>
        <h6>CATEGORIES</h6>
        <li className='nav-item-2'>
          <Link className='nav-link' to='/technology'>TECHNOLOGY</Link>
        </li>
        <li className='nav-item-2'>
          <Link className='nav-link' to='/sport'>SPORT</Link>
        </li>
        <li className='nav-item-2'>
          <Link className='nav-link' to='/entertainment'>ENTERTAINMENT</Link>
        </li>
        <li className='nav-item-2'>
          <Link className='nav-link' to='/politics'>POLITICS</Link>
        </li>
      </ul>
      <hr />
      <h6 className='more-h'>MORE</h6>
      <div className='more'> 
        <Link to='/about'> ABOUT US </Link>
        <Link to='/contact'> CONTACT </Link>
      </div>

      <div className='join'>
        <Link to='/signup' className='btn'> JOIN NOW </Link>
        <Link to='/login' className='btn-login'> LOGIN </Link>
      </div>
    </div>
    </>
  );
};

export default Navbar;
