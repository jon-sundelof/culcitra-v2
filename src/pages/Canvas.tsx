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
        <EndRoundBtn />
        <OpponentHand />
        <OpponentCharacter />
        <PlayerCharacter />
      </div>
    </main>
  );
};

export default Canvas;
