import React, { ReactElement, useState } from 'react';

interface LobbyProps {}

const Lobby: React.FunctionComponent<LobbyProps> = (
  props: LobbyProps
): ReactElement => {
  return (
    <div>
      <h1>Welcome</h1>
    </div>
  );
};

export default Lobby;
