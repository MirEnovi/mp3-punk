import React from 'react'

import NavBar from '../components/navbar'
import CardAlbum from '../components/cardAlbum'
import SideMenu from '../components/sideMenu'

import { Container } from '@material-ui/core';



function SongsPage() {
  const discks = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 1, 2, 3, 4, 5, 6];
  
  return (
    <Container maxWidth="sm">
      <div className="border-nav"></div>
      <NavBar />
      <SideMenu />
      <h1>Canciones</h1>
      <div className="section-discks">
        {discks.map((disck) => {
          return <CardAlbum />;
        })}
      </div> 
    </Container>
  );
}

export default SongsPage;