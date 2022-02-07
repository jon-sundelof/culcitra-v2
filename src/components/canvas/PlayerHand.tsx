import { useEffect } from 'react';

import '../../styles/canvas.scss';

const PlayerHand = () => {
  let mapArray: Array<number>;
  mapArray = [...Array(10).keys()];
  return (
    <div className='player-hand-container'>
      {mapArray &&
        mapArray.map((item, i) => {
          return (
            <div key={i} className='player-card' draggable={true}>
              Card {item + 1}
            </div>
          );
        })}
    </div>
  );
};

export default PlayerHand;
