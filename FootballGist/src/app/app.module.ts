import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PremierLeagueModule } from './premier-league/premier-league.module';
import { HomeComponent } from './home/home.component';
import { NavComponent } from './app-nav/nav.component';
import { LaligaModule } from './laliga/laliga.module';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    PremierLeagueModule,
    BrowserAnimationsModule,
    HttpClientModule,
    LaligaModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
