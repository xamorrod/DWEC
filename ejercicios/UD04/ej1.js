//Practica ejemplo objetos JS

const persona = new Object();

const p2 = {
  nombre: "Juan",
  get nombre() {
    return this._nombre;
  },
};

persona.nombre = "amador";
persona.edad = 8;

const t = [38, 46, 25, 19];

for (element in t) {
  console.log(t[element]);
}
for (let atrib in persona) {
  console.log(persona[atrib]);
}
