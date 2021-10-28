import React, {useState, useEffect, useRef} from 'react'
import Dashboard from '../Dashboard'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory, useParams } from 'react-router'
import { editArticle, getOneArticle } from '../../../redux/slices/articles'
import { TiArrowBack } from 'react-icons/ti'
import './articlespage.css'

const EditArticlePage = () => {
    const [content, setContent] = useState('')
    const [category, setCategory] = useState('')
    // const [selectedFile, setSelectedFile] = useState(undefined)
    const title = useRef('') 


    const {post, successMsg} = useSelector(state => state.articles)
    const dispatch = useDispatch();
    const {post_id} = useParams();
    const history = useHistory();
    
    useEffect(() => {
        const getPostDetail =()=> {
            dispatch(getOneArticle(post_id))

            title.current.value = post.title
            setContent(post.body)
        }
        getPostDetail()
    }, [dispatch, post_id, post.title, post.body])
    
    


// To come back to this after fixing image edit in backend
    // // Validate file before submit
    // const validateFile =()=> {

    //     if (selectedFile === null){
    //         setErrorMsg('Select a file')
    //         return
    //     }
    //     // Allowed extentions
    //     const fileTypes = /jpeg|jpg|png|gif|jfif/;

    //     const test = fileTypes.test(selectedFile.type)

    //     if (!test){
    //         setErrorMsg('Invalid file type')
    //         return
    //     } 
    //     if (selectedFile.size > 1000000) {
    //         setErrorMsg('File too large!')
    //         return
    //     }

    //     const formData = new FormData();
    //     formData.append("title", title.current.value);
    //     formData.append("body", content);
    //     formData.append("category", category);
    //     formData.append('myImage', selectedFile);

    //     dispatch(editArticle(formData))

    //     setPostCreationStatus({type: 'success'})
    //     setTimeout(() => {
    //         setPostCreationStatus({type: 'success'})
    //         setPostCreationStatus(undefined)
    //     }, 2000);

    // }

    // const handleSubmit =(e)=> {
    //     e.preventDefault();

    //     validateFile()       
    // }

    const handleSubmit =(e)=> {
        e.preventDefault();

        const formData = {
            title: title.current.value,
            body: content,
            category: category
        }
        dispatch(editArticle(post_id, formData))
    }

    return (
        <Dashboard>
            <div className='article-add-page'>
                <button className='go-back' onClick={()=> history.goBack()}>
                    <TiArrowBack /> Go back 
                </button>
                <h3 style={{textAlign: 'center'}}>Edit Article</h3>

                {post? (
                <form onSubmit={handleSubmit} >
                    <div className='title'>
                        <label htmlFor="title">Title</label>
                        <input 
                            type="text" 
                            ref={title}
                            required 
                        />
                    </div>

                    <div className="category" onChange={(e)=> setCategory(e.target.value)}>
                        <label htmlFor="category" className='cat-label'>Category</label> <br />
                        <input type="radio" name="category" value="technology" /> Technology
                        <input type="radio" name="category" value="sports" /> Sports
                        <input type="radio" name="category" value="entertainment" /> Entertainment
                        <input type="radio" name="category" value="politics" /> Politics
                    </div>

                    <div className='content-textarea'>
                        <label htmlFor="content">Content</label>
                        <textarea 
                            className="content" 
                            rows="12" id="news-content" 
                            placeholder="Enter your article content here..." 
                            value={content}
                            onChange={(e) => setContent(e.target.value)}
                            required>
                        </textarea>
                    </div>

                    {/* <div className='file-div'>
                        <label htmlFor="formFile">Choose an image to display</label> <br />
                        {errorMsg === 'Invalid file type' && 
                            <div className="error"> {errorMsg} </div>
                        }
                        {errorMsg === 'File too large!' && 
                            <div className="error"> {errorMsg} </div>
                        }
                        {errorMsg === 'Select a file' && 
                            <div className="error"> {errorMsg} </div>
                        }
                        
                        <input type="file" onChange={(e)=> setSelectedFile(e.target.files[0])} />
                    </div> */}

                    <button className='btn' type='submit'>Submit</button>

                    {
                        successMsg &&
                        <div className='create-post-success-alert'>
                            {successMsg}
                        </div>
                    }

                </form>
                ) : (
                    <div>Fetching post. Please wait...</div>
                )}

            </div>
        </Dashboard>
    )
}

export default EditArticlePage;