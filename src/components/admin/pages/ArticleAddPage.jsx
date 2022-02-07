import React, {useState} from 'react'
import Dashboard from '../Dashboard'
import { useDispatch } from 'react-redux'
import { useHistory } from 'react-router'
import { addNewArticle } from '../../../redux/slices/articles'
import { TiArrowBack } from 'react-icons/ti'
import './articlespage.css'


const ArticleAddPage = () => {
    const [title, setTitle] = useState('')
    const [content, setContent] = useState('')
    const [category, setCategory] = useState('')
    const [selectedFile, setSelectedFile] = useState(null)
    // const [postCreationStatus, setPostCreationStatus] = useState(undefined)
    const [errorMsg, setErrorMsg] = useState(null)


    const dispatch = useDispatch();

    const history = useHistory();

    const validateFile =()=> {

        if (selectedFile === null){
            setErrorMsg('Select a file')
            return
        }
        // Allowed extentions
        const fileTypes = /jpeg|jpg|png|gif|jfif/;


        const test = fileTypes.test(selectedFile.type)
        if (!test){
            setErrorMsg('Invalid file type')
            return
        } 
        if (selectedFile.size > 1000000) {
            setErrorMsg('File too large!')
            return
        }

        const formData = new FormData();
        formData.append("title", title);
        formData.append("body", content);
        formData.append("category", category);
        formData.append('myImage', selectedFile);

        dispatch(addNewArticle(formData))

        // setPostCreationStatus({type: 'success'})
        // setTimeout(() => {
        //     setPostCreationStatus({type: 'success'})
        //     setPostCreationStatus(undefined)
        // }, 2000);

        setTitle('')
        setContent('')
        setCategory(null)

    }


    const handleSubmit =(e)=> {
        e.preventDefault();

        validateFile()       
    }


    return (
        <Dashboard>
            <div className='article-add-page'>
                <button className='go-back' onClick={()=> history.goBack()}>
                    <TiArrowBack /> Go back 
                </button>
                <h3 style={{textAlign: 'center'}}>Add Article</h3>
                <form onSubmit={handleSubmit} >
                    <div className='title'>
                        <label htmlFor="title">Title</label>
                        <input 
                            type="text" 
                            value={title}
                            onChange={(e)=> setTitle(e.target.value) }
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

                    <div className='file-div'>
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
                    </div>

                    <button className='btn' type='submit'>Submit</button>

                    {/* {postCreationStatus?.type === 'success' && (
                        <div className='create-post-success-alert'>
                            Post Created
                        </div>
                    )} */} 

                </form>
            </div>
        </Dashboard>
    )
}

export default ArticleAddPage
