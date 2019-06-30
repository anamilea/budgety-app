import { Component, OnInit, Inject } from '@angular/core';
import { FormGroup, FormControl, Validators, AbstractControl } from '@angular/forms';
import { InvoiceService } from '../invoice.service';
import { SnotifyService } from 'ng-snotify';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { InvoiceComponent } from '../invoice.component';
import { AuthService } from 'src/app/auth/auth.service';
import { Invoice } from 'src/app/models/invoice.interface';

@Component({
  selector: 'app-create-invoice',
  templateUrl: './create-invoice.component.html',
  styleUrls: ['./create-invoice.component.css']
})
export class CreateInvoiceComponent implements OnInit {
 
  errorMessage = '';
  invoiceForm: FormGroup;
  submittedForm = false;
  reccurences = [ {name: 'O dată pe lună', value: 1},
{name:'O dată la trei luni', value: 3},
{name:'O dată la șase luni', value: 6}, 
{name: 'O dată pe an', value: 12}];

  constructor(private _invoiceService: InvoiceService,
    public snotify: SnotifyService,
    public dialogRef: MatDialogRef<InvoiceComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private _authService: AuthService) { 

    }

  ngOnInit() {
    this.invoiceForm = new FormGroup({
      name: new FormControl('', [Validators.required]),
      price: new FormControl('', [Validators.required]),
      reccurence: new FormControl('', [Validators.required])
    });
  
  }

  get name() { return this.invoiceForm.get('name'); }
  get price() { return this.invoiceForm.get('price'); }
  get reccurence() { return this.invoiceForm.get('reccurence'); }


  saveInvoice() {
    if (this.isFormValid())  {
      this.submittedForm = true;
      let invoice: Invoice = this.invoiceForm.value; 
    
      this._invoiceService.createInvoice(invoice, this._authService.userID).subscribe(
        res => {
          invoice = res;       
          this.dialogRef.close({ invoice: invoice});
          this.snotify.success('Invoice ' + invoice.name + ' was successfully created.');
        },
        err => {
          this.setErrorMessages(err);
        }
      );
    }
  }

  setErrorMessages(err: any) {
      this.dialogRef.close();
      this.snotify.error('The server encountered an error while processing the request.');
  }

  close() {
    this.dialogRef.close();
  }

  isFormValid() {
    this.invoiceForm.setErrors({ wrong: null });
    this.invoiceForm.updateValueAndValidity();
    Object.keys(this.invoiceForm.controls).forEach(key => {
      const control = this.invoiceForm.get(key);
      control.markAsTouched();
    });
    return this.invoiceForm.valid;
  }

  hasError() {
    return this.name.invalid && (this.name.touched || this.name.dirty) ||
      this.price.invalid && (this.price.touched || this.price.dirty) ||
      this.invoiceForm.hasError('wrong');
  }

  getError() {
    return this.name.hasError('required') || 
    this.price.hasError('required') ? 
    'Completați toate câmpurile obligatorii.' : this.errorMessage;
  }

}
