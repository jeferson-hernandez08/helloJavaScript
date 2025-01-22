/* Operadores: Los operadores se usan para realizar operaciones con los valores de las variables.
   Se clasifican en diferentes categorias segun la funcionabilidad. 
*/

// Operadores Aritméticos: Son los operadores que ya conocemos, suma, resta, multiplicaion y division. 
let a = 5
let b = 10 

console.log(5 + 10)   
console.log(a + b)    // Suma
console.log(a - b)    // Resta
console.log(a * b)    // Multiplicación
console.log(a / b)    // División

console.log(a % b)    // Módulo
console.log(a ** b)   // Exponente

a++   // Incremento
console.log(a)

b--   // Decremento
console.log(b)

// Operadores de asignación: Es cuando aisgnamos algun valor a una variable 
let myVariable = 2
console.log(myVariable)

myVariable = myVariable + 2
myVariable += 2              // Podemos ver que es lo mismo que myVariable = myVariable + 2, += 2 es la manera profesional y rapida.
console.log(myVariable)

/*  Nosotros podemos usar estos operadores de asignacion para hacer la resta, multiplicación, division,
   Modulo y exponente. Son variaciones sobre las diferentes operaciones aritmeticas.
*/

myVariable -= 2  
myVariable *= 2  
myVariable /= 2  
myVariable %= 2  
myVariable **= 2  

// Operadores de comparación: Como el nombre lo indica para comparar valores.  
/*  En la leccion anterior vimos los tipo de dato booleano, donde este tipo de dato nos sirve para saver si algo 
   es verdadero o falso. 
   Los operadores de comparacion nos van a servir para comparar variables, para comparar propiedades y el resultado de esa 
   comparación nos va a dar un boolean si es verdadero o falso (SI o NO)
*/
console.log(a)

console.log(a > b)      // False 
console.log(a < b)
console.log(a >= b)
console.log(a <= b)
console.log(a == b)
console.log(a == 6)     // Igualdad por valor 
console.log(a == "6")   // Igualdad por valor. En este caso JS es sufiiente listo para que un numero y una cadena de texto como tiene un mismo valor que el seis lo da como true.
console.log(a == a)
console.log(a === a)    // Igualdad por identidad (Por valor y tipo) | Valor
console.log(a === 6)    // Tipo  
console.log(a === "6")  // Tenemos false, por que a es de tipo Number y b es de tipo String | Concluimos que el === hace una validacion mas exacta
/*  Aqui podemos diferenciar en estos operadores de igualdad que hay ciertas diferencias que debemos tener en cunata cuando 
   solo queremos comparar el valor o cuando queremos comparar el valor y el tipo.
   Cuando queremos comparar el valor y el tipo, donde no queremos que nos tome el mismo dato uun numero con cadena de texto.
   Recordemos estos dos consetos "Igualdad por valor e Igualdad por identidad".
*/
console.log(a != 6)      // Desigualdad o diferente | a es diferente de 6 = false
console.log(a !== "6")   // a es diferente de 6 a nivel de indentidad = true | Recordando que se valida el tipo de dato.
console.log(0 == false)  // Recordemos que en programacion  0 en false 
console.log(1 == false)  // Y 1 es true, JavaScript reconoce esto perfectamente. 
console.log(2 == false)
// Vamos a realizar otras comparaciones
console.log(0 == "")
console.log(0 == " ")
console.log(0 == '')
console.log(0 == "Hola")
console.log(0 === "")
console.log(undefined == null)   // Nos indica la ausencia de valor = True
console.log(undefined === null)  

// Truthy values (valores verdaderos): Valores verdaderos por que que el lenguaje JS le da la gana.
/*  1. Todos los numeros positivos y negativos menos el cero.
    2. Todas las cadenas de texto menos las vacías.
    3. El boolean true 
*/

// Falsy Values (valores falsos): Valores falsos por que el lenguaje JS le da la gana. 
/*  1. 0
    2. 0n
    3. Null
    4. undefined
    5. NaN
    6. El bboolean false 
    7. Cadenas de texto vacias
*/

// Operadores Lógicos: 1:39











