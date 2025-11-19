/*  Arrays: 
    Los arrays tambien son llamados "Estructuras de datos", recordemos que anteriormente vimos todos los tipos de 
    datos primitivos (strings, numbers, booleans, undefined, symbol, bigint). 
    Las estructuras de datos nos permiten almacenar varios valores en una sola variable, anteriormente creabamos una 
    variable y le asignabamos un valor sea strings, numerico, bolleano, etc . Pero si queremos asignar  auna misma variable
    varios o un conjunto de datos para eso tenemos diferentes estructuras de datos o arrays. 
    Hay tres tipos de esturas de datos o arrays que vamos a ver a continuación. 
*/

// Arrays: También llamadas listas, son utiles cuando necesitamos manejar una lista de elementos sea numeros, textos, etc. 
// Declaración de array
console.log("____________________________Declaración de array____________________________________")
let myArray = []             // Aqui definimos una estructura de datos que nos permite almacenar un listado de datos.
let myArray2 = new Array()   // Otra forma de crear un array

console.log(myArray)
console.log(myArray2)
/*  
    Estas dos formas son iguales, pero es recomendado usar la primera forma
*/

// Inicialización de array
console.log("____________________________Inicialización de array____________________________________")
myArray = [3]                // Metemos un dato númerico, lo cual está guardando un numero
myArray2 = new Array(3)      // Aquí en esta forma se esta reservando un hueco [ <1 empty item> ], 3 = [ <3 empty items> ]

console.log(myArray)
console.log(myArray2)
/*  
    En la primera forma guarda un dato númerico y en la segunda forma reserva tres huecos esperando a ser rellenados.
    Hoy en dia no tenemos problemas de memoria por lo que no se usa casi esta segunda forma de reservar memoria, a no ser
    que en nuestro programa realicemos otro tipo de logica. 
    Donde normalmente lo que se hace es meter elementos a una lista y esa list se va adaptando a nivel de memoria a medida
    que creaciendo o decreciendo el array.
*/
myArray = [1, 2, 3, 4]
myArray2 = new Array(1, 2, 3, 4)    // Le metemos el listado de valores 

console.log(myArray)
console.log(myArray2)

myArray = ["Jeferson", "Sebastian", "Hernandez", "Ladino", 37, true]
myArray2 = new Array("Jeferson", "Sebastian", "Hernandez", "Ladino", 37, true)    

console.log(myArray)
console.log(myArray2)
/*  
    Recordemos que JavaScript es lenguaje de tipado dinamico, podemos ir cambiando el tipo de dato
    Como podemos ver que podemos ir agregando valores y mezclar strings con numeros, booleans, etc. Podemos mezclar lo que se nos de la gana. 
*/
myArray2 = new Array(3)
//myArray2[0] = "Jeferson"
myArray2[1] = "Sebastian"
myArray2[2] = "Hernandez"
myArray2[4] = "Hernandez"     // Pordemos que lo asigna sin importar la reservacion

console.log(myArray2)
/*  
    En este ejemplo queremos ir agregando o asignando valores a nuestro array. 
    Recordando que en los arrays se empiezan desde 0, podemos ver que tenemos los tres valores.
    Podemos ver como almacena cada uno en la posición los datos en el array, aqui podemos ver una de las 
    cualidades más importantes del array es que el listado es ordenado, en el momento que metemos un elemento o una posicion
    ese elemento se nos asigna. O tambien podemos mover ese elemento otra posición.
    Podemos ver que si comentamos un dato vemos que la pocisión 0 queda vacia o reservada
*/
myArray = []
//myArray[0] = "Jeferson"    // <1 empty item> Se va reservando
myArray[1] = "Sebastian"
myArray[2] = "Hernandez"

console.log(myArray)
/*  
    Lo que ha hecho aquí es que a ido reservando y modificando su tamaño y sus huecos a medida que lo vamos ejecutando,
    lo cual es lo realiza solo
*/

// Métodos comunes: Push y Pop
console.log("____________________________Métodos comunes____________________________________")
myArray = []

