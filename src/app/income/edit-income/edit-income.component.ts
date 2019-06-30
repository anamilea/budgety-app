import { Component, OnInit, Inject } from '@angular/core';
import { IncomeService } from '../income.service';
import { IncomeComponent } from '../income.component';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthService } from 'src/app/auth/auth.service';
import { SnotifyService } from 'ng-snotify';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { Income } from 'src/app/models/income.interface';

@Component({
  selector: 'app-edit-income',
  templateUrl: './edit-income.component.html',
  styleUrls: ['./edit-income.component.css']
})
export class EditIncomeComponent implements OnInit {
  errorMessage = '';
  incomeForm: FormGroup;
  submittedForm = false;
  constructor(private _incomeService: IncomeService,
    private _authService: AuthService,
    public _snotify: SnotifyService,
    public _dialogRef: MatDialogRef<IncomeComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit() {
    this.incomeForm = new FormGroup({
      name: new FormControl(this.data.income.name, [Validators.required]),
      value: new FormControl(this.data.income.value,  [Validators.required]),
    });
  }

  get name() { return this.incomeForm.get('name'); }
  get value() { return this.incomeForm.get('value'); }

  isFormValid() {
    this.incomeForm.setErrors({ wrong: null });
    this.incomeForm.updateValueAndValidity();
    Object.keys(this.incomeForm.controls).forEach(key => {
      const control = this.incomeForm.get(key);
      control.markAsTouched();
    });
    return this.incomeForm.valid;
  }

  saveIncomeUpdates() {
    if (this.isFormValid()) {
      this.submittedForm = true;
    let income: Income = this.incomeForm.value;
    
      this._incomeService.updateIncome(income, this.data.income.id).subscribe(
        res => {
          this._dialogRef.close(income);
          this._snotify.success('Income ' + income.name + ' was successfully updated.');
        },
        err => {
          this.setErrorMessages(err);
        }
      );
    }
  }

  setErrorMessages(err: any) {
      this._dialogRef.close();
      this._snotify.error('The server encountered an error while processing the request.');
    }

  close() {
    this._dialogRef.close();
  }

  hasError() {
    return this.name.invalid && (this.name.touched || this.name.dirty) ||
      this.value.invalid && (this.value.touched || this.value.dirty) ||
      this.incomeForm.hasError('wrong');
  }

  getError() {
    if (this.value.invalid) {
      this.errorMessage = 'Email for value is not valid.';
    }
    return this.name.hasError('required') || this.value.hasError('required') ? 'All fields are required.'
      : this.errorMessage;
  }
}
