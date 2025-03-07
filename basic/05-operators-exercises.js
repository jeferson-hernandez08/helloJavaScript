
// 1. Crea una variable para cada operación aritmetica.
console.log("___________________________Respuesta Pregunta 1_____________________________________")
console.log("******Primera Forma******")
let a = 3
let b = 2

console.log(a + b)    // Suma
console.log(a - b)    // Resta
console.log(a * b)    // Multiplicación
console.log(a / b)    // División
console.log(a % b)    // Modulo
console.log(a ** b)   // Exponente
a++                   // Incremento
console.log(a)
b--                   // Decremento
console.log(b)

console.log("******Segunda Forma******")
// Suma
let suma = 5 + 3  // 5 + 3 = 8

// Resta
let resta = 10 - 4  // 10 - 4 = 6

// Multiplicación
let multiplicacion = 7 * 2  // 7 * 2 = 14

// División
let division = 20 / 4  // 20 / 4 = 5

// Módulo
let modulo = 10 % 3  // 10 % 3 = 1 (residuo de la división 10 entre 3)

// Exponente
let exponente = 3 ** 2  // 3 ** 2 = 9 

//Incremento
let incremento = 2
incremento++

// Decremento
let decremento = 2
decremento--

console.log("Suma:", suma)
console.log("Resta:", resta)
console.log("Multiplicación:", multiplicacion)
console.log("División:", division)
console.log("Módulo:", modulo)
console.log("Exponente:", exponente)
console.log("Incremento:", incremento)
console.log("Decremento:", decremento)

console.log("******Tercera Forma******")
let c = 5
let d = 2

sum   = c + d
res   = c - d
mult  = c * d
divi  = c / d
mod   = c % d
expo  = c ** d
c++
d--

console.log("Suma:", sum)
console.log("Resta:", res)
console.log("Multiplicación:", mult)
console.log("División", divi)
console.log("Modulo:", mod)
console.log("Exponente:", expo)
console.log("Incremento:", c)
console.log("Decremento:", d)

// 2. Crea una variable para cada tipo de operación de asignación, que haga uso de las variables utilizadas para 
//    las operaciones aritmeticas. 
console.log("___________________________Respuesta Pregunta 2_____________________________________")
console.log("******Primera Forma******")
// Asignacion simple
let variable = 2

// Asignacion suma
let variableSuma = 2

//Asignacion resta
let variableResta = 2

// Asignacion multiplicación
let variableMultiplic = 2

// Asignación división
let variableDivision = 2

// Asignación Modulo
let variableModulo = 2

//Asignación Exponente
let variableExponente = 2

variableSuma      += 2
variableResta     -= 2
variableMultiplic *= 2
variableDivision  /= 2
variableModulo    %= 2
variableExponente **= 2

console.log("Asignación Simple:", variable)
console.log("Asignación Suma:", variableSuma)
console.log("Asignación Resta:", variableResta)
console.log("Asignación Multiplicación:", variableMultiplic)
console.log("Asignación División:", variableDivision)
console.log("Asignación Modulo:", variableModulo)
console.log("Asignación Exponente:", variableExponente)

console.log("******Segunda Forma******")
// Usamos de las variables utilizadas de las operaciones aritmeticas ejercicio 1, de la tercera forma. 
// Asignación Simple 
let variableSimple = sum    

// Asignación Suma
let variableSum = sum

// Asignación Resta
let variableRes = res

// Asignación Multiplicación
let variableMult = mult

// Asignación Dvisión
let variableDivi = divi

// Asignación Modulo
let variableMod = mod

// Asignación Exponente
let variableExpo = expo

variableSum  += 2
variableRes  -= 2
variableMult *= 2
variableDivi /= 2
variableMod  %= 2
variableExpo **= 2

