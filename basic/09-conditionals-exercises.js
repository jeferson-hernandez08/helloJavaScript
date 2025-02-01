// if/else/else if/ternaria

// 1. Imprime por consola tu nombre si una variable toma su valor
console.log("___________________________Respuesta Pregunta 1_____________________________________")
console.log("******Primera Forma******")
let myName = 1
let miNombre = "Jeferson Hernandez"

if (myName == 1) {
    console.log("Mi nombre es: Jeferson Hernandez")    // Forma # 1 normal
    console.log("Mi nombre es: " + miNombre)           // Forma concatenada # 2
    console.log(`Mi nombre es: ${miNombre}`)           // Forma concatenada # 3
}

console.log("******Segunda Forma******")
let nombre = "Jeferson Hernandez";                  // Asigna tu nombre a la variable

if (nombre) {                    // Verifica si la variable nombre tiene un valor
    console.log(nombre);
} else {                         // Si la variable nombre no tiene un valor (es decir, es null, undefined, false, 0, NaN, o una cadena vacía ""), se ejecuta el bloque else
    console.log("La variable 'nombre' no tiene un valor asignado.");
}

// 2. Imprime por consola un mensaje si el usuario y contraseña concide con unos establecidos
console.log("___________________________Respuesta Pregunta 2_____________________________________")
console.log("******Primera Forma******")       // Por mi
let usuario    = "jefer.hernandez1@gmail.com"
let contraseña = 1234

if (usuario == "jefer.hernandez1@gmail.com" && contraseña == 1234) {
    console.log("El usuario y contraseña coinciden.")
    console.log(`Usuario es: ${usuario} y Contraseña es: ${contraseña}`)
} else {
    console.log("El usuario o la contraseña no coinciden")
}

console.log("******Segunda Forma******")
// Valores establecidos (usuario y contraseña correctos)
const usuarioCorrecto = "admin";
const contraseñaCorrecta = "1234";

// Valores ingresados por el usuario (pueden venir de un formulario, por ejemplo)
let usuarioIngresado = "admin";
let contraseñaIngresada = "1234";

// Verificar si coinciden
if (usuarioIngresado === usuarioCorrecto && contraseñaIngresada === contraseñaCorrecta) {
    console.log("Inicio de sesión exitoso. ¡Bienvenido!");
} else {
    console.log("Usuario o contraseña incorrectos. Inténtalo de nuevo.");
}

console.log("******Tercera Forma******")
// // Valores establecidos
// const usuarioCorrecto2 = "admin";
// const contraseñaCorrecta2 = "1234";

// // Solicitar datos al usuario
// let usuarioIngresado2 = prompt("Ingresa tu usuario:");      //  prompt is not defined.
// let contraseñaIngresada2 = prompt("Ingresa tu contraseña:");

// // Verificar si coinciden
// if (usuarioIngresado2 === usuarioCorrecto2 && contraseñaIngresada2 === contraseñaCorrecta2) {
//     console.log("Inicio de sesión exitoso. ¡Bienvenido!");
// } else {
//     console.log("Usuario o contraseña incorrectos. Inténtalo de nuevo.");
// }
/* 
    Si queremos que el usuario ingrese valores dinamicamente usamos la funcion promt().
    Pero El error prompt is not defined ocurre porque prompt() es una función que solo está disponible en los 
    navegadores, no en Node.js. Node.js es un entorno de ejecución de JavaScript del lado del servidor, y no tiene 
    acceso a las APIs del navegador, como prompt(), alert(), o document.
    Si estás usando Node.js en VSCode, puedes usar el módulo readline (incorporado en Node.js) para solicitar entrada del usuario desde la consola. 
    Aquí te muestro cómo hacerlo:
*/

console.log("******Cuarta Forma******")
// // Importar el módulo readline: readline es un módulo incorporado en Node.js que permite leer la entrada del usuario desde la consola.
// const readline = require('readline');

// // Crear una interfaz para leer la entrada del usuario: Se crea una interfaz (rl) para manejar la entrada y salida.
// const rl = readline.createInterface({     
//     input: process.stdin,
//     output: process.stdout
// });

// // Valores establecidos (usuario y contraseña correctos)
// const usuarioCorrecto3 = "admin";
// const contraseñaCorrecta3 = "1234";

