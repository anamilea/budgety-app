import { Component, OnInit } from '@angular/core';
import { DeleteExpenseComponent } from '../delete-expense/delete-expense.component';
import { MatDialog } from '@angular/material';
import { EditExpenseComponent } from '../edit-expense/edit-expense.component';

import {ICellRendererAngularComp} from 'ag-grid-angular';

@Component({
  selector: 'app-expense-actions-renderer',
  templateUrl: './expense-actions-renderer.component.html',
  styleUrls: ['./expense-actions-renderer.component.css']
})
export class ExpenseActionsRendererComponent  implements ICellRendererAngularComp {

  public params: any;
  public gridApi;

  agInit(params: any): void {
    this.params = params;
    this.gridApi = params.api;
  }

  refresh(): boolean {
    return false;
  }

  constructor(private dialog: MatDialog) { }

  editExpense() {
    const dialogRef = this.dialog.open(EditExpenseComponent, {
      minWidth: '100%',
      height: '100%',
      data: {
        expense: this.params.node.data
      }
    }).afterClosed().subscribe(res => {
      if (res) {
        this.params.node.setData(res);
      }
    });
  }

  deleteExpense() {
    const dialogRef = this.dialog.open(DeleteExpenseComponent, {
      minWidth: '100%',
      height: '100%',
      data: {
        expense: this.params.node.data
      }
    }).afterClosed().subscribe(res => {
      if (res) {
        this.gridApi.updateRowData({ remove: [res] });
      }
    });
  }

}