import React, { Component } from 'react';

class AddPost extends Component {
    state = { 
        newPost:{}
     }


     onSubmit =(e)=> {
         e.preventDefault();
         this.setState({newPost: {
             title: this.refs.title.value,
             body: this.refs.body.value
         }}, function(){
             //console.log(this.state)
             this.props.addPost(this.state.newPost);
            // this.setState({newPost: ''});
         });
     }

    render() { 
        return ( 
            <div className="container">
                <h4>Add a post</h4>
                <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <label htmlFor="title">Title:</label>
                        <input type="text" ref="title" className="form-control" required/> {/* problem here from using ref */}
                    </div>
                    <div className="form-group">
                        <label htmlFor="title">Body:</label>
                        <textarea ref="body" className="form-control" required> </textarea> {/* problem here from textarea */}
                    </div>
                    
                    <button type="submit" className="btn btn-primary">Submit</button>
                </form>
            </div>
         );
    }
}
 
export default AddPost;