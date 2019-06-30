import { Component, OnInit, Inject } from '@angular/core';
import { EconomiesService } from '../economies.service';
import { EconomiesComponent } from '../economies.component';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthService } from 'src/app/auth/auth.service';
import { SnotifyService } from 'ng-snotify';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { Economies } from 'src/app/models/economies.interface';

@Component({
  selector: 'app-edit-economies',
  templateUrl: './edit-economies.component.html',
  styleUrls: ['./edit-economies.component.css']
})
export class EditEconomiesComponent implements OnInit {

  errorMessage = '';
  economiesForm: FormGroup;
  submittedForm = false;
  constructor(private _economiesService: EconomiesService,
    private _authService: AuthService,
    public _snotify: SnotifyService,
    public _dialogRef: MatDialogRef<EconomiesComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit() {
    this.economiesForm = new FormGroup({
      name: new FormControl(this.data.economies.name, [Validators.required]),
      value: new FormControl(this.data.economies.value,  [Validators.required]),
    });
  }

  get name() { return this.economiesForm.get('name'); }
  get value() { return this.economiesForm.get('value'); }

  isFormValid() {
    this.economiesForm.setErrors({ wrong: null });
    this.economiesForm.updateValueAndValidity();
    Object.keys(this.economiesForm.controls).forEach(key => {
      const control = this.economiesForm.get(key);
      control.markAsTouched();
    });
    return this.economiesForm.valid;
  }

  saveEconomiesUpdates() {
    if (this.isFormValid()) {
      this.submittedForm = true;
    let economies: Economies = this.economiesForm.value;
    
      this._economiesService.updateEconomies(economies, this.data.economies.id).subscribe(
        res => {
          this._dialogRef.close(economies);
          this._snotify.success('Economies ' + economies.name + ' was successfully updated.');
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
      this.economiesForm.hasError('wrong');
  }

  getError() {
    if (this.value.invalid) {
      this.errorMessage = 'Email for value is not valid.';
    }
    return this.name.hasError('required') || this.value.hasError('required') ? 'All fields are required.'
      : this.errorMessage;
  }

}
