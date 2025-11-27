/*  Loops o bucles: 
    Son estructuras de control, que nos sirve para repetir un bloque de código mientras una 
    condición sea verdadera (De otra forma un while que incrementa), de otra froma es un forma indirecta
    de aplicar tambien condiciones.
    Son bucles son esenciales para realizar tareas repetitivas, para automatizar procesos y para manejar
    en muchos casos grades cantidades de datos y de una manera mas eficiente. Por eso los bucles se asocian 
    tambien a las estructuras de datos al array, al set o al map. Pero no siempre los blucles estan ligados 
    a ellos.
    En resumen un loop es una estructura de control que permite repetir un bloque de codigo.
    si por ejemplo queremos hacer varias veces algo con un loop es la manera mas eficiente que tenemos en 
    los lenguajes de programacion trabajar con esta repetición. 

    Un loop (o bucle) es una estructura de control que permite repetir un bloque de código varias veces 
    de manera automática.
    ¿Para qué se usa un loop?
        Se usa para automatizar tareas repetitivas, como:
        Recorrer elementos de un array.
        Ejecutar un proceso muchas veces.
        Buscar información dentro de una colección.
        Realizar cálculos repetitivos.
        Procesar datos uno por uno.

*/

// For: For lo que hace es ejecutarse con una condicion que se cada vez que realiza una iteración, si la condicion es true se va seguir ejecutando y si pasa a false del loop deja de ejecutarse. 
console.log("____________________________For____________________________________")
console.log("******For******")
/*  
    Vamos a saludar en cinco veces.
*/

for (let i = 0; i < 5; i++) {
    console.log(`Hola ${i}`);
}
/*  
    El primer valor es valor de inicializacion, el segundo es la condicion para que se ejecute o 
    condición de parada y el tercer valor es incremento.
        Prueba Escritorio:
        - Valida cero es menor a 5 ? , es como una especie de if que se evalua mientras la condicion sea verdadera
        - Si -> Se Ejecuta el codigo para imprimir.
        - Luego i pasa a incrementar, cero pasa a valer 1. Asi sucesivamente
        - Luego finalmente 5 es menor que 5 ? No, es igual y cierra el bucle. 
        Resutado: Se ejecuta el programa saludo 5 veces por que empieza desde el cero.
*/

console.log("******For Sobre Array******")
/*  
    Ahora vamos a realizar pensando con estructuras de datos que almacenan varios valores.
    Queremos recorrer este array, imprimir todos los elementos de este array.
*/

const numbers = [1, 2, 3, 4, 5, 6];
numbers[1] = 7;
console.log(numbers);
console.log(numbers[1]);
console.log(numbers.length);

for (let i = 0; i < numbers.length; i++) {
    console.log(`Elemento: ${numbers[i]}`);
}
/*  
    - Aqui recorrems tdos los elementos de nuestroo array.
    - Por ejemplo si damos i < 7 los dos ultims elements nos aparece undefined por que no estan definidos.
    - Creamos una condicion que lo que hace es limitar este blucle al propio tamaño de la lista se hace con 
      i < numbers.length; que es el tañaño del listado, donde queda de manera dinamica que ejecutamos un bucle
      desde el indice igual a cero hasta el tamaño del array, aquí ya interactuamos con un array o con una
      estructura de datos 
*/

// While: El while evalua antes de cada iteracion, si es true el bucle continua y si es false el bucle termina.
console.log("____________________________While____________________________________")
/*  
    Vamos a saludar en cinco veces.
*/

let i = 0;

while (i < 5) {
    console.log(`Hola ${i}`);
    i++;
}
/*  
   - El while valida antes de ejecutar el codigo.
   - En este caso hacemos lo mismo que el For pero en el for hacemos la condicion dentro del for y en el 
     while hacemos la condicion afuera y con la variable definida desde antes
   - Con For creamos un bucle que lo que hace es dar x vueltas y con el While podemos definir algo con anterioridad.
*/

// Bucle Infinito: while true
console.log("____________________________While True____________________________________")
// while(true)  {

// }
console.log("Se deja comentado por que es bucle infinito")
/*  
   Esto se ejecuta siempre hasta que se estalle el programa por falta de memoria
   en este caso se llama bucle infinito.
   Se deja comentado por que es bucle infinito, de lo contrqario no deja avanzar queda atrapado el codigo.
*/

