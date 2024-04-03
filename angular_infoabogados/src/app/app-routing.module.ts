import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './inicio/inicio.component';
import { MenuComponent } from './menu/menu.component';
import { MenuInicioComponent } from './menu-inicio/menu-inicio.component';
import { RecordarClaveComponent } from './recordar-clave/recordar-clave.component';
import { ReservacionesComponent } from './reservaciones/reservaciones.component';
import { RegistroComponent } from './registro/registro.component';
import { DetallescitasComponent } from './detallescitas/detallescitas.component';
import { DetallesreservacionesComponent } from './detallesreservaciones/detallesreservaciones.component';
import { VistadministradorComponent } from './vistadministrador/vistadministrador.component';
import { EditarusuarioComponent } from './editarusuario/editarusuario.component';
import { CitasComponent } from './citas/citas.component';
import { VistaadprincipalComponent } from './vistaadprincipal/vistaadprincipal.component';
import { EditarcitasComponent } from './editarcitas/editarcitas.component';
import { AgregarcitasComponent } from './agregarcitas/agregarcitas.component';
import { CitasagendadasComponent } from './citasagendadas/citasagendadas.component';

const routes: Routes = [
  {path:"inicio",component:InicioComponent},
  {path:"registro",component:RegistroComponent},
  {path:"reservaciones/:idusuario",component:ReservacionesComponent},
  {path:"menu_inicio",component:MenuInicioComponent},
  {path:"recordar_clave",component:RecordarClaveComponent},
  {path:"menu",component:MenuComponent},
  {path:"inicio",component:MenuComponent},
  {path:"vistaadprincipal",component:VistaadprincipalComponent},
  {path:"detallesreservaciones/:id_reserva",component:DetallesreservacionesComponent},
  {path:"detallescitas/:rol",component:DetallescitasComponent},
  {path:"vistadministrador/:rol",component:VistadministradorComponent},
  {path:"editarcitas/:id_cita",component:EditarcitasComponent},
  {path:"editarusuario/:id_usuario",component:EditarusuarioComponent},
  {path:"citas/:id_cita",component:CitasComponent},
  {path:"agregarcitas/:idusuario",component:AgregarcitasComponent},
  {path:"citasagendadas/:idusuario",component:CitasagendadasComponent},
  {path:"",pathMatch:"full",redirectTo:"/menu"},
  {path:"**",pathMatch:"full",redirectTo:"/menu"},
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
