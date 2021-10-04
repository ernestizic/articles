import axios from 'axios';
import React, { useState, useEffect } from 'react'
import Navbar from '../layout/Navbar';
import './TechPage.css';

const TechnologyPage = () => {
    const [techPosts, setTechPosts] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(()=> {
        const fetchPosts = async() => {
            const result = await axios.get('http://localhost:5000/api/v1/articles/category/technology')
            console.log(result.data)
            //setTechPosts(result.data)
        } 
        fetchPosts();
    }, [])
    return (
        <div className='tech-page'>
            <Navbar />
            TECHNOLOGY
        </div>
    )
}

export default TechnologyPage;
