import React from 'react'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import Loader from '../layout/Loader'
import Navbar from '../layout/Navbar'
import Footer from '../layout/Footer'
import { FaSearch } from "react-icons/fa"
import './searchPage.css'

const SearchPage = () => {
    const {searchedPosts, loading} = useSelector(state => state.articles)

    const searchPage = loading ? (
        <div className='loading'> <Loader /> </div>
    ) : (
        <div className='search-page-content'>
        {searchedPosts.length? (
            searchedPosts.map(post => (
                <Link to={`/${post._id}`} key={post._id}>
                <div className='search-page-item' >
                    <div className='search-page-img'><img src={post.image} alt='post-img'/></div>
                    <div className='search-page-others'>
                        <span className='cat'>{post.category.toUpperCase()}</span>
                        <h4>{post.title}</h4> 
                        <p>{post.body}</p>
                    </div>
                </div>
                </Link>
            ))
        ) : (
            <div className='empty'>No post found</div>
        )}
        </div>
    )
    return (
        <>
            <Navbar />
            <div className='search-page'>
                <h3> <FaSearch /> Search results | {searchedPosts.length} articles </h3>
                
                {searchPage}
            </div>
            <Footer />
        </>
    )
}

export default SearchPage
