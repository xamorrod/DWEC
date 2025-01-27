class Alumno {
    // Constructor
    constructor(nombre, apellido1, apellido2, telefono, fechaNacimiento, email, password) {
        this.checkText(nombre),
            this.checkText(apellido1),
            this.checkText(apellido2),
            this.checkTelefono(telefono),
            this.checkEmail(email),
            (this.nombre = nombre);
        this.apellido1 = apellido1;
        this.apellido2 = apellido2;
        this.telefono = telefono;
        this.fechaNacimiento = fechaNacimiento;
        this.email = email;
        this.password = password;
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
        this._nombre = value;
    }
    get apellido2() {
        return this._apellido2;
    }
    set apellido2(value) {
        this._nombre = value;
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
    set password(value) {
        this._password = value;
    }
    // Validaciones de los campos del usuario
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
        const validarTlf = /^[^\d]*$/;
        if (!validarTlf.test(tlf)) {
            return true;
        }
        return false;
    }
}
