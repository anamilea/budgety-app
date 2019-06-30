import { Component, OnInit, Inject } from '@angular/core';
import { InvoiceService } from '../invoice.service';
import { InvoiceComponent } from '../invoice.component';
import { SnotifyService } from 'ng-snotify';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { Invoice } from 'src/app/models/invoice.interface';

@Component({
  selector: 'app-delete-invoice',
  templateUrl: './delete-invoice.component.html',
  styleUrls: ['./delete-invoice.component.css']
})
export class DeleteInvoiceComponent implements OnInit {

  constructor(private _incomeService: InvoiceService,
    public _snotify: SnotifyService,
    public _dialogRef: MatDialogRef<InvoiceComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit() {
  }

  deleteInvoice() {
    const invoice: Invoice = this.data.invoice;
    this._incomeService.deleteInvoice(this.data.invoice.id).subscribe(res => {
      this._dialogRef.close(invoice);
      this._snotify.success('Invoice ' + invoice.name + ' was successfully deleted.');
    }, err => {
      this.close();
      this._snotify.error('The server encountered an error while processing the request.');
    });
  }

  close() {
    this._dialogRef.close();
  }

}
