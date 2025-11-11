// Array
const numbers = [1, 2, 3, 4, 5];
console.log(numbers);

// Metodos Importantes
console.log("____________________________Map____________________________________")
// Map():
/*
Map es un método de los arrays en JavaScript que transforma cada elemento del array original aplicando una función y devuelve un nuevo array con los resultados.
 - No modifica el array original (es inmutable en cuanto a reemplazo de elementos).
 - El array resultante tiene la misma longitud que el original.

 Explicarlo en entrevista:
 “map itera un array y crea un nuevo array aplicando una función a cada elemento. En numbers.map(n => n * 2) n es el elemento actual y n * 2 es el nuevo valor devuelto; así producimos [2,4,6,8,10] sin modificar el array original.”
*/

const doubled = numbers.map(n => n * 2);
console.log(doubled); // [2, 4, 6, 8, 10] map devuelve un nuevo array con los valores resultado ([2,4,6,8,10]), y lo asignas a doubled.


console.log("____________________________Filter____________________________________")
// Filter():
/*
Filter crea un nuevo array con todos los elementos del array original que cumplen una condición (predicate). 
No modifica el array original.

Explicarlo en entrevista:
“filter crea un nuevo array con los elementos que cumplen una condición. En numbers.filter(n => n % 2 === 0) la función revisa si el resto al dividir entre 2 es cero (par), por eso devuelve [2,4].”
*/

const even = numbers.filter(n => n % 2 === 0);   // Condicion: Numero del array % 2 (Mod) si es igual a cero.
console.log(even); // [2, 4] filter recoge todos los elementos que hicieron true y los pone en un nuevo array. En este caso [2, 4].

console.log("____________________________Reduce____________________________________")
// Reduce():
/*
Reduce recorre el array y va combinando sus elementos en un único valor usando una función que tú provees (el reducer). En este caso calcula la suma de todos los números.

La función que pasas a reduce recibe hasta 4 argumentos:
array.reduce((accumulator, currentValue, index, array) => { ... }, initialValue)

 - accumulator (aquí acc): el valor acumulado hasta el momento.
 - currentValue (aquí n): el elemento actual del array.
 - index: índice actual (opcional).
 - array: el array original (opcional).
 - initialValue: valor inicial del acumulador (aquí 0).

En nuestro Ejemplo:
 - acc empieza en 0 (porque pasaste 0 como initialValue).
 - n toma sucesivamente 1, 2, 3, 4, 5.
 - La expresión acc + n devuelve el nuevo acumulador cada iteración.
 - Al final reduce devuelve el acumulador final: 15.

 Explicarlo en entrevista:
 “reduce aplica una función acumuladora sobre cada elemento del array para producir un único valor. En numbers.reduce((acc, n) => acc + n, 0) acc inicia en 0 y va sumando cada n, devolviendo 15.”
*/

const sum = numbers.reduce((acc, n) => acc + n, 0);
console.log(sum); // 15



