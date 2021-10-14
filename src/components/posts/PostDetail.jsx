import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams, useHistory } from "react-router";
import { getOneArticle } from "../../redux/slices/articles";
import Footer from "../layout/Footer";
import { TiArrowBack } from 'react-icons/ti'
import "./postdetail.css";

const PostDetail = () => {
  const { post_id } = useParams();
  const dispatch = useDispatch();
  const { post } = useSelector((state) => state.articles);

  const history = useHistory();

  useEffect(() => {
    window.scrollTo(0, 0)
    dispatch(getOneArticle(post_id));
  }, [dispatch, post_id]);

  const postDetail = post ? (
    <>
      <div className='post-detail-head'>
        <h2>iBlog</h2>
        <h3>{post.title}</h3>
      </div>
      <div className='post-detail'>
        <button className='go-back' onClick={() => history.goBack()}>
          <TiArrowBack /> Go back
        </button>
        <img src={post.image} alt='post-img' />
        <h4>{post.title}</h4>
        <p>{post.body}</p>
      </div>
      <Footer />
    </>
  ) : (
    <div className='container'> Loading post... </div>
  );
  return <div className='postdetail'>{postDetail}</div>;
};

export default PostDetail;
