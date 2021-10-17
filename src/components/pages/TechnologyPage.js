import axios from "axios";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Navbar from "../layout/Navbar";
import Footer from "../layout/Footer";
import Loader from "../layout/Loader";
import "./TechPage.css";

const TechnologyPage = () => {
  const [techPosts, setTechPosts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchPosts = async () => {
      const result = await axios.get(
        "https://hidden-falls-93050.herokuapp.com/api/v1/articles/category/technology"
      );
      setTechPosts(result.data.articles);
      setIsLoading(false);
    };
    fetchPosts();
  }, []);
  return (
    <>
      <Navbar />
      <div className='tech-page'>
        <header>
          <h1>Technology</h1>
        </header>
        <div className='tech-page-main'>
          {isLoading ? (
            <div className='loading'><Loader /></div>
          ) : (
            <>
            {techPosts < 1 && <div className='empty'>No post found</div>}
            <div className='article-grid'>
              {[...techPosts].reverse().map((post) => (
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
    </>
  );
};

export default TechnologyPage;
