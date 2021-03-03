import axios from 'axios';
import React, { useState, useEffect } from 'react';


/*
class PostDetail extends Component {
    state = {
        post: null
    }

    componentDidMount() {
        let id = this.props.match.params.post_id;
        axios.get ('https://jsonplaceholder.typicode.com/posts/' + id)
            .then(res =>{
                this.setState({
                    post: res.data
                })
                //console.log(res)
            })
    }

    render() { 

        const post  = this.state.post ? (
            <div className="container post">
                <h4 style={{ paddingTop: "20px", paddingBottom: "10px" }}>{this.state.post.title}</h4>
                <p>{this.state.post.body}</p>
            </div>
        ) : (
            <div className="container"> Loading post... </div>
        )

        return ( 
            <div className="container">
                { post }
            </div>
         );
    }
}
 
export default PostDetail;
*/

const PostDetail = (props) => {
    const [postDetail, setPostDetail] = useState("");


    useEffect(()=> {
        const fetchDetails = async ()=> {
            let id = props.match.params.post_id;
            axios.get ('https://jsonplaceholder.typicode.com/posts/' + id)
                .then(res => setPostDetail(res.data))
        }
        fetchDetails();
    }, [props])

    const post = postDetail ? (
        <div className="container post">
            <h4 style={{ paddingTop: "20px", paddingBottom: "10px" }}>{postDetail.title}</h4>
            <p>{postDetail.body}</p>
        </div>
    ) : (
        <div className="container"> Loading post... </div>
    )
    return ( 
        <div className="container">
            {post}
        </div>
     );
}
 
export default PostDetail;