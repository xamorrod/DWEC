// Inicializamos un objeto Albergue sobre el que vamos a trabajar
let oAlbergue = new Albergue();

console.log(oAlbergue.colaboradores);

// Función para aceptar la alta de la mascota
function aceptarAltaMascota() {
 
  let oMascota;

  // Recoger los datos del formulario
  const idMascota = document.frmAltaMascota.txtIdMascota.value;
  const peso = document.frmAltaMascota.txtPeso.value;
  const perro = document.querySelector(
    'input[name="rbtTipoMascota-P"]:checked'
  )?.value;
  const gato = document.querySelector(
    'input[name="rbtTipoMascota-G"]:checked'
  )?.value;
  const raza = document.frmAltaMascota.txtRaza.value;
  const altura = document.frmAltaMascota.txtAltura.value;

  // Validar que todos los campos están rellenos
  if (idMascota && peso && perro && altura) {
    oMascota = new Perro(idMascota, peso, altura);
  } else if (idMascota && peso && gato && raza) {
    oMascota = new Gato(idMascota, peso, raza);
  } else {
    alert("Rellene todos los parámetros");
    return;
  }

  

  // Verificar si la mascota se ha dado de alta correctamente
  const mensaje = oAlbergue.altaMascota(oMascota);

  if (mensaje.includes("correctamente")) {
    alert("Alta mascota OK");
    document.frmAltaMascota.reset(); // Limpiar el formulario
    document.frmAltaMascota.style.display = "none";
     document.getElementById("frmAltaMascota").style.display = "none"; // Hacer invisible el formulario
  } else {
    alert("Mascota registrada previamente");
  }
}
