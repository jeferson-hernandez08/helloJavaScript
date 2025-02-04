// set

console.log("____________________________Declaración de set____________________________________")
// Declaración de set
let mySet = new Set()
//let mySet2 = {}        // Tener muy en ceunta que esto no es Set, esto es otro de dato. No es la forma de definir un set vacio.

console.log(mySet)
//console.log(mySet2)

console.log("____________________________Inicialización de set____________________________________")
// Inicialización de set
 mySet = new Set(["Jeferson", "Sebastian", "Hernandez", "Ladino", 37, true])   // Muy importante que todos los elementos deben ir en corchetes

 console.log(mySet)
 /*
    Muy importante aprender y entender cual es la sintaxis de declaración y cual es la sintaxis de incialización ya con 
    datos
 */

console.log("____________________________Métodos comunes____________________________________")
// Metodos comunes
// add y delete
console.log("____________________________add____________________________________")
// add: Espara agregar un dato al final de nuestro set
mySet.add("jefer.hernandez1@gmail.com")   

console.log(mySet)
 /*
    En el set en javascript se mantienen la ordenación de los elementos, por eso el add
    lo añade al final
 */

console.log("____________________________delete____________________________________")
// delete: Es para eliminar un elemento de nuestra lista
mySet.delete("jefer.hernandez1@gmail.com")  
console.log(mySet)
//console.log(mySet[4])     // No nos va dejar 
 /*
    Lo que debemos de hacer en el delete es cual es el elemento que queremos eliminar o borrar
    Podemos que de esta forma mySet.delete(6) no se elimina nuestro ultimo elemento de la lista por que 
    el set no se referencia con los indices si no con los datos que están dentro del la lista
    Lo cual con el set no tenemos acceso a los indices.
    Lo cual si le decimos que nos muestre uno solo elemento de la lista no nos va dejar: console.log(mySet[4])
 */

 /*
    Anteriormente para agregar y eliminar un dato de nuestro array era con push y pop. 
    Aqui podemos ver que con set para agregar y eliminar un dato es con add y delete,
    funciona igual aunque cambia la sintaxis.
 */




















/*  
    Definición Y Diferencia Entre Declaración y Asignacón de Variables:

    Declaración:
    Es cuando defines una variable, indicando su nombre y tipo (en lenguajes como JavaScript, el tipo es dinámico, 
    por lo que no se especifica explícitamente). Sin embargo, la variable no tiene un valor asignado todavía. 
    Ejemplo:
    let nombre; // Declaración de la variable "nombre"
    Aquí, nombre está declarada, pero su valor es undefined porque no se le ha asignado ningún valor.

    Incialización:
    Es cuando asignas un valor inicial a una variable que ya ha sido declarada. Puede hacerse al mismo tiempo que 
    la declaración o después.
    Ejemplo:
    let nombre = "Juan"; // Declaración e inicialización de la variable "nombre"
    Aquí, nombre está declarada e inicializada con el valor "Juan".

    Diferencia Clave:
    Declaración: Solo defines la variable.
    Inicialización: Le das un valor inicial.

    Ejemplo Completo:
    // Declaración
    let edad;

    // Inicialización
    edad = 25;

    // Declaración e inicialización en una línea
    let pais = "México";

    console.log(edad); // 25
    console.log(pais); // "México"

    En resumen:
    let edad; es una declaración.
    edad = 25; es una inicialización.
    let pais = "México"; es una declaración e inicialización en un solo paso.

    Ejemplo Completo en dart:
    void main() {
    // Declaración
    int edad;

    // Inicialización
    edad = 25;

    // Declaración e inicialización en una línea
    String pais = "México";

    print(edad); // 25
    print(pais); // "México"
    }

    En resumen:
    int edad; es una declaración.
    edad = 25; es una inicialización.
    String pais = "México"; es una declaración e inicialización en un solo paso.
*/

/*
    Debilmente tipado y tipado dinamico: 
    Tipado dinámico
    Se refiere a cuándo se verifica el tipo de una variable:
    En un lenguaje con tipado dinámico, los tipos se verifican en tiempo de ejecución (en lugar de en tiempo de 
    compilación).
    Esto significa que no es necesario declarar el tipo de una variable explícitamente, y el tipo puede cambiar 
    durante la ejecución del programa.

    Ejemplo en JavaScript:
    let valor = 10; // Ahora es un número
    valor = "Hola"; // Ahora es un string (el tipo cambió dinámicamente)

    Débilmente tipado
    Se refiere a cómo se manejan los tipos en las operaciones:
    En un lenguaje débilmente tipado, hay una gran flexibilidad en la conversión automática entre tipos. 
    El lenguaje puede realizar conversiones implícitas entre tipos, incluso si no tienen mucho sentido lógico.
    Esto puede llevar a comportamientos inesperados si no se tiene cuidado.

    Ejemplo en JavaScript:
    let resultado = "5" + 2; // "52" (concatena en lugar de sumar)
    let otroResultado = "5" - 2; // 3 (convierte el string a número)

    Tipado dinámico: Los tipos se verifican en tiempo de ejecución, y el tipo de una variable puede cambiar.
    Débilmente tipado: El lenguaje realiza conversiones implícitas entre tipos, incluso si no son compatibles.
    No son lo mismo, pero un lenguaje puede ser ambas cosas (como JavaScript).

    Relación entre ambos conceptos:
    - Un lenguaje puede ser dinámicamente tipado y débilmente tipado al mismo tiempo (como JavaScript).
    - Sin embargo, también hay lenguajes que son dinámicamente tipados pero fuertemente tipados, como Python. 
    En Python, los tipos se verifican en tiempo de ejecución (tipado dinámico), pero no se permiten conversiones 
    implícitas entre tipos incompatibles (fuertemente tipado).
*/ 