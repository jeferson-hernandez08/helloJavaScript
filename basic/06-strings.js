/*  Strings: Los strings o cadenas de texto es importante aprender esta leccion ya que es unos de los tipo 
    de datos primitivosque mas utilizamos.
*/

console.log("____________________________Concatenación de cadenas de texto____________________________________")
// Concatenación de cadenas de texto
let myName = "Jeferson"
let greeting = "Hola, " + myName + " como estás KuKi!"
console.log(greeting)
console.log(typeof greeting)
/*  
    Podemos ver que con los Strings podemos concatenar variables, 
    para crear una cadena de texto completa
*/

console.log("____________________________Longitud de la cadena de texto____________________________________")
// Longitud de la cadena de texto: La longitud es el tamaño de la cadena de texto
console.log(greeting.length)  // Para medir la longitud lo medimos con el metodo lenght, lo cual el tamaño de la cadena de texto es 31

console.log("____________________________Acceso a caracteres____________________________________")
// Acceso a carateres
console.log(greeting[0])     
console.log(greeting[1])    
console.log(greeting[2])    
console.log(greeting[3])    
console.log(greeting[30])    
/*  
    Si a los corchetes le pasamos el indice, podemos acceder al valor del caracter de esa 
    Cadena de texto como lo podemos ver en este ejemplo.
    Recordemos que en programación cuando tenemos listas se empieza desde el indie 0 
*/

console.log("____________________________Métodos comunes____________________________________")
// Métodos comunes
console.log(greeting.toUpperCase())                   // toUpperCase(): Es una función que convierte toda la cadena de texto a MAYUSCULAS
console.log(greeting.toLowerCase())                   // toLowerCase(): Es una función que convierte toda la cadena de texto a minusculas
console.log(greeting.indexOf("Jeferson"))             // Nos improme el 6 lo que significa que es el indice donde a encontrado la palabra Jeferson
console.log(greeting.indexOf("Hola"))                 // Nos imprime el 0 por que Hola ya lo encuentra en el primer elemento
console.log(greeting.indexOf("Sebastian"))            // Nos imprime el -1 lo que significa que no ha encontrado o no hay ningun indice con la palabra Sebastian
console.log(greeting.includes("Jeferson"))            // includes(): Es una función que nos comprueba si realmente existe, nos imprime true o false
console.log(greeting.includes("Hola"))
console.log(greeting.includes("Sebastian"))
console.log(greeting.slice(0, 10))                      // slice(): Es una función que sirve para que nos imprima o retorne un pedazo de cade texto que queramos, en este caso queremos los elemntos que esten entre el indice 0 hasta el indice 10
console.log(greeting.replace("Jeferson", "Sebastian"))  // replace(): Es una función que nos indica que si encuentra la palabra Jeferson la reemplaza por Sebastian

console.log("____________________________Template Literals ``____________________________________")
// Template Literals (plantillas literales ``): Las plantillas literales nos sirven para crear strings de varias lineas. 
let message = `Hola, este 
es mi 
curso de 
JavasScript`                       // Con el `` podemos escribir cadenas de texto en dos o mas lineas sin que salga error, lo cual podemos crear un texto en varias lineas.

console.log(message)

let email = "jefer.hernandez1@gmail.com"  
console.log(`Hola, ${myName}!, Tu email es ${email}`)   // Si queremos meterle el valor de mas variables dentro de una cadena de texto, le hacemos con ${}.




