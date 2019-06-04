import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { throwError as observableThrowError, Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { Expense } from '../models/expense.interface';

@Injectable()
export class ExpenseService {
    constructor(private _http: HttpClient) { }
   
    createExpense(Expense: Expense, id: string): Observable<any> {
        return this._http.post(`${environment.apiUri}/expenses/${id}`, Expense).pipe(
            catchError((err) => observableThrowError(err))
        );
    }

    readExpenses(id: string): Observable<any> {
    console.log("TCL: ExpenseService -> constructor -> id", id);
        
        return this._http.get(`${environment.apiUri}/expenses/${id}`).pipe(
            catchError((err) => observableThrowError(err))
        );
    }


    updateExpense(Expense: Expense, id: number): Observable<any> {
        return this._http.put(`${environment.apiUri}/expenses/${id}`, Expense).pipe(
            catchError((err) => observableThrowError(err))
        );
    }

    deleteExpense(id: number): Observable<any> {
        return this._http.delete(`${environment.apiUri}/expenses/${id}`).pipe(
            catchError((err) => observableThrowError(err))
        );
    }
}
