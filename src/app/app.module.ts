import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { routes } from './app.router';
import { AppComponent } from './app.component';
import { LocationStrategy, HashLocationStrategy } from '@angular/common';
import { EventComponent } from './components/event/event.component';
import { TournamentComponent } from './components/tournament/tournament.component';
import { HomeComponent } from './components/home/home.component';
import { JobComponent } from './component/job/job.component';
import { viewContentComponent } from './components/content/view_content/viewContent.component';
import { viewContentServices } from './components/services/viewContent.services';
import { APP_CONFIG, AppConfig } from './app.config';
import { CreateContentComponent } from './components/content/create_content/createContent.component';
import { CreateEventComponent } from './components/event/createevent/createEvent.component';
import { LoginComponent } from './components/useraccount/login.component';
import { loginServices } from './components/services/login.services';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { RegistrationComponent } from './components/useraccount/registration/registration.component';
import { ProfileComponent } from './components/useraccount/profile/profile.component';
import { UserdataComponent } from './userdata.component';


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
    JobComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    ReactiveFormsModule,
    routes,
    RouterModule
  ],
  providers: [
  viewContentServices,loginServices,
  [{ provide: LocationStrategy, useClass: HashLocationStrategy }],
  [{ provide: APP_CONFIG, useValue: AppConfig }]
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
