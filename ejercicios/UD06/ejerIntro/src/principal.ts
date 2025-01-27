// Código de creación de alumno cuando se rellena

document.getElementById("submit").onclick = function () {
  // Obtenemos los valores del form
  const nombre = (document.getElementById("firstName") as HTMLInputElement)
    .value;
  const apellido1 = (document.getElementById("lastName1") as HTMLInputElement)
    .value;
  const apellido2 = (document.getElementById("lastName2") as HTMLInputElement)
    .value;
  const telefono = Number(
    (document.getElementById("telefono") as HTMLInputElement).value
  );

  const fechaNacimiento = new Date(
    (document.getElementById("fechaNacimiento") as HTMLInputElement).value
  );

  const email = (document.getElementById("email") as HTMLInputElement).value;
  const password = (document.getElementById("password") as HTMLInputElement)
    .value;
  const alumno1 = new Alumno(
    nombre,
    apellido1,
    apellido2,
    telefono,
    fechaNacimiento,
    email,
    password
  );
  añadirAlumno(alumno1);
};

// Añadir un li a la secciópn del html cada vez que se añade un alumno

function añadirAlumno(alumno: Alumno) {
  const contenedor = document.getElementById("output") as HTMLElement;
  //Creo un nuevo alumno y lo añadimos a la lista

  const nuevoParrafo = document.createElement("li");
  nuevoParrafo.textContent = `${alumno.apellido1}`;
  contenedor.appendChild(nuevoParrafo);
}
