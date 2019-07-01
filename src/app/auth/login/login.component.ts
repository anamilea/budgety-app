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
  }
  onSubmit() {
     this._authService.login();
  }
}
