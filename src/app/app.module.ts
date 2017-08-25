import { BrowserModule } from '@angular/platform-browser';
import { Angular2SocialLoginModule } from "angular2-social-login";

import { NgModule } from '@angular/core';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { routes } from './app.router';
import { AppComponent } from './app.component';
import { Guard } from './userType-cheak';
import { AthleteCheak } from './athlete-cheak';
import { LocationStrategy, HashLocationStrategy } from '@angular/common';
import { EventComponent } from './components/Coach/event/event.component';
import { TournamentComponent } from './components/Coach/tournament/tournament.component';
import { HomeComponent } from './components/Coach/home/home.component';
import { JobComponent } from './components/Coach/job/createJob/job.component';
import { viewContentComponent } from './components/Coach/content/view_content/viewContent.component';
import { viewContentServices } from './components/services/viewContent.services';
import { APP_CONFIG, AppConfig } from './app.config';
import { CreateContentComponent } from './components/Coach/content/create_content/createContent.component';
import { CreateEventComponent } from './components/Coach/event/createevent/createEvent.component';
import { LoginComponent } from './components/useraccount/login.component';
import { loginServices } from './components/services/login.services';
import { DashboardComponent } from './components/Coach/dashboard/dashboard.component';
import { RegistrationComponent } from './components/useraccount/registration/registration.component';
import { ProfileComponent } from './components/useraccount/profile/profile.component';
import { UserdataComponent } from './userdata.component';
import { ViewEventComponent } from './components/Coach/event/ViewEvent/viewEvent.component';
import { EditJobComponent } from './components/Coach/job/editJob/editJob.component';
import { EditEventComponent } from './components/Coach/event/editEvent/editEvent.component';
import { ViewJob } from './components/Coach/job/viewJob/viewJob.component';
import { EditProfileComponent } from './components/useraccount/editProfile/editProfile.component';
import { OtherUserProfileComponent } from './components/useraccount/otherUserProfile/otherUserProfile.component';
import {AthleteDashboardComponent} from './components/Athlete/AthleteDashboard/AthleteDashboard.component';
import {AthleteLoginComponent } from './components/useraccount/AthleteLogin/athleteLogin.component';
import { FacebookModule } from 'ngx-facebook';

let providers = {
    "google": {
      "clientId": "238802611732-ooc7lqgdvqlrh056om7ma3f7dngiqslr.apps.googleusercontent.com"
    }//,
//    "linkedin": {
//      "clientId": "LINKEDIN_CLIENT_ID"
//    },
   // "facebook": {
      //"clientId": "725906707597625",
      //"apiVersion": "v2.9"
   // }
  };

@NgModule({
  declarations: [
    AppComponent,
    EventComponent,
    TournamentComponent,
    HomeComponent,
    UserdataComponent,
    LoginComponent,
    RegistrationComponent,
    DashboardComponent,
    CreateContentComponent,
    CreateEventComponent,
    ProfileComponent,
    viewContentComponent,
    JobComponent,
    EditJobComponent,
    EditEventComponent,
    ViewEventComponent,
    ViewJob,
    EditProfileComponent,
    OtherUserProfileComponent,
    AthleteLoginComponent,
    AthleteDashboardComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    ReactiveFormsModule,
    routes,
    RouterModule,
    Angular2SocialLoginModule,
    FacebookModule.forRoot()
  ],
  providers: [
  viewContentServices,
  loginServices,
  AthleteCheak,
  Guard,
  [{ provide: LocationStrategy, useClass: HashLocationStrategy }],
  [{ provide: APP_CONFIG, useValue: AppConfig }]
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

Angular2SocialLoginModule.loadProvidersScripts(providers);
