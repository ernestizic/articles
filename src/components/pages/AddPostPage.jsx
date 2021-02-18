import React, { Component } from 'react';
import PostContextProvider from '../contexts/PostContext';
import NewPostForm from '../posts/NewPostForm';
//import AddPost from '../posts/AddPost';


class AddPostPage extends Component {

    render() { 
        return ( 
            //<AddPost addPost={this.props.addPost}/>
            <PostContextProvider>
                <NewPostForm />
            </PostContextProvider>            
            
         );
    }
}
 
export default AddPostPage;