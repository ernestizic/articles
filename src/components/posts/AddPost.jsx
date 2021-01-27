import React, { Component } from 'react';

class AddPost extends Component {
    state = { 
        newPost:{}
     }


     onSubmit =(e)=> {
         e.preventDefault();
         //this.props.addPost(this.state.title);
         this.setState({newPost: {
             title: this.refs.title.value,
             body: this.refs.body.value
         }}, function(){
             //console.log(this.state)
             this.props.addPost(this.state.newPost);
             this.setState({newPost: ''});
         });
     }

    render() { 
        return ( 
            <div className="container">
                <h4>Add a post</h4>
                <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <label htmlFor="title">Title:</label>
                        <input type="text" ref="title" className="form-control" value={this.state.title} required/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="title">Body:</label>
                        <input type="text" ref="body" className="form-control" value={this.state.value} required/>
                    </div>
                    
                    <button type="submit" className="btn btn-primary">Submit</button>
                </form>
            </div>
         );
    }
}
 
export default AddPost;