import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { LaunchComponent } from './launch/launch.component';
import { HomeComponent } from './home/home.component';
import { Routes, RouterModule } from '@angular/router';



const routes: Routes = [

  {
    path: 'launch/:title',
    component: LaunchComponent,

  },

  {
    path: 'launch/:flightnumber',
    component: LaunchComponent,
  },
  {
    path: 'launch/:details',
    component: LaunchComponent,
  }
];


 @NgModule({
   imports: [RouterModule.forRoot(routes)],
   exports: [RouterModule]
 })
export class AppRoutingModule { }
