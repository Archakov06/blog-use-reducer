import React from 'react';
import { useSelector } from 'react-redux';
import { Grid } from '@mui/material';
import { Post } from './Post';

export const Posts = ({ onRemove }) => {
  const posts = useSelector((state) => state.posts.posts);

  return (
    <Grid item xs={7}>
      {posts.map((obj) => (
        <Post {...obj} onRemove={onRemove} />
      ))}
    </Grid>
  );
};
