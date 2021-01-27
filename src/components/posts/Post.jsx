import React, { Component } from 'react';
import {Link} from 'react-router-dom'

class Post extends Component {

    render() { 
        return ( 
            <div style={postListStyle}>
                <Link to={'/' + this.props.post.id}> 
                    <h3> {this.props.post.title} </h3> 
                </Link>
                <p> {this.props.post.body} </p>
                <p style={{textAlign:'right'}}><button onClick={()=>this.props.delPost(this.props.post.id)}>Delete</button></p>
            </div>
         );
    }
}



const postListStyle = {
    border: '1px solid #f0f0f0',
    margin: '15px',
    boxShadow: '10px 10px 5px grey',
    padding: '20px',
}
 
export default Post;