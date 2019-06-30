import { Component, OnInit, Inject } from '@angular/core';
import { EconomiesService } from '../economies.service';
import { SnotifyService } from 'ng-snotify';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { EconomiesComponent } from '../economies.component';
import { Economies } from 'src/app/models/economies.interface';

@Component({
  selector: 'app-delete-economies',
  templateUrl: './delete-economies.component.html',
  styleUrls: ['./delete-economies.component.css']
})
export class DeleteEconomiesComponent implements OnInit {

  constructor(private _economiesService: EconomiesService,
    public _snotify: SnotifyService,
    public _dialogRef: MatDialogRef<EconomiesComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit() {
  }

  deleteEconomies() {
    const economies: Economies = this.data.economies;
    this._economiesService.deleteEconomies(this.data.economies.id).subscribe(res => {
      this._dialogRef.close(economies);
      this._snotify.success('Economies ' + economies.name + ' was successfully deleted.');
    }, err => {
      this.close();
      this._snotify.error('The server encountered an error while processing the request.');
    });
  }

  close() {
    this._dialogRef.close();
  }
}
