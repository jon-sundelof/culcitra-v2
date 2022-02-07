const OpponentHand = () => {
  let mapArray: Array<number>;
  mapArray = [...Array(10).keys()];
  return (
    <div className='opponent-hand-container'>
      {mapArray &&
        mapArray.map((item, i) => {
          return (
            <div key={i} className='opponent-card' draggable={true}>
              Card {item + 1}
            </div>
          );
        })}
    </div>
  );
};

export default OpponentHand;
