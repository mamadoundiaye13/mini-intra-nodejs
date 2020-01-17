import { Component, OnInit } from '@angular/core';
import {ApiService} from '../../../../common/api/api.service';

@Component({
  selector: 'app-list-modules-front',
  templateUrl: './list-modules-front.component.html',
  styleUrls: ['./list-modules-front.component.css']
})
export class ListModulesFrontComponent implements OnInit {
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
