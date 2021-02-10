import React, { Component } from 'react';
import PostList from '../posts/PostList';
//import {v4 as uuid} from 'uuid';
import SearchBar from '../layout/SearchBar';
import axios from 'axios';
//import AddPost from '../posts/AddPost';
     


class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
           posts: [],
           searchField: ""
        }
      }

componentDidMount() {
    axios.get('https://jsonplaceholder.typicode.com/posts')
        .then(res => this.setState(
            {posts: res.data.slice(0, 12)}
        ))
}

delPost =(id)=> {
    axios.delete(`https://jsonplaceholder.typicode.com/posts/${id}`)
        .then(res => this.setState(
            {posts: [...this.state.posts.filter
            (post => post.id !== id)]}
        ));
}

/*
addPost =(post)=> {
    axios.post('https://jsonplaceholder.typicode.com/posts', {
        posts: post
    })
    .then(res => this.setState({posts: [...this.state.posts, res.data]}))
}
*/

    render() { 
        const filteredPosts = this.state.posts.filter(post => (
            post.title.toLowerCase().includes(this.state.searchField.toLowerCase())
        ))
        return ( 
            <div className="container">
                <SearchBar placeholder="Search..." onChange={(e) => this.setState({searchField: e.target.value})}/>
                <div className="row">
                    <PostList posts={filteredPosts} delPost={this.delPost} />
                </div>
            </div>  
         );
    }
}
 
export default Home;