import React from "react";

class CommentItem extends React.Component {
    render() {
        const {comment} = this.props;

        return (
            <div className="card text-dark bg-light m-1 mb-0">
                <div className="card-body pb-0">
                    <h5 className="card-title fs-6 mb-0">{comment.name}</h5>
                    <p className="card-text mb-0"><small>{comment.body}</small></p>
                    <div className="d-flex p-0 justify-content-end text-muted">
                        <p className="card-text pb-2 mt-1"><small>{comment.email}</small></p>
                    </div>
                </div>
            </div>
        );
    }
}

export default CommentItem;