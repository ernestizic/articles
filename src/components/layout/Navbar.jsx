import React from 'react';
import { Link } from 'react-router-dom';


const Navbar = () => {

    return ( 
        <nav className="navbar navbar-expand-md bg-light navbar-light">
            <Link className="navbar-brand" to="/">My Articles</Link>
            
            <button className="navbar-toggler collapsed" type="button" data-toggle="collapse" data-target="#navbar" aria-controls="navbar" aria-expanded="false">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbar">
                <ul className="nav navbar-nav">
                    <li className="nav-item">
                        <Link className="nav-link" to="/">Home</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/addPost">Add a post</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/about">About</Link>
                    </li>
                </ul>
                
            </div>            
        </nav>
     );
}
 



export default Navbar;