// // Solicitar datos al usuario: rl.question(): Este método solicita una entrada al usuario. El primer argumento es el mensaje que se muestra, y el segundo es una función de callback que se ejecuta cuando el usuario ingresa su respuesta.
// rl.question("Ingresa tu usuario: ", (usuarioIngresado3) => {        
//     rl.question("Ingresa tu contraseña: ", (contraseñaIngresada3) => {
//         // Verificar si coinciden
//         if (usuarioIngresado3 === usuarioCorrecto3 && contraseñaIngresada3 === contraseñaCorrecta3) {      // Se comparan los valores ingresados con los valores correctos.
//             console.log("Inicio de sesión exitoso. ¡Bienvenido!");
//         } else {
//             console.log("Usuario o contraseña incorrectos. Inténtalo de nuevo.");
//         }

//         // Cerrar la interfaz readline: rl.close(): Cierra la interfaz readline después de que el usuario ha ingresado los datos.
//         rl.close();    
//     });
// });

console.log("******Quita Forma******")
/* 
    Si prefieres una solución más sencilla y similar a prompt(), puedes instalar un paquete como prompt-sync. Este paquete proporciona una 
    función prompt() similar a la del navegador.
    Instalación:
    1. Abre una terminal en VSCode.
    2. Ejecuta el siguiente comando para instalar prompt-sync:
       npm install prompt-sync
    Código con prompt-sync:
*/
// // Importar el paquete prompt-sync
// const prompt = require('prompt-sync')();

// // Valores establecidos (usuario y contraseña correctos)
// const usuarioCorrect4 = "admin";
// const contraseñaCorrecta4 = "1234";

// // Solicitar datos al usuario
// let usuarioIngresado4 = prompt("Ingresa tu usuario: ");
// let contraseñaIngresada4 = prompt("Ingresa tu contraseña: ");

// // Verificar si coinciden
// if (usuarioIngresado4 === usuarioCorrecto4 && contraseñaIngresada4 === contraseñaCorrecta4) {
//     console.log("Inicio de sesión exitoso. ¡Bienvenido!");
// } else {
//     console.log("Usuario o contraseña incorrectos. Inténtalo de nuevo.");
// }
/* 
    Conclusión:
    1. En Node.js, no puedes usar prompt() del navegador.
    2. Usa el módulo readline (incorporado) o un paquete como prompt-sync para solicitar entrada del usuario.
    3. Se deja comentado la Tercera Forma, Cuarta Forma y Quita Forma para dejarse de aprendizaje y me permita trabajar rapido en los ejercicios.
*/

// 3. Verifica si un número es positivo, negativo o cero e imprime un mensaje
console.log("___________________________Respuesta Pregunta 3_____________________________________")
console.log("******Primera Forma******")   // Por mi
let numero = -1

if (numero > 0) {
    console.log("El número es positivo: " + numero)
} else if (numero == 0 ) {
    console.log("El número es cero: " + numero)
} else {
    console.log("El número es negativo: " + numero)
}

console.log("******Segunda Forma******")   // Segunda forma avanzada aplicando funciones
function verificarNumero(numero) {
    if (numero > 0) {
        console.log("El número es positivo.");
    } else if (numero < 0) {
        console.log("El número es negativo.");
    } else {
        console.log("El número es cero.");
    }
}

// Ejemplos de uso:
verificarNumero(10);   // El número es positivo.
verificarNumero(-5);   // El número es negativo.
verificarNumero(0);    // El número es cero.

// 4. Verifica si una persona puede votar o no (mayor o igual a 18) e indica cuántos años le faltan
console.log("___________________________Respuesta Pregunta 4_____________________________________")
console.log("******Primera Forma******")  // Por mí
let edadPersona = 15
let añosFaltantes

if (edadPersona >= 18) {
    console.log("La persona puede votar, es mayor de edad")
} else {
    añosFaltantes = 18 - edadPersona
    console.log("La persona No puede votar, es menor edad ")
    console.log(`A la persona le faltan ${añosFaltantes} años para poder votar.`)
}

console.log("******Segunda Forma******")   // Segunda forma avanzada aplicando funciones
function puedeVotar(edad) {
    if (edad >= 18) {
        console.log("Puede votar.");
    } else {
        const añosFaltantes = 18 - edad;
        console.log(`No puede votar. Le faltan ${añosFaltantes} años para poder votar.`);
    }
}

// Ejemplos de uso:
puedeVotar(20);  // Puede votar.
puedeVotar(15);  // No puede votar. Le faltan 3 años para poder votar.
puedeVotar(18);  // Puede votar.

