import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { throwError as observableThrowError, Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { Economies } from '../models/economies.interface';

@Injectable({
  providedIn: 'root'
})
export class EconomiesService {
  constructor(private _http: HttpClient) { }
   
  createEconomies(economies: Economies, id: string): Observable<any> {
      return this._http.post(`${environment.apiUri}/api/economies/${id}`, economies).pipe(
          catchError((err) => observableThrowError(err))
      );
  }

  readEconomies(id: string): Observable<any> {
      return this._http.get(`${environment.apiUri}/api/economies/${id}`).pipe(
          catchError((err) => observableThrowError(err))
      );
  }


  updateEconomies(economies: Economies, id: string): Observable<any> {
      return this._http.put(`${environment.apiUri}/api/economies/${id}`, economies).pipe(
          catchError((err) => observableThrowError(err))
      );
  }

  deleteEconomies(id: string): Observable<any> {
      return this._http.delete(`${environment.apiUri}/api/economies/${id}`).pipe(
          catchError((err) => observableThrowError(err))
      );
  }
}
