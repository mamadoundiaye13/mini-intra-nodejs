import { Routes, RouterModule } from '@angular/router';


import { SiteLayoutComponent } from './site-layout/site-layout.component';
import { FromNotesComponent } from './content/front/';
import { ListModulesFrontComponent } from './content/front';


import { AppLayoutComponent } from './app-layout/app-layout.component';
import { ListModulesComponent } from './content/admin';
import { ListNotesModulesComponent } from './content/admin';
import { ListSessionsComponent } from './content/admin';


import { LoginComponent } from './login/login.component';

const appRoutes: Routes = [
    

    //no layout routes
    { path: 'login', component: LoginComponent},
    // otherwise redirect to home
    { path: '**', redirectTo: '' },

    //Site routes student goes here 
    { 
        path: '', 
        component: SiteLayoutComponent,
        children: [
          { path: '', component: ListModulesFrontComponent, pathMatch: 'full'},
          { path: 'notes-formulaire', component: FromNotesComponent },
        ]
    },
    
    // App routes admin goes here here
    { 
        path: '',
        component: AppLayoutComponent, 
        children: [
          { path: 'list-modules', component: ListModulesComponent },
          { path: 'notes-modules', component: ListNotesModulesComponent },
          { path: 'list-sessions', component: ListSessionsComponent }

        ]
    },

];

export const routing = RouterModule.forRoot(appRoutes);


