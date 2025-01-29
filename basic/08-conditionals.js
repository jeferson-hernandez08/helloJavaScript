/*  Condicionales: Los condicionales o tambien llamados estructuras de control, nos permiten ejecutar diferentes bloques de 
    código en función si una condición es verdadera o falsa. 
    Como pudimos ver en la leccón anterior los operadores de comparación nos sirve para saber si lo que estamos comparando 
    es verdadero o falso, igualmente como lo podemos ver en operadores lógicos y el operador ternario. es exactamente como
    consicionales.
    Con los condiciales podemos tomar decisiones en funcion de un resultado si es falso o verdadero, esto es muy importante
    para tomar desiones en nuestro código.
*/

// if, else if, else

// if (si): Significa si pasa esto haga esto. La estructura if ejecuta un bloque de código si una condición es verdadera. 
let age = 10

if (age == 37) {
    console.log("La edad es 37")        // Si se cumple, va ejecutar el cosigo que esta en la llaves.
}

// else (si no): Significa si no, else ejecuta un bloque de código si una condición es falsa. 
if (age == 37) {
    console.log("La edad es 37")       
} else {
    console.log("La edad No es 37")
}

// else if (si no, si)
if (age == 37) {
    console.log("La edad es 37")       // No se cumple esta condicionn pasa a evaluar la siguiente condición y así sucesivamente
} else if (age < 18 ) {
    console.log("Es menor de edad")
} else {
    console.log("La edad No es 37 ni es menor de edad")
}
