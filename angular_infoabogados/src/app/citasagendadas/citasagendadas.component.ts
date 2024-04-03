import { Component,OnInit } from '@angular/core';
import { ActivatedRoute,Route,Params } from '@angular/router';
import { citasModel } from '../servicio-usuarios/usuario.model';
import { Observable } from 'rxjs';
import { UsuarioService } from '../servicio-usuarios/usuario.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-citasagendadas',
  templateUrl: './citasagendadas.component.html',
  styleUrls: ['./citasagendadas.component.css']
})
export class CitasagendadasComponent implements OnInit {
  citas:Observable<citasModel[]> | undefined;
  public oculto=true;
  public idusuario="";
  cit:any

  constructor(
    private UsuarioService:UsuarioService,
    private route:ActivatedRoute

  ){}

  ngOnInit(): void {
    this.idusuario=this.route.snapshot.params['idusuario'];

    this.citas=this.UsuarioService.citasagendadas(this.idusuario)
    console.log(this.idusuario)
  }

}
