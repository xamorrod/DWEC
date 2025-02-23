# 🚀 Cheat Sheet de JavaScript

## 📌 **Interacción y DOM**

### **Eventos Comunes**

| Tipo Evento      | Elementos Típicos       | Descripción                  |
|-----------------|-------------------------|------------------------------|
| `click`        | Botones, enlaces         | Click simple                 |
| `dblclick`     | Cualquier elemento       | Doble click                  |
| `mouseover`    | Elementos interactivos   | Ratón entra en elemento      |
| `mouseout`     | Elementos interactivos   | Ratón sale del elemento      |
| `submit`       | Formularios              | Envío de formulario          |
| `input`        | Campos de texto          | Cambio en valor (tiempo real) |
| `change`       | Select, checkboxes       | Cambio de valor confirmado   |
| `keydown`      | Campos de texto          | Tecla presionada             |
| `focus`/`blur` | Campos de formulario     | Foco ganado/perdido          |

```javascript
// Ejemplo básico de evento
boton.addEventListener('click', () => {
   console.log('Botón clickeado!');
});

// Detener acción predeterminada
targetForm.addEventListener('submit', (e) => {
   e.preventDefault();
});
```

---

## 🎯 **Métodos Clave del DOM**

### 🔍 **Selección de Elementos**
```javascript
document.getElementById('id'); // Retorna 1 elemento
document.querySelector('.clase'); // Retorna el primer match
document.querySelectorAll('div'); // Retorna NodeList
document.getElementsByClassName('clase'); // HTMLCollection
```

### ✨ **Creación/Modificación**
```javascript
const div = document.createElement('div');
div.textContent = 'Hola Mundo'; // Texto plano
div.innerHTML = '<strong>Texto</strong>'; // HTML

// Añadir al DOM
padre.appendChild(div);
padre.insertBefore(div, referencia);
padre.prepend(div); // Como primer hijo

// Eliminar
elemento.remove();
padre.removeChild(elemento);
```

### 🎨 **Clases y Estilos**
```javascript
elemento.classList.add('activo');
elemento.classList.remove('inactivo');
elemento.classList.toggle('visible', condicion);
elemento.style.color = '#f00'; // Estilo en línea
elemento.style.cssText = 'color: red; font-size: 20px;'; // Múltiples estilos
```

---

## 📝 **Formularios y Validación**

### 🔐 **Acceso a Valores**
```javascript
const input = document.querySelector('#email');
console.log(input.value); // Valor actual
const checkbox = document.querySelector('#acepto');
console.log(checkbox.checked); // Booleano
```

### 🛡️ **Validación Básica**
```javascript
// Validar campo vacío
if (input.value.trim() === '') {
    mostrarError('Campo obligatorio');
}

// Validar longitud
if (input.value.length < 6) {
    mostrarError('Mínimo 6 caracteres');
}

// Validar con RegEx (email)
const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
if (!regexEmail.test(input.value)) {
    mostrarError('Email inválido');
}
```

---

## 🔍 **Expresiones Regulares (RegEx) Comunes**

| Propósito         | Patrón RegEx |
|------------------|-------------|
| Email           | `/^[^\s@]+@[^\s@]+\.[^\s@]+$/` |
| Teléfono (ES)   | `/^[679]\d{8}$/` |
| Contraseña      | `/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/` |
| URL             | `/^(https?:\/\/)?([\w-]+\.)+[\w-]+([\w- .?%&=]*)?$/` |
| Fecha (dd/mm)   | `/^(0[1-9]|[12][0-9]|3[01])\/(0[1-9]|1[0-2])$/` |

```javascript
// Uso práctico
const regexTelefono = /^[679]\d{8}$/;
if (regexTelefono.test('612345678')) {
    console.log('Teléfono válido');
}
```

---

## ⚡ **Event Object - Propiedades Clave**

| Propiedad           | Descripción |
|--------------------|-------------|
| `e.target`        | Elemento que desencadenó el evento |
| `e.currentTarget` | Elemento con el listener |
| `e.preventDefault()` | Cancela acción predeterminada |
| `e.stopPropagation()` | Detiene la propagación del evento |
| `e.key`           | Tecla presionada (keydown/up) |
| `e.clientX/Y`     | Coordenadas del ratón |

---

## 💡 **Buenas Prácticas Rápidas**

### 1️⃣ **Delegación de Eventos**
```javascript
// Escuchar en contenedor padre
lista.addEventListener('click', (e) => {
    if (e.target.classList.contains('item')) {
        // Lógica para elementos .item
    }
});
```

### 2️⃣ **Validar Formularios en Lado Cliente y Servidor**

### 3️⃣ **Usar `textContent` en lugar de `innerHTML` para texto plano (evita XSS)**

### 4️⃣ **Optimizar Selectores**
```javascript
// Mal: Busca en todo el DOM cada vez
document.querySelector('.boton');

// Mejor: Cachear elementos
const botones = document.querySelectorAll('.boton');
```

### 5️⃣ **Manejar Dinámicamente Clases CSS**
```javascript
elemento.classList.toggle('activo', condicion);
```

