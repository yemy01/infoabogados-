import { Component , OnInit } from '@angular/core';
import { ActivatedRoute,Route,Params,} from '@angular/router';
import { Observable } from 'rxjs';
import { UsuarioModel ,citasModel } from '../servicio-usuarios/usuario.model';
import { UsuarioService } from '../servicio-usuarios/usuario.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-vistadministrador',
  templateUrl:'./vistadministrador.component.html',
  styleUrls: ['./vistadministrador.component.css']
})
export class VistadministradorComponent implements OnInit{
  usuarios:Observable<UsuarioModel[]> | undefined;
  citas:Observable<citasModel[]> | undefined;
  public  oculto=true;
  public rol= "";

 
adm: any;
  router: any;
  constructor(
    private usuarioService: UsuarioService,
    private route: ActivatedRoute
  ) {}
  ngOnInit(): void {
    this.rol= this.route.snapshot.params['rol'];

    this.usuarios=this.usuarioService.administrador();
    this.citas=this.usuarioService.citasadmi();

  }borrarUsuario(id_usuario: string) {
    this.usuarioService.borrarUsuario(id_usuario).subscribe(data => {
      window.location.reload();
    })
  }

  
    

}
