import React from 'react'

import NavBar from '../components/navbar'
import CardAlbum from '../components/cardAlbum'

import { Container } from '@material-ui/core';



function AlbumsPage() {
  const discks = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 1, 2, 3, 4, 5, 6];
  
  return (
    <Container maxWidth="sm">
      <h4 className="logo">CyberPunketo</h4>
      <div className="border-nav"></div>
      <NavBar />
      <div className="section-discks">
        {discks.map((disck) => {
          return <CardAlbum />;
        })}
      </div> 
    </Container>
  );
}

export default AlbumsPage;