import React from "react";
import BlogService from "../../services/blog-service";

class UserInfo extends React.Component {
    state = {
        user: {}
    }

    componentDidMount = () => {
        BlogService.getUserById(this.props.currentUserId)
            .then(resp => {
                if (resp.status === 200) {
                    this.setState({
                        user: resp.data
                    })
                }
            })
    }

    render() {
        const {user} = this.state;

        return (
            <div className="row justify-content-center mt-4 align-items-center">
                <div className="card col-10 col-md-7 col-xl-5 text-center">
                    <div className="d-flex justify-content-center mt-4">
                        <img src="https://upload.wikimedia.org/wikipedia/commons/f/f4/User_Avatar_2.png" width="200px"/>
                    </div>
                    <div className="card-body">
                        <h5 className="card-title">{user.name}</h5>
                        <p className="card-text"><small className="text-muted">{user.email}</small></p>
                    </div>
                    <ul className="list-group list-group-flush">
                        <li className="list-group-item">Username: {user.username}</li>
                        <li className="list-group-item">Phone number: {user.phone}</li>
                        <li className="list-group-item">Website: {user.website}</li>
                    </ul>
                </div>
            </div>
        );
    }
}

export default UserInfo;