import { Component, OnInit, Inject } from '@angular/core';
import { EconomiesService } from '../economies.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { SnotifyService } from 'ng-snotify';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { AuthService } from 'src/app/auth/auth.service';
import { Economies } from 'src/app/models/economies.interface';
import { EconomiesComponent } from '../economies.component';

@Component({
  selector: 'app-create-economies',
  templateUrl: './create-economies.component.html',
  styleUrls: ['./create-economies.component.css']
})
export class CreateEconomiesComponent implements OnInit {
  errorMessage = '';
  economiesForm: FormGroup;
  submittedForm = false;

  constructor(private _economiesService: EconomiesService,
    public snotify: SnotifyService,
    public dialogRef: MatDialogRef<EconomiesComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private _authService: AuthService) { 

    }

  ngOnInit() {
    this.economiesForm = new FormGroup({
      name: new FormControl('', [Validators.required]),
      price: new FormControl('', [Validators.required])
    });
  
  }

  get name() { return this.economiesForm.get('name'); }
  get price() { return this.economiesForm.get('price'); }


  saveEconomies() {
    if (this.isFormValid()) {
      this.submittedForm = true;
      
      let economies: Economies = this.economiesForm.value; 
    
      this._economiesService.createEconomies(economies, this._authService.userID).subscribe(
        res => {
          economies = res;       
          this.dialogRef.close({ economies: economies});
          this.snotify.success('Economies ' + economies.name + ' was successfully created.');
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
    this.economiesForm.setErrors({ wrong: null });
    this.economiesForm.updateValueAndValidity();
    Object.keys(this.economiesForm.controls).forEach(key => {
      const control = this.economiesForm.get(key);
      control.markAsTouched();
    });
    return this.economiesForm.valid;
  }

  hasError() {
    return this.name.invalid && (this.name.touched || this.name.dirty) ||
      this.price.invalid && (this.price.touched || this.price.dirty) ||
      this.economiesForm.hasError('wrong');
  }

  getError() {
    return this.name.hasError('required') || 
    this.price.hasError('required') ? 
    'Completați toate câmpurile obligatorii.' : this.errorMessage;
  }
}
