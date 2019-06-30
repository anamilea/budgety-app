import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { throwError as observableThrowError, Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { Income } from '../models/income.interface';

@Injectable({
  providedIn: 'root'
})
export class IncomeService {
  constructor(private _http: HttpClient) { }
   
  createIncome(income: Income, id: string): Observable<any> {
    return this._http.post(`${environment.apiUri}/api/income/${id}`, income).pipe(
          catchError((err) => observableThrowError(err))
      );
  }

  readIncome(id: string): Observable<any> {
        return this._http.get(`${environment.apiUri}/api/income/${id}`).pipe(
          catchError((err) => observableThrowError(err))
      );
  }


  updateIncome(income: Income, id: string): Observable<any> {
      return this._http.put(`${environment.apiUri}/api/income/${id}`, income).pipe(
          catchError((err) => observableThrowError(err))
      );
  }

  deleteIncome(id: string): Observable<any> {
      return this._http.delete(`${environment.apiUri}/api/income/${id}`).pipe(
          catchError((err) => observableThrowError(err))
      );
  }
}
