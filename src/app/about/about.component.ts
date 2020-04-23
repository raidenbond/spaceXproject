import { Component, OnInit } from '@angular/core';
import {MissionsService} from '../missions.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  
  
  constructor( 
    private missionservice: MissionsService) { }

  corporation;
  rocket;

  ngOnInit(): void{
   this.missionservice.getdetails().subscribe(response => {

    setTimeout(() => {
      
      this.corporation = response;
    }, 1000);
    });


      this.missionservice.getRocket("starship").subscribe(response2 => {
            console.log(response2);
            this.rocket = response2;

      });

  };

}
