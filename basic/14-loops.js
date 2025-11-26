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

console.log("******For Array******")
/*  
    Ahora vamos a realizar pensando con estructuras de datos que almacenan varios valores.
    Queremos recorrer este array, imprimir todos los elementos de este array.
*/
const numbers = [1, 2, 3, 4, 5];

for (let i = 0; i < 5; i++) {
    console.log(`Elemento: ${numbers[i]}`);
}


// Comentario quede en : 03:20:50 min Bucles

