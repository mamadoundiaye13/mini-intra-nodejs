import { Routes, RouterModule } from '@angular/router';
import { NgModule, Component } from '@angular/core';

import { ListModulesComponent, ListSessionsComponent, ListNotesModulesComponent  } from './view/content/admin';

import { ListModulesFrontComponent, FromNotesComponent } from './view/content/front/';

import { HomeComponent } from './view/home';
import { AuthGuard } from './service/auth/auth.guard';
import { LoginComponent } from './view/login/login.component';

import { SiteLayoutComponent } from './layout/site-layout';


const routes: Routes = [

  // { path: 'login', component: LoginComponent},
    // otherwise redirect to home
  // {
  //   path: "",
  //   // canActivate: [AuthGuard],
  //   redirectTo: "/login",
  //   pathMatch: "full"

  // },
  {
    path: '',
    component: SiteLayoutComponent,
    children: [

      {
        path: 'login',
        component: LoginComponent
      },
      {
          path: 'home',
          component: HomeComponent,
          canActivate: [AuthGuard]
        },
        {
          path: 'list-sessions',
          canActivate: [AuthGuard],
          component: ListSessionsComponent
        },
        {
          path: 'list-modules',
          canActivate: [AuthGuard],
          component: ListModulesComponent
        },
        {
          path: 'list-notes-modules',
          canActivate: [AuthGuard],
          component: ListNotesModulesComponent
        },
        {
          path: 'list-modules-front',
          canActivate: [AuthGuard],
          component: ListModulesFrontComponent
        },

        {
          path: 'From-notes',
          canActivate: [AuthGuard],
          component: FromNotesComponent
        }

      ]
  },
  {
    path: 'home',
    component: HomeComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'list-sessions',
    canActivate: [AuthGuard],
    component: ListSessionsComponent
  },
  {
    path: 'list-modules',
    canActivate: [AuthGuard],
    component: ListModulesComponent
  },
  {
    path: 'list-notes-modules',
    canActivate: [AuthGuard],
    component: ListNotesModulesComponent
  },
  {
    path: 'list-modules-front',
    canActivate: [AuthGuard],
    component: ListModulesFrontComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [AuthGuard]

})
export class AppRoutingModule { }
