import React, {useState} from 'react'
import { Link } from 'react-router-dom'
import Dashboard from '../Dashboard'
import { IoIosAddCircle } from 'react-icons/io';
import './articlespage.css'
import ArticleList from '../articles/ArticleList';
import { useDispatch, useSelector } from 'react-redux';
import { adminSearch, filterArticles } from '../../../redux/slices/articles';
import Pagination from '../../layout/Pagination';


const ArticlesPage = () => {
    const [keyword, setKeyword] = useState('')
    const [currentPage, setCurrentPage] = useState(1)
    const [postsPerPage] = useState(10)

    const {postCopy} = useSelector(state => state.articles)

    const indexOfLastPost = currentPage * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;
    const currentPosts = postCopy.slice(indexOfFirstPost, indexOfLastPost)

    const dispatch = useDispatch()

    const handleChange =(e)=> {
        dispatch(filterArticles(e))
    }

    const onChange =(e)=> {
        setKeyword(e)
        dispatch(adminSearch(e))
    }

    const paginate =(n)=> {
        setCurrentPage(n)
    }
    // const nextPage =()=> {
    //     if (currentPosts.length < postsPerPage){
    //         setCurrentPage(currentPage)
    //     }else{
    //         setCurrentPage(currentPage + 1)
    //     }
    // }
    // const prevPage =()=> {
    //     if (currentPage > 1) {
    //         setCurrentPage(currentPage - 1)
    //     }else{
    //         setCurrentPage(1)
    //     }
    // }

    return (
        <Dashboard>
            <div className='articles-page'>
                <div className='articles-page-head'>
                    <Link to='/admins/add-article' className='add-new'> <IoIosAddCircle style={{color: 'green'}}/> ADD NEW</Link>

                    <div className='articles-search'>
                        <input 
                            type="search" 
                            placeholder="Search article by title..." 
                            value={keyword}
                            onChange={(e)=> onChange(e.target.value)}
                        />
                    </div>

                    <div>
                        Filter By: {  }
                        <select name="articles" onChange={(e)=>handleChange(e.target.value)}>
                            <option value="all">All</option>
                            <option value="technology">Technology</option>
                            <option value="sports">Sport</option>
                            <option value="entertainment">Entertainment</option>
                            <option value="politics">Politics</option>
                        </select>
                    </div>
                </div>

                <div className='article-page-body'>
                    <ArticleList currentPosts={currentPosts} />
                </div>

                <Pagination postsPerPage={postsPerPage} totalPosts={postCopy.length} paginate={paginate} />
            </div>
        </Dashboard>
    )
}

export default ArticlesPage
