import { ModuleWithProviders } from '@angular/core';
import { Routes,RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { EventComponent } from './components/event/event.component';
import { TournamentComponent } from './components/tournament/tournament.component';
import { HomeComponent } from './components/home/home.component';
import { viewContentComponent } from './components/content/view_content/viewContent.component';
import { CreateContentComponent } from './components/content/create_content/createContent.component';
import { CreateEventComponent } from './components/event/createevent/createEvent.component';
import { LoginComponent } from './components/useraccount/login.component';
import { JobComponent } from './components/job/createJob/job.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { RegistrationComponent } from './components/useraccount/registration/registration.component';
import { ProfileComponent } from './components/useraccount/profile/profile.component';
import { ViewEventComponent } from './components/event/ViewEvent/viewEvent.component';
import { EditJobComponent } from './components/job/editJob/editJob.component';
import { EditEventComponent } from './components/event/editEvent/editEvent.component';
import {ViewJob} from './components/job/viewJob/viewJob.component';


export const router:Routes = [

      {path : '',redirectTo:'login' , pathMatch: 'full'},
      {path : 'login',component: LoginComponent},
      {path : 'home',component: HomeComponent},
      {path : 'event',component: EventComponent},
      {path : 'tournament' , component: TournamentComponent},
      {path : 'contentview' , component: viewContentComponent},
      {path : 'createcontent' , component: CreateContentComponent},
      {path : 'createevent' , component: CreateEventComponent},
      {path : 'dashboard' , component: DashboardComponent},
      {path : 'main' , component: AppComponent},
      {path : 'registration' , component: RegistrationComponent},
      {path : 'profile' , component :ProfileComponent},
      {path : 'job',component:JobComponent},
      {path : 'viewEvent/:id' , component : ViewEventComponent},
      {path : 'editJob/:id',component:EditJobComponent},
      {path : 'editEvent/:id' , component : EditEventComponent},
      {path : 'viewjob/:id' , component :ViewJob}


];

export const routes: ModuleWithProviders = RouterModule.forRoot(router);
