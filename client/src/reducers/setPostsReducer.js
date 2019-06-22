const GET_POSTS = "GET_POSTS";
const ADD_POST = "ADD_POST";
const DELETE_POSTS = "DELETE_POSTS";


const initialState = {
    posts: [],
    isLoading: false
}
function setPostsReducer(state = initialState, action = {}) {

    switch (action.type) {
        case GET_POSTS:
            return {
                ...state,
                posts: action.payload,
            };
        case ADD_POST:
            return {
                posts: [action.payload, ...state.posts]
            };
        case DELETE_POSTS:
            return {
                posts: []
            };
        
        default: return state;
    }
}

export { setPostsReducer };