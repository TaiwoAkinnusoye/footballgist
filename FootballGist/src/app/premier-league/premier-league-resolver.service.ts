import {Injectable} from '@angular/core';
import {Resolve} from '@angular/router';
import { PremierLeagueDataService } from './premier-league-data.service';

@Injectable()

export class PremierLeagueResolver implements Resolve<any> {
    constructor(private eplData: PremierLeagueDataService) {}

    resolve() {
        return this.eplData.getMatches();
    }
}