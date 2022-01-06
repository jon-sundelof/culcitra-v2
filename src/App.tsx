import './styles/app.scss';
import Lobby from './pages/Lobby';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Lobby />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
