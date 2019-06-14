import { Component, OnInit, Inject } from '@angular/core';
import { ExpenseService } from '../expense.service';
import { ExpenseComponent } from '../expense.component';
import { SnotifyService } from 'ng-snotify';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { Expense } from 'src/app/models/expense.interface';

@Component({
  selector: 'app-delete-expense',
  templateUrl: './delete-expense.component.html',
  styleUrls: ['./delete-expense.component.css']
})
export class DeleteExpenseComponent implements OnInit {

  constructor(private _expenseService: ExpenseService,
    public _snotify: SnotifyService,
    public _dialogRef: MatDialogRef<ExpenseComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit() {
  }

  deleteExpense() {
    const expense: Expense = this.data.expense;
    this._expenseService.deleteExpense(this.data.expense.id).subscribe(res => {
      this._dialogRef.close(expense);
      this._snotify.success('Expense ' + expense.name + ' was successfully deleted.');
    }, err => {
      this.close();
      this._snotify.error('The server encountered an error while processing the request.');
    });
  }

  close() {
    this._dialogRef.close();
  }

}
