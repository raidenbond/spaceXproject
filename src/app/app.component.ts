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

  parentData = ' obtaining child data';

  childData: string;
 
  captureEmittedData(emittedData){
    console.log(emittedData);
    this.childData = emittedData;
  }
  
  infor(){

     alert('https://docs.spacexdata.com/?version=latest');
     

  }


  constructor(private http: HttpClient){}

  public Rocket()
  {
    this.http.get('https://api.spacexdata.com/v3/rockets');
  }

  public Rocket2(){

    this.http.get('https://api.spacexdata.com/v3/rockets/falcon9');
  }
}
