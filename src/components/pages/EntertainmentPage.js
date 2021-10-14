import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import Navbar from "../layout/Navbar";
import Footer from "../layout/Footer";
import Loader from '../layout/Loader'
import "./entertainment.css";

export const EntertainmentPage = () => {
  const [entPosts, setEntPosts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchPosts = async () => {
      const result = await axios.get(
        "https://hidden-falls-93050.herokuapp.com/api/v1/articles/category/entertainment"
      );
      setEntPosts(result.data.articles);
      setIsLoading(false);
    };
    fetchPosts();
  }, []);
  return (
    <div>
      <Navbar />
      <div className='ent-page'>
        <header>
          <h1>Entertainment</h1>
        </header>
        <div className='tech-page-main'>
          
          {isLoading ? (
            <div className='loading'><Loader /> </div>
          ) : (
            <>
            {entPosts < 1 && <div className='empty'>No post found</div>}
            <div className='article-grid'>
              {[...entPosts].reverse().map((post) => (
                <div className='article-col' key={post._id}>
                  <img
                    src={post.image}
                    alt='post-img'
                  />
                  <div className='art-det'>
                    <p className='title'>
                      <Link to={`/${post._id}`}>
                        {" "}
                        <b>{post.title}</b>{" "}
                      </Link>
                    </p>
                  </div>
                </div>
              ))}
            </div>
            </>
          )}
        </div>
      </div>
      <Footer />
    </div>
  );
};
