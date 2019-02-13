import _ from 'lodash';
import jsonPlaceholders from '../apis/jsonPlaceholder';

export const fetchPostsAndUsers = () => async (dispatch, getState) => {
  console.log('About to fetch posts');
  await dispatch(fetchPosts());

  // const userIds = _.uniq(_.map(getState().posts, 'userId'));
  // userIds.forEach(id => dispatch(fetchUser(id)));

  _.chain(getState().posts)
    .map('userId')
    .uniq()
    .forEach(id => dispatch(fetchUser(id)))
    .value();
};

// function
export const fetchPosts = () => async dispatch => {
  const response = await jsonPlaceholders.get('/posts');

  dispatch({ type: 'FETCH_POSTS', payload: response.data });
};

//
export const fetchUser = id => async dispatch => {
  const response = await jsonPlaceholders.get(`/users/${id}`);

  dispatch({ type: 'FETCH_USER', payload: response.data });
};

// // Memoize Version!
// export const fetchUser = id => {
//   return dispatch => {
//     _fetchUser(id, dispatch);
//   };
// };
// // add private function
// const _fetchUser = _.memoize(async (id, dispatch) => {
//   const response = await jsonPlaceholders.get(`/users/${id}`);
//   dispatch({ type: 'FETCH_USER', payload: response.data });
// });

// // Version still calls 100 times!
// export const fetchUser = function(id) {
//   return _.memoize(async function(dispatch) {
//     const response = await jsonPlaceholders.get(`/users/${id}`);
//     dispatch({ type: 'FETCH_USER', payload: response.data });
//   });
// };
