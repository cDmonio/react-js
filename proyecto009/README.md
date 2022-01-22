# 9 - Hook de efecto (función useEffect)

- https://www.tutorialesprogramacionya.com/reactya/detalleconcepto.php?punto=9&codigo=9&inicio=0

Sintaxis de la función useEffect

La función useEffect tiene dos parámetros: el primero una función y el segundo un array cuyos valores serán variables de las que depende nuestro algoritmo que implementa la función que le pasamos (este arreglo es opcional como vemos en el ejemplo codificado)
La función useEffect se ejecuta en cada renderizado, inclusive en el primero.
Podemos llamar a la función useEffect más de una vez y crear varios hook de efecto.
Está diseñado para que si la función que pasamos por parámetro retorna otra función, React va a ejecutar dicha función cuando se desmonte el componente del DOM (normalmente en esta función liberamos recursos como desuscribirse a eventos)
