import { Component, OnInit } from '@angular/core';
import { Esc } from '../../models/esc';
import { ServsService } from '../../servicios/servs.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nuevo',
  templateUrl: './nuevo.component.html',
  styleUrls: ['./nuevo.component.css']
})
export class NuevoComponent implements OnInit {

  nombre = ''; vn: boolean = false;
  app = ''; ap: boolean = false;
  apm = ''; am: boolean = false;
  fechanac:Date ; fn: boolean = false;
  sexo = ''; sn: boolean = false;
  grado = ''; gn: boolean = false;
  email = ''; emn: boolean = false;
  tel = ''; tn: boolean = false;

  constructor(
    private escservice: ServsService,
    private toastr: ToastrService,
    private router: Router,
    ) { 

    }

  ngOnInit() {
  }

  validation(){
    if(this.nombre.trim() == '' || this.nombre.length < 3){
      this.vn = true
      throw 'Error'
    }else{this.vn = false}
    if(this.app.trim() == '' || this.app.length < 3){
      this.ap = true
      throw 'Error'
    }else{this.ap = false}
    if(this.apm.trim() == '' || this.apm.length < 3){
      this.am = true
      throw 'Error'
    }else{this.am = false}
    if(this.sexo.trim()== ''){
      this.sn = true
      throw 'Error'
    }else{this.sn = false}
    if(this.grado.trim()== ''){
      this.gn = true
      throw 'Error'
    }else{this.gn = false}
    if(this.email.trim()== '' || !this.email.includes('@') || !this.email.includes('.')){
      this.emn = true
      throw 'Error'
    }else{this.emn = false}
    if(this.tel.toString().trim()== '' || this.tel.toString().length < 10 ){
      this.tn = true
      throw 'Error'
    }else{this.tn = false}
    if(this.fechanac.toString().trim()== ''){
      this.fn = true
      throw 'Error'
    }else{this.fn = false}
    this.onCreate()
  }

  onCreate(): void {
    //new Esc();
    const esx = new Esc(this.nombre,this.app,this.apm,this.fechanac,this.sexo,this.grado,this.email,this.tel);
    this.escservice.save(esx).subscribe(
      data => {
        this.toastr.success('Alumno Registrado', 'Hecho', {
          timeOut: 3000, positionClass: 'toast-top-center'
        });
        this.router.navigate(['/lista']);
      },
      err => {
        this.toastr.error(err.error.mensaje, 'Error', {
          timeOut: 3000,  positionClass: 'toast-top-center',
        });
        //this.router.navigate(['/lista']);
      }
    );
  }

}
