import React, { Component } from 'react';
import AddPost from '../posts/AddPost';

class AddPostPage extends Component {

    render() { 
        return ( 
            <AddPost addPost={this.props.addPost}/>
         );
    }
}
 
export default AddPostPage;