// 5. Usa el operador ternario para asignar el valor "adulto" o "menor" a una variable
//    dependiendo de la edad 
console.log("___________________________Respuesta Pregunta 5_____________________________________")
let personaEdad = 14
let mensaje = personaEdad >= 18 ? "Adulto" : "Menor"
console.log(mensaje)
/*  
    Recordemos que está estructura de código es lo mismo que la siguiente de if:
    let mensaje;

    if (personaEdad >= 18) {
        mensaje = "Adulto";
    } else {
        mensaje = "Menor";
    }
    console.log(mensaje);
*/

// 6. Muestra en que estación del año nos encontramos dependiendo del valor de una variable "mes"
console.log("___________________________Respuesta Pregunta 6_____________________________________")
let mesDelAño = "noviembre"

if (mesDelAño === "marzo" || mesDelAño === "abril" || mesDelAño === "mayo") {   // Primavera 
    console.log("Nos encontramos en la estación del año: PRIMAVERA")
} else if (mesDelAño === "junio" || mesDelAño === "julio" || mesDelAño === "agosto") {   // Verano 
    console.log("Nos encontramos en la estación del año: VERANO")
} else if (mesDelAño === "septiembre" || mesDelAño === "octubre" || mesDelAño === "noviembre") {   // Otoño
    console.log("Nos encontramos en la estación del año: OTOÑO")
} else if (mesDelAño === "diciembre" || mesDelAño === "enero" || mesDelAño === "febrero") {   // Invierno
    console.log("Nos encontramos en la estación del año: INVIERNO")
} else {
    console.log(`Error: "${mesDelAño}" no es un mes válido, intente nuevamente.`)
}

// 7. Muestra el número de días que tiene un mes dependiendo de la variable del ejercicio anterior
console.log("___________________________Respuesta Pregunta 7_____________________________________")
if (mesDelAño == "enero") {
    console.log("Mes enero: 31 días")
} else if (mesDelAño == "febrero") {
    console.log("Mes febrero: 28 o 29 días")
} else if (mesDelAño == "Marzo") {
    console.log("Mes de marzo: 31 días")
} else if (mesDelAño == "abril") {
    console.log("Mes de abril: 30 días")
} else if (mesDelAño == "mayo") {
    console.log("Mes de mayo: 31 días")
} else if (mesDelAño == "junio") {
    console.log("Mes de junio: 30 días")
} else if (mesDelAño == "julio") {
    console.log("Mes de julio: 31 días")
} else if (mesDelAño == "agosto") {
    console.log("Mes de agosto: 31 días")
} else if (mesDelAño == "septiembre") {
    console.log("Mes de septiembre: 30 días")
} else if (mesDelAño == "octubre") {
    console.log("Mes de octubre: 31 días")
} else if (mesDelAño == "noviembre") {
    console.log("Mes de noviembre: 30 días")
} else if (mesDelAño == "diciembre") {
    console.log("Mes de diciembre: 31 días")
} else {
    console.log("Dato erronéo")
}

// switch
// 8. Usa un switch para imprimir un mensaje de saludo diferente dependiendo del idioma
console.log("___________________________Respuesta Pregunta 8_____________________________________")
let idioma = "frances"

switch (idioma) {
    case "español":
        console.log("Hola, como estas")
        break
    case "ingles":
        console.log("Hello, how are you")
        break
    case "aleman":
        console.log("Hallo, wie geht es dir")
        break
    case "frances":
        console.log("Bonjour comment allez-vous")
        break
    default: 
        console.log("Idioma Erroneo, no reconocido")   
        break       // Recordemos que el break del default es opcional
}

// 9. Usa un switch para hacer de nuevo el ejercicio 6
console.log("___________________________Respuesta Pregunta 9_____________________________________")
let mesDelAño2 = "eneddro"

switch (mesDelAño2) {
    case "marzo":        // Primavera
    case "abril":
    case "mayo":
        console.log("Nos encontramos en la estación del año: PRIMAVERA")
        break
    case "junio":        // Verano
    case "julio":
    case "agosto":
        console.log("Nos encontramos en la estación del año: VERANO")
        break
    case "septiembre":   // Otoño
    case "octubre":      
    case "noviembre": 
        console.log("Nos encontramos en la estación del año: OTOÑO")
        break
    case "diciembre":   // Invierno
    case "enero":      
    case "febrero": 
        console.log("Nos encontramos en la estación del año: INVIERNO")
        break
    default: 
        console.log(`Error: "${mesDelAño2}" no es un mes válido, intente nuevamente.`)
}

// 10. Usa un switch para hacer de nuevo el ejercicio 7