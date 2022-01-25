import { useState } from 'react';

function App() {
  const persona = {
    nombre: '',
    edad: '',
    estudios: false
  }

  const [datos, setDatos] = useState(persona)

  function cambioNombre(e) {
    //Edito los valores por defecto del state
    setDatos((valores) => ({
      ...valores,
      nombre: e.target.value,
    }))
  }

  //Se llama en el onChange, y se recoge el valor del input.
  function cambioEdad(e) {
    setDatos((valores) => ({
      ...valores,
      edad: e.target.value,
    }))
  }

  function cambioEstudio(e) {
    setDatos((valores) => ({
      ...valores,
      estudios: !datos.estudios,
    }))
  }
  //Cuando se manda el formulario recuperados los datos de cada input
  //y lo mostramos en una alerta
  function procesar(e) {
    e.preventDefault();
    alert('Dato cargado ' + datos.nombre + ' ' 
      +datos.edad + ' ' 
      +datos.estudios);
  }

  return (
    <div>
      <form onSubmit={procesar}>
        <p>Ingrese nombre:<input type="text" value={datos.nombre} onChange={cambioNombre} /></p>
        <p>Ingrese edad:<input type="number" value={datos.edad} onChange={cambioEdad} /></p>
        <p>Estudios:<input type="checkbox" value={datos.estudios} onChange={cambioEstudio} /></p>
        <p><input type="submit" /></p>
      </form>
      <hr />
      <h3>Datos Ingresados</h3>
      <p>Nombre:{datos.nombre}</p>
      <p>Edad:{datos.edad}</p>
      <p>Estudios:{datos.estudios ? 'con estudios' : 'sin estudios'}</p>
    </div>
  );
}

export default App;
