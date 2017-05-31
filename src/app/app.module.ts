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

@NgModule({
  declarations: [
    AppComponent,
    EventComponent,
    TournamentComponent,
    HomeComponent,
    JobComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routes,
    RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
