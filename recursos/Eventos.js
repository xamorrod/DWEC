document.addEventListener("DOMContentLoaded", () => {
  // Evento de Click
  const btnClick = document.getElementById("btnClick");
  btnClick.addEventListener("click", () => {
    alert("¡Botón clickeado!");
  });

  // Evento de Input (Escribir en el campo de texto)
  const inputField = document.getElementById("inputField");
  inputField.addEventListener("input", (e) => {
    document.getElementById("outputText").textContent = e.target.value;
  });

  // Evento de Mouseover y Mouseout
  const hoverBox = document.getElementById("hoverBox");
  hoverBox.addEventListener("mouseover", () => {
    hoverBox.style.backgroundColor = "lightblue";
  });
  hoverBox.addEventListener("mouseout", () => {
    hoverBox.style.backgroundColor = "";
  });

  // Evento de Teclado (Detectar tecla presionada)
  document.addEventListener("keydown", (e) => {
    document.getElementById(
      "keyOutput"
    ).textContent = `Tecla presionada: ${e.key}`;
  });

  // Evento de Submit (Formulario)
  const form = document.getElementById("testForm");
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    alert("Formulario enviado (pero no recargará la página)");
  });

  // Evento de Cambio en Select
  const selectBox = document.getElementById("selectBox");
  selectBox.addEventListener("change", (e) => {
    document.getElementById(
      "selectOutput"
    ).textContent = `Seleccionaste: ${e.target.value}`;
  });
});
