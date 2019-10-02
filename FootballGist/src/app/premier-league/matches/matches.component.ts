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
  public data;
  public displayedColumns: string[] = ['Position', 'Team', 'MP', 'W', 'D', 'L', 'GF', 'GA', 'GD', 'PTS' ];
  ngOnInit() {
    this.EPLData.getMatches().subscribe(data => {
      this.data = data;
      console.log('data', data.matches[0]);
    });
  }
}