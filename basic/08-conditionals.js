/*  Condicionales: Los condicionales o tambien llamados estructuras de control, nos permiten ejecutar diferentes bloques de 
    código en función si una condición es verdadera o falsa. 
    Como pudimos ver en la leccón anterior los operadores de comparación nos sirve para saber si lo que estamos comparando 
    es verdadero o falso, igualmente como lo podemos ver en operadores lógicos y el operador ternario. es exactamente como
    consicionales.
    Con los condiciales podemos tomar decisiones en funcion de un resultado si es falso o verdadero, esto es muy importante
    para tomar desiones en nuestro código.
*/

// if, else if, else

console.log("____________________________If (si)____________________________________")
// if (si): Significa si pasa esto haga esto. La estructura if ejecuta un bloque de código si una condición es verdadera. 
let age = 37

if (age == 37) {
    console.log("La edad es 37")        // Si se cumple, va ejecutar el cosigo que esta en las llaves.
}

console.log("____________________________Else (si no)____________________________________")
// else (si no): Significa si no, else ejecuta un bloque de código si una condición es falsa. 
if (age == 37) {
    console.log("La edad es 37")
} else {
    console.log("La edad No es 37")
}

console.log("******Otra Forma******")
let mensaje

if (age == 37) {
    mensaje = "La edad es 37"
} else {
    mensaje = "La edad No es 37"
}
console.log(mensaje)

console.log("____________________________Else if (si no, si)____________________________________")
// else if (si no, si)
if (age == 37) {
    console.log("La edad es 37")       // No se cumple esta condicionn pasa a evaluar la siguiente condición y así sucesivamente
} else if (age < 18 ) {
    console.log("Es menor de edad")
} else {
    console.log("La edad No es 37 ni es menor de edad")
}
/*  Tenemos tres 
    Si el primer if se cumple se ejecuta el codigo si la edad es 37, console.log("La edad es 37") .
    Si la edad no es 37 va a validar el sugundo if si se cumple ejecuta el codigo, console.log("Es menor de edad")
    Si no se cumple las validaciones de la edad 37 o la edad < 18, no ejecuta el codigo del else console.log("La edad No es 37 ni es menor de edad")
    lo que significa el else que ninguna si ninguna de las dos condiciones anteriores es verdadera me ejecuta el codigo. 
    Podemos todos los else if que queramos si queremos seguir validando mas cosas y podemos hacer condiciones mas complejas
*/

console.log("____________________________Operador Ternario____________________________________")
//Operador Ternario: Es una forma mas rapida de escribir un if y un else. Una manera mas compacta de escribir un codicional simple.
const message = age == 37 ? "La edad es 37" : "La edad No es 37"
console.log(message)

/*  El resultado de este este operador ternario lo podemos asignar a una variable.
    Aqui estamos combinando dos cosas la parte de operadores y la aparte de condicionales
    Este ejemplo de operador ternario es igual que hacer esto:
    let mensaje

    if (age == 37) {
        mensaje = "La edad es 37"
    } else {
        mensaje = "La edad No es 37"
    }
    console.log(mensaje)

    El resultado lo podemos asignar a una variable o una constante y despues podemos trabajar con ese resultado
    Lo cual asignamos el resultado ternario a esa constante message
    Los operadores ternarios mucha veces se usan para operaciones simples.
*/

/*  Recordemos que el operador ternario va primero la validación del if, age == 37 ?, si se cumple va antes
    de los dos puntos el bloque de código y si no se cumple va después de los dos puntos el otro bloque de codigo else.
    Recordemos que lo podemos reprentar de esta forma: 
    age == 37 ? console.log("La edad es 37") : console.log("La edad No es 37")
*/

console.log("____________________________Switch____________________________________")
// Switch: Switch es una alternativa de anidar if else, cuando por ejemplo tenemos que metar muchos else if y else if, etc. 
/*  El Switch unicamente se usa cuando tenemos la necesidad de comparar una unica variable con varios valores posibles, 
    Es util cuando tenemos muchas condiciones que verificar pero contra una misma variable.
*/
console.log("******Forma Clasica******")
let day = 3
let dayName

if (day == 0) {
    dayName = "Lunes"
} else if (day == 1) {
    dayName = "Martes"
} else if (day == 2) {
    dayName = "Miercoles"
} else if (day == 3) {
    dayName = "Jueves"
} else if (day == 4) {
    dayName = "Viernes"
} else if (day == 5) {
    dayName = "Sabado"
} else if (day == 6) {
    dayName = "Domingo"
} else {
    dayName = "Numero de día incorrecto"
}
console.log(dayName)
/*  Podemos ver que de la forma clasica es muy poco optimo y es muy poco operativo, lo que es 
    un poco confundido entenderlo por que siempre lo que estamos inspeccionando siempre es la variable day
    todas las condicionan son de la misma variable donde siempre inspeccionamos la misma variable.
    Para eso tenemos el switch, lo cual es una alternativa para cuando tenemos que revisar condiciones que se verifican 
    contra una misma variable.
*/

console.log("******Forma con switch******")
switch (day) {                // Aquí ponemos cual es la variable que tenemos inspeccionar o validar en este caso day
    case 0:                   // Este case es donde va a estar la condición en este caso dia sea 0, y ejecutamos nuestro bloque validado ene este caso Lunes.
        dayName = "Lunes"
        break                 // Cuando usemos la instrucción case debemos finalizarla con break, reak significa romper, rompe la ejecución del bloque, se sale del bloque de codigo.
    case 1:                   // Y así sucesivamente validamos una por una. 
        dayName = "Martes"
        break
    case 2:
        dayName = "Miercoles"
        break
    case 3:
        dayName = "Jueves"
        break
    case 4:
        dayName = "Viernes"
        break
    case 5:
        dayName = "Sabado"
        break
    case 6:
        dayName = "Domingo"
        break
    default:                   //Default es el else de toda la estructura
        dayName = "Numero de día incorrecto"
        //break                 // Meter el break aquí en el default es opcional por que ya ejecuta mas cosas.
}
console.log(dayName)
/*  Podemos ver que en lugar de hacer de if que son muy redundantes y largos y si encontramos que la variable que revisamos
    es la misma lo hacemos un switch y e suna forma mucho mas optima.
*/
/*  En algunos casos va a tener una ventajas y desventajas entre el if y el switch:
    El Switch Ventajas y Desventajas: 
    Ventajas:
    1. El switch es muy legible se entiende super rapido lo que queremos hacer, por que estamos revisando
    es lo que está en mismo switch, si loq ue validamos en switch es igual alguno de los valores que nsotros metemos en los cases.
    2. Puede ser muy eficente por que JS se encarga de optimizarlo para que esta ejecución del switch se ejecute mucho mas rapido 
    que si metemos ese if por el medio.
    Desventajas:
    1. Es menos flexible, si nosotros queremos meter coondiciones complejas como el en el if o else if por ejemplo
    en la lección anterior (5 > 10 && 15 > 20 || 30 < 40) en el switch no se puede hacer.
    2. Debemos meterle el break si o si de lo contrario no funciona y nos sale error.
*/

