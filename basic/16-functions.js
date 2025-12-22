/*  Funciones:
    Una función es un bloque de código diseñado para realizar una tarea especifica, lo cual las funciones
    las tenemos que llamar, las tenemos que invocar. Con las funciones vamos a poder a realizar algo
    muy importante en programacion que es escribir un buen código, escribir código limpio. 
    Una de las cosas fundamentales para escribir buen código es crear buen código que sea capaz de reutilizar, 
    que sea capaz de modularizar, que seamos capaces de leer de una forma más simple, incluso de acabar 
    manejando un programa en partes más simples.

    Una función es un bloque de código reutilizable que realiza una tarea específica y que se ejecuta 
    solo cuando la llamas. En pocas palabras: una función es una acción con nombre.
    ¿Para qué se usa una función?
        Las funciones se usan para:
        Evitar repetir código
        Organizar mejor el programa
        Reutilizar lógica
        Hacer el código más claro y mantenible
        Separar responsabilidades

    ¿Para qué sirve una función?
        Ejecutar una tarea cuando se necesite
        Recibir datos (parámetros)
        Procesar información
        Devolver un resultado
*/

// Funciones Simple:
console.log("____________________________Funciones Simple____________________________________")
console.log("******Funciones******")
function myFunc() {
    console.log("¡Hola, función!");
}

for (let i = 0; i < 5; i++) {
  myFunc();
}
/*  
    - Creamos la palabra function
    - Creamos el nombre de una function, es como las variables las creamos en camelCase,
      una function debe tener un nombre representativo un nombre que entandamos, como si fuera la creación 
      de una varibale 
    - Abrimos y cerramos parentesis, aqui es la inserción de parametros.
    - Abrimos y cerramos llaves, aquí dentro se le inserta al codigó de la tarea especifica, este seria 
      el bloque de código.

    Esta seria la función la funcion un bloque de código que realiza una tarea especifica, una función realiza
    una tarea especifica en este caso simplemente imprimir por consola. Lo que realmente hace especial una 
    función es que puede ser invocada. 
    Donde para imprimir esta funcion debe ser invocada  o llamada.
    - Tambien si queremos llamar a la funcion dentro de un for tambien los podemos hacer para imprimirlo 5 veces
    
*/

// Con Parámetros: Los parámetros son variables que una función recibe para poder trabajar con datos. Son como entradas de la función.
console.log("____________________________Funciones con Parámetros____________________________________")
function myFuncWithParams(name) {
    console.log(`¡Hola, ${name}!`);
}

myFuncWithParams("Jeferson");    // Pasamos el dato del parámetro nombre
myFuncWithParams("Sebastian");    // Pasamos el dato del parámetro nombre
/* 
  Los parámetros son variables, para pasar datos que la funcion recibe. Son como entradas de la función.
  Podemos poner y usar multiples o muchos parametros.
*/

// Funciones Anónimas: Las funciones anonimas son funciones que no tienen un nombre definivo.
console.log("____________________________Funciones con Anónimas____________________________________")

/* 
  Quiere decir que creamos una funcion donde le pasamos el nombre o parámetro que queramos y simplemente
  meterle la ejecución.
  Pero lo que pasa con las fucniones anonimas es que 
*/

// Comentario quede en : 03:39: min Funciones -- ..

