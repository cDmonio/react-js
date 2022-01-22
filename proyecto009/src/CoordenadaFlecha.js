import { useState, useEffect } from "react";

function CoordenadaFlecha() {
    const ok = {x :0, y:0}
    const [posicion, setPosicion] = useState(ok)

    useEffect(() => {
        window.addEventListener('mousemove', fijarPosicion)
        return () => {
            window.removeEventListener('mousemove', fijarPosicion)
            console.log('se borró el registro de eventos')
        }
    }, [])   


    function fijarPosicion(e) {
        setPosicion({x : e.clientX, y : e.clientY})
    }

    return (
        <div>
            <p>{posicion.x} - {posicion.y}</p>
        </div>
    );
}

export default CoordenadaFlecha;
