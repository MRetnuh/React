function Producto({Titulo, Descripcion, Precio, srcImagen}) {

  return (
    <>
<h1>{Titulo}</h1>
<img src={srcImagen} alt={Titulo} />
      <h3>{Descripcion}</h3>
      <h3>{Precio}</h3>
    </>
  )
}
export default Producto

/* se crea/usa otro archivo (App.jsx) y se importa éste */

import React from 'react'
import Producto from './Producto'

function App() {
   return(
     <Producto
       Titulo='Nike'
SrcImagen='https://twitter.com/SrLuchoPortuano/status/1699487861270274543/photo/1'
Descripcion='zapatillas piolas'
       Precio='15000'
     />
)

}
export default App
