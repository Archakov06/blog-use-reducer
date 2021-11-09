import React from 'react';
import { useParams } from 'react-router';
import { useSelector } from 'react-redux';
import { Comments } from '../components/Comments';
import { Paper, Divider, TextField, Button } from '@mui/material';

export const FullPost = () => {
  const { id } = useParams();
  const post = useSelector(({ posts }) => posts.find((obj) => Number(obj.id) === Number(id)));

  return (
    <Paper style={{ marginTop: 30, padding: '30px 40px' }}>
      <h1>{post.title}</h1>
      <img style={{ width: '100%', height: 300 }} src={post.image} alt="qweqwe" />
      <p>{post.text}</p>
      <Divider />
      <h3>Комментарии (0)</h3>
      <Comments />
      <Divider />
      <h3>Добавить комментарий</h3>
      <TextField placeholder="Введите текст комментария..." multiline fullWidth />
      <br />
      <br />
      <Button color="success" variant="contained" size="large">
        Добавить
      </Button>
    </Paper>
  );
};
