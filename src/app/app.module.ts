import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


import { ToastrModule } from 'ngx-toastr';
import { ListaComponent } from './esc/lista/lista.component';
import { NuevoComponent } from './esc/nuevo/nuevo.component';

import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { InicioComponent } from './esc/inicio/inicio.component';
import { LoginComponent } from './auth/login/login.component';
import { RegComponent } from './auth/reg/reg.component';
import { MenuComponent } from './menu/menu.component';
import { EscIService } from './interceptor/esc-i.service';

@NgModule({
  declarations: [
    AppComponent,
    ListaComponent,
    NuevoComponent,
    InicioComponent,
    LoginComponent,
    RegComponent,
    MenuComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule, 
    ToastrModule.forRoot(),
    HttpClientModule,
    FormsModule, ReactiveFormsModule
  ],
  providers: [EscIService],
  bootstrap: [AppComponent]
})
export class AppModule { }
