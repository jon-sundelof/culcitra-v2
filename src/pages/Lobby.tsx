import React, { ReactElement } from 'react';
import { Link } from 'react-router-dom';
import { CANVAS, CRAFTDECK, HOWTOPLAY, SETTINGS } from '../ROUTES';
import '../styles/lobby.scss';

interface LobbyProps {}

const Lobby: React.FunctionComponent<LobbyProps> = (
  props: LobbyProps
): ReactElement => {
  return (
    <main className='lobby-container'>
      <div className='lobby-content'>
        <div className='game-header'>
          <h1>culcitra</h1>
        </div>
        <div className='buttons-container'>
          <Link to={CANVAS}>Start Game</Link>
          <Link to={CRAFTDECK}>Craft Deck</Link>
          <Link to={HOWTOPLAY}>How to play</Link>
          <Link to={SETTINGS}>Settings</Link>
        </div>
        <div className='player-container'>
          <div>
            <h3>"player name"</h3>
            <div>*Player-content*</div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Lobby;
