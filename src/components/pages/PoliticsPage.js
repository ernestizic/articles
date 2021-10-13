import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import Loader from '../layout/Loader'
import Navbar from "../layout/Navbar";
import Footer from "../layout/Footer";

const PoliticsPage = () => {
  const [politicsPosts, setPoliticsPosts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchPosts = async () => {
      const result = await axios.get(
        "https://hidden-falls-93050.herokuapp.com/api/v1/articles/category/politics"
      );
      setPoliticsPosts(result.data.articles);
      setIsLoading(false);
    };
    fetchPosts();
  }, []);
  return (
    <>
      <Navbar />
      <div className='pol-page'>
        <header>
          <h1>
            <span style={{ color: "rgb(170, 31, 31)" }}>Politics</span> Today
          </h1>
        </header>
        <div className='tech-page-main'>
          {isLoading ? (
            <div className='loading'> <Loader /> </div>
          ) : (
            <>
            {politicsPosts < 1 && <div className='empty'>No post found</div>}
            <div className='article-grid'>
              {[...politicsPosts].reverse().map((post) => (
                <div className='article-col' key={post._id}>
                  <img
                    src={`https://hidden-falls-93050.herokuapp.com/${post.image}`}
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

export default PoliticsPage;
