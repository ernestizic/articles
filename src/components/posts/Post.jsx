import React, { Component } from 'react';
import {Link} from 'react-router-dom';

class Post extends Component {

    render() { 
        const { id, title, body } = this.props.post
        return ( 
            <div style={postListStyle} className="post">
                <Link to={'/' + id}> 
                    <h3> {title} </h3> 
                </Link>
                <p> {body} </p>
                <p style={{textAlign:'right'}}><button onClick={()=>this.props.delPost(id)}>Delete</button></p>
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