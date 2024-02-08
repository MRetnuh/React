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
