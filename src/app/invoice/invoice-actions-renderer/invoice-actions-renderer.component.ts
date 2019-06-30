import { Component, OnInit } from '@angular/core';
import { ICellRendererAngularComp } from 'ag-grid-angular';
import { DeleteInvoiceComponent } from '../delete-invoice/delete-invoice.component';
import { EditInvoiceComponent } from '../edit-invoice/edit-invoice.component';
import { MatDialog } from '@angular/material';

@Component({
  selector: 'app-invoice-actions-renderer',
  templateUrl: './invoice-actions-renderer.component.html',
  styleUrls: ['./invoice-actions-renderer.component.css']
})
export class InvoiceActionsRendererComponent implements ICellRendererAngularComp {

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

  editInvoice() {
    const dialogRef = this.dialog.open(EditInvoiceComponent, {
      autoFocus: false,
      disableClose: true,
      minWidth: '50%',
      height: '50%',
      data: {
        invoice: this.params.node.data
      }
    }).afterClosed().subscribe(res => {
      if (res)  {
        res.id = this.params.node.data.id;
        this.params.node.setData(res);
      }
    });
  }

  deleteInvoice() {
    const dialogRef = this.dialog.open(DeleteInvoiceComponent, {
      autoFocus: false,
      disableClose: true,
      minWidth: '50%',
      height: '50%',
      data: {
        invoice: this.params.node.data
      }
    }).afterClosed().subscribe(res => {
      if (res) {
        res.id = this.params.node.data.id;
        this.gridApi.updateRowData({ remove: [res] });
      }
    });
  }
}
