import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
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
import { RegistrationComponent } from './components/content/create_content/createContent.component';


@NgModule({
  declarations: [
    AppComponent,
    EventComponent,
    TournamentComponent,
    HomeComponent,
    RegistrationComponent,
    viewContentComponent,
    JobComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routes,
    RouterModule
  ],
  providers: [
  viewContentServices,
  [{ provide: APP_CONFIG, useValue: AppConfig }]
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
