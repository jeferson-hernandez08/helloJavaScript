// Función normal
function saludar(nombre) {
  return "Hola " + nombre;
}
console.log(saludar("Jeferson"));

// Función flecha: Arrow function
const saludar2 = (nombre) => {
  return `Hola ${nombre}`;
}
console.log(saludar2("Jeferson2"));

const sumar = (a, b) => {
  return a + b;
}
console.log(sumar(3, 2));

// Función flecha: Arrow function en una sola línea
const sumar2 = (a, b) => a + b;
console.log(sumar2(5, 5));
