import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { throwError as observableThrowError, Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  constructor(private _http: HttpClient) { }

  createPeople(id: string, people: any): Observable<any> {
    let person = {name: people};
    return this._http.post(`${environment.apiUri}/api/user-people/${id}`, person).pipe(
      catchError((err) => observableThrowError(err))
    );
  }

  readPeople(id: string): Observable<any> {
    return this._http.get(`${environment.apiUri}/api/user-people/${id}`).pipe(
      catchError((err) => observableThrowError(err))
    );
  }

  createCategory(id: string, category: string): Observable<any> {
    let categories = {name: category};
    return this._http.post(`${environment.apiUri}/api/user-categories/${id}`, categories).pipe(
      catchError((err) => observableThrowError(err))
    );
  }

  readCategories(id: string): Observable<any> {
    return this._http.get(`${environment.apiUri}/api/user-categories/${id}`).pipe(
      catchError((err) => observableThrowError(err))
    );
  }



}
