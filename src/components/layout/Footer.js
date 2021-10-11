import React from "react";
import { Link } from "react-router-dom";
import "./footer.css";

const footer = () => {
  return (
    <footer className='footer'>
      <Link className='navbar-brand' to='/'>
        <span className='lg'>i</span>Blog
      </Link>
      <div className='footer-links'>
        <ul>
          <li><Link to='/about'>ABOUT US</Link></li>
          <li><Link to='/about'>ADVERTISE</Link></li>
          <li><Link to='/about'>CONTACT</Link></li>
          <li><Link to='/about'>PRIVACY</Link></li>
        </ul>
      </div>

      <div className='footer-end'>
        &copy; {new Date().getFullYear()} iBlog Media. All rights reserved
      </div>
    </footer>
  );
};

export default footer;
