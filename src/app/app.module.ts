import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LaunchComponent } from './launch/launch.component';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './home/home.component';
import { HttpClientModule } from '@angular/common/http';

// angular material module 
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import{MatButtonModule} from '@angular/material/button';
import{MatTableModule} from '@angular/material/table';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import { RocketComponent } from './rocket/rocket.component';
import { AboutComponent } from './about/about.component';
import { Rocket2Component } from './rocket2/rocket2.component' ;

@NgModule({
  declarations: [
    AppComponent,
    LaunchComponent,
    HomeComponent,
    RocketComponent,
    AboutComponent,
    Rocket2Component,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatTableModule,
    MatProgressSpinnerModule,
    MatButtonModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
