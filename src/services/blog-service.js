import axios from "axios";

const baseUrl = "https://jsonplaceholder.typicode.com";
const POSTS_ENDPOINT = "/posts";
const USERS_ENDPOINT = "/users";
const COMMENTS_ENDPOINT = "/comments";

class _BlogService {

    getAllPosts = () => {
        return axios.get(`${baseUrl}${POSTS_ENDPOINT}`);
    }
    
    getPostById = (id) => {
        return axios.get(`${baseUrl}${POSTS_ENDPOINT}/${id}`);
    }

    getUserById = (id) => {
        return axios.get(`${baseUrl}${USERS_ENDPOINT}/${id}`);
    }

    getCommentsByPostId = (id) => {
        return axios.get(`${baseUrl}${POSTS_ENDPOINT}/${id}${COMMENTS_ENDPOINT}`);
    }
}

const BlogService = new _BlogService;
export default BlogService;