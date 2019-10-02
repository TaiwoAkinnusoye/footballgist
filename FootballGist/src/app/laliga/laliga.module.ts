import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LaLigaStandingsComponent } from './standings/standings.component';
import { MatTableModule } from '@angular/material/table';
import { LaligamatchesComponent } from './laligamatches/laligamatches.component';
import { LaliganavComponent } from './laliganav/laliganav.component';



@NgModule({
  declarations: [LaLigaStandingsComponent, LaligamatchesComponent, LaliganavComponent],
  imports: [
    CommonModule,
    MatTableModule
  ]
})
export class LaligaModule { }
