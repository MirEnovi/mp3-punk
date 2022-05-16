import React from 'react'

import NavBar from '../components/navbar'

import { Container } from '@material-ui/core';

import '../css/index.css'
import '../css/player.css'



function Home() {

  
  return (
    <Container maxWidth="sm">
      <h4 className="logo">CyberPunketo</h4>
      <div className="border-nav"></div>
      <NavBar/>
    </Container>
  );
}

export default Home;