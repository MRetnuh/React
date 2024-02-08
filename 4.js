import {React, useState} from 'react';

function Contador() {
        let r = Math.floor(Math.random()*1000);
     const [valor, setValor] = useState(0);
   const random = (e) => {
      setValor(r)
}
      return(
       <div className="App">
   <h1>Contador</h1>
         <h2>{valor}</h2>
         <h3 onClick={random}>Spawnear numeros randoms</h3>
      </div>

      )
}
    export default Contador

/* se crea otro archivo y se importa éste */

import Contador from './Contador'

   function App() {
    return (
      <Contador
       />
    )
   }
  export default App
