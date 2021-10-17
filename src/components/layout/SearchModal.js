import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { useHistory } from 'react-router'
import { search } from '../../redux/slices/articles'
import './searchModal.css'

const SearchModal = () => {
    const [keyword, setKeyword] = useState('')

    const dispatch = useDispatch()
    const history = useHistory()

    const closeSearchModal = () => {
        const searchModal = document.querySelector(".search-modal");
        searchModal.style.display = "none";
    };

    const handleSubmit =(e)=> {
        e.preventDefault();
        history.push({
            pathname: `/search/${keyword}`
        })
        closeSearchModal()
        dispatch(search(keyword))
        setKeyword('')
    }
      
    return (
        <div className='search-modal'>
            <div className='modal-head'>
                <h3>Search anything and hit enter!</h3>
                <button className='close-modal' onClick={closeSearchModal}> &times; </button>
            </div>

            <form onSubmit={handleSubmit}>
                <input 
                    type='search' 
                    placeholder='Search...' 
                    value={keyword} 
                    onChange={(e)=> setKeyword(e.target.value)} 
                />
            </form>
        </div>
    )
}

export default SearchModal
