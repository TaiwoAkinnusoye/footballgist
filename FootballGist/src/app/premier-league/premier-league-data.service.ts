import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {api} from '../../config';

@Injectable({
  providedIn: 'root'
})
export class PremierLeagueDataService {
  httpOptions = {
    headers: new HttpHeaders({
      'X-Auth-Token': 'b198a6bae69843419a502a71053ec2da',
    })
  };
  constructor(private http: HttpClient) { }

getStandings(): Observable<any> {
  return this.http.get(`${api}/PL/standings`, this.httpOptions);
}
}
