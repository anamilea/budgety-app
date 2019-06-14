import { Component, OnInit, Inject } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { SnotifyService } from 'ng-snotify';

import { Expense } from 'src/app/models/expense.interface';
import { ExpenseService } from '../expense.service';
import { ExpenseComponent } from '../expense.component';
import { AuthService } from 'src/app/auth/auth.service';

@Component({
  selector: 'app-create-expense',
  templateUrl: './create-expense.component.html',
  styleUrls: ['./create-expense.component.css']
})
export class CreateExpenseComponent implements OnInit {

  errorMessage = '';
  expenseForm: FormGroup;
  submittedForm = false;
  categories : any[];
  isVisible = false;

  constructor(private _expenseService: ExpenseService,
    public snotify: SnotifyService,
    public dialogRef: MatDialogRef<ExpenseComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private _authService: AuthService) { 

    }

  ngOnInit() {
    this.expenseForm = new FormGroup({
      name: new FormControl('', [Validators.required]),
      price: new FormControl('', [Validators.required]),
      date:  new FormControl('', [Validators.required]),
      category: new FormControl('',[])
    });
    this.categories = [ 
      { name : 'Mâncare'},
      { name : 'Cumpărături'},
      { name : 'Haine'},
      { name : 'Pentru casă'},
      { name : 'Cadouri'},
      { name : 'Mașină'},
      {name: 'Altele'}
    ]
  }

  get name() { return this.expenseForm.get('name'); }
  get price() { return this.expenseForm.get('price'); }
  get date() { return this.expenseForm.get('date'); }
  get category() { return this.expenseForm.get('category');}

  showExpenseDetails() {
    this.isVisible = !this.isVisible;
  }

  saveExpense() {
    if (this.isFormValid()) {
      this.submittedForm = true;
      
      let expense: Expense = this.expenseForm.value; 
    
      this._expenseService.createExpense(expense, this._authService.userID).subscribe(
        res => {
          expense = res;       
          expense.category = this.expenseForm.get('category').value;
          this.dialogRef.close({ expense: expense});
          this.snotify.success('Expense ' + expense.name + ' was successfully created.');
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