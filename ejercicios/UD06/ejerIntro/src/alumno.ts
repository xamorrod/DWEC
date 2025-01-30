class Alumno {
  // Atributos

  private _nombre: string;
  private _apellido1: string;
  private _apellido2: string;
  private _telefono: string;
  private _fechaNacimiento: Date;
  private _email: string;
  private _password: string;

  // Constructor

  constructor(
    nombre: string,
    apellido1: string,
    apellido2: string,
    telefono: string,
    fechaNacimiento: Date,
    email: string,
    password: string
  ) {
    if (
      this.checkAtrib(
        nombre,
        apellido1,
        apellido2,
        telefono,
        fechaNacimiento,
        email,
        password
      )
    ) {
      this.nombre = nombre;
      this.apellido1 = apellido1;
      this.apellido2 = apellido2;
      this.telefono = telefono;
      this.fechaNacimiento = fechaNacimiento;
      this.email = email;
      this._password = password;
    } else {
      console.log("Error en los datos introducidos");
    }
  }
  // Getters && Setters

  public get nombre(): string {
    return this._nombre;
  }
  public set nombre(value: string) {
    this._nombre = value;
  }
  public get apellido1(): string {
    return this._apellido1;
  }
  public set apellido1(value: string) {
    this._apellido1 = value;
  }
  public get apellido2(): string {
    return this._apellido2;
  }
  public set apellido2(value: string) {
    this._apellido2 = value;
  }
  public get telefono(): string {
    return this._telefono;
  }
  public set telefono(value: string) {
    this._telefono = value;
  }
  public get fechaNacimiento(): Date {
    return this._fechaNacimiento;
  }
  public set fechaNacimiento(value: Date) {
    this._fechaNacimiento = value;
  }
  public get email(): string {
    return this._email;
  }
  public set email(value: string) {
    this._email = value;
  }
  public get password(): string {
    return this._password;
  }

  // Validaciones de los campos del usuario

  checkAtrib(
    nombre: string,
    apellido1: string,
    apellido2: string,
    telefono: string,
    fechaNacimiento: Date,
    email: string,
    password: string
  ) {
    if (
      this.checkText(nombre) &&
      this.checkText(apellido1) &&
      this.checkText(apellido2) &&
      this.checkEmail(email) &&
      this.checkTelefono(telefono) &&
      this.checkFecha(fechaNacimiento)
    ) {
      return true;
    } else {
      return false;
    }
  }
  checkText(text: string) {
    const validarTexto: RegExp = /^[^\d]*$/;

    if (validarTexto.test(text)) {
      return true;
    }
    return false;
  }
  checkEmail(email: string) {
    const validarEmail: RegExp =
      /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (validarEmail.test(email)) {
      return true;
    }
    return false;
  }

  checkTelefono(tlf: string) {
    const validarTlf: RegExp = /^\d{9}$/;

    if (!validarTlf.test(tlf)) {
      return true;
    }
    return false;
  }

  checkFecha(fecha: Date): boolean {
    return (
      fecha instanceof Date && !isNaN(fecha.getTime()) && fecha < new Date()
    ); // No permite fechas futuras
  }

  // To string

  toString(): string {
    return `Nombre: ${this.nombre} Apellido1: ${this.apellido1} Apellido2: ${this.apellido2} Telefono: ${this.telefono} Fecha de nacimiento: ${this.fechaNacimiento} Email: ${this.email} Password: ${this.password}`;
  }
}
