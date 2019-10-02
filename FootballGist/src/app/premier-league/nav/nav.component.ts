import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'epl-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  goToMatches() {
    this.router.navigate(['/pl']);
  }

  goToStandings() {
    this.router.navigate(['/pl/standings']);
  }

}
