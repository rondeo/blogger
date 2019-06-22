import { connect } from 'react-redux';
import App from './App';
import {getPosts, addPost, deletePosts} from '../actions/getPostsAction'
import store from '../store';

const mapStateToProps = state => ({
    posts: store.getState().setPostsReducer.posts
});

const mapDispatchToProps = dispatch => ({
    getPosts: () => dispatch(getPosts()),
    addPost: (post) => dispatch(addPost(post)),
    deletePosts: () => dispatch(deletePosts())
});

const AppContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(App);

export default AppContainer;

