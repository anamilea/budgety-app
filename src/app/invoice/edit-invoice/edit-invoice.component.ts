import { Component, OnInit, Inject } from '@angular/core';
import { InvoiceComponent } from '../invoice.component';
import { Invoice } from 'src/app/models/invoice.interface';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { InvoiceService } from '../invoice.service';
import { AuthService } from 'src/app/auth/auth.service';
import { SnotifyService } from 'ng-snotify';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-edit-invoice',
  templateUrl: './edit-invoice.component.html',
  styleUrls: ['./edit-invoice.component.css']
})
export class EditInvoiceComponent implements OnInit {

  errorMessage = '';
  invoiceForm: FormGroup;
  submittedForm = false;
  constructor(private _invoiceService: InvoiceService,
    private _authService: AuthService,
    public _snotify: SnotifyService,
    public _dialogRef: MatDialogRef<InvoiceComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit() {
    this.invoiceForm = new FormGroup({
      name: new FormControl(this.data.invoice.name, [Validators.required]),
      value: new FormControl(this.data.invoice.value,  [Validators.required]),
    });
  }

  get name() { return this.invoiceForm.get('name'); }
  get value() { return this.invoiceForm.get('value'); }

  isFormValid() {
    this.invoiceForm.setErrors({ wrong: null });
    this.invoiceForm.updateValueAndValidity();
    Object.keys(this.invoiceForm.controls).forEach(key => {
      const control = this.invoiceForm.get(key);
      control.markAsTouched();
    });
    return this.invoiceForm.valid;
  }

  saveInvoiceUpdates() {
    if (this.isFormValid()) {
      this.submittedForm = true;
    let invoice: Invoice = this.invoiceForm.value;
    
      this._invoiceService.updateInvoice(invoice, this.data.invoice.id).subscribe(
        res => {
          this._dialogRef.close(invoice);
          this._snotify.success('Invoice ' + invoice.name + ' was successfully updated.');
        },
        err => {
          this.setErrorMessages(err);
        }
      );
    }
  }

  setErrorMessages(err: any) {
      this._dialogRef.close();
      this._snotify.error('The server encountered an error while processing the request.');
    }

  close() {
    this._dialogRef.close();
  }

  hasError() {
    return this.name.invalid && (this.name.touched || this.name.dirty) ||
      this.value.invalid && (this.value.touched || this.value.dirty) ||
      this.invoiceForm.hasError('wrong');
  }

  getError() {
    if (this.value.invalid) {
      this.errorMessage = 'Email for value is not valid.';
    }
    return this.name.hasError('required') || this.value.hasError('required') ? 'All fields are required.'
      : this.errorMessage;
  }

}
