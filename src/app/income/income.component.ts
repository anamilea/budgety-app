import { Component, OnInit } from '@angular/core';
import { IncomeService } from './income.service';
import { IncomeActionsRendererComponent } from './income-actions-renderer/income-actions-renderer.component';
import { CreateIncomeComponent } from './create-income/create-income.component';
import { Income } from '../models/income.interface';
import { MatDialog } from '@angular/material';
import { AuthService } from '../auth/auth.service';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-income',
  templateUrl: './income.component.html',
  styleUrls: ['./income.component.css']
})
export class IncomeComponent implements OnInit {

  columnDefs;
  rowData: any;
  gridApi;
  frameworkComponents;
  gridOptions;


  constructor(private _incomeService: IncomeService, public dialog: MatDialog, private _authService: AuthService,
    public datePipe: DatePipe) {
    this.columnDefs = [
      { headerName: 'Denumire', field: 'name', filter: 'agTextColumnFilter', sortable: true },
      { headerName: 'Valoare (RON)', field: 'value', filter: 'agNumberColumnFilter', sortable: true },
      { headerName: 'Acțiuni', field: 'actions', cellRenderer: 'actionsRenderer' }

    ];
    this.gridOptions = {
      columnDefs: this.columnDefs,
      enableFilter: true,
      enableSorting: true,
      pagination: true
    };
    this.frameworkComponents = {
      actionsRenderer: IncomeActionsRendererComponent
    };
  }

  ngOnInit() {
    this.setRowData();
    
  }

  setRowData() {
    this._incomeService.readIncome(this._authService.userID).subscribe(res => {
      this.rowData = res;
    });
  }

  onGridReady(params: any) {
    this.gridApi = params.api;
    this.gridApi.sizeColumnsToFit();
  }


  newIncomePopUp(): void {
    const dialogRef = this.dialog.open(CreateIncomeComponent, {
      autoFocus: false,
      disableClose: true,
      minWidth: '50%',
      height: '50%'
    });
    dialogRef.afterClosed().subscribe(res => {
      if (res) {
        let income: Income = res.income[0];
        this.gridApi.updateRowData({ add: [income] });
      }
    });
  }
}
