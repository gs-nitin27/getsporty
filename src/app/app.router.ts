import { ModuleWithProviders } from '@angular/core';
import { Routes,RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { EventComponent } from './components/event/event.component';
import { TournamentComponent } from './components/tournament/tournament.component';
import { HomeComponent } from './components/home/home.component';

export const router:Routes = [

      {path : '',redirectTo:'home' , pathMatch: 'full'},
      {path : 'home',component: HomeComponent},
      {path : 'event',component: EventComponent},
      {path : 'tournament' , component: TournamentComponent}


];

export const routes: ModuleWithProviders = RouterModule.forRoot(router);
