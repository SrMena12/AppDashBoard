import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FacgastosService {

  constructor(private _http: HttpClient) { }

  addFac(data: any): Observable<any>{
    return this._http.post('http://localhost:3000/facgastos', data); //Preguntar donde poner token
  }

  updateFac(id: number, data: any): Observable<any>{
    return this._http.put(`http://localhost:3000/facgastos/${id}`, data);
   
  }

  getFacList(): Observable<any>{
    return this._http.get('http://localhost:3000/facgastos');
  }

  deleteFac(id: number): Observable<any> {
    return this._http.delete(`http://localhost:3000/facgastos/${id}`);
  }
}
