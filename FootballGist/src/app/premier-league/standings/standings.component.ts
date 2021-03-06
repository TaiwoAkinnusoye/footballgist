import { Component, OnInit } from '@angular/core';
import { PremierLeagueDataService } from '../premier-league-data.service';

@Component({
  selector: 'app-standings',
  templateUrl: './standings.component.html',
  styleUrls: ['./standings.component.css']
})
export class EplStandingsComponent implements OnInit {

  constructor(private EPLData: PremierLeagueDataService) { }
  public data;
  public displayedColumns: string[] = ['Position', 'Team', 'MP', 'W', 'D', 'L', 'GF', 'GA', 'GD', 'PTS' ];
  ngOnInit() {
    this.EPLData.getStandings().subscribe(data => {
      this.data = data.standings[0].table;
    });
  }
  

}
