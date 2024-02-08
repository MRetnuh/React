import {React, useState} from 'react';


function App() {
const [valor, setValor] = useState(0);
  const sumar = () => {
    setValor(valor + 1);
  }
 const restablecer = () => {
        setValor(0);
 }
    const restar = () => {
      setValor(valor - 1);

    }
  return(
    <div className="App">
<h1>Contador</h1>
<h2>{valor}</h2>
<button onClick={sumar}>Aumentar</button>
      <button onClick={restablecer}>Restablecer</button>
      <button onClick={restar}>Disminuir</button>
    </div>
)
}
export default App
