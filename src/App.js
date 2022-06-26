import React from 'react';
import './App.css';
import { BrowserRouter as Router, Navigate, Route, Routes, Link } from "react-router-dom";
import PostInfo from './components/post-info/post-info';
import PostsList from './components/posts-list/posts-list';
import UserInfo from './components/user-info/user-info';

class App extends React.Component {
  state= {
    currentPostId: null,
    currentUserId: null
  }

  setCurrentPostId = (postId) => {
    this.setState({
      currentPostId: postId
    })
  }

  setCurrentUserId = (userId) => {
    this.setState({
      currentUserId: userId
    })
  }

  render() {
    return (
      <React.Fragment>
        <Router>
          <nav className="navbar navbar-expand-lg navbar-dark bg-dark p-3">
            <a className="navbar-brand ml-3" href="#">Your personal BLOG</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav">
                <li className="nav-item active">
                <Link className="nav-link" to="all-posts">All posts</Link>
                </li>
              </ul>
            </div>
          </nav>

          <Routes>
            <Route path="/" element={<Navigate to="all-posts" replace />} />
            <Route path="all-posts" element={<PostsList setCurrentPostId={this.setCurrentPostId}/>} />
            <Route path="all-post/:id" element={<PostInfo currentPostId={this.state.currentPostId} setCurrentUserId={this.setCurrentUserId}/>} />
            <Route path="user/:id" element={<UserInfo currentUserId={this.state.currentUserId}/>} />
          </Routes>
        </Router>
      </React.Fragment>
    );
  }
}

export default App;
