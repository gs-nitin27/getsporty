import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { routes } from './app.router';
import { AppComponent } from './app.component';
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




@NgModule({
  declarations: [
    AppComponent,
    EventComponent,
    TournamentComponent,
    HomeComponent,
    LoginComponent,
    CreateContentComponent,
    CreateEventComponent,
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
  [{ provide: APP_CONFIG, useValue: AppConfig }]
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
