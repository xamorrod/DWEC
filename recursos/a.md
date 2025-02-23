```markdown
# 🏗️ Manipulación del Árbol DOM en JavaScript  

## 📌 1. Crear un Elemento  
```javascript
const div = document.createElement("div");
div.textContent = "Soy un div creado con JavaScript";
console.log(div);
```
Añadir atributos y estilos:  
```javascript
div.setAttribute("id", "mi-div");
div.classList.add("estilo-div");
div.style.backgroundColor = "lightblue";
```

## 📌 2. Añadir un Elemento como Hijo  
```javascript
const contenedor = document.getElementById("contenedor");
contenedor.appendChild(div);
```

Añadir múltiples elementos:  
```javascript
const lista = document.createElement("ul");
document.body.appendChild(lista);

const elementos = ["Inicio", "Servicios", "Contacto"];
elementos.forEach(texto => {
    const li = document.createElement("li");
    li.textContent = texto;
    lista.appendChild(li);
});
```

## 📌 3. Añadir un Elemento al Inicio  
```javascript
const parrafo = document.createElement("p");
parrafo.textContent = "Este es el primer elemento";
document.body.prepend(parrafo);
```

## 📌 4. Insertar un Elemento Antes de Otro  
```javascript
const referencia = document.getElementById("referencia");
document.body.insertBefore(div, referencia);
```

## 📌 5. Eliminar un Elemento  
### 🔹 `element.remove()`
```javascript
const eliminar = document.getElementById("elementoAEliminar");
eliminar.remove();
```

### 🔹 `parent.removeChild(child)`
```javascript
const padre = document.getElementById("contenedor");
const hijo = document.getElementById("hijoAEliminar");
padre.removeChild(hijo);
```

## 📌 6. Reemplazar un Elemento  
```javascript
const nuevoElemento = document.createElement("h2");
nuevoElemento.textContent = "Soy un nuevo título";

const antiguoElemento = document.getElementById("tituloAntiguo");
document.body.replaceChild(nuevoElemento, antiguoElemento);
```

## 📌 7. Clonar un Elemento  
```javascript
const original = document.getElementById("original");
const copia = original.cloneNode(true);
document.body.appendChild(copia);
```

---

## 📌 Ejemplo Completo  
```javascript
// 1. Crear un div con texto
const div = document.createElement("div");
div.textContent = "Soy un div dinámico";
div.classList.add("caja");

// 2. Añadir al final del body
document.body.appendChild(div);

// 3. Crear un párrafo y añadirlo antes del div
const parrafo = document.createElement("p");
parrafo.textContent = "Este es un párrafo antes del div";
document.body.insertBefore(parrafo, div);

// 4. Clonar el div y añadirlo al principio
const clon = div.cloneNode(true);
document.body.prepend(clon);

// 5. Eliminar el párrafo después de 3 segundos
setTimeout(() => {
    parrafo.remove();
}, 3000);
```

---

## 🎯 Resumen Ampliado  

| Acción | Método | Descripción |
|--------|--------|-------------|
| **Crear un elemento** | `document.createElement("tag")` | Crea un nodo HTML en memoria |
| **Añadir como hijo** | `parent.appendChild(child)` | Añade el nodo al **final** del padre |
| **Añadir al inicio** | `parent.prepend(child)` | Añade el nodo **al inicio** del padre |
| **Insertar antes de otro** | `parent.insertBefore(newNode, referenceNode)` | Inserta un nodo antes de otro hijo específico |
| **Eliminar elemento** | `element.remove()` | Borra un nodo directamente |
| **Eliminar hijo** | `parent.removeChild(child)` | Borra un nodo dentro de un padre |
| **Reemplazar elemento** | `parent.replaceChild(newNode, oldNode)` | Sustituye un nodo hijo por otro nuevo |
| **Clonar elemento** | `element.cloneNode(true/false)` | Duplica un nodo, con o sin hijos |

---

## #### Ejemplos de validaciones con RegEx:

### 📌 Validación de correo electrónico:
```javascript
const regexCorreo = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
console.log(regexCorreo.test("correo@example.com")); // true
```

### 📌 Validación de número de teléfono (9 dígitos):
```javascript
const regexTelefono = /^\d{9}$/;
console.log(regexTelefono.test("612345678")); // true
```

### 📌 Validación de una contraseña segura:
```javascript
const regexPassword =
  /^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
console.log(regexPassword.test("Password1!")); // true
```

### 📌 Validación de URL:
```javascript
const regexURL = /^(https?:\/\/)?([\w.-]+)\.([a-z]{2,6})([\/\w .-]*)*\/?$/;
console.log(regexURL.test("https://www.google.com")); // true
```

### 📌 Validación de fecha (formato DD/MM/YYYY o DD-MM-YYYY):
```javascript
const regexFecha = /^(0[1-9]|[12][0-9]|3[01])[-/](0[1-9]|1[0-2])[-/]\d{4}$/;
console.log(regexFecha.test("15/08/2023")); // true
console.log(regexFecha.test("31-12-1999")); // true
```

### 📌 Validación de nombre (solo letras y espacios):
```javascript
const regexNombre = /^[a-zA-Z\s]+$/;
console.log(regexNombre.test("Juan Pérez")); // true
console.log(regexNombre.test("Juan123")); // false
```

---

Con esto tienes un **resumen claro y práctico** sobre manipulación del DOM y validaciones con RegEx. 🎯🚀
```

