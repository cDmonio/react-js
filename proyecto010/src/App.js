import { useState, useEffect } from 'react';

function App() {

    //Artículos almacena el resultado, y setArticulos controla el cambio del resultado.
    const [articulos, setArticulos] = useState([])

    useEffect(() => {
        fetch('http://scratchya.com.ar/react/datos.php')
            .then((response) => {
                return response.json()
            })
            .then((articulos_response) => {
                setArticulos(articulos_response)
            })
    }, [])
    
    return (
        <div>
            <table border="1">
                <thead>
                    <tr>
                        <th>Código</th>
                        <th>Descripción</th>
                        <th>Precio</th>
                    </tr>
                </thead>
                <tbody>
                    {/* Recorremos artículos */}
                    {articulos.map(art => {
                        return (
                            <tr key="{art.codigo}">
                                <td>{art.codigo}</td>
                                <td>{art.descripcion}</td>
                                <td>{art.precio}</td>
                            </tr>
                        );
                    })}
                </tbody>
            </table>
        </div>

    );
}

export default App;
