import { Component, OnInit, Inject } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { SnotifyService } from 'ng-snotify';

import { Expense } from 'src/app/models/expense.interface';
import { ExpenseService } from '../expense.service';
import { ExpenseComponent } from '../expense.component';

@Component({
  selector: 'app-create-expense',
  templateUrl: './create-expense.component.html',
  styleUrls: ['./create-expense.component.css']
})
export class CreateExpenseComponent implements OnInit {

  errorMessage = '';
  expenseForm: FormGroup;
  submittedForm = false;

  constructor(private _expenseService: ExpenseService,
    public snotify: SnotifyService,
    public dialogRef: MatDialogRef<ExpenseComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit() {
    this.expenseForm = new FormGroup({
      name: new FormControl('', [Validators.required]),
      price: new FormControl('', [Validators.required]),
      date:  new FormControl('', [Validators.required])
    });
  }

  get name() { return this.expenseForm.get('name'); }
  get price() { return this.expenseForm.get('price'); }
  get date() { return this.expenseForm.get('date'); }

  saveExpense() {
    if (this.isFormValid()) {
      this.submittedForm = true;
      let expense: Expense = this.expenseForm.value;
      this._expenseService.createExpense(expense).subscribe(
        res => {
          expense = res;
          this.dialogRef.close(
            { expense: expense }
          );
          this.snotify.success('Expense ' + expense.name + ' was successfully created.');
        },
        err => {
          this.setErrorMessages(err);
        }
      );
    }
  }

  setErrorMessages(err: any) {
    if (String(err.error).includes('UNIQUE KEY')) {
      this.submittedForm = false;
      this.errorMessage = 'Expense price already exists.';
      this.expenseForm.setErrors({ wrong: true });
    } else {
      this.dialogRef.close();
      this.snotify.error('The server encountered an error while processing the request.');
    }
  }

  close() {
    this.dialogRef.close();
  }

  isFormValid() {
    this.expenseForm.setErrors({ wrong: null });
    this.expenseForm.updateValueAndValidity();
    Object.keys(this.expenseForm.controls).forEach(key => {
      const control = this.expenseForm.get(key);
      control.markAsTouched();
    });
    return this.expenseForm.valid;
  }

  hasError() {
    return this.name.invalid && (this.name.touched || this.name.dirty) ||
      this.price.invalid && (this.price.touched || this.price.dirty) ||
      this.date.invalid && (this.date.touched || this.date.dirty) ||
      this.expenseForm.hasError('wrong');
  }

  getError() {
    return (this.name.hasError('required') || 
    this.price.hasError('required')  || this.date.hasError('required') )? 
    'Completați toate câmpurile obligatorii.' : this.errorMessage;
  }
}