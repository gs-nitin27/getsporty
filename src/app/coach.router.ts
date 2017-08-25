import { ModuleWithProviders } from '@angular/core';
import { Routes,RouterModule } from '@angular/router';
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
import {OtherUserProfileComponent} from './components/useraccount/otherUserProfile/otherUserProfile.component';





export const CoachRouter : Routes = [
     
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
      {path : 'viewjob/:id' , component :ViewJob},
      {path : 'editProfile', component:EditProfileComponent},
      {path : 'userProfile/:id/:prof_id',component:OtherUserProfileComponent}

]