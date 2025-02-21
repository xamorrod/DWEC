// Establecemos las mesas con cuenta abierta
document.querySelectorAll(".mesa").forEach(function (element) {
  element.classList.add("libre");
});
// Establecemos la cuenta seleccionada
document.querySelectorAll(".mesa").forEach(function (element) {
  element.addEventListener("click", function () {
    this.classList.toggle("seleccionada");
    
  });
});

// Inicializamos los objetos necesarios para la gestión

const gestor = new Gestor();

document.addEventListener("DOMContentLoaded", () => {
  // Creamos las categorías de los productos
  // Añadimos productos al catálogo
  //Insertamos las categorías de productos  y los productos en el html
  const categorias = ["Bebidas", "Tostadas", "Bollería"];
  const catalogo = new Catalogo(categorias);

  catalogo.addProducto(1, "Café con leche", 0.95, 0);
  catalogo.addProducto(2, "Té", 1.05, 0);
  catalogo.addProducto(3, "Cola-cao", 1.35, 0);
  catalogo.addProducto(4, "Chocolate a la taza", 1.95, 0);
  catalogo.addProducto(5, "Media con aceite", 1.25, 1);
  catalogo.addProducto(6, "Entera con aceite", 1.95, 1);
  catalogo.addProducto(7, "Media con aceite y jamón", 1.95, 1);
  catalogo.addProducto(8, "Entera con aceite y jamón", 2.85, 1);
  catalogo.addProducto(9, "Media con mantequilla", 1.15, 1);
  catalogo.addProducto(10, "Entera con mantequilla", 1.75, 1);
  catalogo.addProducto(11, "Media con manteca colorá", 1.45, 1);
  catalogo.addProducto(12, "Entera con manteca colorá", 2.15, 1);
  catalogo.addProducto(13, "Croissant", 0.95, 2);
  catalogo.addProducto(14, "Napolitana de chocolate", 1.45, 2);
  catalogo.addProducto(15, "Caracola de crema", 1.65, 2);
  catalogo.addProducto(16, "Caña de chocolate", 1.35, 2);

  // Función que carga los datos cuando se termina de cargar el DOM

  function cargarCategorias() {
    const selecCategoria = document.querySelector("[name='categorias']");
    selecCategoria.innerHTML = "";

    categorias.forEach((categoria, index) => {
      const option = document.createElement("option");
      option.value = index;
      option.textContent = categoria;
      selecCategoria.appendChild(option);
    });

    cargarProductos(0);
  }
  function cargarProductos(indiceCategoria) {
    const selectProducto = document.querySelector("[name='productos']");
    selectProducto.innerHTML = "";

    // Obtenemos los productos que pertenecen a la categoria seleccionada

    const productos = catalogo.productos.filter(
      (producto) => producto.idCategoria === indiceCategoria
    );
    console.log(productos.nombre);
    productos.forEach((producto) => {
      const option = document.createElement("option");
      option.value = producto.id;
      option.textContent = producto.nombreProducto;
      selectProducto.appendChild(option);
    });
  }

  // Recargamos las selección de productos cuando se cambia la categoría

  document
    .querySelector("[name='categorias']")
    .addEventListener("change", (event) => {
      cargarProductos(Number(event.target.value));
    });
  cargarCategorias();
});


// Función que crea un objeto cuenta cada vez que se clica en una mesa

// document.querySelectorAll(".mesa").forEach(function(element)){
    
// });