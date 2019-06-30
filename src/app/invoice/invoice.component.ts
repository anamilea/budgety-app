import { Component, OnInit } from '@angular/core';
import { InvoiceService } from './invoice.service';
import { InvoiceActionsRendererComponent } from './invoice-actions-renderer/invoice-actions-renderer.component';
import { MatDialog } from '@angular/material';
import { AuthService } from '../auth/auth.service';
import { DatePipe } from '@angular/common';
import { CreateInvoiceComponent } from './create-invoice/create-invoice.component';
import { Invoice } from '../models/invoice.interface';

@Component({
  selector: 'app-invoice',
  templateUrl: './invoice.component.html',
  styleUrls: ['./invoice.component.css']
})
export class InvoiceComponent implements OnInit {
  
  columnDefs;
  rowData: any;
  gridApi;
  frameworkComponents;
  gridOptions;

  constructor(private _invoiceService: InvoiceService, public dialog: MatDialog, private _authService: AuthService,
    public datePipe: DatePipe) {
    this.columnDefs = [
      { headerName: 'Denumire', field: 'name', filter: 'agTextColumnFilter', sortable: true },
      { headerName: 'Valoare (RON)', field: 'value', filter: 'agNumberColumnFilter', sortable: true },
      { headerName: 'Recurență', field: 'reccurence',  
      valueGetter: (params) => {
        if( params.node.data.reccurence === 3 ) return 'O dată la trei luni';
        if(params.node.data.reccurence === 1) return 'O dată pe lună';
        if(params.node.data.reccurence === 6) return 'O dată la șase luni';
        if(params.node.data.reccurence === 12) return 'O dată pe an';
      },
      filter: 'agTextColumnFilter', sortable: true },
      { headerName: 'Acțiuni', field: 'actions', cellRenderer: 'actionsRenderer' }

    ];
    this.gridOptions = {
      columnDefs: this.columnDefs,
      enableFilter: true,
      enableSorting: true,
      pagination: true
    };
    this.frameworkComponents = {
      actionsRenderer: InvoiceActionsRendererComponent
    };
  }

  ngOnInit() {
    this.setRowData();
    
  }

  setRowData() {
    this._invoiceService.readInvoice(this._authService.userID).subscribe(res => {
      this.rowData = res;
    });
  }

  onGridReady(params: any) {
    this.gridApi = params.api;
    this.gridApi.sizeColumnsToFit();
  }


  newInvoicePopUp(): void {
    const dialogRef = this.dialog.open(CreateInvoiceComponent, {
      autoFocus: false,
      disableClose: true,
      minWidth: '50%',
      height: '50%'
    });
    dialogRef.afterClosed().subscribe(res => {
      if (res) {
        let invoice: Invoice = res.invoice[0];
        this.gridApi.updateRowData({ add: [invoice] });
      }
    });
  }
}
