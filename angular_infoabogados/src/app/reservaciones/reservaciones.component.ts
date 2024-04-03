import { Component,OnInit } from '@angular/core';
import { Route,Router,ActivatedRoute,ParamMap,Params } from '@angular/router';
import { UsuarioService } from '../servicio-usuarios/usuario.service';
import { citasModel, reservacionesModel } from '../servicio-usuarios/usuario.model';

@Component({
  selector: 'app-reservaciones',
  templateUrl: './reservaciones.component.html',
  styleUrls: ['./reservaciones.component.css']
})
export class ReservacionesComponent implements OnInit {
  seleccionarHora() {
  throw new Error('Method not implemented.');
  }
  usuario=new reservacionesModel("","","","","","","");
  horasDisponibles: string[] = ['08:00', '09:00', '10:00', '11:00', '12:00', '13:00','14:00'];
  cita= new citasModel("","","","","","","");
  idusuario:any;
  
 

  constructor (
    private usuarioService:UsuarioService,
    private route:ActivatedRoute,
    private router:Router
  ) { }
  ngOnInit(){
    this.idusuario = this.route.snapshot.params['idusuario'];
    console.log(this.idusuario)

  } 
  onSubmit(){
    this.usuarioService.corroborardispcita(this.usuario).subscribe(data =>{
    if (data == 'cita disponible'){
      this.usuario.idcliente=this.idusuario
      this.usuarioService.agregarreservaciones(this.usuario).subscribe(data2=>{
        this.usuarioService.obtenerreserid(this.usuario).subscribe(data3 =>{
          let res: any = data3[0] 
          let idr=res["id_reserva"]
          this.usuarioService.obtenerid(this.usuario).subscribe(data4 =>{
            if(data4.length == 1){
            
              let dato:any = data4[0]
              let id_cita = dato['id_cita']
              this.cita.id_cita=id_cita
              this.cita.respuesta='asignada'
              this.cita.idreserva=idr
              console.log(this.cita)
              this.usuarioService.actualizarestcita(this.cita).subscribe(data5 =>{
                alert("reservacion agendada con exito")
                // this.router.navigate(['../inicio'])
              })
            }
            else{
              alert('no hay citas disponible en la hora y fechas selecionadas,por favor intente con otra gracias')
            }
          })
        })
      })
    }
  })
}
}