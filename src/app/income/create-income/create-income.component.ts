import { Component, OnInit, Inject } from '@angular/core';
import { IncomeService } from '../income.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { SnotifyService } from 'ng-snotify';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { IncomeComponent } from '../income.component';
import { AuthService } from 'src/app/auth/auth.service';
import { Income } from 'src/app/models/income.interface';

@Component({
  selector: 'app-create-income',
  templateUrl: './create-income.component.html',
  styleUrls: ['./create-income.component.css']
})
export class CreateIncomeComponent implements OnInit {

  errorMessage = '';
  incomeForm: FormGroup;
  submittedForm = false;

  constructor(private _incomeService: IncomeService,
    public snotify: SnotifyService,
    public dialogRef: MatDialogRef<IncomeComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private _authService: AuthService) { 

    }

  ngOnInit() {
    this.incomeForm = new FormGroup({
      name: new FormControl('', [Validators.required]),
      price: new FormControl('', [Validators.required])
    });
  
  }

  get name() { return this.incomeForm.get('name'); }
  get price() { return this.incomeForm.get('price'); }


  saveIncome() {
    if (this.isFormValid()) {
      this.submittedForm = true;
      
      let income: Income = this.incomeForm.value; 
    
      this._incomeService.createIncome(income, this._authService.userID).subscribe(
        res => {
          income = res;       
          this.dialogRef.close({ income: income});
          this.snotify.success('Income ' + income.name + ' was successfully created.');
        },
        err => {
          this.setErrorMessages(err);
        }
      );
    }
  }

  setErrorMessages(err: any) {
      this.dialogRef.close();
      this.snotify.error('The server encountered an error while processing the request.');
  }

  close() {
    this.dialogRef.close();
  }

  isFormValid() {
    this.incomeForm.setErrors({ wrong: null });
    this.incomeForm.updateValueAndValidity();
    Object.keys(this.incomeForm.controls).forEach(key => {
      const control = this.incomeForm.get(key);
      control.markAsTouched();
    });
    return this.incomeForm.valid;
  }

  hasError() {
    return this.name.invalid && (this.name.touched || this.name.dirty) ||
      this.price.invalid && (this.price.touched || this.price.dirty) ||
      this.incomeForm.hasError('wrong');
  }

  getError() {
    return this.name.hasError('required') || 
    this.price.hasError('required') ? 
    'Completați toate câmpurile obligatorii.' : this.errorMessage;
  }

}
