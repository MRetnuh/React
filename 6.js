function Productos({Titulo, Descripcion, Precio, srcImagen}) {

     return (                                                                              <>
<h1>{Titulo}</h1>
   <img src={srcImagen} alt={Titulo} />
         <h3>{Descripcion}</h3>
        <h3>{Precio}</h3>
      </>
    )
}                                                                      
export default Productos

import React from 'react';
import Productos from './Productos';

function App() {
  const p = [
    {
      Name: "Nike",
      logo: "sus",
      descripcion: "zapatillas piolas",
      precio: "15000",
    },
    {
      Name: "Nike",
      logo: "sus",
      descripcion: "zapatillas piolas",
      precio: "15000",
    },
    {
      Name: "Nike",
      logo: "sus",
      descripcion: "zapatillas piolas",
      precio: "15000",
    },
  ];

  const Prtos = p.map((producto, index) => (
    <Productos
      key={index}
      Titulo={producto.Name}
      SrcImagen={producto.logo}
      Descripcion={producto.descripcion}
      Precio={producto.precio}
    />
  ));

  return (
    <>
      {Prtos}
    </>
  );
}

export default App;
