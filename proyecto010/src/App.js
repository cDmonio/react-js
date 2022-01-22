import { useState, useEffect } from 'react';
import mostrarTabla from './MostrarTabla';

function App() {

    //Artículos almacena el resultado, y setArticulos controla el cambio del resultado.
    const [articulos, setArticulos] = useState([])
    const [recuperado, setRecuperado] = useState(false)

    useEffect(() => {
        fetch('http://scratchya.com.ar/react/datos.php')
            .then((response) => {
                return response.json()
            })
            .then((articulos_response) => {
                setArticulos(articulos_response)
                setRecuperado(true) //Pasar a true para mostrar tabla.
            })
            //}, 2000); Tiempo de espera 2segs al then.
    }, [])
    
    if (recuperado) { //Cuando recuperado pase a true
        return mostrarTabla(articulos)
    } else { //Mientras recuperado es false
        return (<div>recuperando datos..</div>)
    }
}

export default App;
