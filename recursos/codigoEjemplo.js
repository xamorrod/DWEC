// Array de fechas en formato string
const fechas = [
  "2024-11-01T10:00:00Z",
  "2024-11-10T14:30:00Z",
  "2024-12-05T09:15:00Z",
  "2024-11-25T16:45:00Z",
];

// Convertir las fechas a objetos Date
const fechasObj = fechas.map((fecha) => new Date(fecha));

// Filtrar las fechas que son posteriores al 1 de noviembre de 2024
const fechaLimite = new Date("2024-11-01T00:00:00Z");
const fechasFiltradas = fechasObj.filter((fecha) => fecha > fechaLimite);

// Mostrar las fechas filtradas
console.log("Fechas posteriores al 1 de noviembre de 2024:");
fechasFiltradas.forEach((fecha) => console.log(fecha.toISOString()));
/*map: Se utiliza para transformar el array de strings de fechas a objetos Date para poder compararlas y manipularlas.
filter: Se utiliza para seleccionar las fechas que sean posteriores a la fecha límite especificada (2024-11-01).
forEach: Para imprimir cada fecha filtrada en el formato ISO (estándar de fechas).
*/
