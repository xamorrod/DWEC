function calcularConNombre(){
    let nombre = String(document.formDatos.nombre.value);
    let apellido1 = String(document.formDatos.apellido1.value);
    let apellido2 = String(document.formDatos.apellido2.value);

    let longitud = nombre.length + apellido1.length + apellido2.length;
    let cadMayusculas = nombre.toUpperCase + " " + apellido1.toUpperCase + " " + apellido2.toUpperCase;
    

    let nombreUsuario = nombre.charAt(0) + apellido.substring(0,3) + apellido2.substring(0,3);

    document.getElementById("salida").innerHTML = cadMayusculas;
}