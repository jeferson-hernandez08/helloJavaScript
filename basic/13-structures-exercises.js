// 1. Crea un array que almacene cinco animales
console.log("___________________________Respuesta Pregunta 1_____________________________________")
let animals = ["Perro", "Gato", "León", "Elefante", "Lobo"];
console.log(animals);

// 2. Añade dos más. Uno al principio y otro al final
console.log("___________________________Respuesta Pregunta 2_____________________________________")
animals.unshift("Caballo");
console.log(animals);

animals.push("Oso Panda");
console.log(animals);


// 3. Elimina el que se encuentra en tercera posición y realiza CRUD
console.log("___________________________Respuesta Pregunta 3_____________________________________")
console.log("******1. Eliminar Elementos******")
console.log(animals);
animals.splice(3, 1);
console.log(animals);

console.log("******2. Crear o Agregar Elemento******")
console.log(animals);
animals.splice(2, 0, "Pato");
console.log(animals);

console.log("******3. Editar o Reemplazar Elemento******")
console.log(animals);
animals.splice(2, 1, "Loro");
console.log(animals);

console.log("******4. Eliminar Desde un Indice Hasta el Final******")
console.log(animals);
animals.splice(2);
console.log(animals)

// 4. Crea un set que almacene cinco libros
console.log("___________________________Respuesta Pregunta 4_____________________________________")
let myBooks = new Set(["El Monje que Vendió su Ferrari", "Vendes o Vendes", "Los secretos de la mente millonaria", "El hombre en busca de sentido", "No Me Puedes Lastimar"]);
console.log(myBooks);

// 5. Añade dos más. Uno de ellos repetido
console.log("___________________________Respuesta Pregunta 5_____________________________________")
myBooks.add("El Monje que Vendió su Ferrari");   // Set no permite Crear valores repetidos.
myBooks.add("Padre Rico Padre Pobre");
console.log(myBooks);

// 6. Elimina uno concreto a tu elección
console.log("___________________________Respuesta Pregunta 6_____________________________________")
myBooks.delete("Vendes o Vendes");    // Set no se referencia por indice si no por los datos en especifico
console.log(myBooks);

// 7. Crea un mapa que asocie el número del mes a su nombre

// 8. Comprueba si el mes número 5 existe en el map e imprime su valor

// 9. Añade al mapa una clave con un array que almacene los meses de verano

// 10. Crea un Array, transfórmalo a un Set y almacénalo en un Map


// Comentario quede en : 03:12:50 min //