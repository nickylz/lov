import { useState } from 'react';
import PasswordLock from './components/PasswordLock';
import Inicio from './components/Inicio';
import BackgroundAudio from './components/BackgroundAudio';
import './App.css';

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  return (
    <>
      {!isAuthenticated ? (
        <PasswordLock onCorrectPassword={() => setIsAuthenticated(true)} />
      ) : (
        <>
          {/* El botón y la música de fondo solo aparecen al entrar a Inicio */}
          <BackgroundAudio />
          <Inicio />
        </>
      )}
    </>
  );
}

export default App;