console.log("Asignación Simple:", variableSimple)
console.log("Asignación Suma:", variableSum)
console.log("Asignación Resta:", variableRes)
console.log("Asignación Multiplicación:", variableMult)
console.log("Asignación División:", variableDivi)
console.log("Asignación Modulo:", variableMod)
console.log("Asignación Exponente:", variableExpo)

console.log("******Tercera Forma******")
// Usamos de las variables utilizadas de las operaciones aritmeticas ejercicio 1, de la segunda forma. 
// Asignación simple
let resultado = suma;  // Asigna el valor de la suma a resultado, // 5 + 3 = 8

// Asignación Suma
resultado += resta;  // resultado = resultado + resta, // 10 - 4 = 6

// Asignación Resta
resultado -= multiplicacion;  // resultado = resultado - multiplicacion, // // 7 * 2 = 14

// Asignación Multiplicación
resultado *= division;  // resultado = resultado * division, // 20 / 4 = 5

// Asignación División
resultado /= modulo;  // resultado = resultado / modulo, // 10 % 3 = 1

// Asignación Módulo
resultado %= exponente;  // resultado = resultado % exponente, // // 3 ** 2 = 9

// Asignación Exponente
resultado **= incremento;  // resultado = resultado ** incremento

console.log("Resultado final:", resultado);

// 3. Imprime 5 comparaciones verdaderas con diferentes operadores de comparación.
console.log("___________________________Respuesta Pregunta 3_____________________________________")
let num1 = 5 + 1
let num2 = 10 
let num3 = 10

console.log(num1 < num2)
console.log(num2 > num1)
console.log(num2 >= num3)
console.log(num2 == num3)
console.log(num1 == 6)

// 4. Imprime 5 comparaciones falsas con diferentes operadores de comparación.  
console.log("___________________________Respuesta Pregunta 4_____________________________________")
console.log(num1 > num2)
console.log(num2 < num1)
console.log(num2 <= num1)
console.log(num1 == num2)
console.log(num1 === "6")

// 5. Utiliza el operador lógico AND
console.log("___________________________Respuesta Pregunta 5_____________________________________")
console.log(5 > 3 && 2 < 3)
console.log(4 > 2 && 3 < 1)
console.log(2 > 1 && 7 > 5 && 20 > 10)
console.log(1 > 2 && 7 > 5 && 20 > 10)

// 6. Utiliza el operador lógico OR
console.log("___________________________Respuesta Pregunta 6_____________________________________")
console.log(5 > 3 || 2 < 3)
console.log(4 < 2 || 3 < 1)
console.log(2 > 1 || 7 > 5 && 20 > 10)
console.log(1 > 2 || 7 < 5 && 20 < 10)

// 7. Combina ambos operadores lógicos.
console.log("___________________________Respuesta Pregunta 7_____________________________________")
console.log(9 > 6 && 1 > 2 || 8 > 4)
console.log(9 > 6 || 1 > 2 && 8 > 10)    // JavaScript por defecto valida primero el AND.
console.log((9 > 6 || 1 > 2) && 8 > 10)  // Si queremos que valide primero el OR lo concatenamos con ()

// 8. Añade alguna negación
console.log("___________________________Respuesta Pregunta 8_____________________________________")
console.log(!(9 > 6 && 1 > 2 || 8 > 4))
console.log(!(9 < 6 || 1 > 2) && !(8 > 10))  // Usamos la negación NOT con paretesis ()

// 9. Utiliza el operador ternario
console.log("___________________________Respuesta Pregunta 9_____________________________________")
let soyElMejor = true

soyElMejor ? console.log("Constancia y diciplina") : console.log("Trabaja duro y se más diciplinado")

// 10. Combina operadores aritméticos, de comparación y lógicos
console.log("___________________________Respuesta Pregunta 10_____________________________________")
let e = 10
let f = 5
let g = 20
let h = 25

console.log((e + f) > g && g > f && e < f || (f + g) >= h)
console.log(((e + f) > g && g > f && e < f) || ((f + g) >= h))   // Se puede concatenar con () para que quede mas entendible. 































