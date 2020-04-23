import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';

import { HomeComponent } from './home/home.component';
import { Routes, RouterModule } from '@angular/router';
import { RocketComponent } from './rocket/rocket.component';
import { Rocket2Component } from './rocket2/rocket2.component';
import { AboutComponent } from './about/about.component';



const routes: Routes = [

  {
    path: 'rocket',
    component: RocketComponent,

  },

  {
    path: 'rocket2/:flightnumber',
    component: Rocket2Component,
  },
  {
    path: 'about',
    component: AboutComponent,
  },

  {
     path: '',
     component: HomeComponent,
  },

];


 @NgModule({
   imports: [RouterModule.forRoot(routes)],
   exports: [RouterModule]
 })
export class AppRoutingModule { }
