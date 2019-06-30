import { Component, OnInit, Inject } from '@angular/core';
import { IncomeService } from '../income.service';
import { IncomeComponent } from '../income.component';
import { SnotifyService } from 'ng-snotify';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { Income } from 'src/app/models/income.interface';

@Component({
  selector: 'app-delete-income',
  templateUrl: './delete-income.component.html',
  styleUrls: ['./delete-income.component.css']
})
export class DeleteIncomeComponent implements OnInit {

  constructor(private _incomeService: IncomeService,
    public _snotify: SnotifyService,
    public _dialogRef: MatDialogRef<IncomeComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit() {
  }

  deleteIncome() {
    const income: Income = this.data.income;
    this._incomeService.deleteIncome(this.data.income.id).subscribe(res => {
      this._dialogRef.close(income);
      this._snotify.success('Income ' + income.name + ' was successfully deleted.');
    }, err => {
      this.close();
      this._snotify.error('The server encountered an error while processing the request.');
    });
  }

  close() {
    this._dialogRef.close();
  }

}
