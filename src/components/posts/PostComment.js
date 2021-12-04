import React, {useState} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addComment } from '../../redux/slices/comments'
import "./postcomment.css"

const PostComment = ({postid, comments}) => {

    const [comment, setComment] = useState('')
    const {isAuthenticated} = useSelector(state => state.users)
    const dispatch = useDispatch()

    const placeholderText = isAuthenticated? ("make comments on this post...") : ("Login to make comments")

    const handleSubmit =(e)=> {
        e.preventDefault()
        if (isAuthenticated) {
            const formData = {
                body: comment,
            }
            dispatch(addComment(postid, formData))
            setComment('')
        }else {
            console.log("Please Login")
        }
    }
    return (
        <div className='comment-container'>
            <h3>Comments</h3>

            <form onSubmit={handleSubmit} className='comment-form'>
                <textarea
                    id='comment-textarea'
                    placeholder={placeholderText} 
                    value={comment} 
                    onChange={(e)=> setComment(e.target.value)} 
                />
                {isAuthenticated ? (
                    <button type='submit'>Post Comment</button>
                ) : (
                    <button disabled>Post Comment</button>
                )}
                
            </form>

            {
                comments ? (
                    comments.map(comment => (
                        <div className='comment'>{comment.body}</div>
                    ))
                ) : (
                    <div>Nothing to show here</div>
                )
            }


        </div>
    )
}

export default PostComment
