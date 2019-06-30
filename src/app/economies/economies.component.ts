import { Component, OnInit } from '@angular/core';
import { EconomiesService } from './economies.service';
import { EconomiesActionsRendererComponent } from './economies-actions-renderer/economies-actions-renderer.component';
import { CreateEconomiesComponent } from './create-economies/create-economies.component';
import { MatDialog } from '@angular/material';
import { AuthService } from '../auth/auth.service';
import { DatePipe } from '@angular/common';
import { Economies } from '../models/economies.interface';

@Component({
  selector: 'app-economies',
  templateUrl: './economies.component.html',
  styleUrls: ['./economies.component.css']
})
export class EconomiesComponent implements OnInit {

  columnDefs;
  rowData: any;
  gridApi;
  frameworkComponents;
  gridOptions;


  constructor(private _economiesService: EconomiesService, public dialog: MatDialog, private _authService: AuthService,
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
      actionsRenderer: EconomiesActionsRendererComponent
    };
  }

  ngOnInit() {
    this.setRowData();
  }

  setRowData() {
    this._economiesService.readEconomies(this._authService.userID).subscribe(res => {
      this.rowData = res;
    });
  }

  onGridReady(params: any) {
    this.gridApi = params.api;
    this.gridApi.sizeColumnsToFit();
  }


  newEconomiesPopUp(): void {
    const dialogRef = this.dialog.open(CreateEconomiesComponent, {
      autoFocus: false,
      disableClose: true,
      minWidth: '50%',
      height: '50%'
    });
    dialogRef.afterClosed().subscribe(res => {
      if (res) {
        let economies: Economies = res.economies[0];
        this.gridApi.updateRowData({ add: [economies] });
      }
    });
  }
}
