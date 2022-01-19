import './App.css';
import ListadoResultados from './api-list/listResults';
import { useState } from "react";

function App() {
    //definimos la variable de estado donde almacenaremos un arreglo con las distintas operaciones efectuadas:
    const [operaciones, setOperacion] = useState([])

    function sumar(event) {
        //Prevenir acciones
        event.preventDefault();
        const v1 = parseInt(event.target.valor1.value, 10)
        const v2 = parseInt(event.target.valor2.value, 10)
        //Operación
        const suma = v1 + v2
        //Object
        const nuevo = {
            resultado: suma,
            valor1: v1,
            valor2: v2
        }
        //Para actualizar el estado en la variable 'operaciones' de manera correcta, necesitamos pasar otro arreglo completo. 
        //Utilizamos el operador spread para descomponer el vector actual y agregar como primer elemento la nueva operación:
        // ...operaciones véase el siguiente ejemplo: https://www.geeksforgeeks.org/what-is-the-meaning-of-spread-operator-in-reactjs/
        setOperacion([nuevo, ...operaciones])
        //Reset inputs
        event.target.valor1.value = ''
        event.target.valor2.value = ''
    }

    return (
        <div>
            <form onSubmit={sumar}>
                <p>Ingrese primer valor:<input type="text" name="valor1" /></p>
                <p>Ingrese segundo valor:<input type="text" name="valor2" /></p>
                <input type="submit" value="Sumar" />
            </form>
            <ListadoResultados resultados={operaciones} />
        </div>
    );
}

export default App;
