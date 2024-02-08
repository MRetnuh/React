import { useEffect, useState } from 'react'
import './App.css'

function App() {

  let [preguntas, setPreguntas] = useState([])
  let [correctas, setCorrectas] = useState(0)
  let [indicePregunta, setIndicePregunta] = useState(0);
  let [vidas, setVidas] = useState(3);


  useEffect(() => {
    obtenerPreguntas()
  }, [])

  function obtenerPreguntas() {
    fetch('https://opentdb.com/api.php?amount=11')
    .then(response => response.json())
    .then(data => setPreguntas(data.results))
    .catch(error => console.log(error))
  }

  function handleClickCorrect() {
    if(correctas < 9){
      setCorrectas(correctas + 1)
      setIndicePregunta(indicePregunta + 1);
    }
    else {
      alert("Felicidades! Ganaste!")
      setVidas(3)
      setCorrectas(0)
      obtenerPreguntas();
    }
  }

  function handleClickIncorrect(){
    if(vidas > 1){
      setVidas(vidas - 1)
    }
    else {
      alert("Perdiste, intentalo nuevamente")
      setVidas(3)
      setCorrectas(0)
      obtenerPreguntas()
    }

  }


  return (
    <>
    <div id='total-responses-box'>
      <p>Correct answers: {correctas}/10</p>
      <p>Remaining lives: {vidas}</p>
    </div>
    <main id="preguntas">
     {
      preguntas &&  preguntas.length > 0 ? (
        <div>
          <p>{preguntas[indicePregunta].question}</p>
          <div id='options'>
            <button onClick={handleClickCorrect}>{preguntas[indicePregunta].correct_answer}</button>
            {
            preguntas[indicePregunta].incorrect_answers.map((incorrecta, index) => (
              <button onClick={handleClickIncorrect} key={index}>{incorrecta}</button>
            ))
            }
          </div>
        </div>

      )
      :
      (
        <p>Cargando pregunta..</p>
      )
     }
    </main>
    </>
  )
}

export default App
