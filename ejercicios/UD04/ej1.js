//Practica ejemplo objetos JS

const persona = new Object();

persona.nombre = "amador";
persona.edad = 8;

const t = [38, 46, 25, 19];

for (element in t) {
  console.log(t[element]);
}
for (let atrib in persona) {
  console.log(persona[atrib]);
}
