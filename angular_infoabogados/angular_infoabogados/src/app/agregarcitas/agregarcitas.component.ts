import { Component,OnInit } from '@angular/core';
import { UsuarioService } from '../servicio-usuarios/usuario.service';
import { Route,Router,ActivatedRoute,ParamMap,Params } from '@angular/router';
import { citasModel } from '../servicio-usuarios/usuario.model';

@Component({
  selector: 'app-agregarcitas',
  templateUrl: './agregarcitas.component.html',
  styleUrls: ['./agregarcitas.component.css']
})
export class AgregarcitasComponent implements OnInit {
  usuario =new citasModel("","","","","","","");

  constructor(
    private  UsuarioService: UsuarioService,
    private route: ActivatedRoute,
    private router: Router

  ){ }

  ngOnInit(): void {
    
  }
   
  onSubmit(){
    this.UsuarioService.agregarcitas(this.usuario).subscribe(data => {
      alert(data)
      this.router.navigate(['../citas/:id_cita'])

    
    }) 
  }

}
