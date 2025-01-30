// if/else/else if/ternaria

// 1. Imprime por consola tu nombre si una variable toma su valor
console.log("___________________________Respuesta Pregunta 1_____________________________________")
console.log("******Primera Forma******")
let myName = 1
let miNombre = "Jeferson Hernandez"

if (myName == 1) {
    console.log("Mi nombre es: Jeferson Hernandez")    // Forma # 1 normal
    console.log("Mi nombre es: " + miNombre)           // Forma concatenada # 2
    console.log(`Mi nombre es: ${miNombre}`)           // Forma concatenada # 3
}

console.log("******Segunda Forma******")
let nombre = NaN;                  // Asigna tu nombre a la variable

if (nombre) {                    // Verifica si la variable nombre tiene un valor
    console.log(nombre);
} else {                         // Si la variable nombre no tiene un valor (es decir, es null, undefined, false, 0, NaN, o una cadena vacía ""), se ejecuta el bloque else
    console.log("La variable 'nombre' no tiene un valor asignado.");
}

// 2. Imprime por consola un mensaje si el usuario y contraseña concide con unos establecidos

// 3. Verifica si un número es positivo, negativo o cero e imprime un mensaje

// 4. Verifica si una persona puede votar o no (mayor o igual a 18) e indica cuántos años le faltan

// 5. Usa el operador ternario para asignar el valor "adulto" o "menor" a una variable
//    dependiendo de la edad 

// 6. Muestra en que estación del año nos encontramos dependiendo del valor de una variable "mes"

// 7. Muestra el número de días que tiene un mes dependiendo de la variable del ejercicio anterior

// switch

// 8. Usa un switch para imprimir un mensaje de saludo diferente dependiendo del idioma

// 9. Usa un switch para hacer de nuevo el ejercicio 6

// 10. Usa un switch para hacer de nuevo el ejercicio 7