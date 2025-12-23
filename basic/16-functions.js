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
const myFunc2 = function (name) {
    console.log(`¡Hola, ${name}!`);
}

myFunc2("Jeferson Hernandez");
/* 
  Las funciones anonimas son funciones que no tienen un nombre definivo. 
  Quiere decir que creamos una funcion donde le pasamos el nombre o parámetro que queramos y simplemente
  meterle la ejecución.
  Pero lo que pasa con las funciones anonimas es que la tenemos que asignar a una variable o a una 
  constante, por que si no, no tendriamos ninguna manera de invocarla o llamarla.
  En este caso lo que tiene nombre es la variable constante, la function es un nombre generico, lo que podemos
  invocar la variable.
  Lo que le damos es la capcidad de almacernarla en una variable constante, para esto se usa las funciones anonimas.

  Ejemplos de funciones que usamos en nuestra dia a dia:
    - console.log(): log es una funcion deconsola y se le pide la cadena de texto.
    - En los maps: El has, el get, el keys, el values, etc. son funciones asignadas a mapas. En este ejemplo 
      son funciones que nos devuelve cuales son los valores. Osea que los propios datos de JS tambien tienen
      funciones asignadas. 
*/

// Arrow Functions: Traduce funciones flecha, es una manera mas reducida de escribir funciones. Es para simplificar.
console.log("____________________________Funciones flecha o Arrow Functions____________________________________")
console.log("******Arrow Functions******")
const myFunct3 = (name) => {
  console.log(`¡Hola, ${name}!`);
}

myFunct3("Sebastian Hernandez");
/* 
  Se quita la function dejando solamente el parametro y se pone => que es funcion flecha y finalmente se 
  define el bloque de código con corchetes y dentro nuestra lógica. 
  En las arrow functions tenemos el mismo problema que las funciones anónimas, le tenemos que asignarlas a una
  variable constante para poderlas invocar.
  La función anonima la podemos sustituir or la funcion flecha, por que es una sintaxis simplificada.
  Se suele usar los arrow functions cuando lo queremos usar en una sola línea.
*/

console.log("******Arrow Functions en una Sola Línea******")
const myFunct4 = (name) => console.log(`¡Hola, ${name}!`);

myFunct4("Sebastian Hernandez Ladino");
/* 
  Se suele usar los arrow functions cuando lo queremos usar en una sola línea, de esta menera tiene
  mucho más sentido.
  Simplemente se elimina el bloque de llaves y ponemos nuestra lógica.
*/

// Sección de Parámetros: 
console.log("____________________________Seccion de Parámetros____________________________________")
console.log("******Parámetros******")
function sum(a, b) {
  console.log(a + b);
}

sum(5, 10);
sum(5);
sum();
/* 
  Para meter mas de un parametro los concatenamos con comas.
  Realizamos una funcion suma que le llamamos para pasarle dos numeros para sumar.
  Si llamamos a la funcion sum solo con un 5 o solo un arametro nos va aarecer NaN, por que intenta sumar un 5
  con nada 
  Si llamamos la funcion sum sin un parametro tambien nos va aparecer NaN.
*/

console.log("******Parámetros por Defecto******")
function defaultSum(a = 0, b = 0) {
  console.log(a + b);
}

defaultSum();
defaultSum(5);       // 5 + 0 = 5
defaultSum(5, 10);   
defaultSum(b = 5);   
/* 
  - Si no queremos pasarle nada le decimos que valga por defecto 0, a = 0, b = 0, lo cual si llamamos a defaultSum
  nos tiene que parecer NaN.
  - Si le pasamos uno solo seria 5 + 0 = 5 
  - Si le pasamos los datos 5, 10 ya nos aparece normalmente, reemplazando los datos por defecto.
  - Si le pasamos b = 5 nos da 5 por que simplente le estamoos diciendo que cubra b con 5. 
*/

// Retorno de Valores: 
console.log("____________________________Retorno de Valores____________________________________")


// Comentario quede en : 03:45: min Funciones -- ..

