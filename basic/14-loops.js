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
console.log("******While******")
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

// Do While:
console.log("____________________________Do While____________________________________")
let age = 19;


// Comentario quede en : 03:24:44 min Bucles

