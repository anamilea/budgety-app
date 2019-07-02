import { Component, OnInit, Inject } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ExpenseService } from '../expense.service';
import { SnotifyService } from 'ng-snotify';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { ExpenseComponent } from '../expense.component';
import { Expense } from 'src/app/models/expense.interface';
import { AuthService } from 'src/app/auth/auth.service';

@Component({
  selector: 'app-edit-expense',
  templateUrl: './edit-expense.component.html',
  styleUrls: ['./edit-expense.component.css']
})
export class EditExpenseComponent implements OnInit {

  errorMessage = '';
  expenseForm: FormGroup;
  submittedForm = false;
  constructor(private _expenseService: ExpenseService,
    private _authService: AuthService,
    public _snotify: SnotifyService,
    public _dialogRef: MatDialogRef<ExpenseComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit() {
    this.expenseForm = new FormGroup({
      name: new FormControl(this.data.expense.name, [Validators.required]),
      value: new FormControl(this.data.expense.value, [Validators.required]),
    });
  }

  get name() { return this.expenseForm.get('name'); }
  get value() { return this.expenseForm.get('value'); }

  isFormValid() {
    this.expenseForm.setErrors({ wrong: null });
    this.expenseForm.updateValueAndValidity();
    Object.keys(this.expenseForm.controls).forEach(key => {
      const control = this.expenseForm.get(key);
      control.markAsTouched();
    });
    return this.expenseForm.valid;
  }

  saveExpenseUpdates() {
    if (this.isFormValid()) {
      this.submittedForm = true;
      let expense: Expense = this.expenseForm.value;
      expense.date = this.data.expense.date;
      expense.people = this.data.expense.people;
      expense.category = this.data.expense.category;
      this._expenseService.updateExpense(expense, this.data.expense.id).subscribe(
        res => {
          this._dialogRef.close(expense);
          this._snotify.success('Expense ' + expense.name + ' was successfully updated.');
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
      this.expenseForm.hasError('wrong');
  }

  getError() {
    if (this.value.invalid) {
      this.errorMessage = 'Email for value is not valid.';
    }
    return this.name.hasError('required') || this.value.hasError('required') ? 'All fields are required.'
      : this.errorMessage;
  }
}
