import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { throwError as observableThrowError, Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { Expense } from '../models/expense.interface';

@Injectable()
export class ExpenseService {
    constructor(private _http: HttpClient) { }
   
    createExpense(Expense: Expense): Observable<any> {
        return this._http.post(`${environment}/expenses`, Expense).pipe(
            catchError((err) => observableThrowError(err))
        );
    }

    readExpenses(): Observable<any> {
        return this._http.get(`${environment}/expenses`).pipe(
            catchError((err) => observableThrowError(err))
        );
    }


    updateExpense(Expense: Expense): Observable<any> {
        return this._http.put(`${environment}/expenses`, Expense).pipe(
            catchError((err) => observableThrowError(err))
        );
    }

    deleteExpense(id: number): Observable<any> {
        return this._http.delete(`${environment}/expenses/${id}`).pipe(
            catchError((err) => observableThrowError(err))
        );
    }
}
