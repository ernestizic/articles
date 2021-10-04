import React from 'react';
import Navbar from '../layout/Navbar';
import './home.css';


const Home = () => {
    return ( 
        <>
        <Navbar />
        <div className='homepage'>
            <h2><span className='lg'>i</span>Blog</h2>

            <div className='container-fluid featured'>
                <h4>FEATURED ARTICLE</h4>
                <h1>Tutorial: How To Fill Your Entire Frame Without Using A Massive Telephoto Lens</h1>
                <code>published by <b>ERNESTIZIC.</b> 6 hours ago</code>
            </div>
        </div>
        </>
     );
}
 
export default Home;