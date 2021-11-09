import axios from 'axios';

export const SET_POSTS = 'SET_POSTS';

export const setPosts = (arr) => {
  return {
    type: SET_POSTS,
    payload: arr,
  };
};

export const fetchPosts = () => async (dispatch) => {
  const { data } = await axios.get(
    'https://5c3755177820ff0014d92711.mockapi.io/posts?page=1&limit=10',
  );

  dispatch(setPosts(data));
};
