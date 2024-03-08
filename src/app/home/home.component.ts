import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  isLoggedIn = false;
  onLoadServer(id: 1) {
    // Calulations
    this.router.navigate(['/servers', id, 'edit'], {
      queryParams: { allowEdit: 1 },
      fragment: 'loading',
    });
  }

  constructor(private router: Router, private authService: AuthService) {}

  ngOnInit() {}

  onLogin() {
    this.authService.login();
    this.authService.isAuthenticated().then((val) => {
      this.isLoggedIn = val as boolean;
    });
  }
  onLogout() {
    this.authService.logout();
    this.authService.isAuthenticated().then((val) => {
      this.isLoggedIn = val as boolean;
    });
  }
}
