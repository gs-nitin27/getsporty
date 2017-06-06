import { ModuleWithProviders } from '@angular/core';
import { Routes,RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { EventComponent } from './components/event/event.component';
import { TournamentComponent } from './components/tournament/tournament.component';
import { HomeComponent } from './components/home/home.component';
import { viewContentComponent } from './components/content/view_content/viewContent.component';
import { CreateContentComponent } from './components/content/create_content/createContent.component';
import { CreateEventComponent } from './components/event/createevent/createEvent.component';

export const router:Routes = [

      {path : '',redirectTo:'home' , pathMatch: 'full'},
      {path : 'home',component: HomeComponent},
      {path : 'event',component: EventComponent},
      {path : 'tournament' , component: TournamentComponent},
      {path : 'contentview' , component: viewContentComponent},
      {path : 'createcontent' , component: CreateContentComponent},
      {path : 'createevent' , component: CreateEventComponent}


];

export const routes: ModuleWithProviders = RouterModule.forRoot(router);
