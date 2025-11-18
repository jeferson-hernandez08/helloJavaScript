/*  Maps: 
    Los Maps son tambien estructuras de datos que nos permiten almacenar en ellas un conjunto de datos, donde nos 
    permiten almacenar un conjunto de datos ya No solo uno.
    Los maps tienen diferencias frente a los arrays y los sets, donde cada una las tenemos que aprender a manejar
    en un caso diferente.
    Un map (Tambien llamado diccionario en otros lenguajes) es una coleccion de elementos y cada elemento ya No 
    es unico como el array que va un elemento tras elemento. Aqui cada elemento esta formado por un par de dos 
    elementos que el primero esta compuesto por una clave que llama key y el segundo por un valor. 
    A diferencia a otras estructuras vamos a tener claves de cualquier tipo y vamos a tener valores de cualquier
    tipo, donde podemos almacenar como clave y como valor cualquier tipo de dato. 
    Aqwui nos va a valer un mapa para poder relacionar estos dos datos una clave y un valor. Una clave que nos permite
    buscar dentro de esta estructura y un valor que veremos que esta asociado a esa clave.  
*/

// Declaración
console.log("____________________________Declaración de Map____________________________________")
let myMap = new Map()
console.log(myMap)

// Inicialización o asignación 
console.log("____________________________Inicialización o Asignación del Map____________________________________")
myMap = new Map([                                  // Lo inicializamos con los corchetes adicionalmente
    ["name", "Jeferson"],                          // Para definir el par de clave y valor tambien es corchetes, en este caso la clave es "name" y el valor es "Jeferson"
    ["email", "jefer.hernandez1@gmail.com"],       // Para añadir otro elemento lo separamos con coma.
    ["age", 29]                                  // Estamos mezclando otro tipo de datos
])
console.log(myMap)  
/* 
    Recordemos que la diferencia de los mapas frente a los sets y a los arrays es que lo que cada elemento se
    compone de una clave por un lado y de un valor por otro lado.

*/

// Metodos y propiedades: Recordemos que con los metodos y propiedades aprenderemos a manipular los map
console.log("____________________________Métodos y propiedades____________________________________")

// Set: La operación set es para actualizar un elemento o para agregarlo
console.log("____________________________Set____________________________________")
myMap.set("alias", "kuki")                  // Podemos acercar el cursor y ver que el set necesita una clave(Key) y un valor(any)
myMap.set("name", "Jeferson Hernandez")     // Modificamos el name el valor, donde podemos ver la clave se ha actualizado
console.log(myMap)                          // Nos aparece un cuarto elemento
/*
    Muy importante donde podemnos ver que no hay sets repetidos, no pueden haber sets repetidos en clave pero
    en valor si pueden haber valores repetidos, por que la clave como su nombre lo indica es la llave de 
    busqueda donde es el elemento por el que vamos a encontrar unos valores por lo cual si la clave no existe
    añade un nuevo valor y si la cave existe lo actualiza tener esto en ceunta que es muy importante.
    Con los sets es la forma de actualizar o añadir valores
*/

// get: El get nos sirve para recuperar el valor
console.log("____________________________Get____________________________________")
console.log(myMap.get("name"))           // Nos imprime Jeferson Hernandez
console.log(myMap.get("surname"))        // Nos improme undefined: Por que no existe la clave "surname"

// has: El has nos sirve es para comprobar si una clave existe o no
console.log("____________________________Has____________________________________")
console.log(myMap.has("surname"))        // Nos imprime false por que la clave no existe
console.log(myMap.has("age"))            // Nos imprime true por que la clave si existe
/*
    Aquí tenemos una operacion para saber si una clave existe o no existe, 
    es una manera muy manejable de nosotros comprobar si una clave existe, donde con este boolean
    tambien podemos realizarle un condicional if a este has para saber si es true o false y nos realize un 
    bloque de código.
*/

// delete: Para eliminar un elemento con su clave del map
console.log("____________________________Delete____________________________________")
myMap.delete("email")             // Nos elimina email del map
console.log(myMap) 

// Keys: Nos permite ver todas las claves
console.log("____________________________Keys____________________________________")
console.log(myMap.keys())

// Values: Ver los valores del map
console.log("____________________________Values____________________________________")
console.log(myMap.values())

// Entries: Nos permite ver todos los valores de las claves y valores
console.log("____________________________Entries____________________________________")
console.log(myMap.entries())

// Size: Nos dice mediante un numero cual es el tamaño del mapa
console.log("____________________________Size____________________________________")
console.log(myMap.size)

// clear: Para eliminar todo el mapa
console.log("____________________________Clear____________________________________")
myMap.clear()
console.log(myMap) 
/*
    Podemos ver que estqas son funciones u operaciones que nos permiten manipular el map, pero tambien hay muchas 
    propiedades lo cual lo recomendable es:
    Nos vamos a variable:
    mymap. y podemos ver todas las funciones que podemos usar. 
*/

/*
    Hay que tener en cuenta que debemos diferenciarlos los arrays, los sets y los maps, lo cual tiene 
    diferencias, donde nosotros debemos detectar por que en unos casos se debe se usar un array o set o map,
    donde por ejemplo en nuestra app necesitamos guardar los datos de un usuario y nos eonviene mejor usar el 
    map. 
*/

/*
    Estas son las tres tres estucturas que posee JavaScript: Array, Set y Map.
    Debemos aprender las caracteriscas de cada una para poder saber cuando se aplican cada una. 
    Por ejemplo:
    1. Yo debo guardar un listado de frutas en este xaso un array.
    2. Yo debo guardar los datos de un usuario, pero saber en cada caso cuando acceder a cada uno de los datos, 
       para modificarlos, utilizarlos, tratarlos, en este caso un Map. 
    3. Yo debo guardar un liostado de elementos pero debo asegurarme que no este repetidos, entonces debemos usar
       un set.

    Logica de cada una de las definiciones.
*/







// Comentario quede en : 03:09 min // Study // ....
