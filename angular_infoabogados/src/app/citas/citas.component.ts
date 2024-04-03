import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Route,Params,} from '@angular/router';
import { Observable } from 'rxjs';
import { UsuarioModel ,citasModel } from '../servicio-usuarios/usuario.model';
import { UsuarioService } from '../servicio-usuarios/usuario.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-citas',
  templateUrl: './citas.component.html',
  styleUrls: ['./citas.component.css']
})
export class CitasComponent implements OnInit{
  citas:Observable<citasModel[]> | undefined;
  cit: any;
  id_cita:any;
  router: any;
  constructor(
    private usuarioService: UsuarioService,
    private route: ActivatedRoute
  ) {}
  ngOnInit(): void {
    this.id_cita= this.route.snapshot.params['id_cita'];
    this.citas=this.usuarioService.citasadmi();

  }borrarUsuario(id_usuario: string) {
    this.usuarioService.borrarUsuario(id_usuario).subscribe(data => {
      window.location.reload();
    })
  }


}






