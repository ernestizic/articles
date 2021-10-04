import axios from "axios";
import React, { useState, useEffect } from "react";
import "./SportPage.css";
import Navbar from "../layout/Navbar";
import { Link } from "react-router-dom";

const SportPage = () => {
  const [sportPosts, setSportPosts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchPosts = async () => {
      const result = await axios.get(
        "http://localhost:5000/api/v1/articles/category/sports"
      );
      console.log(result.data.articles);
      setSportPosts(result.data.articles);
      setIsLoading(false);
    };
    fetchPosts();
  }, []);
  return (
    <>
      <Navbar />
      <div className='sportpage'>
        <header>
          <h4>
            S<span className='por'>POR</span>T
          </h4>
        </header>

        <div className='sport-page-main'>
          <div className='article-grid'>
            {isLoading ? (
              <div className='loading'>Loading...</div>
            ) : (
              sportPosts.map((post) => (
                <div className='article-col' key={post._id}>
                  <img
                    src={`http://localhost:5000/${post.image}`}
                    alt='post-img'
                  />
                  <div className='overlay'>
                    <Link to={`/${post._id}`}> {post.title} </Link>
                  </div>
                </div>
              ))
            )}
          </div>

          <div className='latest'>
            <div style={{ padding: "30px" }}>
              <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's 
              standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make 
              a type specimen book. It has survived not only five centuries, but also the leap into electronic 
              typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets 
              containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including 
              versions of Lorem Ipsum.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SportPage;
