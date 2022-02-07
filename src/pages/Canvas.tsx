import React, { ReactElement } from 'react';
import '../styles/canvas.scss';

import PlayerHand from '../components/canvas/PlayerHand';
import OpponentHand from '../components/canvas/OpponentHand';
import PlayerCharacter from '../components/canvas/PlayerCharacter';
import OpponentCharacter from '../components/canvas/OpponentCharacter';
import SideBar from '../components/canvas/SideBar';
import EndRoundBtn from '../components/canvas/EndRoundBtn';

interface CanvasProps {}

const Canvas: React.FunctionComponent<CanvasProps> = (
  props: CanvasProps
): ReactElement => {
  return (
    <main className='canvas-container'>
      <div className='canvas-content'>
        <div className='player-hand-item'>
          <PlayerHand />
        </div>
        <div className='sidebar-item'>
          <SideBar />
        </div>
        <div className='end-round-btn-item'>
          <EndRoundBtn />
        </div>
        <div className='opponent-hand-item'>
          <OpponentHand />
        </div>
        <div className='opponent-character-item'>
          <OpponentCharacter />
        </div>
        <div className='player-character-item'>
          <PlayerCharacter />
        </div>
      </div>
    </main>
  );
};

export default Canvas;
