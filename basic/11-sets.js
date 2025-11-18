// set: Los sets tambien son estrcuturas de datos.

// Declaración de set
console.log("____________________________Declaración de set____________________________________")
let mySet = new Set()
//let mySet2 = {}        // Tener muy en ceunta que esto no es Set, esto es otro de dato. No es la forma de definir un set vacio.

console.log(mySet)
//console.log(mySet2)

// Inicialización de set
console.log("____________________________Inicialización de set____________________________________")
 mySet = new Set(["Jeferson", "Sebastian", "Hernandez", "Ladino", 37, true])   // Muy importante que todos los elementos deben ir en corchetes

 console.log(mySet)
 /*
    Muy importante aprender y entender cual es la sintaxis de declaración y cual es la sintaxis de incialización ya con 
    datos
 */

// Metodos comunes
console.log("____________________________Métodos comunes____________________________________")
// add y delete
// add: Espara agregar un dato al final de nuestro set
console.log("____________________________add____________________________________")
mySet.add("jefer.hernandez1@gmail.com")   

console.log(mySet)
 /*
    En el set en javascript se mantienen la ordenación de los elementos, por eso el add
    lo añade al final
 */

// delete: Es para eliminar un elemento de nuestra lista
console.log("____________________________delete____________________________________")
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
console.log(mySet.delete("Jeferson"))   // Antes nos retorna un true
console.log(mySet.delete(4))            // Antes nos retorna un false
console.log(mySet)  // min 2:53

 /*
    Podemos ver que lo que hace antes la operación delete es devolverbos un true.
    Aqui podemos ver que nos retorna un true, esto es por que la operación delete aparte de borrar nos retorna un boolean
    Lo podemos ver cuando acercamos el cursor en el delete la especificación, de que recibbe el valor que queramos
    borrar y retorna despues de los dos puntos un boolean, donde retorna un true si el elemento del set existe y ha sido
    eliminado o un false si el elemento no existe  
 */
 /*
    Muy importante que con este delete podemos montar un if y se borra o no se borra podemos acabar designando
    la ejecucion de otro codigo u otro codigo ejemplo:

    if (myset.delete(4)) {       // Aqui podemos montar una validación en función de lo que retorne. Si una expresion es verdadera o falsa.
    
    } else {
     
    }
 */
/*
   Anteriormente para agregar y eliminar un dato de nuestro array era con push y pop. 
   Aqui podemos ver que con set para agregar y eliminar un dato es con add y delete,
   funciona igual aunque cambia la sintaxis.    
*/

// has: Es para ver si existe un elemento 
console.log("____________________________has____________________________________")
console.log(mySet.has("Sebastian"))    // Nos retorna un true, por que dentro del set existe "Sebastian"
console.log(mySet.has("Jeferson"))     // Nos retorna un false, por que "Jeferson no existe" por que lo borramos anteriormente

// size: Para medir la longitud o tamaño de nuestro set 
console.log("____________________________size____________________________________")
console.log(mySet.size)

// Convertir un set a array 
console.log("____________________________Convertir set a array____________________________________")
let myArray = Array.from(mySet)    // Transformamos un set a un array 
console.log(myArray)

// Convertir un array a set
console.log("____________________________Convertir array a set____________________________________")
mySet = new Set(myArray)      // Convertimos array a set
console.log(mySet)

// Diferencia entre array y set
console.log("____________________________Diferencia entre Array y Set____________________________________")
mySet.add("Sebastian")
mySet.add("Sebastian")
mySet.add("Sebastian")
mySet.add("sebastian")     // Podemos ver que lo que tiene que entrar debe ser exactamente igual.
console.log(mySet)
/* 
   La principal diferencia entre los arrays y los sets, es que los sets no admiten duplicados.
   El set se usa para que nosotros nos quedemos con todos los elementos unicos, en lugar del array 
   que lo usamos para cambiar lo transformas lo elemento dentro del array. En el set por eso no nos importan 
   las pocisiones.
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