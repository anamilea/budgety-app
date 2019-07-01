import { Component, OnInit, EventEmitter, Output} from '@angular/core';
import { AuthService } from 'src/app/auth/auth.service';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css']
})
export class SidenavComponent implements OnInit {
  isAuthenticated = false;
  @Output() closeSidenav = new EventEmitter<void>();
  constructor(private _authService: AuthService) { }

  ngOnInit() {
    console.log(this._authService.userID);
    this.isAuthenticated = this._authService.isAuthenticated();
  }

  onClose(){
    this.closeSidenav.emit();
  }

  onLogout(){
    this.onClose();
    this._authService.logout();
  }

}
