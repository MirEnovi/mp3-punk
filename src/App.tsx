import React from 'react';
import {
    Routes,
    Route,
  } from 'react-router-dom';

import Home from './pages/home';
import AlbumsPage from './pages/albumsPage'

import './css/index.css'
import './css/player.css'

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/albums" element={<AlbumsPage/>} />
      </Routes>
    </>
  );
}

export default App;
