import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HTTP_INTERCEPTORS,HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { TokenService } from '../servicios/token.service';

@Injectable({
  providedIn: 'root'
})
export class EscIService implements HttpInterceptor {

  constructor(private tokenService: TokenService) {
    
  }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    let intReq = req;
    const token = this.tokenService.getToken();
    const httpOptions = {
      headers: new HttpHeaders(
      { 
         'Authorization': 'Bearer' + localStorage.getItem("token"),
         'Content-Type': 'application/json'
      })
    }
    console.log("token")
    if(token != null){
      intReq = req.clone({headers: req.headers.set('Authorization', 'Bearer' + localStorage.getItem("token"))});
    }
    return next.handle(intReq);
  }
}

export const interceptorProvider = [{provide: HTTP_INTERCEPTORS, useClass: EscIService, multi: true}];