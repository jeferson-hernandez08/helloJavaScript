/* Las variables es la posibilidad de guardar datos en memoria valores y podamos trabajar con ellos o la posibilidad de guardar un valor o dato a un objeto.
   En javascript tenemos tres tipos de variables. 
*/

// var: Fué la primera forma y original de declarar una variable en JS. 
var helloWorld = "¡Hola, JavaScript!"
console.log(helloWorld)    

helloWorld = "¡Hola de nuevo, JavaScript!"      // Podemos transformar la variable 
console.log(helloWorld)

/* Esta forma No es la recomendada de declarar variables ya que var tiene muchos problemas hay problemas de definicion de variabnles con var. 
   La forma mas recomendada de declarar o deficicion de variables es con let y const. 
   EmmaScript en 2015 puso esta mejoras para el uso de JavaScript
*/

// let
//console.log(helloWorld2)        // si ponemos este console.log antes de declaracrarlas nos aparace error y nos dice que no puede acceder antes de su inicializacion (error de hosting)
                                // Donde con var anteriormente esto se podia pero podemos ver que ya no se puede. 
let helloWorld2 = "¡Hola, JavaScript 2!"
console.log(helloWorld2)

helloWorld2 = "¡Hola de nuevo, JavaScript 2!"         
console.log(helloWorld2)

/* Inicialmente podemos ver que funciona igual que var, pero son solo accesibles dentro de un bloque 
    var sucede lo contrario se usa la variable por fuera de un bloque de codigo, etc y sucedia errores. 
    Hay problemas con hosting con var tambien. 
*/
    
// const
const helloWorld3 = "¡Hola, JavaScript 3!"
console.log(helloWorld3)

// Error
// helloWorld3 = "¡Hola de nuevo, JavaScript 3!"         
// console.log(helloWorld3)

/* Con const al hacer esto nos parece un error indicandonos que no podemos reasignar una varaible que es constante, 
    En este caso no se va imprimir el helloWorld3 = "¡Hola de nuevo, JavaScript 3!" 
    El valor que le demos a cons siempre es constante y nunca puede cambiar o puede ser reasignada.
    Esta es la diferencia de los tres tipos de variables, con let podemos variar las varaibles, con const no se puede variar,
    y con var se actualizada ya que sacaba muchos errores. 
*/
