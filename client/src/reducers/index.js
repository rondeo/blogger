import { combineReducers } from 'redux';
import { setPostsReducer } from '../reducers/setPostsReducer';
export default combineReducers({
  setPostsReducer: setPostsReducer
});
