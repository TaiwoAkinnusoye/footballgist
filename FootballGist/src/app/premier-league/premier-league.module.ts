import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StandingsComponent } from './standings/standings.component';
import { MatTableModule } from '@angular/material/table';



import { MatchesComponent } from './matches/matches.component';



@NgModule({
  declarations: [StandingsComponent, MatchesComponent],
  imports: [
    CommonModule,
    MatTableModule
  ]
})
export class PremierLeagueModule { }