// Push: El push es el metodo para agregar elementos en el array 
console.log("____________________________Push____________________________________")
myArray.push("Jeferson")
myArray.push("Sebastian")
myArray.push("Arely")
myArray.push("Edgar")
myArray.push("Familia Feliz")
myArray.push(1992)

console.log(myArray)
/* 
    Podemos ver que sigue un orden el primer push que se ejecute si el array es vacio lo mete en el 0 y asi 
    sucesivamente el segundo elemento lo mete en el indice 1, el tercero en el indice 2, etc ... 
*/

// Pop: El pop elimina el ultimo elemento del array
console.log("____________________________Pop____________________________________")
console.log(myArray.pop())     // Elimina el último y lo devuelve 
myArray.pop()

console.log(myArray)
/* 
    Podemos ver que pop elimina el ultimo elemento de la lista 
    El push agrega elementos al final del array y el pop elimina el ultimo elemento del array 
*/

// shift y Unshift: 
// Schift: El shift elimina el primer elemento del array 
console.log("____________________________Shift____________________________________")
myArray.shift()      // Elimina "Jeferson"

console.log(myArray.shift())   // Elimina el primer elemento del array y lo devulve ("Sebastian")
console.log(myArray)

// Unshift: El unshift sirve para agregar uno a mas elmentos al principio del array 
console.log("____________________________Unshift____________________________________")
myArray.unshift("Pepito", "Pepita")
console.log(myArray)

// length: Length es una propiedad y no una funcion, es la longitud o tamaño de nuestro array
console.log("____________________________Length____________________________________")
console.log(myArray.length)

// clear
console.log("____________________________Clear____________________________________")
myArray = []
myArray.length = 0       // Ptra alternativa No recomendada
console.log(myArray)

// slice: Slice devuelve una copia superficial de una porción, nos genera un nuevo array pero justo con el pedazo que queremos, tiene un inicio y un fin
console.log("____________________________Slice____________________________________")
myArray = ["Jeferson", "Sebastian", "Hernandez", "Ladino", 37, true]

let myNewArray = myArray.slice(2, 4)    // Para quedarnos con los elementos "Hernandez", "Ladino", el segundo valor no se cuenta asi que ponemos 2, 4

console.log(myArray)
console.log(myNewArray)       
/*  
    Podemos ver que para quedarme con los elementos  "Hernandez", "Ladino" unicamente, ponemos el pedazo unicamente
    en este caso 2, 4 . Donde el 4 No se tiene en cuenta.
    Es como decir: “Córtame desde la posición 2 hasta la 4, pero no me des la 4”. El FIN es “hasta aquí, pero NO me lo metas en el resultado”.
    Slice: sirve para copiar una parte del array y devolver un nuevo array, sin modificar el original.
*/

// splice: Splice elimina los elementos, desde el indice que queremos empezar a eliminar y cuantos elementos queremos eliminar.
console.log("____________________________Splice____________________________________")
console.log(myArray)
myArray.splice(2, 3)

console.log(myArray)
/*  
    myArray.splice(2, 3), el primer valor 2 es desde que elemento queremos eliminar osea que desde "Hernandez",
    y el segundo valor 3 es cuantos elementos queremos eliminar, osea que eliminamos tres elementos
    "Hernandez", "Ladino", 37. Quedando en nuestro array final [ 'Jeferson', 'Sebastian', true ]      2:44
*/  

myArray = ["Jeferson", "Sebastian", "Hernandez", "Ladino", 37, true]

myArray.splice(1, 2, "Nuevo elemento")

console.log(myArray)
/*  
    En esto ejemplo podemos ver que el primer valor 1 es desde dpnde queremos eliminar, el segundo valor 2 es cuantos
    elementos queremos eliminar ("Sebastian", "Hernandez") y el tercer 3 elemento es que a la vez que eliminamos y
    asignamos un nuevo valor partir de la pocision 1.
    Este es un pequeño ejemplo de como podemos manipular arrays 
    
    splice() es un método de los arrays que sirve para: Agregar elementos, Reemplazar elementos, Eliminar elementos (CRUD).
*/ 
/*  
    Ya vimos la primera estructura de datos javaScript, pero nos falta por ver mas estructuras de datos a 
    continuación
*/ 



