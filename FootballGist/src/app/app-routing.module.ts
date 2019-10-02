import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StandingsComponent } from './premier-league/standings/standings.component';
import { HomeComponent } from './home/home.component';
import { MatchesComponent } from './premier-league/matches/matches.component';


const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'pl', children: [
    {path: '', component: MatchesComponent},
    {path: 'standings', component: StandingsComponent}
  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
