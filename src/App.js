import React from 'react';
import { useDispatch } from 'react-redux';
import { Route, Routes } from 'react-router';
import { Container } from '@mui/material';

import { setPosts, fetchPosts } from './redux/actions/posts';
import { Header } from './components/Header';

import { Home } from './pages/Home';
import { FullPost } from './pages/FullPost';

function App() {
  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(fetchPosts());
  }, []);

  return (
    <div className="App">
      <Header />
      <Container>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/post/:id" element={<FullPost />} />
        </Routes>
      </Container>
    </div>
  );
}

export default App;
