import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router';
import { getOneArticle } from '../../redux/slices/articles';


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

const PostDetail = () => {
    const {post_id} = useParams();
    const dispatch = useDispatch()
    const {post} = useSelector(state => state.articles)

    useEffect(()=> {
        dispatch(getOneArticle(post_id))
    }, [dispatch, post_id])

    const postDetail = post ? (
        <div className="container post">
            <h4 style={{ paddingTop: "20px", paddingBottom: "10px" }}>{post.title}</h4>
            <p>{post.body}</p>
        </div>
    ) : (
        <div className="container"> Loading post... </div>
    )
    return ( 
        <div className="container">
            {postDetail}
        </div>
     );
}
 
export default PostDetail;