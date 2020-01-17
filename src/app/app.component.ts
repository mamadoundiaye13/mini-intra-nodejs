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

  isAuth = false;

  constructor() {
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
  }

}
