import React from "react";
import BlogService from "../../services/blog-service";
import CommentItem from "../comment-item/comment-item";
import { Link } from "react-router-dom";

class PostInfo extends React.Component {
    state = {
        post: {},
        author: {},
        comments: []
    }

    componentDidMount = () => {
        BlogService.getPostById(this.props.currentPostId)
            .then(resp => {
                if (resp.status === 200) {
                    BlogService.getUserById(resp.data.userId)
                        .then(userResp => {
                            if (userResp.status === 200) {
                                this.setState({
                                    post: resp.data,
                                    author: userResp.data
                                });
                            }
                        });
                }
            });
        BlogService.getCommentsByPostId(this.props.currentPostId)
            .then(resp => {
                if (resp.status === 200) {
                    this.setState({
                        comments: resp.data
                    });
                }
            });
    }


    render() {
        const { post, author, comments } = this.state;

        return (
            <div className="container mt-4">
                <div className="card mb-3 pb-1">
                    <div className="card-header pt-3">
                        <h5 className="card-title">{post.title}</h5>
                    </div>
                    <div className="card-body">
                        <p className="card-text">{post.body}</p>
                            <Link className="nav-link d-flex" to={`/user/:${author.id}`} onClick={() => this.props.setCurrentUserId(author.id)}>
                                <i className="fa-solid fa-user p-1"></i>
                                <p className="card-text pb-2">{author.username}</p>
                            </Link>
                    </div>
                    {
                        comments.map((comment) => {
                            return (
                                <CommentItem key={comment.id} comment={comment} />
                            );
                        })
                    }
                </div>
            </div>
        );
    }
}

export default PostInfo;