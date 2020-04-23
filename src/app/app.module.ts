import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './home/home.component';
import { HttpClientModule } from '@angular/common/http';

// angular material module 
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import{MatIconModule} from '@angular/material/icon';
import{MatCardModule} from '@angular/material/card';
import {MatMenuModule} from '@angular/material/menu';
import { RocketComponent } from './rocket/rocket.component';
import { AboutComponent } from './about/about.component';
import { Rocket2Component } from './rocket2/rocket2.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component' ;

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    RocketComponent,
    AboutComponent,
    Rocket2Component,
    HeaderComponent,
    FooterComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatMenuModule,
    MatIconModule,
    MatProgressSpinnerModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
