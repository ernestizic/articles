import React, { Component } from 'react';
import Post from './Post';

class PostList extends Component {
    
    render() {
        let postList = this.props.posts.length ? (
            this.props.posts.map((post) => (
                <Post key={post.id} post={post} delPost={this.props.delPost}/>
            ))
        ) : (
            <h4 style={{textAlign: 'center', padding: '30px'}}>No post yet!</h4>
        )
        return ( 
            <div>
                { postList }
            </div>
         );
    }
}
 
export default PostList;
