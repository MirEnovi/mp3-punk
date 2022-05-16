import React from 'react'

import NavBar from '../components/navbar'
import Player from '../components/player'
import SideMenu from '../components/sideMenu'

import { Container } from '@material-ui/core'


function Home() {

  
  return (
    <Container maxWidth="sm">
      <div className="border-nav"></div>
      <NavBar />
      <SideMenu />
      <Player />
    </Container>
  );
}

export default Home;