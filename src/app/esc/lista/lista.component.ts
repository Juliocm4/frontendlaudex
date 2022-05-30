import { Component, OnInit } from '@angular/core';
import { Esc } from '../../models/esc';
import { ServsService } from '../../servicios/servs.service';
import { ToastrService } from 'ngx-toastr';
import { TokenService } from '../../servicios/token.service';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css']
})
export class ListaComponent implements OnInit {

  Escs: Esc[] = [];
  roles: string[];
  isAdmin = false;

  constructor(
    private ServsService: ServsService,
    private toastr: ToastrService,
    private tokenService: TokenService
  ) { }

  ngOnInit() {
    this.cargarProductos();
    this.roles = this.tokenService.getAuthorities();
    console.log("djsdbiajsbd",this.roles)
    this.roles.forEach(rol => {
      if (rol === 'ROLE_ADMIN') {
        this.isAdmin = true;
      }
    });
  }

  cargarProductos(): void {
    this.ServsService.lista().subscribe(
      data => {
        this.Escs = data;
      },
      err => {
        console.log(err);
      }
    );
  }

  borrar(id: any) {
    this.ServsService.delete(id).subscribe(
      data => {
        this.toastr.success('Producto Eliminado', 'OK', {
          timeOut: 3000, positionClass: 'toast-top-center'
        });
        this.cargarProductos();
      },
      err => {
        this.toastr.error(err.error.mensaje, 'Error', {
          timeOut: 3000, positionClass: 'toast-top-center',
        });
      }
    );
  }

}
