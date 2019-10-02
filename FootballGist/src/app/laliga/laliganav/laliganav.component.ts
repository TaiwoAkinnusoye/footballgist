import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-laliganav',
  templateUrl: './laliganav.component.html',
  styleUrls: ['./laliganav.component.css']
})
export class LaliganavComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  goToMatches() {
    this.router.navigate(['/laliga']);
  }

  goToStandings() {
    this.router.navigate(['/laliga/standings']);
  }

}
