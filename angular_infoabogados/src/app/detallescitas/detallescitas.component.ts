import { Component , OnInit} from '@angular/core';
import { ActivatedRoute,Route,Params,} from '@angular/router';
import { citasModel } from '../servicio-usuarios/usuario.model';
import { Observable } from 'rxjs';
import { UsuarioService } from '../servicio-usuarios/usuario.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-detallescitas',
  templateUrl: './detallescitas.component.html',
  styleUrls: ['./detallescitas.component.css']
})
export class DetallescitasComponent implements OnInit {
  citas:Observable<citasModel[]> | undefined;
  public  oculto=true;
  public rol= "";
cit: any;
  router: any;
  constructor(
    private usuarioService: UsuarioService,
    private route: ActivatedRoute
  ) {}
   
  ngOnInit(): void {
    this.rol= this.route.snapshot.params['rol'];

    this.citas=this.usuarioService.obtenercitaporrol(this.rol);
    let us=this.usuarioService.obtenercitaporrol(this.rol)
    console.log(us)
    console.log(this.rol)

  }
  aceptarCita(id_cita: string) {
    this.usuarioService.aceptarcita(id_cita).subscribe(data => {
      console.log(data);
    })
  }
  rechazarcita(id_cita: string) {
    this.usuarioService.rechazarcita(id_cita).subscribe(data => {
      window.location.reload();
    })
  
}
onSubmit() {
  this.router.navigate(['../detallesreservaciones'])

}
}
