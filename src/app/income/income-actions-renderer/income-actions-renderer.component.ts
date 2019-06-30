import { Component, OnInit } from '@angular/core';
import { EditIncomeComponent } from '../edit-income/edit-income.component';
import { DeleteIncomeComponent } from '../delete-income/delete-income.component';
import { ICellRendererAngularComp } from 'ag-grid-angular';
import { MatDialog } from '@angular/material';

@Component({
  selector: 'app-income-actions-renderer',
  templateUrl: './income-actions-renderer.component.html',
  styleUrls: ['./income-actions-renderer.component.css']
})
export class IncomeActionsRendererComponent implements ICellRendererAngularComp  {

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

  editIncome() {
    const dialogRef = this.dialog.open(EditIncomeComponent, {
      autoFocus: false,
      disableClose: true,
      minWidth: '50%',
      height: '50%',
      data: {
        income: this.params.node.data
      }
    }).afterClosed().subscribe(res => {
      if (res)  {
        res.id = this.params.node.data.id;
        this.params.node.setData(res);
      }
    });
  }

  deleteIncome() {
    const dialogRef = this.dialog.open(DeleteIncomeComponent, {
      autoFocus: false,
      disableClose: true,
      minWidth: '50%',
      height: '50%',
      data: {
        income: this.params.node.data
      }
    }).afterClosed().subscribe(res => {
      if (res) {
        res.id = this.params.node.data.id;
        this.gridApi.updateRowData({ remove: [res] });
      }
    });
  }

}