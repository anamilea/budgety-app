import { Component, OnInit } from '@angular/core';
import { EditEconomiesComponent } from '../edit-economies/edit-economies.component';
import { DeleteEconomiesComponent } from '../delete-economies/delete-economies.component';
import { ICellRendererAngularComp } from 'ag-grid-angular';
import { MatDialog } from '@angular/material';

@Component({
  selector: 'app-economies-actions-renderer',
  templateUrl: './economies-actions-renderer.component.html',
  styleUrls: ['./economies-actions-renderer.component.css']
})
export class EconomiesActionsRendererComponent implements ICellRendererAngularComp  {

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

  editEconomies() {
    const dialogRef = this.dialog.open(EditEconomiesComponent, {
      autoFocus: false,
      disableClose: true,
      minWidth: '50%',
      height: '50%',
      data: {
        economies: this.params.node.data
      }
    }).afterClosed().subscribe(res => {
     
      if (res) {
        res.id = this.params.node.data.id;
        this.params.node.setData(res);
      }
    });
  }

  deleteEconomies() {
    const dialogRef = this.dialog.open(DeleteEconomiesComponent, {
      autoFocus: false,
      disableClose: true,
      minWidth: '50%',
      height: '50%',
      data: {
        economies: this.params.node.data
      }
    }).afterClosed().subscribe(res => {
      if (res) {
        res.id = this.params.node.data.id;
        this.gridApi.updateRowData({ remove: [res] });
      }
    });
  }

}
