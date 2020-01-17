import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-list-users',
  templateUrl: './list-users.component.html',
  styleUrls: ['./list-users.component.css']
})
export class ListUsersComponent implements OnInit {

  constructor() { }

  @Input() firstname: string;
  @Input() lastname: string;

  ngOnInit() {
  }
}
