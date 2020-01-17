import { Component, OnInit } from '@angular/core';
import {ApiService} from '../../../../common/api/api.service';

@Component({
  selector: 'app-list-modules',
  templateUrl: './list-modules.component.html',
  styleUrls: ['./list-modules.component.css']
})
export class ListModulesComponent implements OnInit {
  private modules: any;

  constructor(private apiService: ApiService) { }

  ngOnInit() {
    this.apiService.get('http://127.0.0.1:3000/modules').subscribe(
      data => {this.modules = data; },
      // tslint:disable-next-line:no-shadowed-variable no-unused-expression
      error => console.log('error:', error)
    );
  }
}
