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
console.log(myMap)        // 3:02 min
