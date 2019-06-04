import { Component, OnInit } from '@angular/core';
import { ExpenseService } from './expense.service';
import { MatDialog } from '@angular/material';
import { ExpenseActionsRendererComponent } from './expense-actions-renderer/expense-actions-renderer.component';
import { CreateExpenseComponent } from './create-expense/create-expense.component';
import { AuthService } from '../auth/auth.service';

@Component({
  selector: 'app-expense',
  templateUrl: './expense.component.html',
  styleUrls: ['./expense.component.css']
})
export class ExpenseComponent implements OnInit {
  columnDefs;
  rowData = [];
  gridApi;
  frameworkComponents;
  gridOptions;

  constructor(private _expenseService : ExpenseService, public dialog: MatDialog, private _authService: AuthService) {
    this.columnDefs = [
      { headerName: 'Valoare', field: 'value', width: 10 ,  filter: 'agTextColumnFilter'},
      // { headerName: 'Code', field: 'code', width: 10,  filter: 'agTextColumnFilter' },
      { headerName: 'Actions', field: 'actions', width: 20, cellRenderer: 'actionsRenderer' }
    ];
    this.gridOptions = {
      columnDefs: this.columnDefs,
      enableFilter: true,
      enableSorting: true,
      pagination: true
    };
    this.frameworkComponents = {
      actionsRenderer: ExpenseActionsRendererComponent
    };
   
   
  }

  ngOnInit() {
  this.setRowData();
    this._expenseService.readExpenses(this._authService.userID).subscribe(res => {
      console.log(res);
    });
   
  }

  setRowData() {
    this._expenseService.readExpenses(this._authService.userID).subscribe(res => {
      this.rowData = res;
    });
  }

  onGridReady(params: any) {
    this.gridApi = params.api;
    this.gridApi.sizeColumnsToFit();
  }

  newExpensePopUp(): void {
    const dialogRef = this.dialog.open(CreateExpenseComponent, {
      autoFocus: false,
      disableClose: true,
      minWidth: '50%',
      height: '50%'
    });
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.gridApi.updateRowData({add: [result.expense]});
      }
    });
 }

}
