import { Component, OnInit } from '@angular/core';
import { ExpenseService } from './expense.service';
import { MatDialog } from '@angular/material';
import { ExpenseActionsRendererComponent } from './expense-actions-renderer/expense-actions-renderer.component';
import { CreateExpenseComponent } from './create-expense/create-expense.component';
import { AuthService } from '../auth/auth.service';
import { DatePipe } from '@angular/common';
import { Expense } from '../models/expense.interface';
import * as Highcharts from 'highcharts';
import { Categories } from '../models/categories.interface';
import { UsersService } from '../services/users.service';

@Component({
  selector: 'app-expense',
  templateUrl: './expense.component.html',
  styleUrls: ['./expense.component.css']
})
export class ExpenseComponent implements OnInit {
  columnDefs;
  rowData: any;
  gridApi;
  frameworkComponents;
  gridOptions;
  count = [];
  total = 0;

  categories = [
  ];
  people = [
];
  chartCategories: any;

  isHighchartAvailable = false;
  isCategoryVisible = false;
  isPeopleVisible = false;



  constructor(private _expenseService: ExpenseService, public dialog: MatDialog, private _authService: AuthService,
    private _usersService: UsersService,  public datePipe: DatePipe) {
    this.columnDefs = [
      { headerName: 'Denumire', field: 'name', filter: 'agTextColumnFilter', sortable: true },
      { headerName: 'Valoare (RON)', field: 'value', filter: 'agNumberColumnFilter', sortable: true },
      { headerName: 'Data', field: 'date', filter: 'agDateColumnFilter', sortable: true },
      { headerName: 'Categorie', field: 'category', filter: 'agTextColumnFilter', sortable: true },
      { headerName: 'Persoane', field: 'people', filter: 'agTextColumnFilter', sortable: true },
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
    this._usersService.readPeople(this._authService.userID).subscribe(res => {
      if(res) {
        this.people = res.map(obj => obj.name.replace(/\s/g,''));
      }
    });

    this._usersService.readCategories(this._authService.userID).subscribe(res => {
      if(res){
        this.categories = res.map(obj => obj.name.replace(/\s/g,''));
        this.isHighchartAvailable = true;
        this.setChartData();
      }
    });
  }

  onGridReady(params: any) {
    this.gridApi = params.api;
    this.gridApi.sizeColumnsToFit();
  }

  setChartData() {

    this.categories.forEach(category => {
      this.count[category] = 0;
    });

    this.people.forEach(person => {   
      this.count[person] = 0;
    });

    this.rowData.forEach(expense => {
      this.count[expense.category] += expense.value;

      if (expense.people != null) {

        let ppl = expense.people.split(',');

        ppl.forEach(element => {
          this.count[element] += expense.value;
        });
      }
      this.count[expense];
      this.total += expense.value;
    });
  }

  newExpensePopUp(): void {
    const dialogRef = this.dialog.open(CreateExpenseComponent, {
      autoFocus: false,
      disableClose: false,
      minWidth: '50%',
      height: '55%'
    });
    dialogRef.afterClosed().subscribe(res => {
      if (res) {

        let expense: Expense = res.expense[0];
        expense.date = this.datePipe.transform(expense.date, 'dd MMM, yyyy');
        this.gridApi.updateRowData({ add: [expense] });

        // this.count[expense.category ] += expense.value;
        
        // expense.people.forEach(person => {
        //   this.count[person] += expense.value;
        // });
        
      }
    });
  }

  //categories and people

  categoryInput() {
    this.isCategoryVisible = true;
  }

  peopleInput() {
    this.isPeopleVisible = true;
  }

  addPeople(event: any) {
    this._usersService.createPeople(this._authService.userID, event.target.value).subscribe(res => {
      this.isPeopleVisible = false;
      this.people.push(res[0].name);
    });

  }

  addCategory(event: any) {
    this._usersService.createCategory(this._authService.userID, event.target.value).subscribe(res => {
      this.isCategoryVisible = false;
      this.categories.push(res[0].name);
    });
  }
}
