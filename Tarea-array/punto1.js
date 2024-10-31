//1) Definir un arreglo de 5 componentes de tipo Float que representen las alturas de 5 personas.
//Obtener el promedio de las mismas. Contar cuántas personas son más altas que el promedio y cuántas más bajas.

//primero se define el arreglo de alturas en mi caso en metros
const alturas= [1.75, 1.68, 1.82, 1.60, 1.78];

//se calcula el promedio de la altura
const suma = alturas.reduce((acumulador, altura) => acumulador + altura, 0);
const promedio = suma / alturas.length;

//verificamos cada altura respecto al promedio. Usando un conteo
let masAltas = 0;
let masBajas = 0;

alturas.forEach(altura => {
  if (altura > promedio) {
    masAltas++;
  } else if (altura < promedio) {
    masBajas++;
  }
});

//Resultados
console.log(`Promedio de alturas: ${promedio.toFixed(2)} m`);
console.log(`${masAltas} personas más altas que el promedio.`);
console.log(`${masBajas} personas más bajas que el promedio.`);