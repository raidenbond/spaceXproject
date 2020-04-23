import { Component, OnInit } from '@angular/core';
import { ThemePalette } from '@angular/material/core';
import { ProgressSpinnerMode } from '@angular/material/progress-spinner';
import { MissionsService } from '../missions.service';

@Component({
  selector: 'app-rocket2',
  templateUrl: './rocket2.component.html',
  styleUrls: ['./rocket2.component.css']
})
export class Rocket2Component implements OnInit {
 
  color: ThemePalette = 'primary';
  mode: ProgressSpinnerMode = 'indeterminate';
  splashImg: string='/assets/space.jpg';
  

  constructor( private missionservice: MissionsService) { 

    console.log(this.splashImg);
  }

  rocket2;

  
  ngOnInit(): void {

    this.missionservice.getRocket2().subscribe(response => {

      setTimeout(() => {

        this.rocket2 = response;
        
      }, 1000);
  
  
     });
  
    }
  }


