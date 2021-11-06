import React from 'react';
import { Grid, Paper } from '@mui/material';
import { Comments } from './components/Comments';
import { Header } from './components/Header';
import { Post } from './components/Post';

function appReducer(state, action) {
  console.log(state, action);

  if (action.type === 'ADD_POST') {
    return {
      ...state,
      posts: [...state.posts, action.payload],
    };
  }

  if (action.type === 'REMOVE_POST') {
    return {
      ...state,
      posts: state.posts.filter((obj) => obj.id !== action.payload.id),
    };
  }

  return state;
}

function App() {
  const [state, dispatch] = React.useReducer(appReducer, {
    posts: [
      {
        id: 1,
        title: 'Тестовая статья',
        imageUrl:
          'https://images.unsplash.com/photo-1636132644036-79b25423bce9?ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxMHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=60',
        text: 'Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica',
      },
      {
        id: 2,
        title: 'Это вторая статья',
        imageUrl:
          'https://images.unsplash.com/photo-1636145172911-5e06fce746d5?ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw1Mnx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=60',
        text: 'йцуйцулд фыв аофыолдво лдфыолдвфолдывл',
      },
    ],
    comments: [],
    searchValue: '',
  });

  const addPost = () => {
    dispatch({
      type: 'ADD_POST',
      payload: {
        id: 3,
        title: 'Третья статья',
        imageUrl:
          'https://images.unsplash.com/photo-1636145411033-41bb1b898d5c?ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw2Nnx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=60',
        text: 'йцу 1231231 уйц йц123123!!!',
      },
    });
  };

  const removePost = (id) => {
    if (window.confirm('Ты реально хочешь это?!')) {
      dispatch({
        type: 'REMOVE_POST',
        payload: {
          id: id,
        },
      });
    }
  };

  return (
    <div className="App">
      <Header onAddPost={addPost} />
      <Grid className="wrapper" container spacing={2}>
        <Grid item xs={7}>
          {state.posts.map((obj) => (
            <Post {...obj} onRemove={removePost} />
          ))}
        </Grid>
        <Grid item xs={5}>
          <Comments />
        </Grid>
      </Grid>
    </div>
  );
}

export default App;
