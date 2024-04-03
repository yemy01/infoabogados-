import { Component , OnInit } from '@angular/core';
import { UsuarioService } from '../servicio-usuarios/usuario.service';
import { Route, Router, ActivatedRoute, ParamMap, Params } from '@angular/router';
import { UsuarioModel } from '../servicio-usuarios/usuario.model';
@Component({
  selector: 'app-editarusuario',
  templateUrl: './editarusuario.component.html',
  styleUrls: ['./editarusuario.component.css']
})
export class EditarusuarioComponent implements OnInit {
  usuario=new UsuarioModel("","","","","","","","");
  id_usuario :any;

  constructor (
    private UsuarioService: UsuarioService,
    private Router:ActivatedRoute,
    private router:Router
  ) { }
  ngOnInit(): void { 

    this.id_usuario=this.Router.snapshot.params["id_usuario"]
    this.UsuarioService.editarusuario(this.id_usuario).subscribe(data => {
      this.usuario=data[0]
    }
    );
      console.log("hola")

    
  }

  onSubmit() {
    this.UsuarioService.actualizarusario(this.usuario).subscribe(data => {
            alert(data)
            this.router.navigate(['../vistadministrador/:rol/']);
      })

      // }borrarUsuario(id_usuario: string) {
      //   this.UsuarioService.borrarUsuario(id_usuario).subscribe(data => {
      //     console.log(data);
      //   })
      // }
}}
         

    
 



