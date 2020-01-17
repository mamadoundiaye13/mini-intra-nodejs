import {Component, OnInit} from '@angular/core';
import {UserService} from './common/user/user.service';
import {Observable} from 'rxjs';
import {UserEntity} from './common/user/user.entity';
import {ApiService} from './common/api/api.service';
import {error} from 'util';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  users;
  isAuth = false;

  constructor(private apiService: ApiService) {
    setTimeout(
      () => {
        this.isAuth = true;
      }, 4000
    );
  }

  onAllumer() {
    console.log('on allume tout');
  }
  ngOnInit() {
    this.apiService.get('http://127.0.0.1:3000/users').subscribe(
      data => {this.users = data; },
    // tslint:disable-next-line:no-shadowed-variable no-unused-expression
    error => console.log('error:', error)
    );
  }

}
