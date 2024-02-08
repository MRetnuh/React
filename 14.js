import { useState, useEffect } from 'react'
import './App.css'

function App() {

  const [imagenBuscada, setImagenBuscada] = useState('tiger')
  const [imagenes, setImagenes] = useState([])


  useEffect(() => {
    fetch(`https://api.unsplash.com/search/photos/?client_id=Tu_api_key&query=${imagenBuscada}&per_page=20&page=1`)
    .then(response => response.json())
    .then(data => setImagenes(data.results))
    .then(console.log(imagenes))
  }, [])


  return (
    <>
      <input
      type="text"
      placeholder='Ingresa que quieres buscar'
      onChange={(e) => setImagenBuscada(e.target.value)}
      />
      <button
      onClick={() => buscarResultados()}
      >Buscar</button>
      {
        imagenes ? (
          <div id='imagenes'>
          {
            imagenes.map((imagen, indice) => (
              <img key={indice} src={imagen.urls.regular}/>
            ))
          }
        </div>
        )
        :
        (
          <div>Cargando imagenes u error</div>
        )
      }

    </>
  )
}

export default App
