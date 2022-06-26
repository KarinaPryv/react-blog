import React from "react";
import { Link } from "react-router-dom";

class PostItem extends React.Component {
    render() {
        const { post } = this.props;

        return (
            <div className="card mb-3">
                <div className="card-header pt-3">
                    <h5>{post.title}</h5>
                </div>
                <div className="card-body">
                    <p className="card-text text-dark">{post.body}</p>
                    <div className="d-flex justify-content-end">
                        <Link className="text-secondary me-3" to={`/all-post/:${post.id}`}
                            onClick={() => this.props.setCurrentPostId(post.id)}>More details...</Link>
                    </div>
                </div>
            </div>
        );
    }
}

export default PostItem;