class Alumno {
    // Constructor
    constructor(nombre, apellido1, apellido2, telefono, fechaNacimiento, email, password) {
        if (this.checkAtrib(nombre, apellido1, apellido2, telefono, fechaNacimiento, email, password)) {
            this.nombre = nombre;
            this.apellido1 = apellido1;
            this.apellido2 = apellido2;
            this.telefono = telefono;
            this.fechaNacimiento = fechaNacimiento;
            this.email = email;
            this._password = password;
        }
        else {
            console.log("Error en los datos introducidos");
        }
    }
    // Getters && Setters
    get nombre() {
        return this._nombre;
    }
    set nombre(value) {
        this._nombre = value;
    }
    get apellido1() {
        return this._apellido1;
    }
    set apellido1(value) {
        this._apellido1 = value;
    }
    get apellido2() {
        return this._apellido2;
    }
    set apellido2(value) {
        this._apellido2 = value;
    }
    get telefono() {
        return this._telefono;
    }
    set telefono(value) {
        this._telefono = value;
    }
    get fechaNacimiento() {
        return this._fechaNacimiento;
    }
    set fechaNacimiento(value) {
        this._fechaNacimiento = value;
    }
    get email() {
        return this._email;
    }
    set email(value) {
        this._email = value;
    }
    get password() {
        return this._password;
    }
    // Validaciones de los campos del usuario
    checkAtrib(nombre, apellido1, apellido2, telefono, fechaNacimiento, email, password) {
        if (this.checkText(nombre) &&
            this.checkText(apellido1) &&
            this.checkText(apellido2) &&
            this.checkEmail(email) &&
            this.checkTelefono(telefono) &&
            this.checkFecha(fechaNacimiento)) {
            return true;
        }
        else {
            return false;
        }
    }
    checkText(text) {
        const validarTexto = /^[^\d]*$/;
        if (validarTexto.test(text)) {
            return true;
        }
        return false;
    }
    checkEmail(email) {
        const validarEmail = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        if (validarEmail.test(email)) {
            return true;
        }
        return false;
    }
    checkTelefono(tlf) {
        const validarTlf = /^\d{9}$/;
        if (!validarTlf.test(tlf)) {
            return true;
        }
        return false;
    }
    checkFecha(fecha) {
        return (fecha instanceof Date && !isNaN(fecha.getTime()) && fecha < new Date()); // No permite fechas futuras
    }
    // To string
    toString() {
        return `Nombre: ${this.nombre} Apellido1: ${this.apellido1} Apellido2: ${this.apellido2} Telefono: ${this.telefono} Fecha de nacimiento: ${this.fechaNacimiento} Email: ${this.email} Password: ${this.password}`;
    }
}
