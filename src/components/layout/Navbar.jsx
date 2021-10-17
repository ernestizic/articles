import React from "react";
import { Link, NavLink } from "react-router-dom";
import { logout } from '../../redux/slices/users'
import { FaUserAlt } from "react-icons/fa";
import { FaSearch } from "react-icons/fa";
import "./navbar.css";
import Logout from "../auth/Logout";
import { useSelector, useDispatch } from "react-redux";


const Navbar = () => {
  const {isAuthenticated, user} = useSelector(state => state.users)
  const dispatch = useDispatch()


  const openNav =()=>{
    const nav = document.querySelector(".small-screen-nav");
    nav.style.height = "100%";
  }

  const closeNav = () => {
    const nav = document.querySelector(".small-screen-nav");
    nav.style.height = "0%";
  };

  const openSearchModal = () => {
    const search = document.querySelector(".search-modal");
    search.style.display = "block";
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
          <NavLink className='navlink' to='/technology'>
            TECHNOLOGY
          </NavLink>
        </li>
        <li className='nav-item'>
          <NavLink className='navlink' to='/sport'>
            SPORT
          </NavLink>
        </li>
        <li className='nav-item'>
          <NavLink className='navlink' to='/entertainment'>
            ENTERTAINMENT
          </NavLink>
        </li>
        <li className='nav-item'>
          <NavLink className='navlink' to='/politics'>
            POLITICS
          </NavLink>
        </li>
      </ul>
      
      <FaSearch className='search-icon' onClick={openSearchModal} />
      
      
      <div className='login-dropdown'>
        <button className='dropdown-icon'> 
          <FaUserAlt />
        </button>
        
        <div className='login-dropdown-content'>
          {isAuthenticated ? (<Logout />) : (
            <>
            <Link className='login' to='/login'>
              Login
            </Link>
            <p>Don't have an account?</p>
            <Link className='signup' to='/signup'>
              Join iBlog now!
            </Link>
            </>
          )}
        </div>
      </div>

      {/* {isAuthenticated && 
        <div className='small-screen-admin'>
          <Link to='/admin'> <FaUserAlt /> </Link>
        </div>
      } */}
    </nav>

{/* Small screen navigation */}
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
        {isAuthenticated ? (
          <Link to="#" onClick={()=>dispatch(logout())} className='sm-sc-logout'>LOG OUT</Link>
        ) : (
          <>
          <Link to='/signup' className='btn'> JOIN NOW </Link>
          <Link to='/login' className='btn-login'> LOGIN </Link>
          </>
        )}
      </div>
      {isAuthenticated && <p style={{textAlign: 'center', paddingTop: '5px'}}> You are logged in as {user.email} </p>}
    </div>
    </>
  );
};

export default Navbar;
