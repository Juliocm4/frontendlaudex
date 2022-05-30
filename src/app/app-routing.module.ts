import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './esc/inicio/inicio.component';
import { ListaComponent } from './esc/lista/lista.component';
import { NuevoComponent } from './esc/nuevo/nuevo.component';
import { LoginComponent } from './auth/login/login.component';
import { RegComponent } from './auth/reg/reg.component';
import { EscGuardService as guard } from './guards/esc-guard.service';
const routes: Routes = [
  {path: 'index', component: InicioComponent},
  { path: 'login', component: LoginComponent },
  { path: 'registro', component: RegComponent },
  {path: 'lista', component: ListaComponent,  canActivate: [guard], data: { expectedRol: ['admin', 'user'] }},
  {path: 'nuevo', component: NuevoComponent, canActivate: [guard], data: { expectedRol: ['admin', 'user'] }},
  {path: '**', redirectTo: 'login', pathMatch: 'full'}
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
