import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EplStandingsComponent } from './premier-league/standings/standings.component';
import { HomeComponent } from './home/home.component';
import { EplMatchesComponent } from './premier-league/matches/matches.component';
import { LaLigaStandingsComponent } from './laliga/standings/standings.component';
import { LaligamatchesComponent } from './laliga/laligamatches/laligamatches.component';
import {PremierLeagueResolver} from './premier-league/premier-league-resolver.service';


const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'pl', children: [
    {path: '', component: EplMatchesComponent, resolve: {matches: PremierLeagueResolver}},
    {path: 'standings', component: EplStandingsComponent}
  ]},
  {path: 'laliga', children: [
    {path: '', component: LaligamatchesComponent},
    {path: 'standings', component: LaLigaStandingsComponent}
  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
