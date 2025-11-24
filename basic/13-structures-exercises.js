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
console.log("___________________________Respuesta Pregunta 7_____________________________________")
let meses = new Map([   
    [1, "Enero"],
    [2, "Febrero"],
    [3, "Marzo"],
    [4, "Abril"],
    [5, "Mayo"],
    [6, "Junio"],
    [7, "Julio"],
    [8, "Agosto"],
    [9, "Septiembre"],
    [10, "Octubre"],
    [11, "Noviembre"],
    [12, "Diciembre"]
]);
console.log(meses);

// 8. Comprueba si el mes número 5 existe en el map e imprime su valor
console.log("___________________________Respuesta Pregunta 8____________________________________")
console.log(meses.has(5));
console.log(meses.get(5));

// 9. Añade al mapa una clave con un array que almacene los meses de verano 
console.log("___________________________Respuesta Pregunta 9____________________________________")
console.log("******Primera Forma******")
meses.set("Verano", ["Junio", "Julio", "Agosto"]);    // Crear elementos nuevos
console.log(meses);
console.log(meses.get("Verano"));

console.log("******Segunda Forma******")
meses.set("Verano2", [meses.get(6), meses.get(7), meses.get(8)]);     // Obtenemos los mismo valores directamente del array
console.log(meses);
console.log(meses.get("Verano2"));

// 10. Crea un Array, transfórmalo a un Set y almacénalo en un Map
console.log("___________________________Respuesta Pregunta 10____________________________________")
console.log("******Creación de Array******")
let fruits = ["Manzana", "Pera", "Fresa", "Pera", "Mango", "Banano"];
console.log(fruits);

console.log("******Transformación de Array a Set******")
let fruitsSet = new Set(fruits);
console.log(fruitsSet);           // Recordemos que Set no guarda valores o datos duplicados.

console.log("******Almacenar Set en un Map******")
let fruitMap = new Map([
    ["Frutas", fruitsSet]
]);
console.log(fruitMap);
console.log(fruitMap.get("Frutas"));

console.log("******Convertir a array otravez Map a Array******")
let fruitsArray = [...fruitMap.get("Frutas")];     // Operador spread (...), Si no lo ponemos nos devuelve el Set
console.log(fruitsArray);
/*
    El operador spread ... permite “desempacar” los elementos del Set y colocarlos dentro de un nuevo array.
    El spread operator (...) toma un objeto iterable (como Set, Array, String, Map) y:
    desempaqueta
    expande
    coloca cada elemento individualmente dentro de otro array
*/



// Comentario quede en : 03:12:50 min //