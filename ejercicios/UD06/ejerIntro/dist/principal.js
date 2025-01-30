// Código de creación de alumno cuando se rellena
document.getElementById("submit").onclick = function () {
    // Obtenemos los valores del form
    const nombre = document.getElementById("firstName")
        .value;
    const apellido1 = document.getElementById("lastName1")
        .value;
    const apellido2 = document.getElementById("lastName2")
        .value;
    const telefono = document.getElementById("telefono")
        .value;
    const fechaNacimiento = new Date(document.getElementById("fechaNacimiento").value);
    const email = document.getElementById("email").value;
    const password = document.getElementById("password")
        .value;
    const alumno1 = new Alumno(nombre, apellido1, apellido2, telefono, fechaNacimiento, email, password);
    añadirAlumno(alumno1);
};
// Añadir un li a la secciópn del html cada vez que se añade un alumno
function añadirAlumno(alumno) {
    //Creo un nuevo alumno y lo añadimos a la lista
    if (alumno != undefined || alumno != null) {
        const contenedor = document.getElementById("output");
        const nuevoParrafo = document.createElement("div");
        nuevoParrafo.textContent = `${alumno.nombre} ${alumno.apellido1} ${alumno.apellido2} ${alumno.telefono} ${alumno.fechaNacimiento} ${alumno.email} ${alumno.password}`;
        contenedor.appendChild(nuevoParrafo);
    }
}
