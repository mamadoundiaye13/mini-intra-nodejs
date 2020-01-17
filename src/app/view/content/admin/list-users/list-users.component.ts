import {Component, Input, OnInit} from '@angular/core';
import {ApiService} from '../../../../common/api/api.service';

@Component({
  selector: 'app-list-users',
  templateUrl: './list-users.component.html',
  styleUrls: ['./list-users.component.css']
})
export class ListUsersComponent implements OnInit {

  users;

  constructor(private apiService: ApiService) { }

  @Input() firstname: string;
  @Input() lastname: string;

  ngOnInit() {
    this.apiService.get('http://127.0.0.1:3000/users').subscribe(
      data => {this.users = data; },
      // tslint:disable-next-line:no-shadowed-variable no-unused-expression
      error => console.log('error:', error)
    );
  }
}
