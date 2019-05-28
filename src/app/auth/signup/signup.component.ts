import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  signupForm: FormGroup;
  //userCredentials: UserCredentials;
  errorMessage = '';

  constructor(
    private _router: Router) { }

  ngOnInit() {
    // if (this._authService.isAuthenticated()) {
    //   this._router.navigate(['home']);
    // }
    this.signupForm = new FormGroup({
      username: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required]),
    });
  }

  get username() { return this.signupForm.get('username'); }
  get password() { return this.signupForm.get('password'); }
  get email() { return this.signupForm.get('email'); }



  onSubmit() {
    if (this.isFormValid()) {
      this._router.navigate(['']);
      // this.userCredentials = this.signupForm.value;
      // this._authService.signup(this.userCredentials).subscribe(
      //   res => {
      //     this._authService.authenticateUser(res.token);
      //   },
      //   err => {
      //     this.setErrorMessages(err);
      //   }
      // );
    }
  }


  setErrorMessages(err) {
    if (err.error === 'Unauthorized') {
      this.errorMessage = 'Usernameul și/sau parola nu sunt valide.';
    } else {
      this.errorMessage = 'Ceva nu a mers bine, te rugăm să încerci mai târziu.';
    }
    this.signupForm.setErrors({ 'wrong': true });
  }

  isFormValid() {
    this.signupForm.setErrors({ wrong: null });
    this.signupForm.updateValueAndValidity();
    Object.keys(this.signupForm.controls).forEach(key => {
      const control = this.signupForm.get(key);
      control.markAsTouched();
    });
    return this.signupForm.valid;
  }

  hasError() {
    return this.username.invalid && (this.username.touched || this.username.dirty) ||
      this.password.invalid && (this.password.touched || this.password.dirty) ||
      this.email.invalid && (this.email.touched || this.email.dirty) ||
      this.signupForm.hasError('wrong');
  }

  getError() {
    return this.username.hasError('required') ||
      this.password.hasError('required') ? 'Toate câmpurile sunt obligatorii!' : this.errorMessage;
  }
}
