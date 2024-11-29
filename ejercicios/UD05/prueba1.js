function tipo1Manejador() {
  alert("Tipo 1 de manejador de eventos");
}



// Segundo tipo de instanciación de evento

boton2.onclick = function(event){
    alert("Tipo 2 de manejador de eventos")
    alert("Coordenadas: " + event.clientX + ":" + event.clientY);
};


// Tercer tipo de instanciación de evento


boton3.addEventListener("click", function(event){
    alert("Tipo 3 de manejador de eventos");
    
})