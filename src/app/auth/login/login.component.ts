import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  //userCredentials: UserCredentials;
  errorMessage = '';


  constructor(
    private _router: Router, private _authService: AuthService) { }

  ngOnInit() {
    // if (this._authService.isAuthenticated()) {
    //   this._router.navigate(['home']);
    // }
    this.loginForm = new FormGroup({
      username: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required])
    });
  }

  get username() { return this.loginForm.get('username'); }
  get password() { return this.loginForm.get('password'); }

  onSubmit() {
    if (this.isFormValid()) {

    //  this._router.navigate(['']);
     this._authService.login();
   }
  }

  onRegister() {
    this._router.navigate(['signup']);
  }

  setErrorMessages(err) {
    if (err.error === 'Unauthorized') {
      this.errorMessage = 'Usernameul și/sau parola nu sunt valide.';
    } else {
      this.errorMessage = 'Ceva nu a mers bine, te rugăm să încerci mai târziu.';
    }
    this.loginForm.setErrors({ 'wrong': true });
  }

  isFormValid() {
    this.loginForm.setErrors({ wrong: null });
    this.loginForm.updateValueAndValidity();
    Object.keys(this.loginForm.controls).forEach(key => {
      const control = this.loginForm.get(key);
      control.markAsTouched();
    });
    return this.loginForm.valid;
  }

  hasError() {
    return this.username.invalid && (this.username.touched || this.username.dirty) ||
      this.password.invalid && (this.password.touched || this.password.dirty) ||
      this.loginForm.hasError('wrong');
  }

  getError() {
    return this.username.hasError('required') || this.password.hasError('required') ? 'Ambele câmpuri sunt obligatorii!'
      : this.errorMessage;
  }
}
