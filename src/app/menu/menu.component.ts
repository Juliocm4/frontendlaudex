import { Component, OnInit } from '@angular/core';
import { TokenService } from '../servicios/token.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  isLogged = false;
  navbarOpen = false;

  constructor(private router: Router,private tokenService: TokenService) { }

  ngOnInit() {
    if (this.tokenService.getToken()) {
      this.isLogged = true;
    } else {
      this.isLogged = false;
    }
  }

  onLogOut(): void {
    this.tokenService.logOut();
    window.location.reload();
    this.router.navigate(['/login']);
  }

  toggleNavbar() {
    this.navbarOpen = !this.navbarOpen;
  }

}
