import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Esc } from '../models/esc';

@Injectable({
  providedIn: 'root'
})
export class ServsService {
  servs = 'http://localhost:8080/prod/';

  constructor(private httpClient: HttpClient) { }

  public lista(): Observable<Esc[]> {
    const httpOptions = {
      headers: new HttpHeaders(
      { 
         'Authorization': 'Bearer ' + sessionStorage.getItem("AuthToken"),
         'Content-Type': 'application/json'
      })
    }
    return this.httpClient.get<Esc[]>(this.servs + 'lista',httpOptions);
  }

  public detail(id: number): Observable<Esc> {
    return this.httpClient.get<Esc>(this.servs + `detail/${id}`);
  }

  public detailName(nombre: string): Observable<Esc> {
    return this.httpClient.get<Esc>(this.servs + `detailname/${nombre}`);
  }

  public save(producto: Esc): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders(
      { 
         'Authorization': 'Bearer ' + sessionStorage.getItem("AuthToken"),
         'Content-Type': 'application/json'
      })
    }
    return this.httpClient.post<any>(this.servs + 'create', producto, httpOptions);
  }

  public delete(id: number): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders(
      { 
         'Authorization': 'Bearer ' + sessionStorage.getItem("AuthToken"),
         'Content-Type': 'application/json'
      })
    }
    return this.httpClient.delete<any>(this.servs + `delete/${id}`, httpOptions);
  }
}
