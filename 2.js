import React from 'react'

const Encabezado13 = ({Titulo}, {srcLogo}) => {
return(
  <>
<p>{Titulo}</p>
    <img src={srcLogo} alt={Titulo}/>
  </>
)
}
export default Encabezado13

/* creas otro archivo e importas éste que esta arriba. no van juntos */

import Encabezado13 from './encabezado'
function App() {
  return (
    <Encabezado13
Titulo="Nike"
      srcLogo="https://www.google.com/search?q=nike&tbm=isch&chips=q:nike,g_1:logo:HXat9L8xo1Q%3D&client=ms-android-motorola-rvo3&hl=es&sa=X&ved=2ahUKEwjN3IOMjJGBAxXUKrkGHdvNDYgQ4lYoAHoECAEQBQ&biw=412&bih=784#imgrc=eFAMazad2ASboM "/>
  )
}
export default App
