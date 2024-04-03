import { Component,OnInit } from '@angular/core';
import { Route,Router,ActivatedRoute,ParamMap,Params } from '@angular/router';
import { UsuarioModel ,citasModel } from '../servicio-usuarios/usuario.model';
import { UsuarioService } from '../servicio-usuarios/usuario.service';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {
  usuario=new UsuarioModel("","","","","","","","");
  constructor (
    private usuarioService:UsuarioService,
    private route:ActivatedRoute,
    private router:Router
  ) { }
  ngOnInit(){

  } 
  onSubmit(){
    this.usuarioService.login(this.usuario).subscribe(data => {
      console.log(data)
        this.usuarioService.loginrol(this.usuario).subscribe(data2 => {
          let dato:any = data2[0]
          let rol = dato['rol'];
          console.log(rol)
           this.usuarioService.loginid(this.usuario).subscribe(data3 =>{
            let dato_id:any = data3[0]
            let idusuario =dato_id['id_usuario'];
            console.log(idusuario)
            if (rol == 'cliente') {
              this.router.navigate(['../reservaciones/',idusuario]);
            } else if (rol == 'administrativo' || rol== 'penal'|| rol=='civil' || rol=='comercial' || rol=='laboral' || rol=='familiar') {
              this.router.navigate(['../detallescitas/',rol]);
              console.log(data2)
            
            } else if(rol == 'administrador') {
              console.log("entro")
              this.router.navigate(['../vistaadprincipal/']);
            }
          })
            
            
          })      
     
    });
  }
}

