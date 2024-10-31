//2) 
// Crea un array llamado frutas que contenga las frutas: "manzana", "pera", "plátano", y "cereza".
// *Encontrar la posición de "plátano" en el array.
// *agregar un"mango" al final del array.
// *agregar "fresa" al inicio del array.
// *eliminar el primer elemento del array.
// *eliminar el último elemento del array.
// Al final, muestra en la consola el estado del array después de cada operación.

//creamos el array
let frutas = ["manzana", "pera", "plátano", "cereza"];

// Encontrar la posición de "plátano"
let posicionPlatano = frutas.indexOf("plátano");
console.log(`Posición de "plátano": ${posicionPlatano}`);

// Agregar "mango" al final del array
frutas.push("mango");
console.log("Después de agregar 'mango':", frutas);

// Agregar "fresa" al inicio del array
frutas.unshift("fresa");
console.log("Después de agregar 'fresa' al inicio:", frutas);

// eliminación el primer elemento del array
frutas.shift();
console.log("Después de eliminar el primer elemento:", frutas);