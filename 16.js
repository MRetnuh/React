import React, { useState } from 'react';

function CambiarColorYTamano() {
  // Define un estado para el color inicial y el tamaño
  const [color, setColor] = useState('white');
  const [tamaño, setTamaño] = useState('100vh'); // vh significa viewport height
const[ancho, setAncho] = useState('100vw')
  // Función para cambiar el color a amarillo y el tamaño a 200vh
  const cambiarAmarilloYAmpliar = () => {
    setColor('yellow');
    setTamaño('200vh');
    setAncho('200vw')
  };

  return (
    <div style={{ backgroundColor: color, height: tamaño, width: ancho}}>
      <p>Esta es toda la página</p>
      <button onClick={cambiarAmarilloYAmpliar}>Cambiar a Amarillo y Ampliar</button>
    </div>
  );
}

export default CambiarColorYTamano;
