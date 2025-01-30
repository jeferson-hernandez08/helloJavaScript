/* 
    Tipos de Datos Primitivos:
    Los tipos en javascript son los datos en los que se fundamentan nuestra interaccion con el lenguaje, son datos basicos y
    son datos inmutables y representan un solo valor, esto es lo que significa datos primitivos.
    Son datos basicos inmutables representan un solo valor, No son objetos con diferentipos tipos de datos y No son metodos.
    Cuando hablamos de diferentes tipos de datos primitivos de javascript nos tenemos que quedar con 7 tipos de datos.
*/

console.log("___________________________String_____________________________________")
// String (Cadena de texto): La capacidad de escribir texto. 
let myName = "Jeferson Hernandez"
let alias = "Kuki"
let email = `jefer.hernandez1@gmail.com`

console.log("___________________________Number_____________________________________")
// Números (Number)
let age = 37       // Entero 
let heigh = 1.67  // Decimal 

console.log("___________________________Booleans_____________________________________")
// Booleanos (boolean): Si algo es verdadero o falso 0 ó 1. 
let isTeacher = true     
let isStudent = false

console.log("___________________________Undefined_____________________________________")
// Undefined: Significa para declarar una varible pero aún no le hemos asignado ningun valor o es una variable no definida. Se usa para cuadno tenemos una variable y aun no le hemos inicializado.
let undefinedValue
console.log(undefinedValue)     // Nos imprime undefined

console.log("___________________________Null_____________________________________")
// Null: El Null lo que representa es que hay una ausencia de valor. Lo que le indicamos que esta variable es nula, es una variable que no hay un valor.
let nullValue = null

console.log("___________________________Symbol_____________________________________")
// Symbol: Se introdujo en la actualizacion de emmascript6. Son valores unicos para indentificar propiedades o identificar identificadores unicos. 
let mySymbol = Symbol("mysymbol")

console.log("___________________________Bigint_____________________________________")
// BigInt: Gran entero, es para representar un número entero extremadamente grande que esta fuera del rango de los numbers y que no puede ser representado con el tipo primitivo Number
let myBigInt  = BigInt(2342342343534534534535435354354565776887987900)
let myBigInt2 = 231243243534654657567864565898987989789675676000089n

console.log("___________________________Nan_____________________________________")
// NaN: NaN es un valor especial que significa "Not a Number" (No es un número). Se utiliza para representar un valor que no es un número válido.
/*  
    Es decir, cuando se intenta realizar una operación matemática que no tiene un resultado numérico definido.
    Aunque NaN significa "Not a Number", en realidad es de tipo number en JavaScript.
    En conclusión:
    NaN es un valor especial que representa "No es un número".
    Aparece cuando una operación matemática no tiene un resultado numérico válido.
    Usa isNaN() o Number.isNaN() para verificar si un valor es NaN.
*/ 
// 1. Operaciones matemáticas inválidas:
console.log(0 / 0); // NaN
console.log(Math.sqrt(-1)); // NaN (raíz cuadrada de un número negativo)

// 2. Conversiones fallidas a número:
console.log(Number("Hola")); // NaN (no se puede convertir "Hola" a número)
console.log(parseInt("ABC123")); // NaN (no se puede convertir "ABC123" a número)

// 3. Operaciones con NaN:
console.log(NaN + 5); // NaN (cualquier operación con NaN resulta en NaN)

// 4. Uso de valores no numéricos en operaciones matemáticas:
console.log("Texto" * 5); // NaN (no se puede multiplicar un texto por un número)

// 5. Aunque NaN significa "Not a Number", en realidad es de tipo number en JavaScript.
console.log(typeof NaN); // "number"

// 6. NaN no es igual a nada, ni siquiera a sí mismo:
console.log(NaN === NaN); // false

// 7. Verificar si un valor es NaN: Debido a que NaN no es igual a sí mismo, no puedes usar el operador === para verificar si un valor es NaN. 
//    En su lugar, debes usar la función isNaN() o Number.isNaN().
// isNaN(): Convierte el valor a número y luego verifica si es NaN.
console.log(isNaN("Hola")); // true (porque "Hola" no es un número)
console.log(isNaN(123)); // false (porque 123 es un número)
// Number.isNaN(): Verifica si el valor es exactamente NaN (sin conversión).
console.log(Number.isNaN("Hola")); // false (porque "Hola" no es NaN)
console.log(Number.isNaN(NaN)); // true (porque es exactamente NaN)

// 8. Ejemplo Practico: 
let resultado = "Texto" * 5; // Esto dará NaN

if (isNaN(resultado)) {
    console.log("El resultado no es un número válido.");
} else {
    console.log("El resultado es:", resultado);
}

console.log("___________________________Mostramos los Tipos de Datos_____________________________________")
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

console.log(typeof NaN)           // NaN es de tipo Number



















