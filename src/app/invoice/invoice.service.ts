import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { throwError as observableThrowError, Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { Invoice } from '../models/invoice.interface';

@Injectable({
  providedIn: 'root'
})
export class InvoiceService {
  constructor(private _http: HttpClient) { }

  createInvoice(invoice: Invoice, id: string): Observable<any> {
    return this._http.post(`${environment.apiUri}/api/invoice/${id}`, invoice).pipe(
        catchError((err) => observableThrowError(err))
    );
}

readInvoice(id: string): Observable<any> {
    return this._http.get(`${environment.apiUri}/api/invoice/${id}`).pipe(
        catchError((err) => observableThrowError(err))
    );
}


updateInvoice(invoice: Invoice, id: string): Observable<any> {
    return this._http.put(`${environment.apiUri}/api/invoice/${id}`, invoice).pipe(
        catchError((err) => observableThrowError(err))
    );
}

deleteInvoice(id: string): Observable<any> {
    return this._http.delete(`${environment.apiUri}/api/invoice/${id}`).pipe(
        catchError((err) => observableThrowError(err))
    );
}
}
