import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EplStandingsComponent } from './standings/standings.component';
import { MatTableModule } from '@angular/material/table';



import { EplMatchesComponent } from './matches/matches.component';
import { NavComponent } from './nav/nav.component';



@NgModule({
  declarations: [EplStandingsComponent, EplMatchesComponent, NavComponent],
  imports: [
    CommonModule,
    MatTableModule
  ]
})
export class PremierLeagueModule { }
