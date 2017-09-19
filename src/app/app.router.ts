import { ModuleWithProviders } from '@angular/core';
import { Routes,RouterModule } from '@angular/router';
import { Guard } from './userType-cheak';
import { AthleteCheak } from './athlete-cheak';
import { AppComponent } from './app.component';
import { EventComponent } from './components/Coach/event/event.component';
import { TournamentComponent } from './components/Coach/tournament/tournament.component';
import { HomeComponent } from './components/Coach/home/home.component';
import { viewContentComponent } from './components/Coach/content/view_content/viewContent.component';
import { CreateContentComponent } from './components/Coach/content/create_content/createContent.component';
import { CreateEventComponent } from './components/Coach/event/createevent/createEvent.component';
import { LoginComponent } from './components/useraccount/login.component';
import { JobComponent } from './components/Coach/job/createJob/job.component';
import { DashboardComponent } from './components/Coach/dashboard/dashboard.component';
import { RegistrationComponent } from './components/useraccount/registration/registration.component';
import { ProfileComponent } from './components/useraccount/profile/profile.component';
import { ViewEventComponent } from './components/Coach/event/ViewEvent/viewEvent.component';
import { EditJobComponent } from './components/Coach/job/editJob/editJob.component';
import { EditEventComponent } from './components/Coach/event/editEvent/editEvent.component';
import {ViewJob} from './components/Coach/job/viewJob/viewJob.component';
import {EditProfileComponent} from './components/useraccount/editProfile/editProfile.component';
import {OtherUserProfileComponent} from './components/Athlete/otherUserProfile/otherUserProfile.component';
import {AthleteLoginComponent } from './components/useraccount/AthleteLogin/athleteLogin.component';
import {AthleteDashboardComponent} from './components/Athlete/AthleteDashboard/AthleteDashboard.component';
import { NotFoundComponent } from './not-found.component';
import { ClassAccounting } from './components/Athlete/ClassAccounting/ClassAccounting.component';
import { AthleteHeaderComponent } from './components/Athlete/AthleteHeader/athleteHeader.component'
import { AthleteProfileViewComponent } from './components/Athlete/AthleteProfileView/AthleteProfileView.component';

 
 const router:Routes = [

      {path : '',redirectTo:'login' , pathMatch: 'full'},
      {path : 'login',component: LoginComponent},
      {path : 'home',component: HomeComponent , canActivate:[Guard]},
      {path : 'event',component: EventComponent , canActivate:[Guard]},
      {path : 'tournament' , component: TournamentComponent , canActivate:[Guard]},
      {path : 'contentview' , component: viewContentComponent , canActivate:[Guard]},
      {path : 'createcontent' , component: CreateContentComponent , canActivate:[Guard]},
      {path : 'createevent' , component: CreateEventComponent , canActivate:[Guard]},
      {path : 'dashboard' , component: DashboardComponent , canActivate:[Guard]},
      {path : 'main' , component: AppComponent , canActivate:[Guard]},
      {path : 'registration' , component: RegistrationComponent},
      {path : 'profile' , component :ProfileComponent , canActivate:[Guard]},
      {path : 'job',component:JobComponent , canActivate:[Guard]},
      {path : 'viewEvent/:id' , component : ViewEventComponent , canActivate:[Guard]},
      {path : 'editJob/:id',component:EditJobComponent , canActivate:[Guard]},
      {path : 'editEvent/:id' , component : EditEventComponent , canActivate:[Guard]},
      {path : 'viewjob/:id' , component :ViewJob , canActivate:[Guard]},
      {path : 'editProfile', component:EditProfileComponent, canActivate:[Guard]},
      {path : 'userProfile',component:OtherUserProfileComponent, canActivate:[AthleteCheak]},
      {path : 'athletelogin' , component:AthleteLoginComponent },
      {path : 'athletedashboard' , component:AthleteDashboardComponent , canActivate:[AthleteCheak]},
      {path : 'page-not-found' , component:NotFoundComponent},
      {path : 'athleteheader' , component:AthleteHeaderComponent, canActivate:[AthleteCheak]},
      {path : 'athleteProfileView' , component:AthleteProfileViewComponent, canActivate:[AthleteCheak]},
      {path : 'classaccounting/:id' , component: ClassAccounting , canActivate:[AthleteCheak]}


];

export const routes: ModuleWithProviders = RouterModule.forRoot(router);