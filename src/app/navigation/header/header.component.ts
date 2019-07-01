import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { AuthService } from 'src/app/auth/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  isAuthenticated = false;

  @Output() sidenavToggle = new EventEmitter<void>();

  constructor(private _authService: AuthService) { }

  ngOnInit() {
    // console.log(this._authService.userID);
    // this.isAuthenticated = this._authService.isAuthenticated();
  }

  onToggleSidenav() {
    this.sidenavToggle.emit();
  }

  over() {
    this.sidenavToggle.emit();
  }

}
