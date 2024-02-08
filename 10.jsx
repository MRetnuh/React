function Tabla() {
  const datos = [
    {
      Name:"Juan",
      Apellido:"Perez",
      Descripcion:"Capo",
    },
    {
      Name:"Juan",
         Apellido:"Perez",
       Descripcion:"Capo",
     },
{
        Name:"Juan",
         Apellido:"Perez",
         Descripcion:"Capo",
    },
  ];
  const encabezados = Object.keys(datos[0]);

  return (
    <table>
      <thead>
        <tr>
          {encabezados.map(i => <th key={i}>{i}</th>)}
        </tr>
      </thead>
      <tbody>
        {datos.map(dato =>
        <tr key={dato.id}>
          {encabezados.map(key => <td key={dato[key]}>{dato[key]}</td>)}
        </tr>
        )}
      </tbody>
    </table>
  );
}

export default Tabla;
