import { useState } from 'react';
import CoordenadaFlecha from './CoordenadaFlecha';

function App() {

  const [visible, setVisible] = useState(true) //VALOR POR DEFECTO DEL STATE

  function ocultar() {
    setVisible(false)
  }

  return (
    <div>
      {visible ? <CoordenadaFlecha /> : <p>Se ocultó la coordenada </p>}
      <button onClick={ocultar}>Ocultar</button>
    </div>
  );
}

export default App;