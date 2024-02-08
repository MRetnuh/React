import {React, useState, useEffect} from 'react'

function App() {
  const[valor, setValor] = useState(10)

  useEffect(() => {
    let regresivo = setInterval(() => setValor(t => t - 1),1000)
    return () => clearInterval(regresivo)
  }, [])

return (
  <div>
<h1>Contador regresivo (para atras)</h1>
    {valor > 0 ? (
<h2>{valor}</h2>
    )
    :
   (
<h2>Termino la cuenta</h2>
   )

    }
  </div>
)
}
export default App
