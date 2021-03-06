import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { api } from 'src/config';

@Injectable({
  providedIn: 'root'
})
export class LaligadataService {
  httpOptions = {
    headers: new HttpHeaders({
      'X-Auth-Token': 'b198a6bae69843419a502a71053ec2da',
    })
  };
  constructor(private http: HttpClient) { }

getStandings(): Observable<any> {
  return this.http.get(`${api}/PD/standings`, this.httpOptions);
}

getMatches(): Observable<any> {
  return this.http.get(`${api}/PD/matches`, this.httpOptions);
}
}
