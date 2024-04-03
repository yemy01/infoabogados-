import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UsuarioModel,citasModel,reservacionesModel } from './usuario.model';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  BASE_URL ="https://infoabogados.onrender.com"
  horasDisponibles: any;

  constructor(private http: HttpClient) { }

  agregarreservaciones(reservaciones:reservacionesModel){
    return this.http.post<string>(`${this.BASE_URL}/reservaciones`,reservaciones);
  }
  obtenerreservaciones() {
    return this.http.get<reservacionesModel[]>(this.BASE_URL+'/reservaciones');
  }
  obtenerreservacion(Id_reservaciones: string) {
    return this.http.get<reservacionesModel[]>(`${this.BASE_URL}/reservaciones/${Id_reservaciones}`)
  }
  actualizarreservacion(reservacion: reservacionesModel) {
    return this.http.put<string>(`${this.BASE_URL}/reservaciones_editar/${reservacion.id_reserva}`, reservacion)
  }
  registro(usuario:UsuarioModel){
    return this.http.post<string>(`${this.BASE_URL}/login`,usuario);
  }
  obtenercitaporrol(rol:string){
    return this.http.get<citasModel[]>(`${this.BASE_URL}/citas/${rol}`);

  }
  obtenerreserid(reservaciones:reservacionesModel){
    return this.http.post<string>(`${this.BASE_URL}/reservas_obtenerid`,reservaciones);
  }
 obtenerrservacionoporid(id_reserva:string){
  return this.http.get<reservacionesModel[]>(`${this.BASE_URL}/cita/${id_reserva}`);

}
  login(login:UsuarioModel){
    return this.http.post<string>(`${this.BASE_URL}/login_validar`,login);
  }
  loginrol(rol:UsuarioModel){
    return this.http.post<UsuarioModel[]>(`${this.BASE_URL}/login/rol`,rol);
  }
  borrarUsuario(id_usuario: string) {
    return this.http.delete<string>(`${this.BASE_URL}/login_eliminar/${id_usuario}`);
  }
  corroborardispcita(reservaciones:reservacionesModel){
    return this.http.post<string>(`${this.BASE_URL}/citas`,reservaciones);
  }
  actualizarestcita(citas:citasModel){
    return this.http.put<string>(`${this.BASE_URL}/citas_agendar/${citas.id_cita}`, citas);
  }
  obtenerid(reservaciones:reservacionesModel){
    return this.http.post<citasModel[]>(`${this.BASE_URL}/citas_obtenerid`,reservaciones);
  }
  aceptarcita(id_cita:string){
    return this.http.delete<string>(`${this.BASE_URL}/cita_aceptar/${id_cita}`);
  }
  rechazarcita(id_cita:string){
    return this.http.delete<string>(`${this.BASE_URL}/cita_rechazar/${id_cita}`);
  }
  administrador() {
    return this.http.get<UsuarioModel[]>(`${this.BASE_URL}/usuariolista`);
  }
  citasadmi(){
    return this.http.get<citasModel[]>(`${this.BASE_URL}/citalista`);
  }
  editarusuario(id_usuario:string) {
    return this.http.get<UsuarioModel[]>(`${this.BASE_URL}/login/${id_usuario}`);
  }
  actualizarusario(usuario:UsuarioModel){
    return this.http.put<string>(`${this.BASE_URL}/login_editar/${usuario.id_usuario}`,usuario);
  }
  editarcita(id_cita:string) {
    return this.http.get<citasModel[]>(`${this.BASE_URL}/citas_por_identificacion/${id_cita}`);
  }
  actualizarcitas(cita:citasModel){
    return this.http.put<string>(`${this.BASE_URL}/citas_editar/${cita.id_cita}`,cita);
  }
  agregarcitas(citas:citasModel){
    return this.http.post<String>(`${this.BASE_URL}/agregarcitas`,citas);
  }
  loginid(id_usuario:UsuarioModel){
    return this.http.post<UsuarioModel[]>(`${this.BASE_URL}/login_id_usuario`,id_usuario);
  }
  citasagendadas(idcliente:string){
    return this.http.get<citasModel[]>(`${this.BASE_URL}/citas_i/${idcliente}`);

  }



}