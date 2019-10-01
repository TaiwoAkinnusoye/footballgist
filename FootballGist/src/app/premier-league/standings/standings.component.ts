import { Component, OnInit } from '@angular/core';
import { PremierLeagueDataService } from '../premier-league-data.service';

@Component({
  selector: 'app-standings',
  templateUrl: './standings.component.html',
  styleUrls: ['./standings.component.css']
})
export class StandingsComponent implements OnInit {

  constructor(private EPLData: PremierLeagueDataService) { }
  public data;
  ngOnInit() {
    this.EPLData.getStandings().subscribe(data => {
      this.data = data;
      console.log('data', this.data.standings[0].table)
    });
  }
  getStandings() {
    // this.EPLData.getStandings().subscribe(data => this.data = data);
    // console.log('data', this.data)
  }
}
