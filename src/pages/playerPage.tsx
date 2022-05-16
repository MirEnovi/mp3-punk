import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

import NavBar from '../components/navbar'
import Player from '../components/player'
import SideMenu from '../components/sideMenu'

import { Container } from '@material-ui/core'


function PlayerPage() {
  const navigate = useNavigate();
  const goBack = () => navigate(-1)

  const [songData, setSongData] = useState({
    album: '',
    completeFile: '',
    duration: '',
    name: '',
    price: 0,
    singer: '',
    _id:''
  })
  const { idSong } = useParams() as { idSong: string };

  useEffect(() => {
    async function getSong() {
      // 6281949fd86382a1663b22a9
      const url = `http://3.218.67.164:10035/songs/${idSong}`
      const song = await fetch(url).then((res) => res.json())
      setSongData(song.data.song)
    }
    getSong()
  },[])
  
  return (
    <Container maxWidth='sm'>
      <div className='border-nav'></div>
      <NavBar />
      <SideMenu />
      <div className='controls_right mt-2'>
        <button className='btn-main' onClick={goBack}>
          Songs list
        </button>
      </div>
      <Player songData={songData}/>
    </Container>
  );
}

export default PlayerPage;