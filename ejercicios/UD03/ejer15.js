const listDni = [];
const letraOutput = [];

function pedirDni() {
  let dni = prompt("Introduce un DNI");
  //let dni = String(document.solicitudDatos.dni.value);
  if (Number(dni) == -1) {
    clearInterval(intervalo);
    mostrarDni();
  } else {
    listDni.push(dni);
  }
}

function mostrarDni() {
  const letras = [
    "T",
    "R",
    "W",
    "A",
    "G",
    "M",
    "Y",
    "F",
    "P",
    "D",
    "X",
    "B",
    "N",
    "J",
    "Z",
    "S",
    "Q",
    "V",
    "H",
    "L",
    "C",
    "K",
    "E",
    "T",
  ];

  for (let i = 0; i < listDni.length; i++) {
    let letra = letras[listDni[i] % 23];
    letraOutput.push(letra);
  }
  document.getElementById("salida").innerHTML = letraOutput;
}

const intervalo = setInterval(pedirDni, 5000);
