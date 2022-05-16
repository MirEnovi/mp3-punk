import React from 'react'

import NavBar from '../components/navbar'
import Player from '../components/player'

import { Container } from '@material-ui/core';

import '../css/index.css'
import '../css/player.css'



function Home() {

  
  return (
    <Container maxWidth="sm">
      <h4 className="logo">CyberPunketo</h4>
      <div className="border-nav"></div>
      <NavBar />
      <Player/>
    </Container>
  );
}

export default Home;