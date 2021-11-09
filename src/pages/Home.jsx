import React from 'react';
import { Grid } from '@mui/material';

import { Comments } from '../components/Comments';
import { Posts } from '../components/Posts';

export const Home = () => {
  const addPost = () => {
    // store.dispatch({
    //   type: 'ADD_POST',
    //   payload: {
    //     id: 3,
    //     title: 'Третья статья',
    //     imageUrl:
    //       'https://images.unsplash.com/photo-1636145411033-41bb1b898d5c?ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw2Nnx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=60',
    //     text: 'йцу 1231231 уйц йц123123!!!',
    //   },
    // });
  };

  const removePost = (id) => {
    // if (window.confirm('Ты реально хочешь это?!')) {
    //   store.dispatch({
    //     type: 'REMOVE_POST',
    //     payload: {
    //       id: id,
    //     },
    //   });
    // }
  };

  return (
    <Grid className="wrapper" container spacing={2}>
      <Posts onRemove={removePost} />
      <Grid item xs={5}>
        <Comments />
      </Grid>
    </Grid>
  );
};
