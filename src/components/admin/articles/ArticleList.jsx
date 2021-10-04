import React, { useState, useEffect } from "react";
import { TiDelete } from "react-icons/ti";
import { FaEdit } from "react-icons/fa";
import DeleteModal from "../../layout/DeleteModal";
import "../pages/articlespage.css";
import {motion} from 'framer-motion'

import { useSelector, useDispatch } from "react-redux"; // Dispatch is used for calling any action from reducers
import { fetchArticles } from "../../../redux/slices/articles";
import { Link } from "react-router-dom";

const ArticleList = ({currentPosts}) => {
  const [deleteModal, setDeleteModal] = useState(null);
  const dispatch = useDispatch();
  const { postCopy, loading, error } = useSelector((state) => state.articles);

  useEffect(() => {
    dispatch(fetchArticles());
  }, [dispatch]);

  const closeModal = () => {
    setDeleteModal(null);
  };

  if (error) return <p className='msg'> Cannot display posts!</p>;
  if (loading) return <p className='msg'> Loading...</p>;
  if (postCopy.length < 1) return <p className='msg'>Nothing found</p>;

  return (
    <>
      <table id='articles-list'>
        <thead>
          <tr>
            {/* <th>ID</th> */}
            <th>TITLE</th>
            <th>CATEGORY</th>
            <th>DATE ADDED</th>
            <th>ACTION</th>
          </tr>
        </thead>

        <tbody>
          {currentPosts.map((post) => (
            <motion.tr key={post._id} layout>
              {/* <td>{post._id}</td> */}
              <td>{post.title}</td>
              <td>{post.category}</td>
              <td>{post.createdAt}</td>
              <td className='action-col'>
                <Link to={`/admins/edit-article/${post._id}`}> <FaEdit className='fa-edit' /> </Link>
                <TiDelete
                  className='fa-del'
                  onClick={() => setDeleteModal({ id: post._id })}
                />
              </td>
            </motion.tr>
          ))}
        </tbody>
      </table>
      {deleteModal && (
        <DeleteModal info={deleteModal} closeModal={closeModal} />
      )}
    </>
  );
};

// ()=>dispatch(deleteArticle(post._id))

export default ArticleList;
