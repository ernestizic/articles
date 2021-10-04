import React from 'react';
import { useDispatch } from 'react-redux';
import { deleteArticle} from '../../redux/slices/articles';
import './deleteModal.css'

const DeleteModal = ({info, closeModal}) => {
    const dispatch = useDispatch()

    const handleDelete =()=> {
        dispatch(deleteArticle(info.id))
        closeModal();
    }
    return (
        <div className='delete-modal'>
            <div className='modal-head'>
                <h3>Delete</h3>
                <span className='close-modal' onClick={closeModal}> &times; </span>
            </div>
            <hr />

            <div className='modal-body'>
                <p>Are you sure you want to delete this item? </p>
            </div>
            <hr />

            <div className='modal-footer'>
                <button className='modal-cancel-delete' onClick={closeModal}>Cancel</button>
                <button className='modal-confirm-delete' onClick={handleDelete}>Delete</button>
            </div>

        </div>
    )
}

export default DeleteModal
