import axios from 'axios';

const GET_POSTS = "GET_POSTS";
const ADD_POST = "ADD_POST";
const DELETE_POSTS = "DELETE_POSTS";

const addPost = (post) => dispatch => {
    axios.post('/api/posts', post)
        .then(res => dispatch({
            type: ADD_POST,
            payload: res.data
        }))
    dispatch(getPosts());
}

const deletePosts = () => dispatch => {
    axios.delete('/api/posts')
        .then(dispatch({
            type: DELETE_POSTS,
        }))
}

const getPosts = () => dispatch => {
    axios.get('/api/posts')
        .then(res => dispatch({
            type: GET_POSTS,
            payload: res.data
        }))
}

export { 
    getPosts,
    addPost,
    deletePosts
};

