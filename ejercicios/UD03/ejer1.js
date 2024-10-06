function createProfile() {
  let nombre = document.formDatos.nombre.value;
  let apellido1 = String(document.formDatos.apellido1.value);
  let apellido2 = String(document.formDatos.apellido2.value);

  //Inicilizando variables usadas
  let dataSize;
  let upperCaseData;
  let lowerCaseData;
  let dataDifferentLine;
  let userName;
  let userOutput;

  dataSize = nombre.length + apellido1.length + apellido2.length;
  upperCaseData =
    nombre.toUpperCase() +
    " " +
    apellido1.toUpperCase() +
    " " +
    apellido2.toUpperCase();
  lowerCaseData =
    nombre.toLowerCase() +
    " " +
    apellido1.toLowerCase() +
    " " +
    apellido2.toLowerCase();

  dataDifferentLine = nombre + "< br >" + apellido1 + "< br >" + apellido2;

  userName =
    nombre.charAt(0) + apellido1.substring(0, 2) + apellido2.substring(0, 2);

  userOutput =
    String(dataSize) +
    "<br>" +
    upperCaseData +
    "<br>" +
    lowerCaseData +
    "<br>" +
    dataDifferentLine +
    "<br>" +
    userName;
  console.log(userOutput);
  document.getElementById("output").innerHTML = userOutput;
}
