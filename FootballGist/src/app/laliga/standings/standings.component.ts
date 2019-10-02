import { Component, OnInit } from '@angular/core';
import { LaligadataService } from '../laligadata.service';

@Component({
  selector: 'app-standings',
  templateUrl: './standings.component.html',
  styleUrls: ['./standings.component.css']
})
export class LaLigaStandingsComponent implements OnInit {
  constructor(private LaLigaData: LaligadataService) { }
  public data;
  public displayedColumns: string[] = ['Position', 'Team', 'MP', 'W', 'D', 'L', 'GF', 'GA', 'GD', 'PTS' ];
  ngOnInit() {
    this.LaLigaData.getStandings().subscribe(data => {
      this.data = data.standings[0].table;
    });
  }

}
