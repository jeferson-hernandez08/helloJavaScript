// 1. Concatena dos cadenas de texto
console.log("___________________________Respuesta Pregunta 1_____________________________________")
let myName  = "Jeferson Hernandez"
let myName2 = "Sebastian Hernandez"
let alias1  = "Kuki"
let alias2  = "Gordito"

let greeting1 = "Hola, mi nombre es " + myName + " me llaman " + alias1 + " y quiero ser un gran programador"
let greeting2 = "Hola, mi nombre es " + myName2 + " me llaman " + alias2 + " y soy un gran programador"
console.log(greeting1)
console.log(greeting2)

// 2. Muestra la longitud  de una cadena de texto.
console.log("___________________________Respuesta Pregunta 2_____________________________________")
console.log(greeting1.length)
console.log(greeting2.length)

// 3. Muestra el primer y último carácter de un string 
console.log("___________________________Respuesta Pregunta 3_____________________________________")
console.log(greeting1[0])    // Primer caracter
console.log(greeting1[84])   // Segundo caracter: Recordemos que se cuenta desde el 0.

// 4. Convierte a mayúsculas y minúsculas un string
console.log("___________________________Respuesta Pregunta 4_____________________________________")
console.log(greeting1.toUpperCase())    // Convertimos a mayusculas
console.log(greeting1.toLowerCase())    // Convertimos a minusculas

// 5. Crea una cadena de texto en varias lineas
console.log("___________________________Respuesta Pregunta 5_____________________________________")
let mensaje = `Hola este mensaje
es para realizar 
el ejercicio de 
crear una cadena de texto 
en varias lineas`

console.log(mensaje)

// 6. Interpola el valor de una variable en un string 
console.log("___________________________Respuesta Pregunta 6_____________________________________")
/* Interpolar: Es insertar valores dentro de una cadena de texto, como en lenguajes de programación que 
permiten insertar variables dentro de un string de manera dinámica. 
*/

let profesion1 = "Tecnologo en Electronica"
let profesion2 = "Tecnologo en Analisis y Desarrollo de Software"

console.log(`Hola, mi nombre es ${myName}, me dicen ${alias1} soy ${profesion1}, 
me apasiona el mundo de la tecnologia, ahora quiero ser un gran programador estoy
cursando la carrera tecnologica en ${profesion2}`)             // Recordemos que para interpolar variables NO se pude con comillas normales "" si no que con las plantillas literales ``. 

// 7. Reemplaza todos los espacios en blanco de un string por guiones 
console.log("___________________________Respuesta Pregunta 7_____________________________________")
console.log(greeting1.replaceAll(" ", "-"))

// 8. Comprueba si una cadena de texto contiene una palabra concreta

// 9. Comprueba si dos strings son iguales 

// 10. Comprueba si dos strings tienen la misma longitud