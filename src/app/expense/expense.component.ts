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
  isChartReady = false;
  categories = [
    { name: 'Mâncare' },
    { name: 'Cumpărături' },
    { name: 'Haine' },
    { name: 'Pentru casă' },
    { name: 'Cadouri' },
    { name: 'Mașină' },
    { name: 'Altele' }
  ];
  people = [
    'Mama',
    'Tata',
    'Ana',
    'Diana',
    'Cristi', 
    'Iulia'];
  chartCategories: any;
  highcharts;
  highchartsPeople;
  chartOptions;
  chartOptionsPeople;
  categoriesData = [];
  peopleData = [];



  constructor(private _expenseService: ExpenseService, public dialog: MatDialog, private _authService: AuthService,
    public datePipe: DatePipe) {
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
      this.setChartData();
    });
  }

  onGridReady(params: any) {
    this.gridApi = params.api;
    this.gridApi.sizeColumnsToFit();
  }

  setChartData() {

    this.categories.forEach(category => {
      this.count[category.name] = 0;
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

    //set data pt chart
    this.categories.forEach(category => {
      this.categoriesData.push([category.name, this.count[category.name]]);
    });

    //set data pt chart
    this.people.forEach( person => {
      this.peopleData.push([person, this.count[person]]);
    });


    this.setCategoriesChart();

    this.setPeopleChart();

  }

  private setPeopleChart() {
    this.highchartsPeople = Highcharts;
    this.chartOptionsPeople = {
      chart: {
        plotBorderWidth: null,
        plotShadow: false
      },
      title: {
        text: 'Total cheltuieli în funcție de persoane'
      },
      tooltip: {
        pointFormat: '{series.name}: {point.y:.1f} RON.'
      },
      plotOptions: {
        pie: {
          allowPointSelect: true,
          cursor: 'pointer',
          dataLabels: {
            enabled: false
          },
          showInLegend: true
        }
      },
      series: [{
        type: 'pie',
        name: 'Suma cheltuită:',
        data: this.peopleData
      }]
    };
  }

  private setCategoriesChart() {
    this.isChartReady = true;
    this.highcharts = Highcharts;
    this.chartOptions = {
      chart: {
        plotBorderWidth: null,
        plotShadow: false
      },
      title: {
        text: 'Total cheltuieli pe categorii'
      },
      tooltip: {
        pointFormat: '{series.name}: {point.y:.1f} RON.'
      },
      plotOptions: {
        pie: {
          allowPointSelect: true,
          cursor: 'pointer',
          dataLabels: {
            enabled: false
          },
          showInLegend: true
        }
      },
      series: [{
        type: 'pie',
        name: 'Suma cheltuită:',
        data: this.categoriesData
      }]
    };
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
}
