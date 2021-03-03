import axios from 'axios';
import React, { createContext, useEffect, useState } from 'react';

export const PostContext = createContext();


const PostContextProvider = (props) => {
    const [posts, setPosts] = useState([]);
    const [isLoading, setIsLoading] = useState(true);


    useEffect(()=> {
        const fetchPosts = async ()=> {
            const res = await axios.get(`https://jsonplaceholder.typicode.com/posts`)
            setPosts(res.data.slice(0, 5))
            setIsLoading(false)
        }
        fetchPosts();
    }, [])



    //Fuction to delete post    
    const delPost =(id)=> {
        axios.delete(`https://jsonplaceholder.typicode.com/posts/${id}`)
            .then (res => setPosts([...posts.filter(post =>
                post.id !== id)]) );
    }

    //Function to add post
    const addPost =(title, body)=> {
        axios.post("https://jsonplaceholder.typicode.com/posts", {
            title,
            body
        })
        .then(res => setPosts([...posts, res.data]) );
    }


    return ( 
        <PostContext.Provider value={{posts, isLoading, delPost, addPost}}>
            {props.children}
        </PostContext.Provider>
     );
}
 
export default PostContextProvider;