import React, { useContext, useState } from 'react';
import { PostContext } from '../contexts/PostContext';

const NewPostForm = () => {
    const {addPost} = useContext(PostContext);

    const [title, setTitle] = useState("");
    const [body, setBody] = useState("");

    const handleSubmit =(e)=> {
        e.preventDefault();
        //console.log(title, body);
        addPost(title, body);
        setTitle("");
        setBody("");
    }

    return ( 
        <div className="container">
            <h4>Add a post</h4>

            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="title">Title:</label>
                    <input type="text" value={title} onChange={(e)=> setTitle(e.target.value)} className="form-control" required/>
                </div>
                <div className="form-group">
                    <label htmlFor="body">Body:</label>
                    <textarea className="form-control" rows="7" value={body} onChange={(e)=> setBody(e.target.value)} required></textarea>
                </div>
                <input type="submit" value="Add post" />
            </form>
        </div>
     );
}
 
export default NewPostForm;