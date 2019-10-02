import { Component, OnInit } from '@angular/core';
import { LaligadataService } from '../laligadata.service';

@Component({
  selector: 'app-laligamatches',
  templateUrl: './laligamatches.component.html',
  styleUrls: ['./laligamatches.component.css']
})
export class LaligamatchesComponent implements OnInit {

  constructor(private laligaData: LaligadataService) { }
  public dataSource;
  // public displayedColumns: string[] = [];
  ngOnInit() {
    this.laligaData.getMatches().subscribe(data => {
      return this.dataSource = data.matches;
    });
  }

}
