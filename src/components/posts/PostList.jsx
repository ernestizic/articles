import React, {useContext } from 'react';
import { PostContext } from '../contexts/PostContext';
import Post from './Post';

/*
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
*/

const PostList = () => {
    const {posts, isLoading} = useContext(PostContext)

    let postList = isLoading ? (
        <h4 style={{padding: '30px'}}>Loading...</h4>
    ) : (
        posts.map(post => (
            <Post key={post._id} post={post} />
        ))
    )
    return ( 
        <div>
            {postList}
        </div>
     );
}
 
export default PostList;
