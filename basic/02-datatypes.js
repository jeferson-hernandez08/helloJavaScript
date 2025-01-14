/* 
    Tipos de Datos Primitivos:
    Los tipos en javascript son los datos en los que se fundamentan nuestra interaccion con el lenguaje, son datos basicos y
    son datos inmutables y representan un solo valor, esto es lo que significa datos primitivos.
    Son datos basicos inmutables representan un solo valor, No son objetos con diferentipos tipos de datos y No son metodos.
    Cuando hablamos de diferentes tipos de datos primitivos de javascript nos tenemos que quedar con 7 tipos de datos.
*/

// String (Cadena de texto): La capacidad de escribir texto. 
let myName = "Jeferson Hernandez"
let alias = "Kuki"
let email = `jefer.hernandez1@gmail.com`

// Números (Number)
let age = 37       // Entero 
let heigh = 1.67  // Decimal 

// Booleanos (boolean): Si algo es verdadero o falso 0 ó 1. 
let isTeacher = true     
let isStudent = false

// Undefined: Significa para declarar una varible pero aún no le hemos asignado ningun valor o es una variable no definida. Se usa para cuadno tenemos una variable y aun no le hemos inicializado.
let undefinedValue
console.log(undefinedValue)     // Nos imprime undefined

// Null: El Null lo que representa es que hay una ausencia de valor. Lo que le indicamos que esta variable es nula, esuna variable que no hay un valor.
let nullValue = null

// Symbol: Se introdujo en la actualizacion de emmascript6. Son valores unicos para indentificar propiedades o identificar identificadores unicos. 
let mySymbol = Symbol("mysymbol")

// BigInt: Gran entero, es para representar un número entero extremadamente grande que esta fuera del rango de los numbers y que no puede ser representado con el tipo primitivo Number
let myBigInt  = BigInt(2342342343534534534535435354354565776887987900)
let myBigInt2 = 231243243534654657567864565898987989789675676000089n

// Mostramos los tipos de datos: Para mostrar el tipo de dato de una variable usamos typeof
console.log(typeof myName)
console.log(typeof alias)
console.log(typeof email)

console.log(typeof age)
console.log(typeof heigh)

console.log(typeof isTeacher)
console.log(typeof isStudent)

console.log(typeof undefinedValue)

console.log(typeof nullValue)      // Esto se toma como un objeto de tipo null.

console.log(typeof mySymbol) 

console.log(typeof myBigInt) 
console.log(typeof myBigInt2) 













