import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CUSTOM_ELEMENTS_SCHEMA } from "@angular/core";


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
// @ts-ignore
import { UserService } from './common/user/user.service';
import { ListUsersComponent } from './list-users/list-users.component';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {ApiService} from './common/api/api.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './view/home';
// import { ListStudentComponent } from './view/content';
import { ListNotesModulesComponent } from './view/content/admin/';
import { ListSessionsComponent } from './view/content/admin/';
import { ListModulesComponent } from './view/content/admin';


import { FromNotesComponent } from './view/content/front';
import { ListModulesFrontComponent } from './view/content/front';

import { LoginComponent } from './view/login/login.component';

import { SiteLayoutComponent } from './layout/site-layout/';
import { HeaderComponent } from './layout/header';
import { FooterComponent } from './layout/footer';

@NgModule({
  declarations: [
    AppComponent,
    ListUsersComponent,
    SiteLayoutComponent,
    FooterComponent,
    HeaderComponent,
    AppComponent,
    HomeComponent,
    ListNotesModulesComponent,
    ListSessionsComponent,
    ListModulesComponent,
    ListSessionsComponent,
    FromNotesComponent,
    LoginComponent,
    ListModulesFrontComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [
    UserService,
    ApiService
  ],
  bootstrap: [AppComponent],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class AppModule { }
