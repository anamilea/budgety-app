import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { throwError as observableThrowError, Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { Expense } from '../models/expense.interface';

@Injectable()
export class ExpenseService {
    constructor(private _http: HttpClient) { }
   
    createExpense(expense: Expense, id: string): Observable<any> {
        id = 'auth0|5cffd2df7a541c0d42e41522';
        return this._http.post(`${environment.apiUri}/api/expenses/${id}`, expense).pipe(
            catchError((err) => observableThrowError(err))
        );
    }

    readExpenses(id: string): Observable<any> {
        id = 'auth0|5cffd2df7a541c0d42e41522';
        return this._http.get(`${environment.apiUri}/api/expenses/${id}`).pipe(
            catchError((err) => observableThrowError(err))
        );
    }


    updateExpense(expense: Expense, id: string): Observable<any> {
        return this._http.put(`${environment.apiUri}/api/expenses/${id}`, expense).pipe(
            catchError((err) => observableThrowError(err))
        );
    }

    deleteExpense(id: string): Observable<any> {
        return this._http.delete(`${environment.apiUri}/api/expenses/${id}`).pipe(
            catchError((err) => observableThrowError(err))
        );
    }
}
