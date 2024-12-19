//Vamos a contruir regex para que pasen diferentes condiciones

// Todos los inputs text y ninguno en blanco

//const expText = /[a-Z]/;

// Nombre y apellidos deben tener una palabra o más que empiece en MAY
// tener en cuenta Ñ y carácteres tildes

const expNombre = /^[A-ZÁÉÍÓÚÑ][a-záéíóúñ]+( [A-ZÁÉÍÓÚÑ][a-záéíóúñ]+)+$/;

let nom1 = "Amador Núñez Feijó";

console.log(expNombre.test(nom1));

const expFechaNacimiento = /^([0-2][0-9]|3[0-1])\/(0[1-9]|1[0-2])\/\d{4}$/;

let fecha1 = "01/12/2021";

console.log(expFechaNacimiento.test(fecha1));

const expDni = /^\d{7,8}[A-Z]$/;

console.log(expDni.test("12947584T"))

const arr1  = [1,2,3]
const arr = []
arr.concat(arr1)