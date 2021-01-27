import React, { Component } from 'react';
import PostList from '../posts/PostList';
//import {v4 as uuid} from 'uuid';
import SearchBar from '../searchbox/SearchBar';
import axios from 'axios';

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
           posts: []
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



search =(search)=> {
    axios.get('https://jsonplaceholder.typicode.com/posts', {
    search: search
  })
}


    render() { 
        return ( 
            <div className="container">
                <SearchBar search={this.search} />
                <div className="row">
                    
                    <PostList posts={this.state.posts} delPost={this.delPost} />
                </div>
            </div>
         );
    }
}
 
export default Home;