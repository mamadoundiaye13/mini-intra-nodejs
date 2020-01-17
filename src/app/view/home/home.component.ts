import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../service/auth/auth.service';

@Component({
  selector: 'app-home-component',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [AuthService]

})
export class HomeComponent implements OnInit {

  constructor(private router:Router,
              private authService: AuthService
              ) { }

  ngOnInit() {
    console.log('Bienvenu dans notre page Home');
  }
  
  getLogin() {
    return this.authService.getUser().login;
  }

  logout() {
    return this.authService.logout();
  }

  hasAnyRole(roles: string[]) {
    return this.authService.hasAnyRole(roles);
  }
}
