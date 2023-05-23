import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ClientesService {

  constructor(private _http: HttpClient) { }

  addCliente(data: any): Observable<any>{
    return this._http.post('http://localhost:3000/employees', data); //Preguntar donde poner token
  }

  updateCliente(id: number, data: any): Observable<any>{
    return this._http.put(`http://localhost:3000/employees/${id}`, data);
   
  }

  getClienteList(): Observable<any>{
    return this._http.get('http://localhost:3000/employees');
  }

  deleteCliente(id: number): Observable<any> {
    return this._http.delete(`http://localhost:3000/employees/${id}`);
  }
}