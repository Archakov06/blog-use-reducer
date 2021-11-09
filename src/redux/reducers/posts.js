import { SET_POSTS } from '../actions/posts';

const initialState = {
  posts: [],
  isLoading: false,
};

export function postsReducer(state = initialState, action) {
  switch (action.type) {
    case 'ADD_POST':
      return {
        ...state,
        posts: [...state.posts, action.payload],
      };

    case 'REMOVE_POST':
      return {
        ...state,
        posts: state.posts.filter((obj) => obj.id !== action.payload.id),
      };

    case SET_POSTS:
      return {
        ...state,
        posts: action.payload,
      };

    default:
      return state;
  }
}
