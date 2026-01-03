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

// Retorno de Valores: El retorno de valores es el resultado que una función devuelve después de ejecutar su lógica.
console.log("____________________________Retorno de Valores____________________________________")
function mult(a, b) {
  return a * b;
}

mult(5, 10);
//console.log(mult(5, 10));
let result = mult(5, 10);
console.log(result);       // El retorno es el resultado que una función devuelve
/* 
  Recordemos que una funcion tiene logica dentro de la funcion, pero si queremos realizar una operacion que nos
  retorne el resultado de la logica para despues utilizarla apra esto es el retono. 
  - Por jemplo en el defaultsum queremos no imprimir el resultado de la suma sino que me diga cuanto suma, para 
  esto tenemos el retorno. 
  - En esta funcion mult No queremos mostrarlo por terminal si no retonarle el resultado al usuario, para esto hacemos el 
  return, lo que pasemos despues del return es lo que va devolver a la persona que acabe llamando a la funcion mult.
  - Lamamos a mult le pasamos los valores del 5, 10 podemos ver que no nos imprime, debemos hacerle un cosole.log  
  Podemos ver devuelve el resultado de 5 * 10 y despues decimos imprimirlo en un console.log. 
  - En este caso llamamos a mult, mult retorna el resultado de multiplicar 5 * 10 lo que lo guardamos en una variable
  que se llama result y result es lo que imprimimos en un console.log 

  ¿Para qué sirve el return?

    Sirve para:

    Obtener un resultado
    Guardar ese resultado en una variable
    Usarlo en otra función
    Tomar decisiones (if)
    Reutilizar lógica

    Analogía sencilla:

      Piensa en una función como una calculadora:
      Le das números (parámetros)
      Hace el cálculo
      Te devuelve el resultado (return)
*/

// Funciones anidadas: Una función anidada es una función definida dentro de otra función.
console.log("____________________________Funciones Anidadas____________________________________")
console.log("******Funciones Anidadas******")
function extern() {
  console.log("Función externa");
  function intern() {
    console.log("Función interna");
  }
  intern();
}

extern();
//intern();  Fuera del scope
//extern().intern();
/* 
  Vemos que nos imprime función externa y pero No función interna, esto es por que funcion interna esta dentro
  de la función externa lo que tenermos que llamarma o invocarla. 
  Pero si llamamos la función interna sale error, esto es debido por el scope el scope es el rango de actuacion,
  el scope es lo que está marcado por las llaves. Conocemos funcion externa por que estamos llamando una funcion
  normalmente, pero cuando llamamos funcion interna no lo conoce por que es llamado dentro de interna o es llamado
  fuera del scope.
  Donde dentro de extern podemos llamar intern y si funciona. 
  Si tratamos de llamar a intern por fuera no nos funciona extern().intern(); podemos darnos cuenta como funcina el scope
  Extern y intern pueden recibir parámetros, puede retornar. 

  Conclusión:
    - interna() vive dentro de externa()
    - No puede usarse fuera de externa()

  ¿Para qué se usan las funciones anidadas?

    Se usan para:

     Encapsular lógica
     Proteger funciones internas
     Organizar mejor el código
     Trabajar con closures
     Evitar contaminar el scope global
  
  ¿Qué es el scope?

    El scope es el alcance o zona donde una variable o función existe y puede usarse.
    Dónde una variable “vive” y puede ser usada.
  
*/

console.log("******Funciones Anidadas + Scope******")
function externa() {
  let nombre = "Jeferson";

  function interna() {
    console.log(nombre);
  }

  interna();
}

externa();
/*
  - Por qué pasa esto?

    Porque JavaScript busca las variables:

    1️⃣ Primero dentro de la función
    2️⃣ Luego en la función externa
    3️⃣ Luego en el scope global

    Esto se llama scope chain.

  - Ejemplo mental (regla de oro)

   Una función hija sí ve a su padre
   Una función padre NO ve a su hija

   - ¿Para qué sirve todo esto en la vida real?

    Validaciones internas
    Funciones helper privadas
    Closures
    Librerías
    Frameworks (React, Node, etc.)
*/


// Scope: El scope es el alcance o zona donde una variable o función existe y puede usarse.
console.log("____________________________Scope____________________________________")
console.log("******Scope Global******")
let nombre = "Jeferson";

function saludar1() {
  console.log(nombre);
}

saludar1();
/*
  Variables declaradas fuera de funciones.
  Se puede usar en cualquier parte
*/

console.log("******Scope Local o de Función******")
function saludar2() {
  let mensaje = "Hola";
  console.log(mensaje);
}

saludar2();
//console.log(mensaje); // ERROR
/*
  Variables declaradas dentro de una función.
  mensaje solo existe dentro de la función.
*/

console.log("******Scope de Bloque (let y conts)******")
if (true) {
  let edad = 25;
  console.log(edad);
}

//console.log(edad); // ❌ERROR
/*
  edad solo existe dentro del bloque {}.
*/








// Comentario quede en : 03:49: min Funciones -- ..  ..

