import { Component, OnInit } from '@angular/core';
import { Router, Event, NavigationStart, NavigationCancel } from '@angular/router';
/*import { DomSanitizer } from "@angular/platform-browser";
import { MatIconRegistry } from "@angular/material/icon";*/
import { ConfigService } from '../../core/config';

export interface HeaderActionDisplayFlag {
  isBackEnabled: boolean;
  isLogoutEnabled: boolean;
}

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'dhr-layout-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  private headerActionDisplayFlag: HeaderActionDisplayFlag;
  // tslint:disable-next-line:ban-types
  private currentTitle: String;

  constructor(private router: Router,
              private configService: ConfigService,
              ) {

  }

  goToListModuleContent() {
    this.router.navigate([this.configService.config.route.listModule]);
  }

  // goToModuleContent(){
  //   this.router.navigate([this.configService.config.route.module]);
  // }

  gotToListStudentContent() {
    this.router.navigate([this.configService.config.route.listStudent]);
  }

  // goToStudentContent(){
  //   this.router.navigate([this.configService.config.route.student]);

  // }

  ngOnInit() {
    // tslint:disable-next-line:no-console
    console.debug('Header loaded');
    this.router.events.subscribe((event: Event) => {
      if (event instanceof NavigationStart) {
      }
    });
  }
}
