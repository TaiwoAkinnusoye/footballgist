import { Component, OnInit } from '@angular/core';
import {api} from '../../../config';
import { PremierLeagueDataService } from '../premier-league-data.service';

@Component({
  selector: 'app-matches',
  templateUrl: './matches.component.html',
  styleUrls: ['./matches.component.css']
})
export class MatchesComponent implements OnInit {

  constructor(private EPLData: PremierLeagueDataService) { }
  public dataSource;
  // public displayedColumns: string[] = [];
  ngOnInit() {
    this.EPLData.getMatches().subscribe(data => {
      return this.dataSource = data.matches;
    });
  }
}