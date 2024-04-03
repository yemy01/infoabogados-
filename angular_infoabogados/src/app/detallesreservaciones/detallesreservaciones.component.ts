import { Component , OnInit} from '@angular/core';
import { ActivatedRoute, Route, Params } from '@angular/router';
import { reservacionesModel } from '../servicio-usuarios/usuario.model';
import { UsuarioService } from '../servicio-usuarios/usuario.service';
import { Observable } from 'rxjs'

@Component({
  selector: 'app-detallesreservaciones',
  templateUrl: './detallesreservaciones.component.html',
  styleUrls: ['./detallesreservaciones.component.css']
})
export class DetallesreservacionesComponent implements OnInit {
  reservaciones: Observable<reservacionesModel[]> | undefined;
  public oculto = true;
  public  id_reserva = "";
// res: any;
  // route: any;

  constructor(
    private usuarioService: UsuarioService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(){
    this.id_reserva = this.route.snapshot.params['id_reserva'];
    


    this.reservaciones = this.usuarioService.obtenerrservacionoporid(this.id_reserva)
    // console.log(this.reservaciones.Profesional)
    // window.location.reload();
  }
}
