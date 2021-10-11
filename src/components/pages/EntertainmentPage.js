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
        "http://localhost:5000/api/v1/articles/category/entertainment"
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
            <div className='article-grid'>
              {[...entPosts].reverse().map((post) => (
                <div className='article-col' key={post._id}>
                  <img
                    src={`http://localhost:5000/${post.image}`}
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
          )}
        </div>
      </div>
      <Footer />
    </div>
  );
};
