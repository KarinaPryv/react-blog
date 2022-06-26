import React from "react";
import BlogService from "../../services/blog-service";
import PostItem from "../post-item/post-item";

class PostsList extends React.Component {
    state = {
        posts: []
    }

    componentDidMount = () => {
        BlogService.getAllPosts()
            .then(
                resp => {
                    if (resp.status === 200) {
                        this.setState({
                            posts: resp.data
                        });
                    }
                }
            );
    }

    render() {
        const posts = this.state.posts;

        return (
            <div className="container p-4">
                <h2>Posts:</h2>
                {
                    posts.map((post) => {
                        return (
                            <PostItem key={post.id} post={post} setCurrentPostId={this.props.setCurrentPostId}/>
                        );
                    })
                }
            </div>
        );
    }
}

export default PostsList;