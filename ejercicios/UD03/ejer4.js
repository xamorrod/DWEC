function negritaMay() {
  let frase = String(document.forms.cadena.value).trim();

  let userOutput = "";

  for (let i = 0; i < frase.length; i++) {
    if (frase.charCodeAt(i) >= 65 && frase.charCodeAt(i) <= 90 || frase.charAt(i)=="Ñ") {
      userOutput += "<b>" + frase.charAt(i) + "</b>";
    } else {
      userOutput += frase.charAt(i);
    }
  }

  document.getElementById("output").innerHTML = userOutput;
}
