import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { LOBBY, CANVAS } from './ROUTES';
import './styles/app.scss';

import Lobby from './pages/Lobby';
import Canvas from './pages/Canvas';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={LOBBY} element={<Lobby />} />
        <Route path={CANVAS} element={<Canvas />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
