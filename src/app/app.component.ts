import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router'
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'spaceXproject pass between components';

  //parentData = ' obtaining child data';

  childData: string;
  year = new Date().getFullYear();
 
  captureEmittedData(emittedData){
    console.log(emittedData);
    this.childData = emittedData;
  }
 
}
