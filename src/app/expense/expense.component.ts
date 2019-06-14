import { Component, OnInit } from '@angular/core';
import { ExpenseService } from './expense.service';
import { MatDialog } from '@angular/material';
import { ExpenseActionsRendererComponent } from './expense-actions-renderer/expense-actions-renderer.component';
import { CreateExpenseComponent } from './create-expense/create-expense.component';
import { AuthService } from '../auth/auth.service';
import { DatePipe } from '@angular/common';
import { Expense } from '../models/expense.interface';

@Component({
  selector: 'app-expense',
  templateUrl: './expense.component.html',
  styleUrls: ['./expense.component.css']
})
export class ExpenseComponent implements OnInit {
  columnDefs;
  rowData : any;
  gridApi;
  frameworkComponents;
  gridOptions;

  constructor(private _expenseService : ExpenseService, public dialog: MatDialog, private _authService: AuthService,
    public datePipe: DatePipe) {
    this.columnDefs = [
      { headerName: 'Denumire', field: 'name' ,  filter: 'agTextColumnFilter', sortable: true},
      { headerName: 'Valoare (RON)', field: 'value', filter: 'agNumberColumnFilter', sortable: true},
      { headerName: 'Data', field: 'date',  filter: 'agDateColumnFilter', sortable: true},
      {headerName: 'Categorie', field: 'category',filter: 'agTextColumnFilter', sortable: true},
      { headerName: 'Acțiuni', field: 'actions', cellRenderer: 'actionsRenderer' }
      
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
    dialogRef.afterClosed().subscribe(res => {
      if (res) {
      console.log("TCL: ExpenseComponent -> res", res);

    let expense : Expense = res.expense[0];
      expense.date = this.datePipe.transform(expense.date, 'dd MMM, yyyy');
      expense.category = res.expense.category;
        this.gridApi.updateRowData({add: [expense]});
      }
    });
 }

}
