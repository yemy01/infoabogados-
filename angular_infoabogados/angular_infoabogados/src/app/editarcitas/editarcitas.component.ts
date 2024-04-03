import { Component,OnInit } from '@angular/core';
import { UsuarioModel } from '../servicio-usuarios/usuario.model';
import { Route,Router,ActivatedRoute,ParamMap,Params } from '@angular/router';
import { citasModel } from '../servicio-usuarios/usuario.model';
import { UsuarioService } from '../servicio-usuarios/usuario.service';

@Component({
  selector: 'app-editarcitas',
  templateUrl: './editarcitas.component.html',
  styleUrls: ['./editarcitas.component.css']
})
export class EditarcitasComponent implements OnInit {

  usuario=new citasModel("","","","","","","");
  id_cita :any;

  constructor  (
    private UsuarioService:UsuarioService,
    private Router:ActivatedRoute,
    private router:Router   
  ){ }
  ngOnInit(): void {
    this.id_cita=this.Router.snapshot.params["id_cita"]
    this.UsuarioService.editarcita(this.id_cita).subscribe(data => {
      this.usuario=data[0]
      console.log(data[0])

    });
  } 
  onSubmit() {
    this.UsuarioService.actualizarcitas(this.usuario).subscribe(data => {
      alert(data)
      this.router.navigate(['../citas/:id_cita']);
      console.log(data)
})
  }

}