// Do While: Es para ejecutar primero el código y despues evaluar, ejecuta y luego evalua
console.log("____________________________Do While____________________________________")
i = 6;

do {
    console.log(`Hola ${i}`);
    i++;
} while(i < 5);
/*  
   Funciona muy parecido al while, pero tiene que ejecutarse al menos una vez
   - En este caso de i = 6 primero no evaluamos nada, donde primero va ejecutar se cumpla o no se cumpla 
     la condición, esto es por que no evaluamos antes como en For o como en el While, en este caso ejecuta una vez 
     y despues sabemos que ya no cumole la condición y cierra el programa.
   - Do While es para los casos que necesitemos ejecutar un bloque de codigo y despues evaluar. 
*/

// For Of: For off es para recorrer valores de algo que sea iterable y algo que sea iterable es estructuras de datos o un tipo de dato.
console.log("____________________________For Off____________________________________")
myArray = [1, 2, 3, 4]
mySet = new Set(["Jeferson", "Sebastian", "Hernandez", "Ladino", 37, true])
myMap = new Map([                                  // Lo inicializamos con los corchetes adicionalmente
    ["name", "Jeferson"],                          // Para definir el par de clave y valor tambien es corchetes, en este caso la clave es "name" y el valor es "Jeferson"
    ["email", "jefer.hernandez1@gmail.com"],       // Para añadir otro elemento lo separamos con coma.
    ["age", 29]                                  // Estamos mezclando otro tipo de datos
])
let myString = "Hola JavaScript";

for (let valor of myArray) {
    console.log(valor)
}

for (let valor of mySet) {
    console.log(valor)
}

for (let valor of myMap) {
    console.log(valor)
}

for (let valor of myString) {
    console.log(valor)
}
/*  
   Primero necesitamos algo que sea iterable, estructuras de datos ya vimos estructuras de datos de array
   set y map, vamos a ver como recorrer cada una de ellas, como ejecutar un bloque de codigo por cada uno 
   de los elementos de nuestra estructura.

   - Primero creamos una variable en este caso valor y luego le pasamos el of de lo que queremos iterar
     en este caso myArray y podemos ver que se ejecuta el for por cada uno de los valores del array o 
     recorriendo el array y asi mismo recorremos las estructutras de datos con set y map.
   - En este caso con el for of lo que podemos hacer es recorrer los arrays para revisar todos los valores
     que tenemos en cada una de nuestras estructuras de datos aqui simplemente los imprimimos, pero si queremos
     realizar modificaciones, comprobaciones, de manera extensa para todos los valores ya lo hacemos con el For, 
     for of es una manera de recorrer los elemntos de un array o estructura de dato. 
   - Lo podemos hacer con mas tipos de datos, con una variable de tipo string sin ser una estructura de datos
     tambien el for of lo recorre, donde la cadena de texto de JS se comporta internamente como una estructura 
     que tiene un listado de caracteres por defecto nos permite iterarla.
   - Esto es una forma de recorrer arrays 
*/

// Buenas Prácticas:
console.log("____________________________Buenas Prácticas____________________________________")
console.log("Consejos de buenas prácticas");
/*  
   - Siempre que estemos creando bucles revisar que no provoquemos un bucle infinito siempre asegurarnos
     que la condicion acabe siendo false, tener muchoncuidado con esto por que hay aplicaciones en produccion 
     que revientan la aplicacion por no deja de ejecutarse. 
*/

// Break y continue : 
console.log("____________________________Break y Continue____________________________________")
for (let i = 0; i < 10; i++) {
    if (i == 5) {
        continue;
    } else if (i == 7) {
        break;
    }
    console.log(`Hola ${i}`);
}
/*  
   - Continue: En este ejemplo por ejemplo si el indice vale 5 no lo queremos tener en cuenta, es saltarnos esa iteracion, 
   le estamos indicando que continua pero en el siguiente ejecucion saltandonos el 5 
   - Break: En este caso cuando la iteracion llegue a 6 lo que hacemos es parar el bucle, por ejemplo si
   encontramos el valor que realmente nos importa. Break es romper parar, nor sirve para controlar el flujo de 
   los blucles. 
*/



// Comentario quede en : 03:30: min Bucles

