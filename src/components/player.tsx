import React from 'react'

function Player(props:any) {
  const {songData} = props
  console.log(songData)
  return (
    <div className="player">
      <div className="player_inner">
        <div className="player_inner__middle">
          <input className="empty" />
          <div className="cube">
            <div className="cube_inner">
              <div className="cube_inner__front">
                <div className="bars">
                  <div className="bars_bar"></div>
                  <div className="bars_bar"></div>
                  <div className="bars_bar"></div>
                  <div className="bars_bar"></div>
                  <div className="bars_bar"></div>
                  <div className="bars_bar"></div>
                  <div className="bars_bar"></div>
                  <div className="bars_bar"></div>
                  <div className="bars_bar"></div>
                  <div className="bars_bar"></div>
                </div>
                <div className="details">
                  <div className="details_album"></div>
                  <h2>{songData.singer} - { songData.name }</h2>
                  <h3>Funkblaster</h3>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="player_inner__bottom">
          <audio id="audio"  >
            <source src="https://s3-us-west-2.amazonaws.com/allmetalmixtapes/Saxon%20-%201984%20-%20Crusader/01%20-%20Crusader%20Prelude.mp3" />
          </audio>
          <div className="options">
            <i className="fa fa-random"></i>
            <i className="fa fa-random"></i>
          </div>
          <div className="playbar">
            <div className="playbar_inner"></div>
            <div className="playbar_left">
              <span></span>
            </div>
            <div className="playbar_right">
              <span>{songData.duration }</span>
            </div>
          </div>
          <div className="controls">
            <div className="controls_left">
              <button className="btn-main">
                <i className="fa fa-step-backward" aria-hidden="true"></i>
              </button>
            </div>
            <div className="controls_middle">
              <button className="btn-main">
                <i className="fa fa-play" aria-hidden="true"></i>
              </button>
              <button className="btn-main d-none">
                <i className="fa fa-pause" aria-hidden="true"></i>
              </button>
            </div>
            <div className="controls_right">
              <button className="btn-main">
                <i className="fa fa-step-forward" aria-hidden="true"></i>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Player