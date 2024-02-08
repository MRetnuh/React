/* se importan los codigos 7.js y 8.js */

import React, { useState } from 'react';
import StopWatch from './Contador';
import Clock from './Reloj';

function App() {
  const [boton, setBoton] = useState(false);

  const toggleComponent = () => {
    setBoton(!boton);
  };

  return (
    <>
      <h1><center>Elegi capo</center></h1>
      <button onClick={toggleComponent}>Cambiar</button>
      {boton ? <Clock /> : <StopWatch />}
    </>
  );
}

export default App;
