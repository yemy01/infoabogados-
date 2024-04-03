export class UsuarioModel {
  constructor(
    public tipo_documento: string,
    public id_usuario: string,
    public nombre: string,
    public apellido: string,
    public ciudad: string,
    public email: string,
    public contrasena: string,
    public rol:string,
   
    

  ) { }
}

export class reservacionesModel {
  constructor(
    public id_reserva: string,
    public nombre_usuario: string,
    public desc_caso: string,
    public fecha: string,
    public hora: string,
    public Profesional: string,
    public idcliente:string
  ) { }
}
export class citasModel{
  constructor(
    public id_cita: string,
    public idusuario: string,
    public idreserva: string,
    public tipo_abogado: string,
    public fecha: string,
    public hora: string,
    public respuesta: string
  ){ }
}