import axios from "axios";
import React, { useState, useEffect } from "react";
import "./SportPage.css";
import Navbar from "../layout/Navbar";
import Footer from "../layout/Footer";
import { Link } from "react-router-dom";
import Loader from '../layout/Loader'

const SportPage = () => {
  const [sportPosts, setSportPosts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchPosts = async () => {
      const result = await axios.get(
        "https://hidden-falls-93050.herokuapp.com/api/v1/articles/category/sports"
      );
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

          {isLoading ? (
            <div className='loading'> <Loader /> </div>
          ) : (
            <>
            {sportPosts < 1 && <div className='empty'>No post found</div>}
          <div className='article-grid'>
              {[...sportPosts].reverse().map((post) => (
                <div className='article-col' key={post._id}>
                  <img
                    src={`https://hidden-falls-93050.herokuapp.com/${post.image}`}
                    alt='post-img'
                  />
                  <div className='overlay'>
                    <Link to={`/${post._id}`}> {post.title} </Link>
                  </div>
                </div>
              ))}
          </div>
          </>

          )}


          <div className='latest'>
            <div style={{ padding: "30px", backgroundColor: '#fff' }}>
              <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's 
              standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make 
              a type specimen book. It has survived not only five centuries, but also the leap into electronic 
              typesetting, remaining essentially unchanged. 
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default SportPage;
