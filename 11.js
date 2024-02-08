import React, { useState } from 'react';

const BarraBusqueda22 = () => {
  let [buscado, setBuscado] = useState('');
  let [resultados, setResultados] = useState([]);
  const array = [
"Indepemdiente",
    "Racing",
    "River",
"Boca",
    "Chacarita",
"Ferro"
  ]
  const handleBuscar = (e) => {
    const valorBuscado = e.target.value;
    setBuscado(valorBuscado);

    const resultadosFiltrados = array.filter(elemento =>
      elemento.includes(valorBuscado)
    );
    setResultados(resultadosFiltrados);
  };

  return (
    <div>
      <input onChange={handleBuscar} type="text" id="barra-busqueda" required />
      {resultados.length > 0 ? (
        <ul>
          {resultados.map((resultado, index) => (
            <p key={index}>{resultado}</p>
          ))}
        </ul>
      ) : (
        <p>No hay coincidencias</p>
      )}
    </div>
  );
};

export default BarraBusqueda22;
