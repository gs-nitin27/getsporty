import { ModuleWithProviders } from '@angular/core';
import { Routes,RouterModule } from '@angular/router';
import {AthleteLoginComponent } from './components/Athlete/AthleteLogin/athleteLogin.component';
import {AthleteDashboardComponent} from './components/Athlete/AthleteDashboard/AthleteDashboard.component';

export const AthleteRouter : Routes = [
   {path : '',redirectTo:'login' , pathMatch: 'full'},
   {path : 'athletedashboard',component:AthleteDashboardComponent}
];