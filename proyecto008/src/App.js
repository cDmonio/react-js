import { useState, useEffect } from 'react';

function App() {

  const [texto, setTexto] = useState("") //VALOR POR DEFECTO DEL STATE
  //Texto dinámico
  useEffect(() => document.title = texto, [texto])

  //Texto stático, sólo una vez
  //useEffect(() => document.title = texto, [])

  function cambiar(e) {
    setTexto(e.target.value)
  }

  return (
    <div>
      <p><input type="text" onChange={cambiar} /></p>
      <p>{texto}</p>
    </div>
  );
}

export default App;