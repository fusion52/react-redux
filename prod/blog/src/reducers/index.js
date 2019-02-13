import { combineReducers } from 'redux';
import postsReducers from './postsReducer';
import usersReducer from './usersReducer';

export default combineReducers({
  posts: postsReducers,
  users: usersReducer
});

// // Dummy reducer
// export default combineReducers({
//   replaceMe: () => 'hi there'
// });
